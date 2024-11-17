// Increment

// POST 1
var likeValue = document.getElementById("likeValue");
var like = document.getElementById("like");
var liked = false;
var heartSuit = document.getElementById("heartsuit");
let likeCountInitial = parseInt(likeValue.textContent);     

like.addEventListener("click", () => {
    if(!liked){
        likeCountInitial = likeCountInitial + 1;
        likeValue.textContent = likeCountInitial;
        like.style.display = "none";
        heartSuit.classList.add("liked");
        heartSuit.style.display = "block";
    }

});

heartSuit.addEventListener("click", () => {
    heartSuit.style.display = "none";
    like.style.display =  "block";
    likeCountInitial = likeCountInitial - 1;
    likeValue.textContent = likeCountInitial;
    
});



var dislike = document.getElementById("dislike");
var disLikeValue = document.getElementById("disLikeValue");
let disLikeCount = parseInt(disLikeValue.textContent);
let disliked = false;
var thumbDown = document.getElementById("thumb-down");


dislike.addEventListener('click', () => {
    if (!disliked && !liked) {
        disLikeCount = disLikeCount + 1;
        disLikeValue.textContent = disLikeCount;
        // disliked = true;
        thumbDown.classList.add('dislike');
        dislike.style.display = "none";
        thumbDown.style.display = "block";
    }
});



// SEARCH 

document.getElementById('searchButton').addEventListener('click', function() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const sections = document.querySelectorAll('.section');
    const noMatch = document.getElementById("no-match");

    let found = false;

    sections.forEach(section => {
        if (section.textContent.toLowerCase().includes(searchTerm)) {
            section.scrollIntoView({ behavior: 'smooth' });
            found = true;
        }

        searchTerm.value = " ";
    });

    if (!found) {
        noMatch.style.display = "block";
    }
});


// SUbscription

var subNews = document.getElementById("sub-email");
var subBtn = document.getElementById("sub-btn");

subBtn.addEventListener("click", () => {
    let emailAddr = subNews.value;
    console.log(emailAddr);

    subNews.value = " ";
});



// POST 2
var likeValue2 = document.getElementById("likeValue2");
var like2 = document.getElementById("like2");
var liked2 = false;
var heartSuit2 = document.getElementById("heartsuit2");
let likeCountInitial2 = parseInt(likeValue2.textContent);     

like2.addEventListener("click", () => {
    if(!liked){
        likeCountInitial2 = likeCountInitial2 + 1;
        likeValue2.textContent = likeCountInitial2;
        like2.style.display = "none";
        heartSuit2.classList.add("liked");
        heartSuit2.style.display = "block";
    }

});

heartSuit2.addEventListener("click", () => {
    heartSuit2.style.display = "none";
    like2.style.display =  "block";
    likeCountInitial2 = likeCountInitial2 - 1;
    likeValue2.textContent = likeCountInitial2;
    
});


var dislike2 = document.getElementById("dislike2");
var disLikeValue2 = document.getElementById("disLikeValue2");
let disLikeCount2 = parseInt(disLikeValue2.textContent);
let disliked2 = false;
var thumbDown2 = document.getElementById("thumb-down2");


dislike2.addEventListener('click', () => {
    if (!disliked2 && !liked2) {
        disLikeCount2 = disLikeCount2 + 1;
        disLikeValue2.textContent = disLikeCount2;
        // disliked2 = true;
        thumbDown2.classList.add('dislike');
        dislike2.style.display = "none";
        thumbDown2.style.display = "block";
    }
});



// POST 3 Blog | Telnet
var likeValue3 = document.getElementById("likeValue3");
var like3 = document.getElementById("like3");
var liked3 = false;
var heartSuit3 = document.getElementById("heartsuit3");
let likeCountInitial3 = parseInt(likeValue3.textContent);     

like3.addEventListener("click", () => {
    if(!liked){
        likeCountInitial3 = likeCountInitial3 + 1;
        likeValue3.textContent = likeCountInitial3;
        like3.style.display = "none";
        heartSuit3.classList.add("liked");
        heartSuit3.style.display = "block";
    }

});

heartSuit3.addEventListener("click", () => {
    heartSuit3.style.display = "none";
    like3.style.display =  "block";
    likeCountInitial3 = likeCountInitial3 - 1;
    likeValue3.textContent = likeCountInitial3;
    
});


var dislike3 = document.getElementById("dislike3");
var disLikeValue3 = document.getElementById("disLikeValue3");
let disLikeCount3 = parseInt(disLikeValue3.textContent);
let disliked3 = false;
var thumbDown3 = document.getElementById("thumb-down3");


dislike3.addEventListener('click', () => {
    if (!disliked3 && !liked3) {
        disLikeCount3 = disLikeCount3 + 1;
        disLikeValue3.textContent = disLikeCount3;
        // disliked3 = true;
        thumbDown3.classList.add('dislike');
        dislike3.style.display = "none";
        thumbDown3.style.display = "block";
    }
});



