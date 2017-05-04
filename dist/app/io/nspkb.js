
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nspkb = undefined;

var _koaSocket = require('../../koa-socket');

var _koaSocket2 = _interopRequireDefault(_koaSocket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export const io = new IO()
const nspkb = exports.nspkb = new _koaSocket2.default('nspkb');

nspkb.on('join', (ctx, data) => {
  ctx.acknowledge(data);
});