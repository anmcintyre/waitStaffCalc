angular.module('calc', ['ngRoute', 'ngMessages'])
	.config(['$routeProvider', function($routeProvider) {
       $routeProvider.when('/', {
            templateUrl : 'home.html',
            controller : 'HomeCtrl'
        }).when('/newMeal', {
		    templateUrl : 'meal.html',
		    controller : 'MealCtrl',
        }).when('/earnings', {
		    templateUrl : 'earnings.html',
		    controller : 'EarningsCtrl',
        }).when('/error', {
    		template : '<p>Error - Page Not Found</p>'
		});
	}])
    .controller('HomeCtrl', function($scope) {
        //empty for now
    })
	.controller('MealCtrl', function($scope) {
	    //empty for now
	})
	.controller('EarningsCtrl', function($scope) {
	    //empty for now
	})
	.controller('calcCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
		$scope.currentMeal = new Meal(0,0,0);
		$scope.customer = new Customer();
		$rootScope.earnings = new Earnings();
		$rootScope.myForm = null;

		$scope.submit = function(myForm){
	        if (myForm.$valid){  
				$scope.customer.setMeal($scope.currentMeal);
				$rootScope.earnings.addMeal($scope.customer.tip);
				$scope.currentMeal.price = 0;
				$scope.currentMeal.tax = 0;
				$scope.currentMeal.tip = 0;
				$rootScope.myForm = myForm;
				myForm.$setPristine();
			}
		}

		$scope.cancel = function(){
			$scope.currentMeal.reset();
			$scope.myForm.$setPristine();
		}

		$scope.reset = function(){
			$scope.currentMeal = new Meal(0,0,0);
			$scope.customer = new Customer();
			$rootScope.earnings = new Earnings();
			if ($rootScope.myForm !== null)
				$rootScope.myForm.$setPristine();
		}

	}]);