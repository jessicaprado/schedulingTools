angular
    .module('schedulingTools.component.table')
    .service('table', TableService);

function TableService($http) {

    return {
        getList: function (table) {
            $http({
                method: 'GET',
                url: '/api/photographers'
            }).then(function (response) {
                response.data.events.forEach(function (element) {
                    table.push(element);
                });
            });
        },

        getAssist: function (table) {
            $http({
                method: 'GET',
                url: '/api/assists'
            }).then(function (response) {
                response.data.events.forEach(function (element) {
                    table.push(element);
                });
            });
        }

    }
}