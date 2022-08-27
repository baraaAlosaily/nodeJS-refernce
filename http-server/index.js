const http=require('http');

const PORT=3000;

const server= http.createServer();

const friends=[
        {
            id:0,
            name:'Sir Issac Newton'
        },
        {
            id:1,
            name:'Sir Necola Tesla'
        }
]

server.on('request',(req,res)=>{
    const items=req.url.split('/');
    if(items[1]==='friends'){
        res.statusCode=200;
        res.setHeader('Content-type','application/json');
        if(items.length===3){
            res.end(JSON.stringify(friends.filter((ele)=>ele.id===parseInt(items[2]))));
        }else{
            res.end(JSON.stringify(friends));
        }
    }else if(items[1]==='messages'){
        res.setHeader('Content-type','text/html')
        res.write('<html>')
        res.write('<body>')
        res.write('<ul>')
        res.write('<li>Hello Isaac!</li>')
        res.write('<li>What are your thoughts on astronomy?</li>')
        res.write('</ul>')
        res.write('</body>')
        res.write('</html>')
        res.end()
    }else{
        statusCode=404
        res.end();
    }
})

server.listen(PORT,()=>{
    console.log(`Listening on port ${PORT} ...`)
})