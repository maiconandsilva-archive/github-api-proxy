// See https://github.com/octokit/core.js#options
module.exports = {
    requestConf: {
        headers: {
            'X-GitHub-Api-Version': '2022-11-28',
            // Change token or leave it commented
            authorization: process.env.GITHUB_AUTHORIZATION
        },
        // request: {
        //     fetch: async function() {
        //         console.log(arguments);
        //         fetch(...arguments);
        //     },
        // }
    },
    appConf: {
        API_BASE_PATH: process.env.API_BASE_PATH || '/api',
        GITHUB_URL: process.env.GITHUB_URL || 'https://api.github.com',
        SWAGGER_FILE: process.env.SWAGGER_FILE || './swagger-output.json',
        swaggerAutogenConf: {
            
        },
    },
};
