(function(angular) {
  'use strict';
angular.module('aodClan', []);
 angular.module('aodClan', []).controller('RecrutamentoController', ['$scope', function($scope) {
   
   $scope.submeter = function(user){
   	if ($scope.formulario.$valid) {
   		console.log(user);
   	}

   };

  }]);
})(window.angular);
