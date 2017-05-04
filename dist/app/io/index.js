
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.io = undefined;

var _koaSocket = require('koa-socket');

var _koaSocket2 = _interopRequireDefault(_koaSocket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const io = exports.io = new _koaSocket2.default();

io.on('join', (ctx, data) => {
  ctx.acknowledge(data);
});