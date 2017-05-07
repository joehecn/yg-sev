
'use strict'

import Router from 'koa-router'

const zx = new Router()

zx.get('/provincecity', function (ctx, next) {
  ctx.body = {
    sz: '深圳'
  }
})

export default zx
