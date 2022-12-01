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
        if (httpResponse.headers) {
          res.set(httpResponse.headers)
        }

        // if(httpResponse.cookies){
        //   res.status(200).cookie('access_token',httpResponse.cookies,{
        //     secure: true,
        //     httpOnly: true,
        //     maxAge: 60*60*1000
        //   })
        // }
        
        if(httpResponse.URLpath){
          res.redirect(httpResponse.URLpath)
        }else{
          res.type('json')
          res.status(httpResponse.statusCode).send(httpResponse.body)
        }
      })
      .catch(e => res.status(500).send({ error: 'An unknown error occurred.' }))
  }
}


