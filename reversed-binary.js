var dec = 47;
var bin = dec.toString(2).split('');

for (var i=0; i<bin.length/2; i++) {
  if (bin[i] !== bin[bin.length-i-1]) {
    // Swapping 0 and 1
    bin[i] = [1, 0][ bin[i] ];
    bin[bin.length-i-1] = [1, 0][ bin[bin.length-i-1] ];
  }
}

dec = parseInt(bin.join(''), 2);

console.log(dec);
