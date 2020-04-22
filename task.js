// import choo's template helper
var html = require('choo/html')

// export module
module.exports = function (task) {
  var type = task.type
  var input = task.input

  // create html template
  return html`
    <p>${input}</p>
  `
}