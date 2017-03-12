angular
	.module('phonecatApp')
	.config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider) {
		$locationProvider.hashPrefix('!');

		// 配置$route服务
		$routeProvider.
			when('/phones', {
				template: '<phone-list></phone-list>'
			}).
			when('/phones/:phoneId', {
				template: '<phone-detail></phone-detail>'
			}).
			otherwise('/phones')
	}])
