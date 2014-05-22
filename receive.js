var PORT = 10000;
var HOST = '224.0.1.60';

var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', function (message, remote) {
    console.log(remote.address + ':' + remote.port +' - ' + message);
});

//https://github.com/joyent/node/issues/4944
server.bind(PORT, function() {
	server.addMembership(HOST);
});
