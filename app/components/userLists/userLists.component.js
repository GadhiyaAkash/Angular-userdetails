/**
 * @ngdoc module
 * @name users
 *
 * @module users
 *
 * @description
 * Create user module to display list of users
 * 
 * @author Akash Patel ( gmail::akashpatel1101@gmail.com )
 */
(function () {
    'use strict';
    angular
        .module("users", [])
        .component("userLists", {
            templateUrl: 'app/components/userLists/userLists.html',
            controller: [
                'userService', 
                '$q', 
                '$state',
                '$localStorage',
                function (userService, $q, $state, $localStorage) {
                var $ctrl = this,
                    selectedUsers = [];

                /**
                 * public properties
                 */
                $ctrl.users = [];

                /**
                 * component's lifeCycle hooks
                 */
                $ctrl.$onInit = initialization;

                /**
                 * public method's
                 */
                $ctrl.selectedUser = selectedUser;
                $ctrl.selectUser = selectUser;
                $ctrl.backToHome = backToHome;

                /**
                * @function
                * @name initialization
                * @description
                * A component's lifeCycle hook which is called after all the controllers on an element have
                * been constructed and had their bindings initialized
                */
                function initialization() {
                    selectedUsers = $localStorage.selectedUsers || [];
                    getUserRecords();
                }

                /**
                 * @method getUserRecords
                 * @description To get user list
                 */
                function getUserRecords() {
                    $q.all([
                        userService.getUserLists(),
                        userService.getUserAvatar()
                    ]).then(function (response) {
                        var usersRecords = response[0].data;
                        var avatars = response[1].data;
                        var usersRecords = _.merge(usersRecords, avatars);
                        $ctrl.users = addSelectedProperty(usersRecords);
                    }, function (error) {
                        console.log(error);
                    });
                }

                /**
                 * @method addSelectedProperty
                 * @description To add `selected` property to user object with boolean value
                 * @returns {Array} users
                 */
                function addSelectedProperty(users) {
                    return _.map(users, function (user) {
                        var index = getSelectedUserIndex(user.id);
                        user.selected = index >= 0 ? true : false;
                        return user;
                    });
                }

                /**
                 * @method selectedUser
                 * @description select user's object will store to array
                 */
                function selectedUser(user) {
                    if (user.selected) {
                        user.selected = false;
                        var index = getSelectedUserIndex(user.id);
                        if (index >= 0) {
                            selectedUsers.splice(index, 1);
                        }
                    } else {
                        user.selected = true;
                        selectedUsers.push(user);
                    }
                }

                /**
                 * @method selectUser
                 * @description
                 * Store selected user to `localstorage`
                 * Redirect to selected user screen
                 */
                function selectUser() {
                    $localStorage.selectedUsers = _.uniq(selectedUsers);
                    $state.go('selecteduser');
                }

                /**
                 * @method backToHome
                 * @description It will redirect to dashboard
                 */
                function backToHome() {
                    $state.go("dashboard");
                }

                /**
                 * @method getSelectedUserIndex
                 * @description Return user index
                 */
                function getSelectedUserIndex(userId) {
                    return _.findIndex(selectedUsers, {
                        'id': userId
                    });
                }
            }]
        });
})();