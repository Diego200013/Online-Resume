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
                "github": "Diego200013",
                "twitter": "@Diego200013",
                "location": "Villavicencio",
                "email": "diegoandresrojas2000@gmail.com",
            },
            "skills": ["Html", "Css", "JavaScript", "Boostrap", "jQuery", "Python"]
        };
        //create a new propiety that encapsulate a fuction for bio object
        bio.display = function() {
            for (let i = 0; i < Object.keys(bio).length; i++) {
                //keep array of properties of bio object
                let arrayBasicValues = Object.values(bio);
                //list of template variables with html keeped of bio
                let htmlBioList = [HTMLheaderName, HTMLheaderRole, HTMLbioPic,
                    HTMLwelcomeMsg, HTMLskills, HTMLmobile, HTMLgithub, HTMLtwitter, HTMLlocation, HTMLemail
                ];
                if (i < 4) {
                    //replace data to information on template
                    let formattedPrincipal = htmlBioList[i].replace("%data%", arrayBasicValues[i]);
                    if (i === 1) {
                        //append to column of name
                        $("#colheader").append(formattedPrincipal);
                    } else if (i === 3) {
                        //append to section o image
                        $("#colBio").append(formattedPrincipal);
                    } else {
                        //append to header
                        $("#header").append(formattedPrincipal);
                    }
                } else if (i == 4) {
                    // apppend to message section
                    $("#colMessage").append(HTMLskillsStart);
                    //iteration over skills object
                    for (let i = 0; i < bio.skills.length; i++) {
                        //replace data by skills template
                        let formattedSkills = htmlBioList[4].replace("%data%", bio.skills[i]);
                        //append to skills section
                        $("#skills").append(formattedSkills);
                    }
                } else if (i === 5) {
                    //iteration over contacts subObject
                    for (let i = 0; i < Object.keys(bio.contacts).length; i++) {
                        //array of contacts values
                        let arrayContactValues = Object.values(bio.contacts);
                        //replace data by contacts values
                        let formattedContact = htmlBioList[i + 5].replace("%data%", arrayContactValues[i]);
                        //keep the section contact in variable
                        let topContacts = $("#topContacts");
                        //append section contacts to header 
                        $("#header").append(topContacts);
                        $("#footerContacts").append(formattedContact)
                        //append contact data to contact section
                        $("#topContacts").append(formattedContact);
                    }
                }
            }
        };
        //Info about work author keeped in work object
        let work = {
            "jobs": [{
                "employer": "International Bank",
                "title": "Unix engineer",
                "dates": "2004 to current",
                "location": "London, UK",
                "description": "Derivative trading support"
            }, {
                "employer": "Dutch ISP",
                "title": "Unix SA",
                "dates": "1998 to 2000",
                "location": "Amsterdam, Netherlands",
                "description": "Supporting the ISP Unix systems"
            }, {
                "employer": "Clearing House",
                "title": "Unix engineer",
                "dates": "1998 to 1998",
                "location": "Luxembourg, Luxembourg",
                "description": "Real-time settlement system"
            }]
        };
        //create a new propiety that encapsulate a fuction for work object
        work.display = function() {


            //iteration over work object and job subObject
            for (let i = 0; i < work.jobs.length; i++) {
                //list of template variables with html keeped pf work
                let htmlWorkList = [HTMLworkEmployer, HTMLworkTitle, HTMLworkDates, HTMLworkLocation, HTMLworkDescription];
                //keep array of properties of work object
                let workValues = Object.values(work.jobs[i]);
                //append init work to section of work template
                $("#workExperience").append(HTMLworkStart);
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
        };
        //Info about projects author keeped in projects object
        let projects = {
            "projects": [{
                "title": "TFL train arrivals",
                "dates": "2014",
                "description": "TFL Train arrival board",
                "images": ["images/197x148.gif"],
            }, {
                "title": "BhaktiEvent e-store",
                "dates": "2013",
                "description": "e-store for German Charity Bhakti Marga",
                "images": ["images/197x148.gif"],
            }, {
                "title": "Iain Sinclair Official Unofficial",
                "dates": "2008",
                "description": "Official Unofficial website of British writer Iain Sinclair",
                "images": ["images/197x148.gif"],
            }]
        };
        //create a new propiety that encapsulate a fuction for projects object
        projects.display = function() {
            for (let i = 0; i < projects.projects.length; i++) {
                //list of template variables with html keeped projects
                let htmlProjectsList = [HTMLprojectTitle, HTMLprojectDates,
                    HTMLprojectDescription, HTMLprojectImage
                ];
                //keep array of properties of projects object
                let projectsValues = Object.values(projects.projects[i]);

                //append to section project
                $("#projects").append(HTMLprojectStart);


                //iteration over each value in sub-Objects projects
                for (let i = 0; i < Object.keys(projectsValues).length; i++) {
                    let formattedProjects = htmlProjectsList[i].replace("%data%", projectsValues[i]);
                    //append to container of project

                    $(".project-entry:last").append(formattedProjects);

                }
            }
        };
        //Info about education author keeped in education object
        let education = {
            "schools": [{
                "name": "High School",
                "degree": "High School Diploma",
                "dates": "From: 1980 To: 1984",
                "location": "Perugia, Italy",
                "major": ["Science", "English"]
            }, {
                "name": "Open University",
                "degree": "Certificate in Math and Computing",
                "dates": "From: 2006 To: 2010",
                "location": "Milton Keynes",
                "major": ["CS", "Math"]
            }, {
                "name": "Open University",
                "degree": "Diploma in Computing",
                "dates": "From: 2006 To: 2011",
                "location": "Milton Keynes",
                "major": ["CS", "Java"]
            }],
            "onlineCourses": [{
                "title": "Intro to HTML and CSS",
                "school": "Udacity",
                "dates": "2014",
                "url": "http://www.udacity.com"
            }, {
                "title": "JavaScript basics",
                "school": "Udacity",
                "dates": "2014",
                "url": "http://www.udacity.com"
            }, {
                "title": "Front-end programming nanodegree",
                "school": "Udacity",
                "dates": "2014",
                "url": "http://www.udacity.com"
            }]
        };
        //create a new propiety that encapsulate a fuction for education object        
        education.display = function() {

            //iteration over subObject schools of education
            for (let i = 0; i < Object.keys(education.schools).length; i++) {
                //list of template variables with html keeped of schools
                let htmlEducationList = [HTMLschoolName, HTMLschoolDegree,
                    HTMLschoolDates, HTMLschoolLocation, HTMLschoolMajor
                ];
                //append to education section
                $("#education").append(HTMLschoolStart);
                //keep array of properties of schools suboject
                let educationValues = Object.values(education.schools[i]);
                //iteration over each object of schools object
                for (let i = 0; i < educationValues.length; i++) {
                    //replace data for template information
                    let formattedSchools = htmlEducationList[i].replace("%data%", educationValues[i]);
                    if (i == 1) {
                        //append second part of link to the other part
                        $(".linkSchool:last").append(formattedSchools);
                    } else {
                        //append data on education section
                        $(".education-entry:last").append(formattedSchools);
                    }
                }
            }
            //iteration over subObject onlineCourses 
            for (let i = 0; i < Object.keys(education.onlineCourses).length; i++) {
                //list of template variables with html keeped of schools
                let htmlOnlineClassesList = [HTMLonlineTitle, HTMLonlineSchool, HTMLonlineDates, HTMLonlineURL];
                //keep array of properties of schools suboject              
                let onlineClassesValues = Object.values(education.onlineCourses[i]);
                //append online classes to education section
                $("#online").append(HTMLonlineClasses);
                //iteration  over onlineClasses suboject
                for (let i = 0; i < onlineClassesValues.length; i++) {
                    //replace data by onlineClasses template
                    let formattedOnline = htmlOnlineClassesList[i].replace("%data%", onlineClassesValues[i]);
                    if (i == 1) {
                        //append link to first part of link
                        $(".onlineLink:last").append(formattedOnline);
                    } else {
                        //append data of online classes to online section
                        $(".online-entry:last").append(formattedOnline);
                    }
                }
            }
        };
        //callback  display property of each object
        bio.display();
        work.display();
        projects.display();
        education.display();
        //apppend google map
        $("#mapDiv").append(googleMap);
    }
    //callback display
    displayCurriculum();
});