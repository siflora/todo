// import choo's template helper
var html = require('choo/html')


// export module
module.exports = function (task, index, emit) {
  console.log(task)
  const { input, type } = task

  // create html template
  return html`
  <li id=${index}>
    <p class=${ type ? 'done' : 'task'}>${input}</p>
    <button onclick=${handleDone}>${type ? 'undone' : 'done'}</button>
  </li>
  `
  function handleDone (e) {
    console.log(e.target.parentElement.id)
    emit('task:done', index)
  
    //return checkTask.style.visibility = 'hidden'
  }

}