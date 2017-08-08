const cp = require(`child_process`);


let songID = `1npqP0Epwvvc1jzudkkmVB`

// Plays song
cp.exec(`open -a "Spotify" spotify:track:${songID}:autoplay:true`);