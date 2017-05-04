
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zxwx = undefined;

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const zxwx = exports.zxwx = new _koaRouter2.default();

zxwx.get('/provincecity', function (ctx, next) {
  ctx.body = {
    sz: '深圳'
  };
});