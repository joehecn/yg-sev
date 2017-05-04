
'use strict'

import supertest from 'supertest'
import { app } from '../../../src/main.js'

describe('GET /api/djp/list', () => {
  it('should be ok', done => {
    supertest(app.listen())
      .get('/api/djp/list')
      .expect({ sz: '深圳' })
      .expect(200, done)
  })
})

describe('POST /api/djp/isdownload', () => {
  it('should be ok', done => {
    supertest(app.listen())
      .post('/api/djp/isdownload')
      .expect({ sz: '深圳' })
      .expect(200, done)
  })
})

describe('POST /api/djp/isprint', () => {
  it('should be ok', done => {
    supertest(app.listen())
      .post('/api/djp/isprint')
      .expect({ sz: '深圳' })
      .expect(200, done)
  })
})

describe('POST /api/djp/djpnote', () => {
  it('should be ok', done => {
    supertest(app.listen())
      .post('/api/djp/djpnote')
      .expect({ sz: '深圳' })
      .expect(200, done)
  })
})
