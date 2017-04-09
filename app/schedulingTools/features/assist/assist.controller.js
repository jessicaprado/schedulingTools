angular
    .module('schedulingTools.assist')
    .controller('AssistCtrl', AssistCtrl);

function AssistCtrl(table) {
    var vm = this;

    //goes to angular service and retrieves ALL photographers
    vm.assists = [];
    table.getAssist(vm.assists);

    //resets selected photographer
    function reset() {
        vm.selectedAssist = [];
    }

    //based on ng-click, will return correct photographers to page
    vm.change = function(event) {
        reset();
        event.forEach(function (element) {
            vm.selectedAssist.push(element);

        });
    }

    vm.close = function (assist) {

        var index = vm.selectedAssist.indexOf(assist);
        vm.selectedAssist.splice(index, 1);
    }
}
