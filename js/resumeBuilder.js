$(function() {

    function displayCurriculum() {

        /*Information to complete in template  
          The information is about the author of curriculum, you can replace
          it with your own information
        */
        //Basic Information kepped in object bio

        let bio = {

            "name": "Diego Rojas",
            "role": "Front-End Developer",
            "biopic": "images/fry.jpg",
            "welcomeMessage": "Welcome to my Curriculum",
            "contacts": {

                "mobile": "3102016078",
                "email": "diegoandresrojas2000@gmail.com",
                "github": "Diego200013",
                "twitter": "@Diego200013",
                "location": "Villavicencio"
            },


            "skills": ["Html", "Css", "JavaScript", "Boostrap", "jQuery", "Python"]

        }

        //create a new propiety that encapsulate a fuction for bio object
        bio.display = function() {

            for (let i = 0; i < Object.keys(bio).length; i++) {

                //keep array of properties of bio object
                let arrayBasicValues = Object.values(bio);
                //list of template variables with html keeped
                let htmlBioList = [HTMLheaderName, HTMLheaderRole, HTMLbioPic,
                    HTMLwelcomeMsg, HTMLskills, HTMLmobile, HTMLemail,HTMLgithub, HTMLtwitter, HTMLlocation
                ];

                if (i < 4) {
                    let formattedPrincipal = htmlBioList[i].replace("%data%", arrayBasicValues[i]);
                    $("#header").append(formattedPrincipal);

                } else if (i == 4) {

                    $("#header").append(HTMLskillsStart);
                    for (let i = 0; i < bio.skills.length; i++) {

                        let formattedSkills = htmlBioList[4].replace("%data%", bio.skills[i])
                        $("#skills").append(formattedSkills);

                    }

                } else if (i == 5) {

                    for (let i = 0; i < Object.keys(bio.contacts).length; i++) {

                        let arrayContactValues = Object.values(bio.contacts);
                        let formattedContact = htmlBioList[i + 5].replace("%data%", arrayContactValues[i])
                        let topContacts = $("#topContacts");
                        $("#header").append(topContacts)
                        $("#topContacts").append(formattedContact)

                    }

                }

            }

        }
        //Info about work author keeped in work object

        let work = {

            "jobs": [{
                    "employer": "International Bank",
                    "title": "Unix engineer",
                    "dates": "2004 to current",
                    "location": "London, UK",
                    "description": "Derivative trading support"
                },
                {
                    "employer": "Dutch ISP",
                    "title": "Unix SA",
                    "dates": "1998 to 2000",
                    "location": "Amsterdam, Netherlands",
                    "description": "Supporting the ISP Unix systems"
                },
                {
                    "employer": "Clearing House",
                    "title": "Unix engineer",
                    "dates": "1998 to 1998",
                    "location": "Luxembourg, Luxembourg",
                    "description": "Real-time settlement system"
                }
            ]

        }
        //create a new propiety that encapsulate a fuction for work object
        work.display = function() {
            //append title to page
            $("#workExperience").append(HTMLworkStart);
            //iteration over work object and job subObject
            for (let i = 0; i < work.jobs.length; i++) {
                let htmlWorkList = [HTMLworkEmployer, HTMLworkTitle, HTMLworkDates, HTMLworkLocation, HTMLworkDescription];
                let workValues = Object.values(work.jobs[i]);
                //iteration over each value in sub-Objects jobs
                for (let i = 0; i < Object.keys(workValues).length; i++) {
                    let formattedWork = htmlWorkList[i].replace("%data%", workValues[i]);
                    if (i == 1) {
        
                        //append to link work
                        $(".workLink:last").append(formattedWork);

                    } else {
                        //append to container of work
                        $(".work-entry:last").append(formattedWork);

                    }
                }

            }

        }

        let projects = {
            "projects":[{

                "title": "TFL train arrivals",
                "dates": "2014",
                "description": "TFL Train arrival board",
                "images": ["images/197x148.gif"],
                
            },
            {
                "title": "BhaktiEvent e-store",
                "dates": "2013",
                "description": "e-store for German Charity Bhakti Marga",
                "images": ["images/197x148.gif"],
                
            },
            {
                "title": "Iain Sinclair Official Unofficial",
                "dates": "2008",
                "description": "Official Unofficial website of British writer Iain Sinclair",
                "images": ["images/197x148.gif"],
                
            }]

    };  
        projects.display =function(){

        $("#projects").append(HTMLprojectStart);

            for (let i = 0; i < projects.projects.length; i++) {
                let htmlProjectsList = [HTMLprojectTitle, HTMLprojectDates,
                 HTMLprojectDescription, HTMLprojectImage];
                let projectsValues = Object.values(projects.projects[i]);
                //iteration over each value in sub-Objects jobs
                for (let i = 0; i < Object.keys(projectsValues).length; i++) {
                    
                        let formattedProjects = htmlProjectsList[i].replace("%data%", projectsValues[i]);
                        //append to container of work
                        $(".project-entry:last").append(formattedProjects);

                    }             
            }        
        }

        let education = {
        "schools":
            [
                {
                    "name": "High School",
                    "location": "Perugia, Italy",
                    "degree": "High School Diploma",
                    "dates": "From: 1980 To: 1984",
                    "major": ["Science", "English"]
                },
                {
                    "name": "Open University",
                    "location": "Milton Keynes",
                    "degree": "Certificate in Math and Computing",
                    "dates": "From: 2006 To: 2010",
                    "major": [ "CS", "Math"]
                },
                {
                    "name": "Open University",
                    "location": "Milton Keynes",
                    "degree": "Diploma in Computing",
                    "dates": "From: 2006 To: 2011",
                    "major": [ "CS", "Java"]
                    
                }
            ],
        "onlineCourses":
            [
                {
                    "title": "Intro to HTML and CSS",
                    "school": "Udacity",
                    "dates": "2014",
                    "url" : "http://www.udacity.com"
                },
                {
                    "title": "JavaScript basics",
                    "school": "Udacity",
                    "dates": "2014",
                    "url" : "http://www.udacity.com"
                },
                {
                    "title": "Front-end programming nanodegree",
                    "school": "Udacity",
                    "dates": "2014",
                    "url" : "http://www.udacity.com"
                }]
            };


            education.display = function(){

                $("#education").append(HTMLschoolStart);

                for(let i = 0; i<Object.keys(education.schools).length;i++){ 

                    let htmlEducationList = [HTMLschoolName, HTMLschoolLocation,HTMLschoolDegree,
                    HTMLschoolDates,HTMLschoolMajor];
                    let educationValues = Object.values(education.schools[i])

                   for(let i=0 ; i<educationValues.length;i++){
                      let formattedSchools = htmlEducationList[i].replace("%data%",educationValues[i])
                      if(i==2){
                       
                       $(".linkSchool:last").append(formattedSchools);

                      }else{
                      
                      $(".education-entry").append(formattedSchools)}
                    }
                }
                 $("#education").append(HTMLonlineClasses);

                 for(let i = 0; i<Object.keys(education.onlineCourses).length;i++){

                   let htmlOnlineClassesList= [HTMLonlineTitle,HTMLonlineSchool,HTMLonlineDates,HTMLonlineURL];
                   
                   let onlineClassesValues = Object.values(education.onlineCourses[i])

                   for(let i=0 ; i< onlineClassesValues.length;i++){
                      let formattedOnline = htmlOnlineClassesList[i].replace("%data%",onlineClassesValues[i])
                      if(i==1){

                       $(".onlineLink:last").append(formattedOnline);

                      }else{
                      
                      $(".online-entry:last").append(formattedOnline)}
                    }
                }

              }    

        bio.display();
        work.display();
        projects.display();
        education.display();
        $("#mapDiv").append(googleMap);

    }

    displayCurriculum();

   
    if (document.getElementsByClassName('flex-item').length === 0) {
        document.getElementById('lets-connect').style.display = 'none';
    }
    if (document.getElementById('map') === null) {
        document.getElementById('mapDiv').style.display = 'none';
    }




});