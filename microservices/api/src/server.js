var express = require('express');
var app = express();
var request = require('request');
var router = express.Router();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');
require('request-debug')(request);

var hasuraExamplesRouter = require('./hasuraExamples');

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
    console.log(JSON.stringify(options));
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
    var resdata=query(options);
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
    var resdata=query(options);
    console.log('after axios query');
     //send data to client
    console.log('resdata stdout' + resdata.stdout +' stderror'+ resdata.stderr+ 'error ' +resdata.error );
	res.setHeader('Content-Type','application/json');
	res.send(resdata);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
