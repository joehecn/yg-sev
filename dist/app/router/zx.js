
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zx = undefined;

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const zx = exports.zx = new _koaRouter2.default();

zx.get('/provincecity', function (ctx, next) {
  ctx.body = {
    sz: '深圳'
  };
});