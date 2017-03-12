angular.module('phonecatApp', []);
angular.module('phonecatApp').component('phoneList', {
	template: '<ul>' + '<li ng-repeat="phone in $ctrl.phones">' + '<span>{{phone.name}}</span>' + '<span>{{phone.snippet}}' + '</li>' + '</ul>',
	controller: function phoneListController() {
		this.phones = [
			{name: 'Nexus S', snippet: 'Fast just got faster with Nexus S.'},
			{name: 'Motorola XOOM™ with Wi-Fi', snippet: 'The Next, Next Generation tablet.'},
			{name: 'MOTOROLA XOOM™', snippet: 'The Next, Next Generation tablet.'}
		]
	}
})
