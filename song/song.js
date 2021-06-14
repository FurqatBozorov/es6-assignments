//This file is a homework task by pirple.

// My favorite song
var name = 'Bahor kelguncha';

// Author of the song
var author = 'Yahyo Muminov'

// Year of release
var year=2020


// Genres
var genres = 'mental'

// Duration
var duration= '5 minutes 22 seconds'


// YouTube views
var viewsOnYouTube = 386000

// Likes on YouTube
var likesOnYouTube= 911

// What is this song about?
var songIsAbout='Love'

// YouTube channels where you can listen the songs
var channelsOnYouTube = ['RizaNova', "Yahyobek Muminov"]

console.log('Name of the song is ' + name);
console.log('Author of the song is ' + author);
console.log('Song was released in ' + year );
console.log('Genres of the songs is' + genres );
console.log('Duration of the song on YouTube is ' + duration);
console.log('The song was viewed'+ viewsOnYouTube + 'times' );
console.log('Song was liked by ' + likesOnYouTube + ' people');
console.log('Song is about ' + songIsAbout);
console.log(channelsOnYouTube);

// Select all in one object

var myFavoriteSong = {
  name: "Bahor kelguncha",
  author: "Yahyo Muminov",
  releasedYear: 2020,
  genres: 'mental',
  duration: '5 minutes 22 seconds',
  viewsOnYouTube: 386000,
  likesOnYouTube: 911 ,
   songIsAbout: 'Love'
}

console.log('My favorite song is ' + myFavoriteSong.name + '.' + ' Author of the song is ' + myFavoriteSong.author + '.' + ' Song was released in ' + myFavoriteSong.releasedYear + ' ...' );
