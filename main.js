var app = angular.module('calc', ['ngMessages']);
app.controller('calcCtrl', function($scope) {
	$scope.currentMeal = new Meal(0,0,0);
	$scope.customer = new Customer();
	$scope.earnings = new Earnings();

	$scope.submit = function(){
        if ($scope.myForm.$valid){  
			$scope.customer.setMeal($scope.currentMeal);
			$scope.earnings.addMeal($scope.customer.tip);
			$scope.currentMeal.price = 0;
			$scope.currentMeal.tax = 0;
			$scope.currentMeal.tip = 0;
			$scope.myForm.$setPristine();
		}
	}

	$scope.cancel = function(){
		$scope.currentMeal.reset();
		$scope.myForm.$setPristine();
	}

	$scope.reset = function(){
		$scope.currentMeal = new Meal(0,0,0);
		$scope.customer = new Customer();
		$scope.earnings = new Earnings();
		$scope.myForm.$setPristine();
	}
});