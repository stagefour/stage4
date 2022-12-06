(function() {
'use strict';

angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'src/categoriescomponent.template.html',
    bindings: {
      items: '<'
    }
  });

})();