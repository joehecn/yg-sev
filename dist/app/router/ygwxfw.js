
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ygwxfw = new _koaRouter2.default();

ygwxfw.get('/provincecity', function (ctx, next) {
  ctx.body = {
    sz: '深圳'
  };
});

exports.default = ygwxfw;