angular
    .module('schedulingTools.component.event')
    .directive('event', Event);

function Event() {
    return {
        restrict: 'E',
        scope: {
            eventData: '='
        },
        templateUrl: '/schedulingTools/features/components/event/event.html',
        controller: EventCtrl,
        controllerAs: 'EventVM',
        bindToController: true
    }
}

function EventCtrl() {
    var vm = this;
}