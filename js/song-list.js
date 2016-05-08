var songs = {
	'Abba Father let me be': '001.html',
	'Cast your burdens': '002.html',
	'He\'s got the whole world': '003.html',
	'My life is in you': '004.html',
	'Shine Jesus Shine': '005.html'
};

$('#songs .typeahead').typeahead(null, {
  name: 'songs',
  limit: 10,
  source: substringMatcher(Object.keys(songs))
});

function myFunction(songName) {
	window.location=songs[songName];
}
