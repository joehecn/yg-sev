
'use strict'

import Router from 'koa-router'

export const zxwx = new Router()

zxwx.get('/provincecity', function (ctx, next) {
  ctx.body = {
    sz: '深圳'
  }
})
