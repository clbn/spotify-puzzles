var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  rl.write(getReversedBinary(parseInt(line, 10)).toString());
  rl.close();
});

var getReversedBinary = function(dec) {
  var bin = dec.toString(2).split('');

  for (var i=0; i<=bin.length/2-1; i++) {
    if (bin[i] !== bin[bin.length-i-1]) {
      // Swapping 0 and 1
      bin[i] = [1, 0][ bin[i] ];
      bin[bin.length-i-1] = [1, 0][ bin[bin.length-i-1] ];
    }
  }

  return parseInt(bin.join(''), 2);
};
