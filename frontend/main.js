
// Main Service Switching 

var main = document.getElementById("main-services");   // Entire section 
var intro = document.getElementById("service-general");  // Radio 1
var listServiceCyber = document.getElementById("listServiceCyber"); //Cyber security details
var internship = document.getElementById("internship");  // Radio 2
var marqueeCCTV = document.getElementById("marqueeCCTV");
var serviceH1 = document.getElementById("service-h1");   // Header
var cyber = document.getElementById("cyber");  // Radio 3
var listServiceSalesRepair = document.getElementById("listServiceSalesRepair");
var sales = document.getElementById("sales");  // Radio 4
var marqueeInstall = document.getElementById("marqueeInstall");  // Marquee Installation Electrical Detail
var installationElect = document.getElementById("installationElect");  // Radio 5
var marquee = document.getElementById("marquee");  //Marquee
var carrierConsult = document.getElementById("carrierConsult");  // Radio 6
var listServiceConCareer = document.getElementById('listServiceConCareer'); //Consult and career outreach
var CCTV = document.getElementById("CCTV");  // Radio 7
var listService = document.getElementById("listService");  //Service Content


//------------------ internship | Telnet ---------------------------------
internship.addEventListener("click", () => {
    main.addEventListener('change', () => {
        let internshipImg = "../img/main-2.jpg";

        main.style.backgroundImage = "url('" + internshipImg + "')";
        main.style.backgroundSize = "2400px 1200px";
        main.style.transform = "transition";
    });
    radio.style.visibility = "visible";
    serviceH1.style.visibility = "visible";


   internship.addEventListener('change', () => {
        serviceH1.textContent = ` INTERNSHIP Opportunities`;
        serviceH1.style.color = "orange";
        serviceH1.style.transform = "transition";
        serviceH1.style.paddingTop = "110px";
   });

   marquee.style.display = "none";
   listService.style.display = "flex";
   listService.style.transform = "transition";
   listServiceCyber.style.display = "none";
   listServiceSalesRepair.style.display ="none";
   marqueeInstall.style.display = "none";
   listServiceConCareer.style.display = "none";
   marqueeCCTV.style.display = "none";
});



///---------------- General | Telnet ----------------------------------

intro.addEventListener('click', () => {
    main.addEventListener('change', () => {
        let introImg = "../img/main-img.jpg";

        main.style.backgroundImage = "url('" + introImg + "')";
        main.style.transform = "transition";
    });

    intro.addEventListener('change', () => {
        serviceH1.textContent = `Amazing SERVICES of TELNETCM`;
        serviceH1.style.color = "orange";
        serviceH1.style.transform = "transition";
    });

    listService.style.display = "none";
    marquee.style.display = "block";
    marquee.style.transform = "transition";
    listServiceSalesRepair.style.display = "none";
    marqueeInstall.style.display = "none";
    listServiceConCareer.style.display = "none";
    listServiceCyber.style.display = "none";
    marqueeCCTV.style.display = "none";
});



//------------------------------------- cyber Security | Telnet ----------------------

cyber.addEventListener("click", () => {
    main.addEventListener('change', () => {
        let cyberImg = "../img/main-3.jpg";

        main.style.backgroundImage = "url('" + cyberImg + "')";
        main.style.backgroundSize = "2400px 1200px";
        main.style.transform = "transition";
    });
    radio.style.visibility = "visible";
    serviceH1.style.visibility = "visible";


   cyber.addEventListener('change', () => {
        serviceH1.textContent = ` CYBER SECURITY`;
        serviceH1.style.color = "orange";
        serviceH1.style.transform = "transition";
        serviceH1.style.paddingTop = "80px";
   });

   marquee.style.display = "none";
   listService.style.display = "none";
   listService.style.transform = "transition";
   listServiceCyber.style.display = "flex";
   listServiceCyber.style.marginTop = "50px";
   listServiceCyber.style.lineHeight = 1.9;
   listServiceCyber.style.marginBottom = "50px";
   listServiceSalesRepair.style.display = "none";
   marqueeInstall.style.display = "none";
   listServiceConCareer.style.display = "none";
   marqueeCCTV.style.display = "none";
});



//----------------------------------------- sales | Telnet ------------------------------

