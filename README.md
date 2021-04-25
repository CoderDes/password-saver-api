
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```
<h3>Preparations</h3>
<ul>
  <li>run <code>npm i</code></li>
  <li>
     create <code>.env</code> file in the root directory of the project
    <ul>
      In that file set environment variables:
      <li><code>MONGO_LOGIN</code></li>
      <li><code>MONGO_PASSWORD</code></li>
      <li><code>MONGO_HOST</code></li>
      <li><code>MONGO_PORT</code></li>
      <li><code>MONGO_AUTHDATABASE</code></li>
      <li><code>JWT_SECRET</code></li>
    </ul>
  </li>
</ul>
<br />
<p><a href="https://github.com/EugZ/password-saver-front">Front-end for that api</a></p>


## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

