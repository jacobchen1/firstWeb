const express = require('express');
const Datastore = require('nedb'); 
const app = express();
app.listen(3000,() => console.log('Listening  at port 3000'));
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));

const database =  new Datastore('database.db');
database.loadDatabase();

app.get('/api',(request,response) => {

    database.find({},(err,data)  => {   

        if (err){
            response.end();
            return;
        }
        response.json(data);
    });
    //response.json({test:123});
});


app.post('/api',(request,response) =>{
    console.log('request start!');
    console.log(request.body);
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    response.json(data)
    /*
    response.json({
        status:'sccucess',
        timestamp:timestamp,
        latitude:data.lat,
        longitute:data.lon,
        mode:data.mode
    })*/
});