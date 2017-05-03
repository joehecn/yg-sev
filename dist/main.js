
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = undefined;

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = exports.app = new _koa2.default();

// response
app.use(ctx => {
  ctx.body = 'hello koa';
});

/* istanbul ignore if: app.listen(...) can't run in test */
if (!module.parent) {
  let port = process.env.PORT || 7001;
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
  });
}