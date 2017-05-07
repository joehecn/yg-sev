
'use strict'

import Router from 'koa-router'

const zxwx = new Router()

zxwx.get('/provincecity', function (ctx, next) {
  ctx.body = {
    sz: '深圳'
  }
})

export default zxwx
