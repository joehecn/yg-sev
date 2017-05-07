
'use strict'

export const login = async (ctx, next) => {
  const dengjipa = await ctx.state.service.dengjipai.findOne()
  console.log(dengjipa)
  ctx.body = dengjipa
}

export const list = (ctx, next) => {
  ctx.body = {
    sz: '深圳'
  }
}

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
