# generate-random-avatar
This application allows you to generates one random avatar and saves it to a output folder. The avatar is saved as SVG file using NodeJS.

## Packages
```bash
random-avatar-generator
```

## Install Packages
```bash
 npm install
 or
 npm i
```

## Usage
```bash
 node index.js
```

## Source Code
```javascript
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
```

## Sample Output
![Sample 4](https://user-images.githubusercontent.com/16742524/185103257-4a3865f4-221f-475b-82fa-a6e9d999ecd9.png)


