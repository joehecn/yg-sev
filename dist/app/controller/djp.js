
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const login = exports.login = (() => {
  var _ref = _asyncToGenerator(function* (ctx, next) {
    const dengjipa = yield ctx.state.service.dengjipai.findOne();
    console.log(dengjipa);
    ctx.body = dengjipa;
  });

  return function login(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

const list = exports.list = (ctx, next) => {
  ctx.body = {
    sz: '深圳'
  };
};

// export const isprint = (ctx, next) => {
//   ctx.body = {
//     sz: '深圳'
//   }
// }

// export const djpnote = (ctx, next) => {
//   ctx.body = {
//     sz: '深圳'
//   }
// }