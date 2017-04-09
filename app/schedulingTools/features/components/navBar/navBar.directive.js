angular
    .module('schedulingTools.component.navBar')
    .directive('navBar', NavBar);

function NavBar() {
    return {
        restrict: 'E',
        scope: {
            navBarData: "="
        },
        templateUrl: '/schedulingTools/features/components/navBar/navBar.html',
        controller: NavBarCtrl,
        controllerAs: 'NavBarVM',
        bindToController: true
    }
}

function NavBarCtrl() {
    var vm = this;

    vm.navbarButtons = [
        'photographer', 'assist'
    ]
}