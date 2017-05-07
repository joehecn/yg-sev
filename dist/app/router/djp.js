
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _djp = require('../controller/djp.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const djp = new _koaRouter2.default();

djp.post('/users/login', _djp.login);

djp.get('/djps', _djp.list);

// djp.put('/djps/isdownload/:id', isdownload)

// djp.put('/djps/isprint/:id', isprint)

// djp.put('/djps/djpnote/:id', djpnote)

exports.default = djp;