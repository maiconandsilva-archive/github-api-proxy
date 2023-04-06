const debug = require('debug')('request')
const { request: octoRequest } = require('@octokit/request')
const { appConf, requestConf } = require('../config')


const requestGithubAPI = octoRequest.defaults(requestConf)

async function request(req, res, next) {
  let fullUrl = (req.baseUrl + req.path).replace(appConf.API_BASE_PATH, '')
  fullUrl = fullUrl.replace(/\/+$/, '') // remove trailing slash
  createCustomRequest(fullUrl)(req, res, next)
}

function createCustomRequest(url) {
  return async (req, res, next) => {
    let githubResponse

    try {
      const request_data = {
        ...req.query,
        ...req.params,
        method: req.method,
        url,
        headers: {
          'user-agent': req.headers['user-agent'],
          authorization: req.headers['authorization'],
        }
      }

      debug('REQUEST_DATA', request_data)
      githubResponse = await requestGithubAPI(request_data)
      debug('RESPONSE', githubResponse)
    } catch (e) {
      switch (e.name) {
        case 'HttpError':
          res.status(e.status)
          break
        default:
          debug(e)
          res.status(500)
      }
      res.end()
      return
    }

    const regexGithubURL = new RegExp(appConf.GITHUB_URL, 'g')
    const link = githubResponse.headers.link?.replace(regexGithubURL, '')
    if (link) res.set('link', link)

    res.status(githubResponse.status).send(githubResponse.data)
  }
}

module.exports = {
  createCustomRequest,
  request,
}