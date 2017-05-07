
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = exports.service = undefined;

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _router = require('./app/router');

var _router2 = _interopRequireDefault(_router);

var _nspzx = require('./app/io/nspzx.js');

var _nspzx2 = _interopRequireDefault(_nspzx);

var _nspkb = require('./app/io/nspkb.js');

var _nspkb2 = _interopRequireDefault(_nspkb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const service = exports.service = require('./app/service');
const app = exports.app = new _koa2.default();

app.use((() => {
  var _ref = _asyncToGenerator(function* (ctx, next) {
    ctx.state.service = service;
    yield next();
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})()).use((0, _koaBodyparser2.default)()).use(_router2.default.routes()).use(_router2.default.allowedMethods());

_nspzx2.default.attach(app);
_nspkb2.default.attach(app);

/* istanbul ignore if: app.listen(...) can't run in test */
if (!module.parent) {
  const port = process.env.PORT || 7001;
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
  });
}