

$("#howItWorks").click(function(){
	$('body').chardinJs("start");
});


$('.parkingData').click(function(){
    $('.parkingData').removeClass('listClicked');
    $(".parkingData").find('.dataExpand').hide();
    $(this).find('.dataExpand').toggle("fast");
    $(this).addClass("listClicked");
    $('.labels').removeClass('clicked');
    $('#label'+ $(this).attr('id').split('parkingData')[1]).addClass("clicked");
    flyTo($(this).attr('id').split('parkingData')[1]);
     
   
});
// ****************************************************************************
	$('.layerBtn').click(function(){
	  	if ($('.toggleArea').hasClass('layersClicked')){
	  		$('.layerBtn').animate({ right: 0 });
	  		$('.Buildings').animate({ right: -150 });
	  		$('.garages').animate({ right: -150  });
	  		$('.street').animate({ right: -150  });
	  		$('.streetSigns').animate({ right: -150  });
	  		$('.bikeRacks').animate({ right: -150  });
	  		$('.toggleArea').removeClass('layersClicked');
	  	}else{
	  		$('.layerBtn').animate({ right: 150 });
	  		$('.Buildings').animate({ right: 0 });
	  		$('.garages').animate({ right: 0  });
	  		$('.street').animate({ right: 0  });
	  		$('.streetSigns').animate({ right: 0  });
	  		$('.bikeRacks').animate({ right: 0  });
	  		$('.toggleArea').addClass('layersClicked');
	  	}
    });

	$('.Buildings').click(function(){
		if ($('.Buildings').hasClass('layersClicked')){
			removeBuildings();
			$('.BuildingsEM').css("background-image","none");
			$('.BuildingsEM').css("background-image","url(static/images/building-icon1.png)");
			$('.Buildings').removeClass('layersClicked');
			$('.Buildings').css('color',"#fff");
			building = osmb.addGeoJSONTiles('https://{s}.data.osmbuildings.org/0.2/anonymous/tile/{z}/{x}/{y}.json');
		}else{
			$('.BuildingsEM').css("background-image","none");
			$('.BuildingsEM').css("background-image","url(static/images/building-icon3.png)");
			$('.Buildings').addClass('layersClicked');
			$('.Buildings').css('color',"#575757");
			removeBuildings();
		}
	});



		$('.garages').click(function(){
		if ($('.garages').hasClass('layersClicked')){
			$('.garagesEM').css("background-image","none");
			$('.garagesEM').css("background-image","url(static/images/garage-icon.png)");
			$('.garages').removeClass('layersClicked');
			$('.garages').css('color',"#fff");
			$(".labels").show("slow");
			plotMarker();
		}else{
			$('.garagesEM').css("background-image","none");
			$('.garagesEM').css("background-image","url(static/images/garage-icon3.png)");
			$('.garages').addClass('layersClicked');
			$('.garages').css('color',"#575757");
			$(".labels").hide("slow");
			removeMarker();
		}
	});

	$('.streetSigns').click(function(){
		if ($('.streetSigns').hasClass('layersClicked')){
			$('.streetSignsEM').css("background-image","none");
			$('.streetSignsEM').css("background-image","url(static/images/street-parking-icon2.png)");
			$('.streetSigns').removeClass('layersClicked');
			$('.streetSigns').css('color',"#fff");
			plotSign();
		}else{
			$('.streetSignsEM').css("background-image","none");
			$('.streetSignsEM').css("background-image","url(static/images/street-parking-icon3.png)");
			$('.streetSigns').addClass('layersClicked');
			$('.streetSigns').css('color',"#575757");
			$(".signLabel").hide("slow");
			removeSign();
		}
	});
		$('.street').click(function(){
		if ($('.street').hasClass('layersClicked')){
			$('.streetEM').css("background-image","none");
			$('.streetEM').css("background-image","url(static/images/street-icon.png)");
			$('.street').removeClass('layersClicked');
			$('.street').css('color',"#fff");
			ShowParkingLines();
		}else{
			$('.streetEM').css("background-image","none");
			$('.streetEM').css("background-image","url(static/images/street-icon3.png)");
			$('.street').addClass('layersClicked');
			$('.street').css('color',"#575757");
			removeParkingLines();
		}
	});

	$('.bikeRacks').click(function(){
		if ($('.bikeRacks').hasClass('layersClicked')){
			$('.bikeRacksEM').css("background-image","none");
			$('.bikeRacksEM').css("background-image","url(static/images/bike-icon.png)");
			$('.bikeRacks').removeClass('layersClicked');
			$('.bikeRacks').css('color',"#fff");
			plotBikeRackes();
		}else{
			$('.bikeRacksEM').css("background-image","none");
			$('.bikeRacksEM').css("background-image","url(static/images/bike-icon3.png)");
			$('.bikeRacks').addClass('layersClicked');
			$('.bikeRacks').css('color',"#575757");
			removeBikeRacks();
		}
	});


