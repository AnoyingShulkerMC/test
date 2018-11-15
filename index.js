module.exports = function(r,c){
try{
const {parse} = require("querystring")
var body = "";
r.on("data",function(d){
body += d.toString()
})
r.on("end",function(){
c(parse(body))
})
}catch(err){
c({},err)
}
}
