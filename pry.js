const msj = require("../models/User_Message");
msj.find({}, (err, res)=>{
    console.log(res);
});