// ****************************************************************************
	$('.labels').click(function(){
	  $('.labels').removeClass('clicked');
	  $(this).addClass('clicked');
	  // $('#parkingData'+ $(this).attr('id').split('label')[1]).scrollTo(); 
	  $('.parkingData').removeClass('listClicked');
	  $('#parkingData'+ $(this).attr('id').split('label')[1]).addClass("listClicked");
	  $(".parkingData").find('.dataExpand').hide();
	  $('#parkingData'+ $(this).attr('id').split('label')[1]).find('.dataExpand').toggle("fast");
	  $('#dataContainer').animate({scrollTop:($('#dataContainer').scrollTop() + $('#parkingData'+ $(this).attr('id').split('label')[1]).position().top - -120-$('#dataContainer').height()/2 + $('#parkingData'+ $(this).attr('id').split('label')[1]).height()/2)},1000);

			
	});

    $("#findMe").click(function(){

        navigator.geolocation.getCurrentPosition(success, error, options);
    });

// ****************************************************************************    

    var idToGetPosition;

    $('.overlay').click(function(e){
	    var event = e || arguments[0] || window.event;
	    console.log(event);
	    event.stopPropagation();
	    console.log($(this).attr('id').split('GetDirections')[1]);
		idToGetPosition = $(this).attr('id').split('GetDirections')[1];
		if (directionRoute!=null){
			directionRoute.destroy();
		}
		$('#narrative').show();
		$('#narrative').animate({ left: 20  },1000);
    	navigator.geolocation.getCurrentPosition(success2, error, options);
    
    });

    $('#narrative').click(function(){

		$('#narrative').animate({ left: -450  },1000);
		setTimeout(emptyNarrtive, 1100);
		
	});
	function emptyNarrtive(){
		$('#narrative').empty();
		
		$('#narrative').css('background', "url(static/images/gps.gif) no-repeat center center" );
		$('#narrative').css('background-size', 100 );
		$('#narrative').css('background-color', "#28aff8" );
	}

    $('.signLabel').click(function(){
    	$('.signLabel').hide('fast');
    });


$("#locationSearch").geocomplete();
$("#locationSearchButton").click(function(){
       $("#locationSearch").trigger("geocode");
    });
//*************************************************************************
  // var map = new GLMap('map', {
  //   position: { latitude:40.763554, longitude:-73.981703 },
  //   zoom: 16,
  //   minZoom: 12,
  //   maxZoom: 22,
  //   state: true // stores map position/rotation in url
  // });
 

 

  var osmb = new OSMBuildings({
    baseURL: './static/images/',
    position: { latitude:40.763664, longitude:-73.981613 },
    zoom:16,
    tilt:35,
    rotation:30,
    minZoom: 14,
    maxZoom: 22,
    state: true,

    highlightColor:'blue',
    //effects: ['shadows'],
    attribution: '© ParkZone <a href="http://www.ParkZone.us">ParkZone</a>'
  }).appendTo(map);

   
   // osmb.addOBJ('./static/images/signtest.obj', {longitude: -73.983013,latitude: 40.759965},{id: "is30",scale : 20, elevation :0, rotation : 0 });

    


    

  osmb.addMapTiles(
  	'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
    //'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    {
      attribution: '© Data <a href="https://openstreetmap.org/copyright/">OpenStreetMap</a> · '
    }
  );

	  building = osmb.addGeoJSONTiles('https://{s}.data.osmbuildings.org/0.2/anonymous/tile/{z}/{x}/{y}.json');
	  // osmb.addLayer(building);
  //osmb.addGeoJSONTiles('https://{s}.data.osmbuildings.org/0.2/anonymous/tile/{z}/{x}/{y}.json',{color:'#D0D0D0'});
 
 //***************************************************************************
 var markers = [];
 var markerLayer;
