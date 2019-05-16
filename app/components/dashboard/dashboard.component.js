/**
 * @ngdoc module
 * @name users
 *
 * @module users
 *
 * @description
 * Create dashboard module to display welcome message to current user
 * 
 * @author Akash Patel ( gmail::akashpatel1101@gmail.com )
 */
(function () {
    'use strict';
    angular
        .module("dashboard", [])
        .component("dashboard", {
            templateUrl: 'app/components/dashboard/dashboard.html',
            controller: [
                '$state',
                function ($state) {
                    var $ctrl = this;

                    /**
                     * public properties
                     */
                    $ctrl.welcomeMessage = '';
                
                    /**
                     * component's lifeCycle hooks
                     */
                    $ctrl.$onInit = initialization;

                    /**
                    * @function
                    * @name initialization
                    * @description
                    * A component's lifeCycle hook which is called after all the controllers on an element have
                    * been constructed and had their bindings initialized
                    */
                    function initialization() {
                        $ctrl.welcomeMessage = "Please click here to redirect to user demo";
                    }
                }]
        });
})();