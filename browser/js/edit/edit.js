// app.config(function ($stateProvider) {

// 	$stateProvider.state('items', {
// 		url: '/items',
// 		templateUrl: 'js/items/items.html',
// 		controller: 'ItemsCtrl',
// 		resolve: {
// 			items: function($http){
// 					return $http.get('/api/items')
// 					.then(function(results){
// 						console.log(results.data);
// 						return results.data;
// 					});
// 			}
// 		}
// 		// resolve: {
// 		// 	items: function (ItemsFactory) {
// 		// 		return ItemsFactory.getAllItems().then(function(results) {
// 		// 			return results;
// 		// 		});
// 		// 	}
// 		// }
// 	})
// });

// app.controller('ItemsCtrl', function ($scope, items) {

// $scope.items = items;

// });