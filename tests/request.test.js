const request = require('supertest')
const app = require('../app')
const { appConf } = require('../config')

const username = process.env.USERNAME_TEST || 'torvalds'
const API_BASE_PATH = appConf.API_BASE_PATH
const USER_AGENT = 'Jest supertest'

describe('GET /api/users', () => {
  test('should return 200 OK', async () => {
    const response = await request(app).get(`${API_BASE_PATH}/users`)
    expect(response.statusCode).toBe(200)
  })

  test('should return users paginated', async () => {
    const response = await request(app).get(`${API_BASE_PATH}/users?since=0&per_page=5`)

    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(5)
    expect(response.body[0].id > 0).toBe(true)
  })
})

describe('GET /api/users/:username/repos', () => {
  test('should return 200 OK', async () => {
    const response = await request(app).get(`${API_BASE_PATH}/users/${username}/repos`)
    expect(response.statusCode).toBe(200)
  })

  test('should return user repos paginated', async () => {
    const response = await request(app).get(`${API_BASE_PATH}/users/${username}/repos?page=1&per_page=2`)

    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(2)
    
  })
})

describe('GET /api/users/:username/details', () => {
  test('should return 200 OK', async () => {
    const response = await request(app)
      .get(`${API_BASE_PATH}/users/${username}/details`)
      .set('User-Agent', USER_AGENT)
    expect(response.statusCode).toBe(200)
  })

  test('should return user complete information', async () => {
    const response = await request(app)
      .get(`${API_BASE_PATH}/users/${username}/details`)
      .set("Accept", "application/json")
      .set('User-Agent', USER_AGENT)

      expect(response.statusCode).toBe(200)
      expect(response.body).toHaveProperty("login")
      expect(response.body).toHaveProperty("id")
      expect(response.body).toHaveProperty("avatar_url")
      expect(response.body).toHaveProperty("html_url")
      expect(response.body).toHaveProperty("name")
      expect(response.body).toHaveProperty("company")
      expect(response.body).toHaveProperty("location")
      expect(response.body).toHaveProperty("email")
      expect(response.body).toHaveProperty("public_repos")
      expect(response.body).toHaveProperty("public_gists")
      expect(response.body).toHaveProperty("followers")
      expect(response.body).toHaveProperty("following")
      expect(response.body).toHaveProperty("created_at")
      expect(response.body).toHaveProperty("updated_at")
  })
})