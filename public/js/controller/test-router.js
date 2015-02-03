
inventoryApp.config(function($routeProvider){
    $routeProvider
    .when('/',{
      templateUrl:'tmpl/home.html',
      controller:'uniformController'  
    }).otherwise({
    	redirectoTo:'/uniforms'
    })
});



