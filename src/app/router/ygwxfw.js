
'use strict'

import Router from 'koa-router'

const ygwxfw = new Router()

ygwxfw.get('/provincecity', function (ctx, next) {
  ctx.body = {
    sz: '深圳'
  }
})

export default ygwxfw
