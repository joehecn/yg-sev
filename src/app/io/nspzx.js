
'use strict'

import IO from 'koa-socket'

// export const io = new IO()
export const nspzx = new IO('nspzx')

nspzx.on('join', (ctx, data) => {
  ctx.acknowledge(data)
})