function plotMarker(){
	
	{% for z in parkZones %}
  		
  	obj = osmb.addOBJ('./static/images/parkzone1.obj', {longitude:{{z.longitude}},latitude: {{z.latitude}} },{id: "marker{{z.id}}" ,scale : 5, elevation :0, rotation : 0 , color: 'red'});
  	markers.push(obj);
	{% endfor %}
	

}		
 //***************************************************************************
 var signs = [];

function plotSign(){

   
    $('.loading').show();
	{% for z in parkSigns %}

  		
  	var object = osmb.addOBJ('./static/images/signtest.obj', {longitude:{{z.lon}},latitude: {{z.lat}} },{id: "sign{{z.signID}}" ,scale : 5, elevation :0, rotation : 30 });
  	signs.push(object);
	{% endfor %}

    // osmb.off('loadfeature', function() {$('.loading').hide();});
	osmb.on('loadfeature', function() {$('.loading').hide();});
 

}	

 //***************************************************************************

 var racks = [];

function plotBikeRackes(){

   
    $('.loading').show();
	{% for z in bikeRacks %}

  		
  	var rack = osmb.addOBJ('./static/images/parkzone1.obj', {longitude:{{z.longitude}},latitude: {{z.latitude}} },{id:"rack{{z.rackID}}" ,scale : 5, elevation :0, rotation : 0 , color: '#B1FB17'});
  	racks.push(rack);
	{% endfor %}


	osmb.on('loadfeature', function() {$('.loading').hide();});
 

}	


 	
 //***************************************************************************
function removeBuildings(){

	building.destroy();
}

function removeSign(){

	for(i=0;i<signs.length;i++){

		signs[i].destroy();
	}
}
function removeBikeRacks(){

	for(i=0;i<racks.length;i++){

		racks[i].destroy();
	}
}

function removeMarker(){

	for(i=0;i<markers.length;i++){

		markers[i].destroy();
	}
}

 //***************************************************************************

function flyTo(id){
	 var valuesFlyFrom = {latitude: osmb.getPosition().latitude, longitude: osmb.getPosition().longitude, rotation: osmb.getRotation(), zoom: osmb.getZoom(), tilt: osmb.getTilt()};
	 var valuesFlyTo   = {latitude: dynamicCor[id].lat, longitude: dynamicCor[id].lon, rotation: Math.floor(Math.random() * (180 - 10)) + 10, zoom: 18, tilt: Math.floor(Math.random() * (45 - 10)) + 1};
	 var tweenFly = new TWEEN.Tween(valuesFlyFrom)
    	.to(valuesFlyTo, 3000)
   		.onUpdate(function() {
        // here we call the functions to update the map state

            console.log("positionLatitudeFrom:",valuesFlyFrom.latitude);
        	console.log("positionLongitudeFrom:",valuesFlyFrom.longitude);
        	console.log("positionLatitudeTo:",valuesFlyTo.latitude);
        	console.log("positionLongitudeTo:",valuesFlyTo.longitude);
         	console.log(this.latitude);
        	console.log(this.longitude);

        	osmb.setPosition({ latitude: this.latitude, longitude: this.longitude });
        	osmb.setRotation(this.rotation);
        	osmb.setZoom(this.zoom);
        	osmb.setTilt(this.tilt);
    	});
				tweenFly.start();
				//tween.repeat(Infinity);
	};
		animate();
		function animate(time) {
    		requestAnimationFrame(animate);
    		TWEEN.update(time);
		}




  //***************************************************************************

