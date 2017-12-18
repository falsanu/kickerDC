window.onload = function() {
  socket.on('table::occupied::true', function(table) {
    console.log(table)
  });
  socket.on('table::occupied::false', function(table) {
    console.log(table)
  });
};