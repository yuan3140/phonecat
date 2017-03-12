//angular.module('phoneDetail')
//.component('phoneDetail', {
//	templateUrl: './phone-detail/phone-detail.template.html',
//	controller: ['$http', '$routeParams', function phoneDetailController($http, $routeParams) {
//		// this.phoneId = $routeParams.phoneId;
//		var self = this;
//		self.setImage = function(imageUrl) {
//			self.mainImageUrl = imageUrl;
//		}
//		$http.get('./phones/' + $routeParams.phoneId + '.json').then(function(response) {
//			self.phone = response.data;
//			self.setImage(self.phone.images[0])
//		});
//	}]
//})

angular.module('phoneDetail')
	.component('phoneDetail', {
		templateUrl: './phone-detail/phone-detail.template.html',
		controller: ['$routeParams', 'Phone', function phoneDetailController($routeParams, Phone) {
		var self = this;
		self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
			self.setImage(phone.images[0]);
		});

		self.setImage = function(imageUrl) {
			self.mainImageUrl = imageUrl;
		}
		}]
	})
