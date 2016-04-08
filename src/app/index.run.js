(function() {
  'use strict';

  angular
    .module('davidguardiaWeb')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
