var express = require('express');
var app = express();
var request = require('request');
const rp = require('request-promise');
var router = express.Router();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');
require('request-debug')(request);

var hasuraExamplesRouter = require('./hasuraExamples');

//var server = require('http').Server(app);
var path = require('path');

var server = require('http').Server(app);
router.use(morgan('dev'));

app.engine('handlebars', exphbs({
	defaultLayout: 'main',
	helpers: {
	    toJSON : function(object) {
	      return JSON.stringify(object, null, 4);
	    }
  	}
	})
);
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('dist'));
app.get('/question', function(req, res) {
	res.sendFile('views/question.html', {root: __dirname })
});


//code for running input code on server side starts
var axios = require('axios');

const glotToken = '92debc0b-994a-4004-98f6-4895ba453c84';
const adminToken = 'Bearer 7a1bd26c7c781750e8cff731d71f35485762a66ff86c97cc';

async function query(options) {
    console.log('from query using stringify'+JSON.stringify(options));

    console.log('before await of axios');
    return await axios(options);

}



function runCode(code, fileName, language, input) {

    var options = {
        url: `https://run.glot.io/languages/${language}/latest`,
        method: 'post',
        headers: {
            'Authorization': `Token ${glotToken}`,
            'Content-type': 'application/json'

        },
        data: {
            "files": [{
                "name": fileName,
                "content": code
            }],
            'stdin': input
        },
    }

    return query(options)

}

async function checkTestCases(code, fileName, language, testcases) {

    var score = 0;

    let i;

    for (i = 0; i < testcases.length; i++) {



        var runres = await runCode(
           code
            , fileName , language , testcases[i].input);


        if (testcases[i].output === runres.data.stdout) {

            score++;
            console.log("test case : ", testcases[i].output, runres.data.stdout, "");
        }
        console.log(runres.data)

    }

    return score;
}

//post request for checking sample input
app.post('/checkTest/v1',function(req,res){
	var data= req.body;
	var language=data.language;
	var stdin=data.stdin;
	var fileName=data.file.name;
	var code=data.file.content;
	console.log('data from client '+ JSON.stringify(data));
	//run function for running code
	/*var runres = await runCode(code, fileName , language , stdin, glotToken);
	
	if (req.body.output === runres.data.stdout) {
		
		console.log("test case : ", req.body.output, runres.data.stdout, "");
		
  }
	 console.log(runres.data)*/
	 //send data to client
	res.setHeader('Content-Type','application/json');
	res.send(runres.data);
});

//post request for checking sample input
app.post('/checkTest/v2',function(req, res){

	var options = {
        url: `https://run.glot.io/languages/python/latest`,
        method: 'post',
        headers: {
            'Authorization': `Token 92debc0b-994a-4004-98f6-4895ba453c84`,
            'Content-type': 'application/json'

        },
        data: {
            "files": [{
                "name": "main.py",
                "content": "print(42)"
            }],
            
        },
    }
    console.log(JSON.stringify(options));
    var resdata=JSON.stringify(query(options));
     //send data to client
    console.log('resdata stdout' + resdata.stdout +' stderror'+ resdata.stderr+ 'error ' +resdata.error );
	res.setHeader('Content-Type','application/json');
	res.send(resdata);
});

app.post('/sampleTest',function(req, res){
    console.log('data in server '+req.body);
	var options = {
        url: `https://run.glot.io/languages/python/latest`,
        method: 'post',
        headers: {
            'Authorization': `Token 92debc0b-994a-4004-98f6-4895ba453c84`,
            'Content-type': 'application/json'

        },
        data: {
            "files": [{
                "name": "main.py",
                "content": "print(42)"
            }],
            
        },
    }
    console.log(options);
    console.log('before axios query');
    var resdata=axios(options);
    console.log('after axios query resdata.data '+resdata.data+'resdata.status'+resdata.status);
     //send data to client
    console.log('resdata stdout' + resdata.data.stdout +' stderror'+ resdata.data.stderr+ 'error ' +resdata.data.error );
	res.setHeader('Content-Type','application/json');
	res.send(resdata.data);
});
app.post('/sampleTest',function(req, res){
    console.log('data in server '+req.body);
	var options = {
        url: `https://run.glot.io/languages/python/latest`,
        method: 'post',
        headers: {
            'Authorization': `Token 92debc0b-994a-4004-98f6-4895ba453c84`,
            'Content-type': 'application/json'

        },
        data: {
            "files": [{
                "name": "main.py",
                "content": "print(42)"
            }],
            
        },
    }
    console.log(options);
    console.log('before axios query');
    var resdata=axios(options);
    console.log('after axios query resdata.data '+resdata.response.data+'resdata.status'+resdata.response.status);
     //send data to client
    //console.log('resdata stdout' + resdata.data.stdout +' stderror'+ resdata.data.stderr+ 'error ' +resdata.data.error );
	res.setHeader('Content-Type','application/json');
	res.send(resdata.response);
});
app.post('/test2',function(req, res){
    
    var post_data={
        "files": [{
            "name": "main.py",
            "content": "print(42)"
        }]
    };
    var post_config=
    {
        headers:{'Authorization': 'Token 92debc0b-994a-4004-98f6-4895ba453c84',
                    'Content-type': 'application/json'}
    }
    axios.post('https://run.glot.io/languages/python/latest', post_data, post_config)
      .then(function (response) {
        console.log(response);
        //console.log('response.data stdout' + resdata.data.stdout +' stderror'+ resdata.data.stderr+ 'error ' +resdata.data.error );
        res.setHeader('Content-Type','application/json');
	    res.send(response);
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
          res.setHeader('Content-Type','application/json');
	    res.send({"error":"some error occured"});
        }
        console.log(error.config);
      });
    

});