function flyToYourLocation(lat,lon){
	 var valuesFlyFrom = {latitude: osmb.getPosition().latitude, longitude: osmb.getPosition().longitude, rotation: osmb.getRotation(), zoom: osmb.getZoom(), tilt: osmb.getTilt()};
	 var valuesFlyTo   = {latitude: lat, longitude: lon, rotation: 30, zoom: 17, tilt: 35};
	 var tweenFlyToYourLocation = new TWEEN.Tween(valuesFlyFrom)
    	.to(valuesFlyTo, 3000)
   		.onUpdate(function() {
        // here we call the functions to update the map state
        	osmb.setPosition({ latitude: this.latitude, longitude: this.longitude });
        	osmb.setRotation(this.rotation);
        	osmb.setZoom(this.zoom);
        	osmb.setTilt(this.tilt);
    	});
				tweenFlyToYourLocation.start();
				//tween.repeat(Infinity);
	};
		animate();
		function animate(time) {
    		requestAnimationFrame(animate);
    		TWEEN.update(time);
		}




  //***************************************************************************


	
		var dynamicCor = [];
		var dynamicPos = [];

		{% for z in parkZones %}
	  		var pos = osmb.project({{z.latitude}}, {{z.longitude}}, 1);
	  		var cor = {lat:{{z.latitude}},lon:{{z.longitude}}};
	  		
	  		dynamicCor[{{z.id}}]=cor;
	  		dynamicPos[{{z.id}}]=pos;
  		{% endfor %}
	

	 
  		
		osmb.on('change', function() {
	    	for (i=1;i<=dynamicPos.length;i++){
		    	if (document.getElementById('label'+ i)!= null){
		    		dynamicPos[i]= osmb.project(dynamicCor[i].lat, dynamicCor[i].lon, 1);
					document.getElementById('label'+ i).style.left = Math.round(dynamicPos[i].x) + 'px';
				    document.getElementById('label'+ i).style.top = Math.round(dynamicPos[i].y) +60 + 'px';
			  	}

	  		}
		});
			


  //***************************************************************************		

  osmb.on('pointermove', function(e) {
    var id = osmb.getTarget(e.detail.x, e.detail.y, function(id) {
      if (id) {
        document.body.style.cursor = 'pointer';
         osmb.highlight(id, 'blue');
   
      } else {
        document.body.style.cursor = 'default';
        osmb.highlight(null);
      }
    });
  });
  //***************************************************************************


var controlButtons = document.querySelectorAll('.control button');

for (var i = 0; i < controlButtons.length; i++) {
  controlButtons[i].addEventListener('click', function(e) {
    var button = this;
    var parentClassList = button.parentNode.classList;
    var direction = button.classList.contains('inc') ? 1 : -1;
    var increment;
    var property;

    if (parentClassList.contains('tilt')) {
      property = 'Tilt';
      increment = direction*10;
    }
    if (parentClassList.contains('rotation')) {
      property = 'Rotation';
      increment = direction*10;
    }
    if (parentClassList.contains('zoom')) {
      property = 'Zoom';
      increment = direction*1;
    }
    if (property) {
      osmb['set'+ property](osmb['get'+ property]()+increment);
    }
  });
  };

//*****************************************************




//spin();

var tween;
function spin(){

	var valuesFrom = {latitude: 40.710425, longitude: -74.014572, rotation: 0, zoom: 16, tilt: 35},
  	values1 = {latitude: 40.710425, longitude: -74.014572, rotation: -360, zoom: 16, tilt: 35},
  	animationTime = 95000;

	 tween = new TWEEN.Tween(valuesFrom)
    	.to(values1, animationTime)
   		.onUpdate(function() {
        // here we call the functions to update the map state
        	osmb.setPosition({ latitude: this.latitude, longitude: this.longitude });
        	osmb.setRotation(this.rotation);
        	osmb.setZoom(this.zoom);
        	osmb.setTilt(this.tilt);
    	});
	tween.start();
	tween.repeat(Infinity);
}
animate();

function animate(time) {
	requestAnimationFrame(animate);
	TWEEN.update(time);
}


//*****************************   search    ************************************
//*****************************   search    ************************************

var locationSearchButton = document.getElementById("locationSearchButton");
locationSearchButton.addEventListener("click", function(event) {
	event.preventDefault();
	if($.trim($("#locationSearch").val()).length>0){
		changeLocation(locationSearch.value);
		changeSearchLocation();
		$("#dataContainer").show("slow");
    	$(".parkingData").show("slow");
    	$(".parkingData").show("slow");
    	$(".labels").show("slow");
    	plotMarker();
    	TWEEN.remove(tween);
    	//plotSign();
    	building.destroy();
    	$('#narrative').hide();
    	if (directionRoute!=null){
			directionRoute.destroy();
		}
		$('.streetSignsEM').css("background-image","none");
		$('.streetSignsEM').css("background-image","url(static/images/street-parking-icon2.png)");
		$('.streetSigns').removeClass('layersClicked');
		$('.streetSigns').css('color',"#fff");
    	$('.BuildingsEM').css("background-image","none");
		$('.BuildingsEM').css("background-image","url(static/images/building-icon1.png)");
		$('.Buildings').removeClass('layersClicked');
		$('.Buildings').css('color',"#fff");
		building=osmb.addGeoJSONTiles('https://{s}.data.osmbuildings.org/0.2/anonymous/tile/{z}/{x}/{y}.json',{color:'#D0D0D0'});
		osmb.setTilt(osmb.getTilt()+0.01);
		$('.layerBtn').trigger( "click" );
		$('.streetSigns').trigger( "click" );
		$('.garages').trigger( "click" );
		$('.garages').prop('disabled', false);
		$('.streetSigns').prop('disabled', false);
		$('.street').prop('disabled', false);
		$('.bikeRacks').prop('disabled', false);
	}else{
		openError();
	}	
}); 
			
