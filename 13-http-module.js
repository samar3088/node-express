const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/')
    {
        res.write('Welcome to homepage')
        res.end()
    }
    else if(req.url === '/about')
    {
        res.write('Welcome to about')
        res.end()
    }
    else
    {
        res.end("Oops page not found")
    }
})

server.listen(5000)