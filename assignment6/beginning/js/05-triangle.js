var Rows = 7;

for (var i = 1; i <= Rows; i++) {
  var row = '';

  for (var j = 1; j <= i; j++) {
    row += '#';
  }

  console.log(row);
}
