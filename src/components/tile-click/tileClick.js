'use strict';

angular.module('openshiftCommonUI')
  .directive('tileClick', function() {
    return {
      restrict: 'AC',
      link: function($scope, element) {
        $(element).click(function (evt) {
          // Don't trigger tile target if the user clicked directly on a link or button inside the tile or any child of a .tile-click-prevent element.
          var t = $(evt.target);
          if (t && (t.closest("a", element).length || t.closest("button", element).length) || t.closest(".tile-click-prevent", element).length) {
            return;
          }
          angular.element($('a.tile-target', element))[0].click();
        });
      }
    };
  });
