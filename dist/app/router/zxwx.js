
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const zxwx = new _koaRouter2.default();

zxwx.get('/provincecity', function (ctx, next) {
  ctx.body = {
    sz: '深圳'
  };
});

exports.default = zxwx;