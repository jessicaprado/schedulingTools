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
        // photographer: [
        //     'bridal',
        //     'candid doc',
        //     'dessert party',
        //     'dpa group',
        //     'enhanced',
        //     'escape',
        //     'ferry tale',
        //     'floral',
        //     'group photo',
        //     'headshot',
        //     'marketing',
        //     'memories',
        //     'mini session',
        //     'mk mini',
        //     'mk enhanced',
        //     'on location studio',
        //     'photopass',
        //     'printers',
        //     'proposal',
        //     'upgraded escape',
        //     'wishes'
        // ]

}