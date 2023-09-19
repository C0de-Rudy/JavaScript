const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        return res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        return res.end('This is our about page') 
    }
    return res.end(`
    <h1>Oops!</h1>
<a href="/">Return to Home Page</a>
    `)
})

server.listen(5000)
