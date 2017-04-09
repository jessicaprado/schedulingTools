angular
    .module('schedulingTools.assist')
    .config(assistConfig);

function assistConfig($stateProvider) {
    $stateProvider.state({
        name: 'assist',
        url: '/assist',
        templateUrl: '/app/schedulingTools/features/assist/assist.html',
        controller: 'AssistCtrl',
        controllerAs: 'AssistVM'
    })
}