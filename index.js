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

