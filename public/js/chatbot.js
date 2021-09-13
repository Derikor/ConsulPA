
window.addEventListener('dfMessengerLoaded', function(event){

const dfMessenger = document.querySelector('df-messenger');


dfMessenger.addEventListener('df-user-input-entered', function (event) {
    console.log("df-user-input-entered:  "+ event.detail.input);
    });

});
  


function savemessage (msj){
    let User_Message = new User_Message({
        //author: ObjectId,
          message: msj,
        //date: Date
    });
    User_Message.save((err,res) =>{
        if (err) return console.log(err);
        console.log("se agrego el mensaje ",res);
    });
}
