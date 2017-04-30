angular.module('ng-rdb', [
    'ui.router',
    'angular-growl',
    'restangular'
])
    .directive('rdbSample', function(){
        return {
            template : '<div>RDB Sample Directive</div>',
            restrict : 'A',
            link : function(scope, element, attrs){
                console.log('directive from RDB module');
            }
        };
    });