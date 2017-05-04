
'use strict'

import IO from 'koa-socket'

// export const io = new IO()
export const nspkb = new IO('nspkb')

nspkb.on('join', (ctx, data) => {
  ctx.acknowledge(data)
})
