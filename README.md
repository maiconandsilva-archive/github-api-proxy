# Github Proxy API

<!-- GETTING STARTED -->
## Getting Started

### Installation

#### 1. Install NPM packages

```sh
yarn install
```

#### 2. Copy the file `config.js.sample` to `config.js`.

```sh
yarn build
```

### Usage

#### Development

```sh
DEBUG=request yarn dev
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