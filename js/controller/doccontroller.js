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
                var uuid = data.uuid;
                $scope.$apply(function(){
                   $scope.formHead = "";
                   $scope.formContent = "";
                });
                var myWindow = window.open("","_blank","top=100,left=200,width=800,height=400");
                myWindow.document.write("<p>Please copy following URL to access your document: http://xiekun.xyz/api/document/" + uuid + "</p>")
            },
            data: param
        });
    };
});