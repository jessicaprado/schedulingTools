angular
    .module('schedulingTools.photographer')
    .controller('PhotoCtrl', PhotoCtrl);

function PhotoCtrl(table) {
     var vm = this;

     //goes to angular service and retrieves ALL photographers
     vm.photographers = [];
     table.getList(vm.photographers);

     //resets selected photographer
    function reset() {
        vm.selectedPhotographers = [];
    }

    //based on ng-click, will return correct photographers to page
     vm.change = function(event) {
         reset();
         event.forEach(function (element) {
             vm.selectedPhotographers.push(element);

         });
     }

     vm.close = function (photographer) {

         var index = vm.selectedPhotographers.indexOf(photographer);
         vm.selectedPhotographers.splice(index, 1);
     }
}
