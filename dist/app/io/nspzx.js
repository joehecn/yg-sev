
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaSocket = require('../../koa-socket');

var _koaSocket2 = _interopRequireDefault(_koaSocket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const nspzx = new _koaSocket2.default('nspzx');

nspzx.on('join', (ctx, data) => {
  ctx.acknowledge(data);
});

exports.default = nspzx;