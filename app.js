const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/views/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/fbexperience',function(req,res){
  res.sendFile(path.join(__dirname+'/views/fbexperience.html'));
});

//add the router
app.use('/', router);
app.use("/css", express.static('./css/'));
app.use("/js", express.static('./js/'));
app.use("/images", express.static('./images/'));

app.listen(process.env.port || 3000);

console.log('Running at Port 3000');