var app = angular.module('myDropdown', []);
 
 app.controller('ctrl', function($scope) {
    $scope.playerlist = {
        player01 : { image : "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png&w=350&h=254", Name :"stephen Curry",  DateofBirth: "3/14/1988", Height : "6.3", Experience: "7 years"},
        player02 : { image : "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3202.png&w=350&h=254",  Name : "kevin durant", DateofBirth: "09/29/1988",  Height : "6.9", Experience: "9 years" },
        player03 : { image : "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6589.png&w=350&h=254",  Name : "Draymond Green", DateofBirth: "03/04/1990",  Height : "6.7", Experience: "4 years" },
        player04 : { image : "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6475.png&w=350&h=254",  Name : "Klay Thompsom", DateofBirth: "02/08/1990",  Height : "6.7", Experience: "5 years" },
        player05 : { image : "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2386.png&w=350&h=254",  Name : "Andre Iguodala", DateofBirth: "01/28/1984",  Height : "6.6", Experience: "12 years" },


    };
    $scope.selectedName=$scope.playerlist[2];



 });
