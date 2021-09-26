module.exports.cookieToJSOBJ = (c) => {

  let c2 = decodeURIComponent(c.replaceAll(" ", "")).split(";")
  let res = ""
  for (var i = 0; i < c2.length; i++){
    c2[i] = c2[i].split("=")
  }
  for (var r = 0; r < c2.length; r++){
    c2[r][0] = "\"" + c2[r][0] + "\""
    c2[r][1] = "\"" + c2[r][1] + "\""
    c2[r] = c2[r].join(":")
    res += c2[r] + ","
  }
  return JSON.parse("{" + res.slice(0, res.length - 1) + "}")
}
module.exports.getValuebyKeyInCookie = (c, key) => {
  return this.cookieToJSOBJ(c)[key]
}