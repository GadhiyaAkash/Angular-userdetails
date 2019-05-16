/**
 * @ngdoc module
 * @name myAppService
 *
 * @module myAppService
 *
 * @description
 * Create myAppService module to define user method's
 * 
 * @author Akash Patel ( gmail::akashpatel1101@gmail.com )
 */
(function () {
    'use strict';
    angular
        .module("myAppService", [])
        .service('userService', function ($http, $q) {
            this.users = [];

            /**
             * @method getUserLists
             * @description To get user list from resources/user-list.json file
             * @returns {Array} Users
             */
            this.getUserLists = function () {
                var def = $q.defer();
                $http({
                    method: 'GET',
                    url: 'app/resources/user-list.json',
                }).then(function (response) {
                    def.resolve(response);
                }, function (error) {
                    def.reject("Failed to get users");
                });
                return def.promise;
            }

            /**
             * @method getUserAvatar
             * @description To get user's avatar from resources/user-avatar.json file
             * @returns {Array} User's avatar
             */
            this.getUserAvatar = function () {
                var def = $q.defer();
                $http({
                    method: 'GET',
                    url: 'app/resources/user-avatar.json',
                }).then(function (response) {
                    def.resolve(response);
                }, function (error) {
                    def.reject("Failed to get users");
                });
                return def.promise;
            }
        });
})();