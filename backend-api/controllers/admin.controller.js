const { query } = require('../utils/query')
const sql = require('../utils/sql')

class Admin {
  async insert (ctx, next) {
    await ctx.render('index', {
      title: 'Hello Koa 2!'
    })
  }
}

module.exports = new Admin()