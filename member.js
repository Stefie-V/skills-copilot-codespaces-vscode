function skillsMember() {
	// function body
}

return {
	restrict: 'E',
	templateUrl: 'member.html',
	controller: 'skillsMemberController',
	controllerAs: 'vm',
	bindToController: true,
	scope: {
		member: '='
	}
};
