angular
    .module('schedulingTools.photographer')
    .controller('PhotoCtrl', PhotoCtrl);

function PhotoCtrl(table) {

    var vm = this;

    vm.photographers = [];


    table.getList(vm.photographers);

     vm.showPhotographers = function(event) {
        console.log(event)
    }

}
