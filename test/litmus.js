var test = require('tape')
var solutions = require('../')
test('solutions-litmus', function (t) {
  t.plan(1)
  t.looseEqual(
    solutions[2],
    { uid: 'esUZCA5K',
      date: '2010-04-06 14:16:56',
      levelSet: 'katomic',
      level: '1',
      user: '',
      history: 'cccbcbfbfbfefebebebjfhfgfgbgbgbihbhfhfgfgfgjgjfjfjfgfgbgbgbh' }
  )
})
