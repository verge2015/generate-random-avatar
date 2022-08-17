# generate-random-avatar
A simple NodeJS App that can generate a random avatar and save it to your local as SVG file.

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
const { AvatarGenerator } = require("random-avatar-generator");
const fs = require("fs");
const https = require("https");

const generator = new AvatarGenerator();
const avatarUrl = generator.generateRandomAvatar();

https.get(avatarUrl, (res) => {
    const path = "./output/avatar.svg";
    const fileStream = fs.createWriteStream(path);
    res.pipe(fileStream);
    
    fileStream.on("finish", () => {
        fileStream.close();
        console.log("File written in output folder.");
    });
});
```


## Sample
![Sample 4](https://user-images.githubusercontent.com/16742524/185103257-4a3865f4-221f-475b-82fa-a6e9d999ecd9.png)


