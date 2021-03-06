angular
    .module('schedulingTools.photographer')
    .config(photographerConfig);

function photographerConfig($stateProvider) {
    $stateProvider.state({
        name: 'photographer',
        url: '/',
        templateUrl: '/schedulingTools/features/photographer/photographer.html',
        controller: 'PhotoCtrl',
        controllerAs: 'PhotoVM'
    })
}