app.post('/test3',function(req, res){
    
    var options = {
        url: `https://run.glot.io/languages/python/latest`,
        method: 'post',
        headers: {
            'Authorization': `Token 92debc0b-994a-4004-98f6-4895ba453c84`,
            'Content-type': 'application/json'

        },
        data: {
            "files": [{
                "name": "main.py",
                "content": "print(42)"
            }]
            
        }
    }
    axios(options)
      .then(function (response) {
        //console.log('response from server '+response);
        //console.log('response.data stdout' + resdata.data.stdout +' stderror'+ resdata.data.stderr+ 'error ' +resdata.data.error );
        res.setHeader('Content-Type','application/json');
        
        console.log("inside success function call");
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
        res.send(response.data);
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log('res data :'+error.response.data);
          console.log('res status :'+error.response.status);
          console.log('res headers :'+error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log('error request'+error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
          res.setHeader('Content-Type','application/json');
	      res.send({"error":"some error occured"});
        }
        console.log('error config '+error.config);
      });
    

});
const CLIENT_SECRET='b5d01fd7770d3639e4313d9017e0990ac7c546f8'
app.post('/test4',function(req, res){
    var options = {
        url: 'https://api.hackerearth.com/v3/code/run/',
        method: 'post',
        headers: {
            'Content-type': 'application/json'

        },
        data: {
                'client_secret': CLIENT_SECRET,
                'async': 0,
                'source': 'print(42)',
                'lang': "PYTHON",
                'time_limit': 5,
                'memory_limit': 262144,
            
        }
    }
    axios(options)
      .then(function (response) {
        console.log('response from server '+response.response);
        //console.log('response.data stdout' + resdata.data.stdout +' stderror'+ resdata.data.stderr+ 'error ' +resdata.data.error );
        res.setHeader('Content-Type','application/json');
	    res.send(response);
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log('res data :'+error.response.data);
          console.log('res status :'+error.response.status);
          console.log('res headers :'+error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log('error request'+error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
          res.setHeader('Content-Type','application/json');
	      res.send({"error":"some error occured"});
        }
        console.log('error config '+error.config);
      });
});
app.post('/test5',function(req, res){
    var lang=req.body.language;
    var input=req.body.input;
    var files=req.body.files;
    console.log('lang : '+lang);
    console.log('input : '+input);
    console.log('files : '+files);
    var options = {
        url: `https://run.glot.io/languages/python/latest`,
        method: 'post',
        headers: {
            'Authorization': `Token 92debc0b-994a-4004-98f6-4895ba453c84`,
            'Content-type': 'application/json'

        },
        data: {
            "files": [{
                "name": "main.py",
                "content": "print(42)"
            }]
            
        }
    }
    axios(options)
      .then(function (response) {
        //console.log('response from server '+response);
        //console.log('response.data stdout' + resdata.data.stdout +' stderror'+ resdata.data.stderr+ 'error ' +resdata.data.error );
        res.setHeader('Content-Type','application/json');
        
        console.log("inside success function call");
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
        res.send(response.data);
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log('res data :'+error.response.data);
          console.log('res status :'+error.response.status);
          console.log('res headers :'+error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log('error request'+error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
          res.setHeader('Content-Type','application/json');
	      res.send({"error":"some error occured"});
        }
        console.log('error config '+error.config);
      });
    

});
server.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