// POST 4 Blog | Telnet
var likeValue4 = document.getElementById("likeValue4");
var like4 = document.getElementById("like4");
var liked4 = false;
var heartSuit4 = document.getElementById("heartsuit4");
let likeCountInitial4 = parseInt(likeValue4.textContent);     

like4.addEventListener("click", () => {
    if(!liked){
        likeCountInitial4 = likeCountInitial4 + 1;
        likeValue4.textContent = likeCountInitial4;
        like4.style.display = "none";
        heartSuit4.classList.add("liked");
        heartSuit4.style.display = "block";
    }

});

heartSuit4.addEventListener("click", () => {
    heartSuit4.style.display = "none";
    like4.style.display =  "block";
    likeCountInitial4 = likeCountInitial4 - 1;
    likeValue4.textContent = likeCountInitial4;
    
});


var dislike4 = document.getElementById("dislike4");
var disLikeValue4 = document.getElementById("disLikeValue4");
let disLikeCount4 = parseInt(disLikeValue4.textContent);
let disliked4 = false;
var thumbDown4 = document.getElementById("thumb-down4");


dislike4.addEventListener('click', () => {
    if (!disliked4 && !liked4) {
        disLikeCount4 = disLikeCount4 + 1;
        disLikeValue4.textContent = disLikeCount4;
        // disliked4 = true;
        thumbDown4.classList.add('dislike');
        dislike4.style.display = "none";
        thumbDown4.style.display = "block";
    }
});



// POST 5 Blog | Telnet
var likeValue5 = document.getElementById("likeValue5");
var like5 = document.getElementById("like5");
var liked5 = false;
var heartSuit5 = document.getElementById("heartsuit5");
let likeCountInitial5 = parseInt(likeValue5.textContent);     

like5.addEventListener("click", () => {
    if(!liked){
        likeCountInitial5 = likeCountInitial5 + 1;
        likeValue5.textContent = likeCountInitial5;
        like5.style.display = "none";
        heartSuit5.classList.add("liked");
        heartSuit5.style.display = "block";
    }

});

heartSuit5.addEventListener("click", () => {
    heartSuit5.style.display = "none";
    like5.style.display =  "block";
    likeCountInitial5 = likeCountInitial5 - 1;
    likeValue5.textContent = likeCountInitial5;
    
});


var dislike5 = document.getElementById("dislike5");
var disLikeValue5 = document.getElementById("disLikeValue5");
let disLikeCount5 = parseInt(disLikeValue5.textContent);
let disliked5 = false;
var thumbDown5 = document.getElementById("thumb-down5");


dislike5.addEventListener('click', () => {
    if (!disliked5 && !liked5) {
        disLikeCount5 = disLikeCount5 + 1;
        disLikeValue5.textContent = disLikeCount5;
        disliked5 = true;
        thumbDown5.classList.add('dislike');
        dislike5.style.display = "none";
        thumbDown5.style.display = "block";
    }
});


// Scrollspy

var scrollPost = document.querySelector('.scrollPost');
var scrollPost1 = document.querySelector('.scrollPost1');
var scrollPost2 = document.querySelector('.scrollPost2');


function scrollSmooth(){
    scrollPost.scrollIntoView({ behavior: 'smooth' });
}

function scrollSmooth2(){
    scrollPost2.scrollIntoView({ behavior: 'smooth' });
}

function scrollSmooth3(){
    scrollPost1.scrollIntoView({ behavior: 'smooth' });
}




// POST 6
var like6 = document.getElementById("like6");
var likeValue6 = document.getElementById("likeValue6");
let likeCount6 = parseInt(likeValue6.textContent);
let liked6 = false;
var heartsuit6 = document.getElementById("heartsuit6");

like6.addEventListener('click', () => {
    if (!liked6 && !disliked) {
        likeCount6 = likeCount6 + 1;
        likeValue6.textContent = likeCount6;
        liked6 = true;
        heartsuit6.classList.add('liked');
        like6.style.display = "none";
        heartsuit6.style.display = "block";

    }
});



var dislike6 = document.getElementById("dislike6");
var disLikeValue6 = document.getElementById("disLikeValue6");
let disLikeCount6 = parseInt(disLikeValue6.textContent);
let disliked6 = false;
var thumbDown6 = document.getElementById("thumb-down6");


dislike6.addEventListener('click', () => {
    if (!disliked6 && !liked6) {
        disLikeCount6 = disLikeCount6 + 1;
        disLikeValue6.textContent = disLikeCount6;
        disliked6 = true;
        thumbDown6.classList.add('dislike');
        dislike6.style.display = "none";
        thumbDown6.style.display = "block";
    }
});