

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

    var newletter = document.getElementById("newletter");
    var footer = document.getElementById("footer");
    var talentShow = document.getElementById("talentShow");
    var ourTeam = document.getElementById("team");
    var testimony = document.getElementById("testimony");
    var free_style = document.getElementById("free_style");
  
    
    var options = {
        threshold: 0.39,
    }

    var observer2 = new IntersectionObserver((entries, observer2) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add("display");
                observer2.unobserve(entry.target);
            }
        })
    }, options);

    observer2.observe(talentShow);
    observer2.observe(newletter);
    observer2.observe(footer);
    observer2.observe(ourTeam);
    observer2.observe(testimony);
    observer2.observe(free_style);
    



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


  



