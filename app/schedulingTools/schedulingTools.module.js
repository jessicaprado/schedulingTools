angular
    .module('schedulingTools', [
        //global dependencies
        'ui.router',

        //features
        'schedulingTools.photographer',
        'schedulingTools.assist'
    ])
    .config(appConfig);

function appConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}