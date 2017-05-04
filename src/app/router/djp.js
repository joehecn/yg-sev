
'use strict'

import Router from 'koa-router'

export const djp = new Router()

djp.get('/provincecity', function (ctx, next) {
  ctx.body = {
    sz: '深圳'
  }
})
