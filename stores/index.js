module.exports = store

function store (state, emitter) {
  // initialize state
  state.tasks = [
    {type: false, input: 'get started'},
    {type: false, input: 'second try'}
  ]

  // add tasks
  emitter.on('task:add', function (input) {
    console.log('input', input)
    console.log('state', state)
    var newTask = {type: false, input}
    state.tasks.push(newTask)
    emitter.emit('render')
  })
  
  emitter.on('task:done', function (index) {
    state.tasks[index].type = !state.tasks[index].type
    emitter.emit('render')
  })
}