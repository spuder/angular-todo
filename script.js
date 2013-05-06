function SpencersTodoController ($scope) {
	

	$scope.todos = [
		{text:'Clean desk', done:false}, 
		{text:'Beat Portal', done:true},
		{text:'Take over world', done:false}
	]

	$scope.getTotalTodos = function() {
			return $scope.todos.length;
	}


	$scope.addTodo = function() {
		// Takes value in "confirmed" and adds it to "todos" array
		$scope.todos.push({text:$scope.confirmed, done:false});
		// Clear out the text box every submit
		$scope.confirmed = "";
	}

	$scope.removeTodos = function() {
		// Loop through all the todos, and only return the todos that are not done
		// This is not working for some reason, Others in the comments have reported it not working either
		$scope.todos = _.filter($scope.todos, function(todo){
			return !todo.done;
		})

	}



}
