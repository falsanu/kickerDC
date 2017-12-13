window.onload = function() {
  var ws = new WebSocket('wss://localhost:8080');
  ws.onopen = function() {
    ws.send('foo');
    ws.on('bar', function (data) {
      console.log('foo bar');
    })
  }
};