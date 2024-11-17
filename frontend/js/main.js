
// Main Service Switching 
var main = document.getElementById("main-services");   // Entire section 
var intro = document.getElementById("service-general");  // Radio 1
var listServiceCyber = document.getElementById("listServiceCyber"); //Cyber security details
var internship = document.getElementById("internship");  // Radio 2
var serviceH1 = document.getElementById("service-h1");   // Header
var cyber = document.getElementById("cyber");  // Radio 3
var sales = document.getElementById("sales");  // Radio 4
var marqueeInstall = document.getElementById("marqueeInstall");  // Marquee Installation Electrical Detail
var installationElect = document.getElementById("installationElect");  // Radio 5
var marquee = document.getElementById("marquee");  //Marquee
var carrierConsult = document.getElementById("carrierConsult");  // Radio 6
var listServiceConCareer = document.getElementById('listServiceConCareer'); //Consult and career outreach
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
        serviceH1.textContent = ` INTERNSHIP Training Opportunities`;
        serviceH1.style.color = "orange";
        serviceH1.style.transform = "transition";
        serviceH1.style.paddingTop = "110px";
        // serviceH1.style.animation = "fadeInDown 1.5s ease-in-out";
   });

   marquee.style.display = "none";
   listService.style.display = "flex";
   listService.style.transform = "transition";
   listServiceCyber.style.display = "none";
   marqueeInstall.style.display = "none";
   listServiceConCareer.style.display = "none";
});



///---------------- General | Telnet ----------------------------------

intro.addEventListener('click', () => {
    main.addEventListener('change', () => {
        let introImg = "../img/main-img.jpg";

        main.style.backgroundImage = "url('" + introImg + "')";
        main.style.transform = "transition";
    });

    intro.addEventListener('change', () => {
        serviceH1.textContent = `TELNET Digital Literacy Initiative`;
        serviceH1.style.color = "orange";
        serviceH1.style.transform = "transition";
    });

    listService.style.display = "none";
    marquee.style.display = "block";
    marquee.style.transform = "transition";
    marqueeInstall.style.display = "none";
    listServiceConCareer.style.display = "none";
    listServiceCyber.style.display = "none";
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
        serviceH1.textContent = ` CYBER SECURITY Training`;
        serviceH1.style.color = "orange";
        serviceH1.style.transform = "transition";
        serviceH1.style.paddingTop = "80px";
   });

   marquee.style.display = "none";
   listService.style.display = "none";
   listService.style.transform = "transition";
   listServiceCyber.style.display = "flex";
   listServiceCyber.style.marginTop = "40px";
   listServiceCyber.style.lineHeight = 1.9;
   listServiceCyber.style.marginBottom = "120px";
   marqueeInstall.style.display = "none";
   listServiceConCareer.style.display = "none";
});






///---------------- Electrical installation | Telnet ----------------------------------

installationElect.addEventListener('click', () => {
    main.addEventListener('change', () => {
        let installationElectImg = "../img/main-2.jpg";

        main.style.backgroundImage = "url('" + installationElectImg + "')";
        main.style.transform = "transition";
    });

    installationElect.addEventListener('change', () => {
        serviceH1.textContent = `ELECTRICAL INSTALLATION Training`;
        serviceH1.style.color = "orange";
        serviceH1.style.paddingTop = "85px";
        serviceH1.style.transform = "transition";
    });

    listService.style.display = "none";
    marquee.style.display = "none";
    marqueeInstall.style.transform = "transition";
    listServiceSalesRepair.style.display = "none";
    listServiceCyber.style.display = "none";
    marqueeInstall.style.display = "block";
    listServiceConCareer.style.display = "none";
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
    listServiceConCareer.style.marginTop = "30px";
    listServiceConCareer.style.marginBottom = "130px";
    listServiceCyber.style.display = "none";
    listServiceConCareer.style.flexDirection = "column";
    listServiceConCareer.style.lineHeight = 2;
    marqueeInstall.style.display = "none";
});




// Appear Sections and Count


document.addEventListener('DOMContentLoaded', function() {
    const countUpElements = document.querySelectorAll('.count-up');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const targetValue = parseInt(entry.target.dataset.target);
                let currentValue = 0;
                const increment = Math.ceil(targetValue / 100);
                const timer = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= targetValue) {
                        entry.target.textContent = targetValue;
                        clearInterval(timer);
                    } else {
                        entry.target.textContent = currentValue;
                    }
                }, 15);
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.9
    });

    countUpElements.forEach((element) => {
        observer.observe(element);
    });

    var internshipSection = document.getElementById("service-internship");
    var cyberSection = document.getElementById("cyber-accessories");
    var talentShow = document.getElementById("talentShow");
    var serviceRemaining = document.getElementById("service-remaining");
    var footer = document.getElementById("footer");

  
    
    var options = {
        threshold: 0.45,
    }

    var observer2 = new IntersectionObserver((entries, observer2) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add("display");
                observer2.unobserve(entry.target);
            }
        })
    }, options);

    observer2.observe(internshipSection);
    observer2.observe(cyberSection);
    observer2.observe(serviceRemaining);
    observer2.observe(talentShow);
    observer2.observe(footer);    



    var progressBar = document.querySelector('.progress-bar');
    var progressCount = document.querySelector('.progress-count');
    var targetProgress = parseInt(progressCount.textContent);
    let currentProgress = 0;

    var progressBar2 = document.querySelector(".progress-bar2");
    var pressCount2 = document.querySelector(".progress-count2");
    let currentProgress2 = 0;
    var targetProgress2 = parseInt(pressCount2.textContent);

    var progressBar3 = document.querySelector(".progress-bar3");
    var pressCount3 = document.querySelector(".progress-count3");
    let currentProgress3 = 0;
    var targetProgress3 = parseInt(pressCount3.textContent);

    var progressBar4 = document.querySelector(".progress-bar4");
    var pressCount4 = document.querySelector(".progress-count4");
    let currentProgress4 = 0;
    var targetProgress4 = parseInt(pressCount4.textContent);


    var interval = setInterval(() => {
      currentProgress += 1;
      progressBar.style.width = `${currentProgress}%`;
      if (currentProgress >= targetProgress) {
        clearInterval(interval);
      }
    }, 30);


    var interval2 = setInterval(() => {
        currentProgress2 += 1;
        progressBar2.style.width = `${currentProgress2}%`;
        if(currentProgress2 >= targetProgress2){
            clearInterval(interval2);
        }
    }, 30);


    var interval3 = setInterval(() => {
        currentProgress3 += 1;
        progressBar3.style.width = `${currentProgress3}%`;
        if(currentProgress3 >= targetProgress3){
            clearInterval(interval3);
        }
    }, 30);


    var interval4 = setInterval(() => {
        currentProgress4 += 1;
        progressBar4.style.width = `${currentProgress4}%`;
        if(currentProgress4 >= targetProgress4){
            clearInterval(interval4);
        }
    }, 30);

    
});


  
