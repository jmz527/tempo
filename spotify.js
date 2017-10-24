const cp = require(`child_process`);


let songID = `1npqP0Epwvvc1jzudkkmVB`

// setTimeout(() => {
	// Plays song
	cp.exec(`open -a "Spotify" spotify:track:${songID}:autoplay:true`);
// }, 7200000)