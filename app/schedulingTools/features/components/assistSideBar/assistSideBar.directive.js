angular
    .module('schedulingTools.component.assistSideBar')
    .directive('assistBar', AssistBar);

function AssistBar() {
    return {
        restrict: 'E',
        scope: {
            assistBarData: "="
        },
        templateUrl: '/schedulingTools/features/components/assistSideBar/assistSideBar.html',
        controller: AssistBarCtrl,
        controllerAs: 'AssistBarVM',
        bindToController: true
    }
}

function AssistBarCtrl() {
    var vm = this;

    vm.assistButtons = [
            'bridal',
            'family',
            'studio',
            'mmd']
}