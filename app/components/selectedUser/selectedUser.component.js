/**
 * @ngdoc module
 * @name users
 *
 * @module users
 *
 * @description
 * Create user selected module to display selected of user
 * 
 * @author Akash Patel ( gmail::akashpatel1101@gmail.com )
 */
(function () {
    'use strict';
    angular
        .module("selectedUser", [])
        .component("selectedUser", {
            templateUrl: 'app/components/selectedUser/selectedUser.html',
            controller: [
                'userService',
                '$q',
                '$localStorage',
                '$state',
                function (userService, $q, $localStorage, $state) {
                    var $ctrl = this;

                    /**
                     * public properties
                     */
                    $ctrl.selectedUsers = [];

                    /**
                     * component's lifeCycle hooks
                     */
                    $ctrl.$onInit = initialization;
                    $ctrl.backToUser = backToUser;

                    /**
                     * public method's
                     */

                    /**
                    * @function
                    * @name initialization
                    * @description
                    * A component's lifeCycle hook which is called after all the controllers on an element have
                    * been constructed and had their bindings initialized
                    */
                    function initialization() {
                        $ctrl.selectedUsers = $localStorage.selectedUsers || [];
                    }

                    function backToUser() {
                        $state.go("users");
                    }
                }]
        });
})();