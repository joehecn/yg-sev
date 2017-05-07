# yg-sev


[![Build Status](https://travis-ci.org/joehecn/yg-sev.svg?branch=master)](https://travis-ci.org/joehecn/yg-sev)
[![codecov](https://codecov.io/gh/joehecn/yg-sev/branch/master/graph/badge.svg)](https://codecov.io/gh/joehecn/yg-sev)
[![Code Climate](https://codeclimate.com/github/joehecn/yg-sev/badges/gpa.svg)](https://codeclimate.com/github/joehecn/yg-sev)
[![Dependency Status](https://gemnasium.com/badges/github.com/joehecn/yg-sev.svg)](https://gemnasium.com/github.com/joehecn/yg-sev)


## develop

``` bash
make tt # lint && test
npm start # 启动开发服务器, nodemon watching 文件变化
```

## build

``` bash
npm run pub # build
npm run dist # 启动本地服务
```

## docker

``` bash
docker build -t joe/yg-sev:1.0.0 .
docker run -d -p 7001:7001 --name yg-sev joe/yg-sev:1.0.0
```
## ctx.status
200 "ok"
201 "created"
204 "no content"
400 "bad request"
401 "unauthorized"
404 "not found"
422 "unprocessable entity"
500 "internal server error"

## 用户管理
| Method | Path           | Name  | Action  |
| ------ | -------------- | ----- | ------- |
| POST   | /users/login   | post  | login   |
| GET    | /users         | posts | list    |
| GET    | /users/:id     | post  | show    |
| POST   | /users         | posts | create  |
| PUT    | /users/:id     | post  | update  |
| DELETE | /users/:id     | post  | remove  |

## RESTful
| Method | Path           | Name  | Action  |
| ------ | -------------- | ----- | ------- |
| GET    | /posts         | posts | list    |
| GET    | /posts/:id     | post  | show    |
| POST   | /posts         | posts | create  |
| PUT    | /posts/:id     | post  | update  |
| DELETE | /posts/:id     | post  | remove  |