var searchPositionFrom =  {x: 707.5 , y: 348.5, width: 500, height:50};
var searchpositionTo = {x: 320.5 , y: 100 ,width: 350,height:35 };
//var currentPosition = searchPositionFrom ;

function changeSearchLocation(){
		var tweenSearchPosition = new TWEEN.Tween(searchPositionFrom)
		.to(searchpositionTo, 600)
			.onUpdate(function() {
		locationSearchContainer.style.left = ( this.x ) + 'px';
		locationSearchContainer.style.top = ( this.y ) + 'px';
		locationSearch.style.width = (this.width ) + 'px';
		locationSearch.style.height = (this.height ) + 'px';
		locationSearchButton.style.height = (this.height ) + 'px';
		findMe.style.height = (this.height ) + 'px';
	});
	tweenSearchPosition.start();
	//TWEEN.remove(tweenSearchPosition);
}

var	searchedMarker = null;

function changeLocation(location) {
	console.log("Loading location: " + location);
	
	if (searchedMarker != null){
		searchedMarker.destroy();
	}
	var url = "https://nominatim.openstreetmap.org/search?format=json&q=";
	d3.json(url + location, function(error, response) {
		if (error) return console.warn(error);
		
		
		if (response && response[0] && response[0].lat && response[0].lon) {
			var position = {
			
					latitude: response[0].lat,
					longitude: response[0].lon
			};
			searchedMarker = osmb.addOBJ('./static/images/parkzone1.obj', {longitude:position.longitude,latitude: position.latitude },{id: "position" ,scale : 10, elevation :0, rotation : 0 , color: '#00FF00'});
			changePosition(position.latitude,position.longitude);
		}
	});
}

