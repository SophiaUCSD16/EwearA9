var closetdata = require('../closetdata.json');

//var fs = require('fs')

exports.view = function(req, res){

	res.render('closet', closetdata);
  	
};


/*
const Vision = require('@google-cloud/vision');
const projectId='ewear-159500';
const visionClient = Vision({
	projectId: projectId
});

for each(clothes in closetdata){ 
	clothes.fileName = closetdata["imageURL"];
	console.log(fileName);

	/*
	visionClient.detectLabels(fileName)
	.then((results) => {

		const labels = results[0];
		console.log('Labels:');
		labels.forEach((label) => console.log(label));

	    //fs.readFile('like.json', function (err, data) {
   	    //var json = JSON.parse(data);
   	    //json.like.push(labels);

   	    //fs.writeFile("like.json", JSON.stringify(json))
    
    //})

	})
});
*/

