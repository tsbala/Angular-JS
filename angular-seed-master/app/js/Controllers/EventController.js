'use strict'

eventsApp.controller('EventController', 
	function EventController($scope) {
		$scope.event = {
			name: 'Angular Boot Camp',
			date: '1/1/2013',
			time: '10:30 am',
			location: {address: 'JustGiving', city:'London', country:'UK'},
			sessions: [
						{ name: 'Controllers', upvoteCount: 0 }, 
						{ name: 'Directives and scope', upvoteCount: 0 }, 
						{ name: 'Filters', upvoteCount: 0 }
					  ]
		}

		$scope.myStyle = { color : 'orange'};

		$scope.snippet = '<span style="color: red">hi there</span>';

		$scope.showBool = true;

		$scope.upvoteSession = function(session) {
			session.upvoteCount++;
		}

		$scope.downvoteSession = function(session) {
			session.upvoteCount--;
		}
 	}
);