sales.addEventListener('click', () => {
    main.addEventListener('change', () => {
        let salesImg = "../img/main-img.jpg";

        main.style.backgroundImage = "url('" + salesImg + "')";
        main.style.transform = "transition";
    });

    sales.addEventListener('change', () => {
        serviceH1.textContent = `Sales/Repair of  Computers and Accessories`;
        serviceH1.style.color = "orange";
        serviceH1.style.transform = "transition";
        serviceH1.style.paddingTop = "90px";
    });

    listService.style.display = "none";
    marquee.style.display = "none";
    listServiceSalesRepair.style.transform = "transition";
    listServiceSalesRepair.style.display = "flex";
    listServiceSalesRepair.style.marginTop = "60px";
    listServiceSalesRepair.style.marginBottom = "50px";
    listServiceCyber.style.display = "none";
    listServiceSalesRepair.style.flexDirection = "column";
    listServiceSalesRepair.style.lineHeight = 2;
    marqueeInstall.style.display = "none";
    listServiceConCareer.style.display = "none";
    marqueeCCTV.style.display = "none";
});


///---------------- Electrical installation | Telnet ----------------------------------

installationElect.addEventListener('click', () => {
    main.addEventListener('change', () => {
        let installationElectImg = "../img/main-2.jpg";

        main.style.backgroundImage = "url('" + installationElectImg + "')";
        main.style.transform = "transition";
    });

    installationElect.addEventListener('change', () => {
        serviceH1.textContent = `ELECTRICAL INSTALLATION`;
        serviceH1.style.color = "orange";
        serviceH1.style.paddingTop = "105px";
        serviceH1.style.transform = "transition";
    });

    listService.style.display = "none";
    marquee.style.display = "none";
    marqueeInstall.style.transform = "transition";
    listServiceSalesRepair.style.display = "none";
    listServiceCyber.style.display = "none";
    marqueeInstall.style.display = "block";
    listServiceConCareer.style.display = "none";
    marqueeCCTV.style.display = "none";
});


//------------------- IT Consultation and Career Outreach | Telnet ----------------------

carrierConsult.addEventListener("click", () => {
    main.addEventListener('change', () => {
        let carrierConsultImg = "../img/main-3.jpg";

        main.style.backgroundImage = "url('" + carrierConsultImg + "')";
        main.style.backgroundSize = "2400px 1200px";
        main.style.transform = "transition";
    });
    radio.style.visibility = "visible";
    serviceH1.style.visibility = "visible";


   carrierConsult.addEventListener('change', () => {
        serviceH1.textContent = ` Career Orientation and IT Consultation`;
        serviceH1.style.color = "orange";
        serviceH1.style.transform = "transition";
        serviceH1.style.paddingTop = "80px";
   });

   listService.style.display = "none";
    marquee.style.display = "none";
    listServiceConCareer.style.transform = "transition";
    listServiceConCareer.style.display = "flex";
    listServiceConCareer.style.marginTop = "60px";
    listServiceConCareer.style.marginBottom = "50px";
    listServiceCyber.style.display = "none";
    listServiceConCareer.style.flexDirection = "column";
    listServiceConCareer.style.lineHeight = 2;
    marqueeInstall.style.display = "none";
    marqueeCCTV.style.display = "none";
    listServiceSalesRepair.style.display = "none";
});


//----------------------------------------- CCTV | Telnet ------------------------------

CCTV.addEventListener('click', () => {
    main.addEventListener('change', () => {
        let CCTVImg = "../img/main-img.jpg";

        main.style.backgroundImage = "url('" + CCTVImg + "')";
        main.style.transform = "transition";
    });

    CCTV.addEventListener('change', () => {
        serviceH1.textContent = `CCTV Cameras`;
        serviceH1.style.color = "orange";
        serviceH1.style.transform = "transition";
        serviceH1.style.paddingTop = "90px"
    });

    listService.style.display = "none";
    marquee.style.display = "none";
    marqueeCCTV.style.transform = "transition";
    listServiceSalesRepair.style.display = "none";
    listServiceCyber.style.display = "none";
    marqueeInstall.style.display = "none";
    listServiceConCareer.style.display = "none";
    marqueeCCTV.style.display = "block";
});


// Appear Sections

document.addEventListener("DOMContentLoaded", () => {
    var internshipSection = document.getElementById("service-internship");
    var cyberSection = document.getElementById("cyber-accessories");

    var options = {
        threshold: 0.55,
    }

    var observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add("display");
                observer.unobserve(entry.target);
            }
        })
    }, options);

    observer.observe(internshipSection);
    observer.observe(cyberSection);

    
});
