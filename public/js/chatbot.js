window.addEventListener('dfMessengerLoaded', function(event){

const dfMessenger = document.querySelector('df-messenger');

dfMessenger.renderCustomText('Buenos dias');

dfMessenger.addEventListener('df-user-input-entered', function (event) {
    console.log("df-user-input-entered:  "+ event.detail.input);
});


});