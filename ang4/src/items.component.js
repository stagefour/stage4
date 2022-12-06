(function() {
'use strict';

angular.module('MenuApp')
  .component('items', {
    templateUrl: 'src/itemscomponent.template.html',
    bindings: {
      items: '<'
    }
  });

})();