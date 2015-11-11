app.factory('ItemsFactory', function ($http){
	return {
		getAllItems: function() {
			return $http.get('/api/items')
				.then(function (result) {
					return result.data;
				})
		},
		addItem: function(item) {
			return $http.post('/api/items', item);
		}
	};
});