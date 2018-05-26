/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/
var markers = []


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<div class= "row"><div class="col-12 mt-3" id="colheader"><h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span id="subtitle">%data%</span></div></div><hr>';

var HTMLcontactGeneric = '<li class="contact-list"><span class="orange-text">Contact</span></li>';
var HTMLmobile = '<li class="contact-list col-xs-12 col-md-2 pb-3 m-2"><span class="orange-text"><i class="material-icons">phone</i>mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="contact-list col-xs-12 col-md-3 pb-3 m-2"><span class="orange-text"><i class="material-icons">email</i>email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="contact-list col-xs-12 col-md-2 pb-3 m-2"><span class="orange-text"><i class="fa fa-twitter"></i>twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="contact-list col-xs-12 col-md-2 pb-3 m-2"><span class="orange-text"><i class="fa fa-github"></i>github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="contact-list col-xs-12 col-md-2 pb-3 m-2"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="contact-list col-xs-12 col-md-2 pb-3 m-2"><span class="orange-text"><i class="material-icons">room</i>location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<div class="row" id="colBio" ><div class="col-2"><img src="%data%" class="biopic"></div>';
var HTMLwelcomeMsg = '<div class=" col-xs-12 col-md-10" id="colMessage"><div class="row"><div class="col-12"><span class="welcome-message">%data%</span></div></div>';

var HTMLskillsStart = '<div class="row"><div class="col-12 text-center"><h3 id="skills-h3">Skills:</h3><ul id="skills"></ul>';
var HTMLskills = '<li class="skillsOrientation"><span class="white-text">%data%</span></li></div></div>';

var HTMLworkStart = '<div class="work-entry col-sm-12 col-md-4"></div>';
var HTMLworkEmployer = '<a href="#" class="workLink">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div><br>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p><hr>';

var HTMLprojectStart = '<div class="project-entry text-center col-sm-12 col-md-4 text-center"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%"><hr>';

var HTMLschoolStart = '<div class="education-entry text-center col-sm-12 col-md-4"></div>';
var HTMLschoolName = '<a href="#" class="linkSchool">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div><br>';
var HTMLschoolLocation = '<div class="location-text">%data%</div><br>';
var HTMLschoolMajor = '<em><br>Major: %data%</em><hr>';

var HTMLonlineClasses = '<div class="online-entry text-center col-sm-12 col-md-4"></div>';
var HTMLonlineTitle = '<a href="#" class="onlineLink">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a><hr>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map" class=" col-12"></div><hr>';

/*
The Internationalize Names challenge found in the lesson Flow Control from JavaScript Basics requires you to create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var $name = $('#name');
    var iName = inName($name.text()) || function(){};
    $name.html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in the lesson Flow Control from JavaScript Basics.
*/
var clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {

  logClicks(loc.pageX, loc.pageY);
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable

/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {
  var locations;        
  var mapOptions = {
    disableDefaultUI: true,
    zoomControl: true,
    scaleControl: true,
    panControl: false
  };

  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
  // <div id="map">, which is appended as part of an exercise late in the course.
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {
    //console.log("inside locationFinder");
    // initializes an empty array
    var locations = [];
    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);
    // iterates through school locations and appends each location to
    // the locations array
    // commenting school - no need for this
    // for (var school in education.schools) {
    //   locations.push(education.schools[school].location);
    // }
    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      //console.log(work.jobs[job].location);
      locations.push(work.jobs[job].location);
    }
    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.k;  // latitude from the place service
    var lon = placeData.geometry.location.B;  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });
    
    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    marker.infowindow = infoWindow;
    
    // hmmmm, I wonder what this is about...
    // how does closing infowindows work?
    // 1. add the infowindow to the marker as soon as the infowindo
    //    is created
    // 2. add each marker to an array (markers)
    // 3. in the event handler, if the markers array has length>0,
    //    go through each <element>[index].infowindow.close() 
    google.maps.event.addListener(marker, 'click', function() {
      if (markers.length>0) {
        for (var i=0;i<markers.length;i++) {
           markers[i].infowindow.close();
        }        
      }
      infoWindow.open(map,marker);
      // your code goes here!
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
    // add the marker to the array of markers
    markers.push(marker);
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0])
    } else {
      console.log("ERROR: " + status);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {
    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);
    
    // Iterates through the array of locations, creates a search object for each location
    for (place in locations) {
      // the search request object
      var request = {
        query: locations[place]
      }

      // Actually searches the Google Maps API for location data and runs the callback 
      // function with the search results after each search.
      // trying to slow down calls            
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);
};

/*
Uncomment all the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window 
// and adjust map bounds
window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
 map.fitBounds(mapBounds);
});