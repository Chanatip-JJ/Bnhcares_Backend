const fs = require('fs')
module.exports = function makeCallback (controller) {
  return (req, res) => {
    const httpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      ip: req.ip,
      method: req.method,
      path: req.path,
      headers: {
        'Content-Type': req.get('Content-Type'),
        Referer: req.get('referer'),
        'User-Agent': req.get('User-Agent')
      }
    }
    controller(httpRequest)
    .then(httpResponse => {  
        // if(!fs.existsSync(httpResponse.body)){
        //   res.status(400).send({message:'Please try again after 10 seconds'})
        //   return 
        // }

        setTimeout(()=>{
        res.set(httpResponse.headers)
        res.status(httpResponse.statusCode)
        fs.createReadStream(httpResponse.body).pipe(res)},2000)

      })
      .catch(e => res.status(e.statusCode).send({ error: e.body}))
  }
}


