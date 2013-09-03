var input = '';
var listNumber = 0;
var selectionNumber = 0;

// Reading input
process.stdin.on('data', function(chunk) {
  input += chunk;
  var lines = input.trim().split('\n');
  var match;

  if (match = lines[0].match(/^(\d+)\s+(\d+)\s*/)) {
    listNumber = match[1];
    selectionNumber = match[2];
  } else {
    input = '';
    return;
  }

  if (listNumber && lines.length > listNumber) {
    var songs = [];
    var i;
    for (i=1; i<lines.length; i++) {
      if (match = lines[i].match(/^(\d+)\s+([0-9a-z_]+)\s*$/)) {
        songs.push([ i, match[1], match[2] ]);
      }
    }
    var selectedSongs = getBestSongs(songs, selectionNumber);
    for (i=0; i<selectedSongs.length; i++) {
      process.stdout.write(selectedSongs[i][2] + '\n');
    }
    process.exit();
  }
});

// Calculating quality of songs
var getBestSongs = function(songs, selectionCount) {
  var i;
  for (i=0; i<listNumber; i++) {
    // Quality = ListeningFrequency * PositionInList
    songs[i][1] = songs[i][1] * songs[i][0];
  }
  songs.sort(function(a, b) {
    // ORDER BY quality DESC, position ASC
    return (b[1] - a[1]) || (a[0] - b[0]);
  });
  return songs.slice(0, selectionCount);
};
