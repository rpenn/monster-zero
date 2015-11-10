app.config(function ($stateProvider) {

	$stateProvider.state('items', {
		url: '/items',
		templateUrl: 'js/items/items.html',
		controller: 'ItemsCtrl',
	})
});

app.controller('ItemsCtrl', function ($scope) {
	$scope.items = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'];
})

