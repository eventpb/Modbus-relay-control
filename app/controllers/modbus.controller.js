var modbusRTU=require('../../config/modbus');

var turnOnRelay=(req,res)=>{
    modbusRTU.writeCoil(req.params['ch'],1).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.send("ERROR");
    });
}

var turnOffRelay=(req,res)=>{
    modbusRTU.writeCoil(req.params['ch'],0).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.send("ERROR");
    });
}

module.exports={
    //toggleRelay,
    turnOnRelay,
    turnOffRelay
}