function changePosition(lat,lon) {
	var temp = osmb.getPosition().longitude;
		
	//there is some error in longitude incerement got to look into it

	var valuesFromYourPosition ={latitude: osmb.getPosition().latitude, longitude: osmb.getPosition().longitude, rotation: osmb.getRotation(), zoom: osmb.getZoom(), tilt: osmb.getTilt()};
	var valuesToSearchedPosition = {latitude: lat, longitude: lon, rotation: 30, zoom: 15.5, tilt: 0};
		console.log("positionLongitude1:",temp);

			
	 var tweenSearchedPosition = new TWEEN.Tween(valuesFromYourPosition)
    	.to(valuesToSearchedPosition, 900)
   		.onUpdate(function() {
        // here we call the functions to update the map state
        	console.log("positionLatitudeFrom:",valuesFromYourPosition.latitude);
        	console.log("positionLongitudeFrom:",valuesFromYourPosition.longitude);
        	console.log("positionLatitudeTo:",valuesToSearchedPosition.latitude);
        	console.log("positionLongitudeTo:",valuesToSearchedPosition.longitude);
         	console.log(this.latitude);
        	console.log(this.longitude);
        	console.log("temp:",temp);
        	osmb.setPosition({ latitude: this.latitude, longitude: this.longitude - temp });
        	osmb.setRotation(this.rotation);
        	osmb.setZoom(this.zoom);
        	osmb.setTilt(this.tilt);
    	});
				tweenSearchedPosition.start();
			
	};
	animate();
	function animate(time) {
		requestAnimationFrame(animate);
		TWEEN.update(time);
	}

	// ******************************************************************
		// var test= "http://www.mapquestapi.com/directions/v2/route?key=UcMstiNH8tFu5bp3A1GunGaxsWzDjhSO&shapeFormat=raw&generalize=0&locale=en_US&unit=m&from=40.808213,-73.963737&to=40.763664,-73.981613";
		
		// d3.json(test, function(error, response) {
		// 	if (error) return console.warn(error);
		// 	console.log(response);
		// 	var linePoints = [];
		// 	for (var i = 0; i < response.route.shape.shapePoints.length; i+=2){
		// 		 var coors = [response.route.shape.shapePoints[i+1],response.route.shape.shapePoints[i]]
		// 		linePoints.push(coors);
				
		// 	}
		// 	var linestring1 = turf.lineString(linePoints);
		// 			console.log(linestring1);
		// 			lines(linestring1);
		// });
	
		function myLocation(from,to){
			var from_lat = from.latitude;
			var from_lon = from.longitude;
			var to_lat = to.latitude;
			var to_lon = to.longitude;
			var test= "https://www.mapquestapi.com/directions/v2/route?key=UcMstiNH8tFu5bp3A1GunGaxsWzDjhSO&shapeFormat=raw&generalize=0&locale=en_US&unit=m&from="+from_lat+","+from_lon+"&to="+to_lat+","+to_lon;
			console.log(test);



			d3.json(test, function(error, response) {
				if (error) return console.warn(error);
				console.log(response);
				renderNarrative(response);
				var linePoints = [];
				for (var i = 0; i < response.route.shape.shapePoints.length; i+=2){
					 var coors = [response.route.shape.shapePoints[i+1],response.route.shape.shapePoints[i]]
					linePoints.push(coors);
				
			}
			var linestring1 = turf.lineString(linePoints);
			console.log(linestring1);
			lines(linestring1);
			});
		}



		var directionRoute;
		function lines(linestring){
		var linestring2 = linestring;


		//Set the unit measure and calculate the buffer using Turf.js ....
		var unit = 'meters';
		var buffered = turf.buffer(linestring2, 2, unit);
		var result = turf.featureCollection([buffered]);

		//Convert to string the buffered json ....
		var my_json = JSON.parse(JSON.stringify(result));

		//Create an empty Polygon json to put in OSM Building map ....
		var geojson_route = {
		type: 'FeatureCollection',
		features: [{
		type: 'Feature',
		properties: {
		color: '#00FF00',
		roofColor: '#99ff99',
		height: 0,
		minHeight: 0
		},
		geometry: {
		type: 'Polygon',
		coordinates: [
		[
		]
		]
		}
		}]
		};

		//Add the coordinates at the Polygon json bringing them from the buffered json ....
		for (var i = 0; i < my_json.features[0].geometry.coordinates[0].length; i++) {
		  geojson_route.features[0].geometry.coordinates[0][i] = my_json.features[0].geometry.coordinates[0][i];
		}

		//Add the Polygon json to the map ....
		directionRoute = osmb.addGeoJSON(geojson_route);	
		}	
//********************************************************************
		function renderNarrative(response) {
		    var legs = response.route.legs;
		    var html = '';
		    var i = 0;
		    var j = 0;
		    var trek;
		    var maneuver;
		    html += '<a id="remove" class="glyphicon glyphicon-remove-circle glyphicon-white" style="cursor: pointer;position: fixed;left:445px; font-size: 1.4em;top:150px;"aria-hidden="true" ></a>'
		    html += '<table><tr><th colspan=3></th></tr><tbody>'
		    html += '<p><b>Directions</b></p>'
		    html += '<hr width="90%" align="left"  style="margin-bottom:1em ;margin-top:0.5em " >'
		    

		    for (; i < legs.length; i++) {
		        for (j = 0; j < legs[i].maneuvers.length; j++) {
		            maneuver = legs[i].maneuvers[j];
		            
		            html += '<tr>';
		            html += '<td>&nbsp;';
		            if (maneuver.iconUrl) {
		                html += '<img src="' + maneuver.iconUrl + '">  '; 
		            } 
		            for (k = 0; k < maneuver.signs.length; k++) {
		                var sign = maneuver.signs[k];
		                if (sign && sign.url) {
		                    html += '<img src="' + sign.url + '">  '; 
		                }
		            }

		            
		           	html += '</td>'
		            html += '<td>' + maneuver.narrative + '</td>'
		            html += '<td>'
		            if (maneuver.mapUrl) {
		                html += '<img src="' + maneuver.mapUrl + '">';
		            } else {
		                html += '&nbsp;'
		            }
		            html += '</td>'
		            html += '</tr>';
		        }
		    }
		    
		    html += '</tbody></table>';
		    
		    document.getElementById('narrative').style.display = "";
		    document.getElementById('narrative').innerHTML = html;
		}

