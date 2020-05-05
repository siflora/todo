var html = require('choo/html')

var TITLE = 'my-choo-app - main'

var task = require('../task.js')

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  var type = state.tasks.type
  var input = state.tasks.input
  var checkTask = state.tasks.checkTask

  return html`
  <body>
    <p> What needs to be done? </p>
    <input type=text id=task placeholder='add your tasks'/>
    <button onclick=${handleClick}> Add </button>
    <ol onchange=${done}>
      ${state.tasks.map(task)}
    </ol>
  </body>
 `

  function handleClick () {
    var input = document.getElementById('task').value;

    emit('clicks:add',input)
  }
  
  function done () {
    
  }
}
