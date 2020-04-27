var css = require('sheetify')
var choo = require('choo')

css('tachyons')

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

app.use(function (state, emitter) {
  // initialize state
  state.tasks = [
    {type: 'task', id: 1, input:'get started'},
    {type: 'task', id: 2, input: 'second try'}
  ]

  // add tasks
  emitter.on('clicks:add', function (input) {
    console.log('input', input)
    console.log('state', state)
    var newTask = {type: 'task', input}
    state.tasks.push(newTask)
    emitter.emit('render')
  })
  
})

app.route('/', require('./views/main'))
app.route('/*', require('./views/404'))

module.exports = app.mount('body')
