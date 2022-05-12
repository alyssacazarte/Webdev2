function addTodoItem() {
    var todoItem = $("#new-todo-item").val();
    $("#todo-list").append("<li><input type='checkbox'" + 
                           " name='todo-item-done'" + 
                           " class='todo-item-done'"+ 
                           " value='" + todoItem + "' /> " + 
                           todoItem +
                           " <button class='todo-item-remove'>"+
                           "Remove</button></li>");
    
   $("#new-todo-item").val("");
  }
  
  function removeTodoItem(e, item) {
    e.preventDefault();
    $(item).parent().fadeOut('slow', function() { 
      $(item).parent().remove();
    });
  }
  
                             
  function completeTodoItem() {  
    $(this).parent().toggleClass("strike");
  }
  
  
  $(function() {
   
     $("#add-todo-item").on('click', function(e){
       e.preventDefault();
       addTodoItem()
     });
    

    $("#todo-list").on('click', '.todo-item-remove', function(e){
      var item = this; 
      removeTodoItem(e, item)
    })
    
    $(document).on('click', ".todo-item-done", completeTodoItem)
    $(function() {  
      $( ".todo-list" ).sortable();  
   });  
  
  });