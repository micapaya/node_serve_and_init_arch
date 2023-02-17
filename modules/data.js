const fs = require('fs');


const datacontent = function(strName,scriptName){
    const stringDataHTML = `<!DOCTYPE html>\n<html lang="fr">\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <link rel="icon" type="image/png" href="./src/img/fav.png" />\n    <link rel="stylesheet" href=" ${strName} ">\n    <title>Document</title>\n</head>\n<body>\n    <!-- your code here !! -->\n   <script src = " ${scriptName} "></script>\n    </body>\n</html>`;
    return stringDataHTML;
}

module.exports = datacontent

