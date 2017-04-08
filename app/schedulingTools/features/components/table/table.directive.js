angular
    .module('schedulingTools.component.table')
    .directive('table', Table);

function Table() {
    return {
        restrict: 'E',
        scope: {
            tableData: "="
        },
        templateUrl: '/schedulingTools/features/components/table/table.html',
        controller: TableCtrl,
        controllerAs: 'TableVM',
        bindToController: true
    }
}

function TableCtrl() {
    var vm = this;
}