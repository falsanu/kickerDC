window.onload = function() {
  var socket = io.connect('localhost:8080', {reconnect: true});
  var stateWrapper = document.getElementById('tableStatus');
  socket.on('table::occupied::true', function(table) {
    stateWrapper.textContent = 'Belegt';
    console.log('besetzt', table);
  });

  socket.on('table::occupied::false', function(table) {
    stateWrapper.textContent = 'Frei';
    console.log('frei!', table)
  });
};