
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = undefined;

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _zx = require('./zx.js');

var _djp = require('./djp.js');

var _zxwx = require('./zxwx.js');

var _ygwxfw = require('./ygwxfw.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = exports.router = new _koaRouter2.default();

// 网站根目录
router.get('/', function (ctx, next) {
  ctx.body = 'server look\'s good';
});

// 阳光订单-主站
router.use('/api/zx', _zx.zx.routes());

// 登机牌
router.use('/api/djp', _djp.djp.routes());

// 微信小程序
router.use('/api/zxwx', _zxwx.zxwx.routes());

// 微信服务号
router.use('/api/ygwxfw', _ygwxfw.ygwxfw.routes());