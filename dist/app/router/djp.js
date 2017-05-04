
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.djp = undefined;

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _djp = require('../ctrl/djp.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const djp = exports.djp = new _koaRouter2.default();

djp.get('/list', _djp.list);

djp.post('/isdownload', _djp.isdownload);

djp.post('/isprint', _djp.isprint);

djp.post('/djpnote', _djp.djpnote);