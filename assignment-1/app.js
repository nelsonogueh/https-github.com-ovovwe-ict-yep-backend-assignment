const http = require('http')

const hostname = '127.0.0.1'
const port = '2021'

const server = http.createServer((req,res) => {
const myName = "Ogueh Nelson"
const htmlPageCode = `<html> 
<head>
    <title>${myName}</title>
</head>
<body>
    <h2> ${myName}</h2>
</body>

</html`;

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(htmlPageCode)
    //console.log('Server working')
})
server.listen(port, hostname, ()=>{
    console.log(`Server is running at port ${port}`)
})