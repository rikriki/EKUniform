window.inventoryApp = angular.module('inventoryApp', ['ngResource','ngDialog','ngRoute']);


inventoryApp.controller("uniformController",function($scope,inventoryFactory,ngDialog){
    $scope.inventories = inventoryFactory.items;
    $scope.inventory={};
    $scope.openInventory=function(data){
        $scope.inventoryStatus=true; 
        $scope.inventory.name = data;
        $scope.selectedItem=data; 
        //$scope.addItems();
    }
    $scope.closeInventory = function(){
        $scope.inventoryStatus=null;
    }
});

inventoryApp.controller("homeController", function ($scope,ngDialog) {

  
    //$scope.inventories2 = inventoryFactory2.query();
    //console.log($scope.inventories2)

    $scope.pageClass="page-home";
    $scope.cartItems =[];

    $scope.open = null;
    $scope.addItems= function(item){
        var newItem = {
           name:item.name,
           quantity:item.quantity 
        }
        $scope.cartItems.push(newItem);
        console.log($scope.cartItems)
    };
    $scope.notifications=function(){
        ngDialog.open({template:'firstDialogId',
            data:{riki:"yes"}
        });
        $scope.toggleNav();
    }
    $scope.toggleNav=function(){
        if($scope.open){
            $scope.open=null ;

        }else{
            $scope.open=true ;
        }
    }
    

   /*$http.get('data/movies.json')
    .then(function(res){
        $scope.movies = res.data;
    });*/
   
    /*$scope.getMovieById=function(id){
        var movies = $scope.movies;
        for(var i in movies){
            if(movies[i].id == id){
                 $scope.favMovie = movies[i];
            }
        }
     };

     $scope.back = function () {
        window.history.back();
     };
     $scope.getCount = function (n) {
        return new Array(n);
     };
    
     $scope.isActive = function (route) {
        return route === $location.path();
     };
 
     $scope.isActivePath = function (route) {
        return ($location.path()).indexOf(route) >= 0;
     };
     

     $scope.headerSrc = "tmpl/header.html";*/
});
/*
movieStubApp.controller("movieDetailsController", function ($scope, $routeParams) {
    $scope.getMovieById($routeParams.id);
     $scope.pageClass="page-movie";
   

});

movieStubApp.controller("bookTicketsController",function($scope,$http,$location,$routeParams){
    
  $scope.pageClass="page-bookTicket";
  $scope.getMovieById($routeParams.id);
  $scope.formData.thumb = $scope.favMovie.thumb;
  $scope.formData.name = $scope.favMovie.name;
  $scope.formData.review = $scope.favMovie.review;
  $scope.formData.rating = $scope.favMovie.rating;
  $scope.formData.date = "Today";
  $scope.formData.noTickets = 1;


      $scope.processedForm = function(){
       $http({
            method:'POST',
            url:'/book',
            data:$.param($scope.formData),
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            }

       })
       .success(function(data){
            console.log(data);
             $location.path("/bookings");
       });
     };

     

});

movieStubApp.controller("userController",function($scope,$location,$http,$routeParams){
    $scope.pageClass="page-user";
  $scope.users = [
        {
            "id": 1,
            "username": "riki",
            "password": "123456",
            "Role": "Admin"
        },
        {
            "id": 2,
            "username": "michael",
            "password": "123456",
            "Role": "writer"
        },
        {
            "id": 3,
            "username": "jordan",
            "password": "123456",
            "Role": "user"
        }
    ];
});

movieStubApp.controller("bookingDetailsController",function($scope,movieStubBookingsFactory,$http){
    $scope.pageClass="page-bookDetails";  
    $scope.bookings = movieStubBookingsFactory.query();

    //Edit item
     $scope.editItem = function (idx) {
        console.log(idx + "index")
        $scope.bookings[idx].name= $scope.bookings[idx].name;
        $scope.formData.index = idx;
        $scope.formData.name = $scope.bookings[idx].name;
         $http({
                method:'POST',
                url:'/editBook',
                data:$.param($scope.formData),
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                }

           })
           .success(function(data){
                console.log(data.statusCode);
                 console.log(data + "aasdasd");
                 //$location.path("/bookings");
           }).error(function(e){
            console.log(e)
           });
        
     };

});
*/