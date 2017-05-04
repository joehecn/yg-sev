
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = undefined;

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _router = require('./app/router');

var _nspzx = require('./app/io/nspzx.js');

var _nspkb = require('./app/io/nspkb.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = exports.app = new _koa2.default();

app.use(_router.router.routes()).use(_router.router.allowedMethods());

_nspzx.nspzx.attach(app);
_nspkb.nspkb.attach(app);

/* istanbul ignore if: app.listen(...) can't run in test */
if (!module.parent) {
  const port = process.env.PORT || 7001;
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
  });
}