// 获取手机数据的服务
angular.module('core.phone').
	factory('Phone', ['$resource', function($resource) {
		return  $resource('phones/:phoneId.json', {}, {
			query: {
				method: 'GET',
				params: {phoneId: 'phones'},
				isArray: true
			}
		})	
	}])
