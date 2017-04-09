angular
    .module('schedulingTools.component.table')
    .service('table', TableService);

function TableService($http) {

    return {
        getList: function (table) {
            $http({
                method: 'GET',
                url: '/api/table'
            }).then(function (response) {
                console.log(response.data.events);
                response.data.events.forEach(function (element) {
                    table.push(element);
                });
            });
        },
    }
}