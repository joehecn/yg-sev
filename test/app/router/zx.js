
'use strict'

import supertest from 'supertest'
import { app } from '../../../src/main.js'

describe('GET /api/zx/provincecity', () => {
  it('should be ok', done => {
    supertest(app.listen())
      .get('/api/zx/provincecity')
      .expect({ sz: '深圳' })
      .expect(200, done)
  })
})