//**********************************************************************	
// getting your position

		var options = {
		  enableHighAccuracy: true,
		  timeout: 5000,
		  maximumAge: 0
		};

		function success(pos) {
		  var crd = pos.coords;

		  console.log('Your current position is:');
		  console.log('Latitude : ' + crd.latitude);
		  console.log('Longitude: ' + crd.longitude);
		  console.log('More or less ' + crd.accuracy + ' meters.');
		  osmb.addOBJ('./static/images/parkzone1.obj', {longitude: crd.longitude,latitude: crd.latitude},{id: "local1",scale : 10, elevation :0, rotation : 30 , color: 'blue'});
		  myPosition = {latitude: crd.latitude,longitude: crd.longitude};
		  flyToYourLocation(crd.latitude,crd.longitude);
		};
		function success2(pos) {
		  var crd = pos.coords;

		  console.log('Your current position is:');
		  console.log('Latitude : ' + crd.latitude);
		  console.log('Longitude: ' + crd.longitude);
		  console.log('More or less ' + crd.accuracy + ' meters.');
		  osmb.addOBJ('./static/images/parkzone1.obj', {longitude: crd.longitude,latitude: crd.latitude},{id: "local1",scale : 10, elevation :0, rotation : 30 , color: 'blue'});
		  osmb.addOBJ('./static/images/parkzone1.obj', {longitude: dynamicCor[idToGetPosition].lon,latitude: dynamicCor[idToGetPosition].lat},{id: "local2",scale : 10, elevation :0, rotation : 30 , color: 'green'});
		  var myPosition = {latitude: crd.latitude,longitude: crd.longitude};
		  flyToYourLocation(crd.latitude,crd.longitude);
		  	    
	      var positionTo   = {latitude: dynamicCor[idToGetPosition].lat, longitude: dynamicCor[idToGetPosition].lon};
		  myLocation(myPosition,positionTo);
		};

		function error(err) {
		  console.warn('ERROR(' + err.code + '): ' + err.message);
		};

		// navigator.geolocation.getCurrentPosition(success, error, options);

	// ******************************************************************
	//parking sign bubble
		var lon1=0;
		var lat1=0;
		var signData="";
		osmb.on('pointerdown', function(e) {
		  	var id = osmb.getTarget(e.detail.x, e.detail.y, function(id) {
			  	
			  	if (id)	{
				    if (id.startsWith("sign")) {
				      var idSplit = id.substr(4);
				      console.log(idSplit);
				      
				      {% for z in parkSigns %}
				      	 	if ({{z.signID}} == idSplit ){

				      	 		lon1 = {{z.lon}};
				      	 		lat1 = {{z.lat}};
				      	 		//$(".signLabel").text("{{z.sign_data}}");
				      	 		$(".signLabel").html('<a id="remove1" class="glyphicon glyphicon-remove-circle " style="cursor: pointer;position: absolute;font-size: 1.4em;right: 3px; top:3px;"aria-hidden="true" ></a>{{z.signinfo}}');
				      	 		$(".signLabel").addClass("display");
				      	 		$(".signLabel").show();
   								osmb.setTilt(osmb.getTilt()+0.01);
				      	 	}
				      	{% endfor %}
				    }else if (id.startsWith("rack")) {
				      var idSplit1 = id.substr(4);
				      console.log(idSplit);
				      
				      {% for z in bikeRacks %}
				      	 	if ({{z.rackID}} == idSplit1 ){

				      	 		lon1 = {{z.longitude}};
				      	 		lat1 = {{z.latitude}};
				      	 		//$(".signLabel").text("{{z.sign_data}}");
				      	 		$(".signLabel").html('<a id="remove1" class="glyphicon glyphicon-remove-circle " style="cursor: pointer;position: absolute;font-size: 1.4em;right: 3px; top:3px;"aria-hidden="true" ></a>{{z.address}}');
				      	 		$(".signLabel").addClass("display");
				      	 		$(".signLabel").show();
   								osmb.setTilt(osmb.getTilt()+0.01);
   								osmb.setTilt(osmb.getTilt()-0.01);
							
				      	 	}
				      	
				      {% endfor %}
				    }
				}
		  	});
		});

		var signLabel = document.getElementById('signLabel');
		osmb.on('change', function() {
		  var pos = osmb.project(lat1, lon1, 0);
		  signLabel.style.left = Math.round(pos.x)-20 + 'px';
		  signLabel.style.top = Math.round(pos.y)-60 + 'px';
		});
