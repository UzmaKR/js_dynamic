$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    // Bind functions which add, remove, and complete todos to the appropriate
    // elements

    // ADD
    $('').on('click', function() {
      addTodo()
    })

    // REMOVE
    $('').on('click', function() {
      removeTodo()
    })

    // COMPLETE
    $('').on('click', function() {
      completeTodo()
    })
  }

  //Create functions to add, remove and complete todos
  function addTodo() {}

  function removeTodo() {}

  function completeTodo() {}
  

  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }
  

  bindEvents();
});
