var app = angular.module('chatApp', ['ngMaterial']);

app.controller('chatController', function ($scope, $sce) {
    $scope.messages = [
    {
        'sender' : 'USER',
        'text' : 'hi',
        'time' : '09:01 AM'
    },
    {
            'sender' : 'BOT',
            'text' : 'How can i help you',
            'time' : '09:01 AM'
    },
    {
             'sender' : 'USER',
             'text' : 'News about Trump',
             'time' : '09:02 AM'
    },
    {
            'sender' : 'BOT',
            'text' : 'Not available at the moment',
            'time' : '09:02 AM'
    }
    ]
});
