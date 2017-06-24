/**
 * Created by KJXie on 2017/6/23.
 */
var myApp = angular.module('myApp', []);
myApp.controller('DocCtrl', function($scope){
    $scope.paragraphs = [];
    $scope.formContent = "";
    $scope.formHead = "";
    $scope.totalParagraph = $scope.paragraphs.length;

    $scope.formReset = function(){
        $scope.formContent = "";
        $scope.formHead = "";
    };

    $scope.formSubmit = function(){
        var content = $scope.formContent;
        var head = "";
        var param = {
            content: content
        };
        $.ajax({
            url:'/api/document',
            type:'post',
            dataType:'json',
            success: function(data) {
                $scope.$apply(function(){
                   $scope.formHead = data.uuid;
                   $scope.formContent = "";
                });
            },
            data: param
        });
    };
});