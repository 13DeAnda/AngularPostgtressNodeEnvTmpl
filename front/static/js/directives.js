angular.module('black.FooterModule.directives', [])
.directive("footerDirective",
[
function(){
  'use strict';

  function linkingFunction(scope, element, attrs){
    scope.element = element;
  }
  function controller($scope){

    $scope.$on("$destroy", function(){
      $scope.element = null;
    });
  }
  controller.$inject = ['$scope'];
  return {
    restrict: "E",
    replace: true,
    transclude: false,
    controller: controller,
    scope: {
    },
    templateUrl: "html/footer.html",
    link: linkingFunction
  };
}]);

angular.module('black.HeaderModule.directives', ['black.HeaderTopLinksModule.directives', 'black.HeaderMenuModule.directives']).
directive("headerDirective",
[
function(){
  'use strict';

  function linkingFunction(scope, element, attrs){
  scope.element = element;
  }

  function controller($scope){
    $scope.$on("$destroy", function(){
      $scope.element = null;
    });
  }
  controller.$inject = ['$scope'];
  return {
    restrict: "E",
    replace: true,
    transclude: false,
    controller: controller,
    scope: {
    },
    templateUrl: "html/header.html",
    link: linkingFunction
  };
}]);
angular.module('black.HeaderMenuModule.directives', []).
directive("headerMenuDirective",
[
function(){
  'use strict';

  function linkingFunction(scope, element, attrs){
    scope.element = element;
  }

  function controller($scope){
    $scope.menuItems = [
      {
        title: "Shop",
        items: [
            {
              title: "Clothing",
              url: "shop/clothing"
            },
            {
              title: "Accessories",
              url: "shop/Accessories"
            },
            {
              title: "Home",
              url: "shop/home"
            }

        ],
      },
      {
        title: "Explore",
        items: [
          {
            title: "Fashion",
            url:"explore/fashion"
          },
          {
            title: "Home Decor",
            url:"explore/home"
          },
          {
            title: "Places",
            url:"explore/places"
          },
          {
            title: "Artwork",
            url:"explore/artwork"
          },
          {
            title: "Enthertaiment",
            url:"explore/enthertaiment"
          },
        ],
      }
    ];


    $scope.$on("$destroy", function(){
      $scope.element = null;
    });
  }
  controller.$inject = ['$scope'];
  return {
    restrict: "E",
    replace: true,
    transclude: false,
    controller: controller,
    scope: {
    },
    templateUrl: "html/headerMenu.html",
    link: linkingFunction
  };
}]);
angular.module('black.HeaderTopLinksModule.directives', []).
directive("headerTopLinksDirective",
[
function(){
  'use strict';
  
  function linkingFunction(scope, element, attrs){
    scope.element = element;
  }

  function controller($scope){

    $scope.topLinks = [
        {
          title: "user",
          image: "/assets/images/icons/userIcon.png",
          link: "/account",
          auth: "false"
        },
        {
          title: "wishlist",
          image: "/assets/images/icons/wishListIcon.png",
          link: "/wishlist",
          auth: "true"
        },
        {
          title: "shop",
          image: "/assets/images/icons/shopIcon.png",
          link: "/shop",
          auth: "false"
        },
        {
          title: "explore",
          image: "/assets/images/icons/exploreIcon.png",
          link: "/explore",
          auth: "false"
        },
    ];




    $scope.$on("$destroy", function(){
      $scope.element = null;
    });
  }
  controller.$inject = ['$scope'];
  return {
    restrict: "E",
    replace: true,
    transclude: false,
    controller: controller,
    scope: {
    },
    templateUrl: "html/headerTopLinks.html",
    link: linkingFunction
  };
}]);