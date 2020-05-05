// import choo's template helper
var html = require('choo/html')


// export module
module.exports = function (task) {
  var type = task.type
  var input = task.input
  var checkTask = task.checkTask

  // create html template
  return html`
  <li>
    <p id=${input}>${input}</p>
    <button onclick=${handleDone}>done</button>
  </li>
  `
  function handleDone () {
    checkTask = document.getElementById('input');
  
    return checkTask.style.visibility = 'hidden'
  }

}