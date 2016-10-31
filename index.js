var SerialPort = require("serialport");
var serialport = new SerialPort("COM5");
serialport.on('open', function(){
    console.log('Serial Port Opend');
    serialport.on('data', function(data){
        console.log(data[0]);

    });
});