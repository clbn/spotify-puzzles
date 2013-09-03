var input = [
 [15, 3],
 [197812, "re_hash"],
 [78906, "5_4"],
 [189518, "tomorrow_comes_today"],
 [39453, "new_genious"],
 [210492, "clint_eastwood"],
 [26302, "man_research"],
 [22544, "punk"],
 [19727, "sound_check"],
 [17535, "double_bass"],
 [18782, "rock_the_house"],
 [198189, "19_2000"],
 [13151, "latin_simone"],
 [12139, "starshine"],
 [11272, "slow_country"],
 [10521, "m1_a1"]
];

var getBestSongs = function(songs, selectionCount) {
  var i;
  for (i=0; i<listNumber; i++) {
    // Quality = ListeningFrequency * PositionInList
    songs[i][0] = songs[i][0] * (i+1);
  }
  songs.sort(function(a, b) {
    return (b[0] - a[0]);
  });
  return songs.slice(0, selectionCount);
};

var listNumber = input[0][0];
var selectionNumber = input[0][1];
var songs = input.slice(1);

var selectedSongs = getBestSongs(songs, selectionNumber);

for (var i=0; i<selectedSongs.length; i++) {
  console.log(selectedSongs[i][1]);
}
