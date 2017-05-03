
'use strict'

import supertest from 'supertest'
import { app } from '../src/main.js'

describe('hello', () => {
  it('should = hello koa', done => {
    supertest(app.listen())
      .get('/')
      .expect('hello koa')
      .expect(200, done)
  })
})
