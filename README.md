# Description
NodeJS package that parses HTML cookie to Javascript object.
# Installation
```sh
$ npm i cookietojsobj --save
```
# Example
```
const mod = require("cookietojsobj")

mod.cookieToJSOBJ("name=heseneli;sname=kadirov")
// output: {name:"heseneli",sname:"kadirov"}
```