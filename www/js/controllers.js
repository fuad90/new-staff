angular.module('starter.controllers', [])

    .controller('DashCtrl', function($scope) {})

    .controller('ChatsCtrl', function($scope, Chats) {
        //$scope.datastaffs = Chats.all();
        $scope.showData = function() {
            Chats.getAll().success(function(data) {
                $scope.datastaffs = data;
            })
        };
        $scope.showData();

    })

    .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {

        // $scope.datastaff = Chats.getId($stateParams.chatId);
        $scope.showDataId = function() {
            Chats.getId($stateParams.id).success(function(data) {
                $scope.datastaffs= data;
            });

        };
        $scope.showDataId();

    })
