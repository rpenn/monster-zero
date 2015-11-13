app.config(function ($stateProvider) {

	$stateProvider.state('add', {
		url: '/add',
		templateUrl: 'js/add/add.html',
		controller: 'AddCtrl',
		// resolve: {
		// 	items: function (ItemsFactory) {
		// 		return ItemsFactory.getAllItems().then(function(results) {
		// 			return results;
		// 		});
		// 	}
		// }
	})
});

app.controller('AddCtrl', function ($scope, $state, ItemsFactory, Upload, $timeout) {

	$scope.addItem = function (item){
		console.log(item);
		ItemsFactory.addItem(item).then(function(){
			$state.go('items');
		})
	};

  $scope.uploadFiles = function(files, errFiles) {
  	console.log(files);
    $scope.files = files;
    $scope.errFiles = errFiles;
    angular.forEach(files, function(file) {
      file.upload = Upload.upload({
        url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
        data: {file: file}
      });
      console.log(data);
      file.upload.then(function (response) {
        $timeout(function () {
          file.result = response.data;
        });
      }, function (response) {
        if (response.status > 0)
          $scope.errorMsg = response.status + ': ' + response.data;
      }, function (evt) {
        file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
      });
    });
  };

  $scope.uploadFile = function(file) {
    console.log(file);
    file.upload = Upload.upload({
      url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
      data: {file: file}
    });
    console.log(file);
    file.upload.then(function (response) {
      $timeout(function () {
        file.result = response.data;
        console.log(file);
      });
    }, function (response) {
      if (response.status > 0)
        $scope.errorMsg = response.status + ': ' + response.data;
    }, function (evt) {
      file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
    });
  };
});