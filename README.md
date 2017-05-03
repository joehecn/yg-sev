# yg-sev


[![Build Status](https://travis-ci.org/joehecn/yg-sev.svg?branch=master)](https://travis-ci.org/joehecn/yg-sev)
[![codecov](https://codecov.io/gh/joehecn/yg-sev/branch/master/graph/badge.svg)](https://codecov.io/gh/joehecn/yg-sev)
[![Code Climate](https://codeclimate.com/github/joehecn/yg-sev/badges/gpa.svg)](https://codeclimate.com/github/joehecn/yg-sev)
[![Dependency Status](https://gemnasium.com/badges/github.com/joehecn/yg-sev.svg)](https://gemnasium.com/github.com/joehecn/yg-sev)


## develop

``` bash
make lt - lint
make tt - test
npm start - 启动开发服务器, nodemon watching 文件变化
```

## build

``` bash
npm run pub - build
npm run dist - 启动本地服务
```

## docker

``` bash
docker build -t joe/yg-sev:1.0.0 .
docker run -d -p 7001:7001 --name yg-sev joe/yg-sev:1.0.0
```
