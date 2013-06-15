$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    // Bind functions which add, remove, and complete todos to the appropriate
    // elements

    // ADD
    $('.add').on('click', function() {
      todoName = $('.toolbox .todo').val();
      todoList = $('.todo_list');
      addTodo(todoName, todoList);
    })

    // REMOVE
     $('.todo_list').on('click', '.delete', function() {
       var target = $(this);
       removeTodo(target);
     })

    // COMPLETE
    $('.todo_list').on('click', '.complete', function() {
      var target = $(this);
     completeTodo(target);
    })
   }

  //Create functions to add, remove and complete todos
  function addTodo(todoName, todoList) {
    html_snippet = buildTodo(todoName);
    todoList.append(html_snippet);
  }

  function removeTodo(target) {
    target.closest('.todo').remove();
  }

   function completeTodo(target) {
    target.closest('.todo').addClass('complete');
  }
  

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
