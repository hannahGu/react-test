const express = require('express');
const app = express();
app.use(express.static('public'))
app.listen(8082,'127.0.0.1',function(){
    console.log(`server start at 127.0.0.1:8082`);
});