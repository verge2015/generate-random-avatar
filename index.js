/* Destructuring the `AvatarGenerator` class from the `random-avatar-generator` module. */
const { AvatarGenerator } = require("random-avatar-generator");
const fs = require("fs");
const https = require("https");

/* Creating a new instance of the `AvatarGenerator` class. */
const generator = new AvatarGenerator();
/* Generating a random avatar. */
const avatarUrl = generator.generateRandomAvatar();

https.get(avatarUrl, (res) => {
    /* Creating a path to the output folder. */
    const path = "./output/avatar.svg";
    /* Creating a file stream and piping the response to it. */
    const fileStream = fs.createWriteStream(path);
    res.pipe(fileStream);
    
    /* Listening for the `finish` event. */
    fileStream.on("finish", () => {
        /* Closing the file stream and logging a message to the console. */
        fileStream.close();
        console.log("File written in output folder.");
    });
});

