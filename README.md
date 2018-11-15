# post-parser

`post-parser` is a  parser that parser post request with only few lines. 
`post-parser` only supports parsing requests in the mime type `application/x-www-form-urlencoded`
We are working to support parsing requests in `text/plain`
In order to parse a post request use this code:

    var http = require("http")
    http.createServer(function(req,res){
      if(req.method = "POST"){
        let parse = require("post-parser")
        parse(req,function(result,err){
          if (err) throw err;
          res.write(result)
          res.end
        })
      }
    }).listen(8080)
