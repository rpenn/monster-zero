app.config(function ($stateProvider) {

    $stateProvider.state('user', {
        url: '/user/:id',
        templateUrl: 'js/user/user.html',
        controller: 'UserCtrl',
        data: {
            authenticate: true
        },
        resolve: {
					user: function (User, $stateParams) {
					var user = new User({_id: $stateParams.id});
					return user.fetch();
				}
		}
    });

});

app.controller('UserCtrl', function ($scope, AuthService, $state, users) {
    $scope.user = user;



});
