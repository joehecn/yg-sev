
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _zx = require('./zx.js');

var _zx2 = _interopRequireDefault(_zx);

var _djp = require('./djp.js');

var _djp2 = _interopRequireDefault(_djp);

var _zxwx = require('./zxwx.js');

var _zxwx2 = _interopRequireDefault(_zxwx);

var _ygwxfw = require('./ygwxfw.js');

var _ygwxfw2 = _interopRequireDefault(_ygwxfw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = new _koaRouter2.default();

// 网站根目录
router.get('/', function (ctx, next) {
  ctx.body = 'server look\'s good';
});

// 阳光订单-主站
router.use('/api/zx', _zx2.default.routes());

// 登机牌
router.use('/api/djp', _djp2.default.routes());

// 微信小程序
router.use('/api/zxwx', _zxwx2.default.routes());

// 微信服务号
router.use('/api/ygwxfw', _ygwxfw2.default.routes());

exports.default = router;