//*****************************************************************************
//street parking line

 function ShowParkingLines(){

	var parkingLinePoints = [	[-73.98691713809967,40.76593074121366], [-73.98524343967438,40.765233946526294] ];
	var parkingLinestring = turf.lineString(parkingLinePoints);
	console.log(parkingLinestring);
	parkingLines(parkingLinestring);

	var parkingLinePoints1 = [	[ -73.98652017116547,40.76571540602614], [-73.98514151573181,40.76514049828669] ];
	var parkingLinestring1 = turf.lineString(parkingLinePoints1);
	console.log(parkingLinestring1);
	parkingLines(parkingLinestring1);
}
 function removeParkingLines(){

 	
	for(i=0;i<parkingLine.length;i++){

		parkingLine[i].destroy();
	}
 }
		

	var parkingLine=[];

	function parkingLines(linestring){
		var linestring2 = linestring;


		//Set the unit measure and calculate the buffer using Turf.js ....
		var unit = 'meters';
		var buffered = turf.buffer(linestring2, 0.5, unit);
		var result = turf.featureCollection([buffered]);

		//Convert to string the buffered json ....
		var my_json = JSON.parse(JSON.stringify(result));

		//Create an empty Polygon json to put in OSM Building map ....
		var geojson_route = {
		type: 'FeatureCollection',
		features: [{
		type: 'Feature',
		properties: {
		color: '#9fedc2',
		roofColor: '#cfffed',
		height: 5,
		minHeight: 0
		},
		geometry: {
		type: 'Polygon',
		coordinates: [
		[
		]
		]
		}
		}]
		};

		//Add the coordinates at the Polygon json bringing them from the buffered json ....
		for (var i = 0; i < my_json.features[0].geometry.coordinates[0].length; i++) {
		  geojson_route.features[0].geometry.coordinates[0][i] = my_json.features[0].geometry.coordinates[0][i];
		}
		console.log(geojson_route);
		//Add the Polygon json to the map ....
		parkingLine.push ( osmb.addGeoJSON(geojson_route));
	}
//*****************************************************************************************************
//triggering the toggle menu	
	$('.garages').trigger("click");
	$('.streetSigns').trigger( "click" );
	$('.street').trigger( "click" );
	$('.bikeRacks').trigger( "click" );
	$('.garages').prop('disabled', true);
	$('.streetSigns').prop('disabled', true);
	$('.street').prop('disabled', true);
	$('.bikeRacks').prop('disabled', true);
//*****************************************************************************************************
// Error messege

function openError() {
	$("#error-popup").show();
}
 
$("#locationSearch").focus(function(){
  $("#error-popup").hide();
});

//*****************************************************************************************************
 // for image zoom 
   $('.garageImg').click(function(e){
	    var event = e || arguments[0] || window.event;
	    console.log(event);
	    event.stopPropagation();
	});
//*****************************************************************************************************
//sorting list

$('#cd-menu-trigger').on('click', function () {
    var priceOrderedDivs = $(".parkingData").sort(function (a, b) {
        return ($(a).find(".one_hour").text() > $(b).find(".one_hour").text()? 1 : -1);
    });
    $("#dataContainer").html(priceOrderedDivs);

    $('.parkingData').click(function(){
	    $('.parkingData').removeClass('listClicked');
	    $(".parkingData").find('.dataExpand').hide();
	    $(this).find('.dataExpand').toggle("fast");
	    $(this).addClass("listClicked");
	    $('.labels').removeClass('clicked');
	    $('#label'+ $(this).attr('id').split('parkingData')[1]).addClass("clicked");
	    flyTo($(this).attr('id').split('parkingData')[1]);
	    	    
	});
});


//***********************************************************************************************************
//loading overlay   *****  need to fix it  *****
	// $('.loading').show();

	// osmb.on('busy', function() {$('.loading').show();});
	// //osmb.on('loadfeature', function() {$('.loading').hide();});
	// osmb.on('idle', function() {$('.loading').hide();});

jQuery(document).ready(function($) {
	alert("Welcome to ParkZone<br>This website helps you find parking garages, street parking,<br> information about parking signs and bicycle racks in <b>NEW YORK<b> <br> The data is NOT COMPELTE, we cover ONLY ONE zipcode which is 10019 Midtown west<br>YOU CAN TRY THIS ADDRESS W 57 ST,NY OR ZIP CODE 10019<br>");
});

