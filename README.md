# Github Proxy API

<!-- GETTING STARTED -->
## Getting Started

### Installation

#### 1. Install NPM packages

```sh
yarn install
```

### Usage

#### Development

```sh
DEBUG=request yarn dev
```

### Run Tests

```sh
yarn test
```

### Production

```sh
PORT=80 yarn start
```

### Environment Variables

```sh
API_BASE_PATH=/api # This API base path
PORT=80 # API port
GITHUB_AUTHORIZATION='token 0000000000000001' # Github Authorization header
GITHUB_URL=https://api.github.com # Github API URL
```

---

## This repository is an answer for the following test

You will have to consume the GitHub APIs, more precisely the users and repositories endpoints, and create an application.

The endpoints' documentation that you will use for this test are available at:

    https://developer.github.com/v3
    https://developer.github.com/v3/users
    https://developer.github.com/v3/repos/

STEPS:

    [full-stack] [back-end]
    Create an API that will proxy all client requests to the appropriate GitHub endpoint. The following endpoints must be provided:
        GET - /api/users?since={number}
        This endpoint must return a list of GitHub users and the link for the next page.
        GET - /api/users/:username/details
        This endpoint must return the details of a GitHub user
        GET - /api/users/:username/repos
        This endpoint must return a list with all user repositories
    
    [full-stack (optional)] [back-end]
    Create tests for your application covering all endpoints.
