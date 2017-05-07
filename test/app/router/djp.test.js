
'use strict'

// import assert from 'assert'
import supertest from 'supertest'
import { service, app } from '../../../src/main.js'

describe('POST /api/djp/users/login', () => {
  it('should login', done => {
    const userObj = { name: '深圳湾', password: 'shenzhenwan' }
    const userInfo = JSON.stringify(userObj)
    const base64 = Buffer.from(userInfo).toString('base64')

    // mock
    service.dengjipai = {
      findOne: () => {
        return userObj
      }
    }

    supertest(app.listen())
      .post('/api/djp/users/login')
      .send({ user: base64 })
      .expect(userObj)
      .expect(200, done)
  })
})

describe('GET /api/djp/djps', () => {
  it('should be ok', done => {
    supertest(app.listen())
      .get('/api/djp/djps')
      .expect({ sz: '深圳' })
      .expect(200, done)
  })
})

describe.skip('POST /api/djp/isdownload', () => {
  it('should be ok', done => {
    supertest(app.listen())
      .post('/api/djp/isdownload')
      .expect({ sz: '深圳' })
      .expect(200, done)
  })
})

describe.skip('POST /api/djp/isprint', () => {
  it('should be ok', done => {
    supertest(app.listen())
      .post('/api/djp/isprint')
      .expect({ sz: '深圳' })
      .expect(200, done)
  })
})

describe.skip('POST /api/djp/djpnote', () => {
  it('should be ok', done => {
    supertest(app.listen())
      .post('/api/djp/djpnote')
      .expect({ sz: '深圳' })
      .expect(200, done)
  })
})
