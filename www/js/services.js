angular.module('starter.services', [])

    .factory('Chats', function($http) {
        //var baseUrl = 'http://localhost/api/web/index.php/staff/';
        var baseUrl = 'http://192.168.0.128/api/web/index.php/staff/';

        return {
            getAll: function() {
                return $http.get(baseUrl+'index');
            },
            getId: function (id){
                return $http.get(baseUrl+'view/'+id);
            }

        };

    });

