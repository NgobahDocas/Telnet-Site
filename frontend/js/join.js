var likeValue = document.getElementById("likeValue");
var like = document.getElementById("like");
var liked = false;
var heartSuit = document.getElementById("heartsuit");
let likeCountInitial = parseInt(likeValue.textContent);     

like.addEventListener("click", () => {
    if(!liked && !disliked){
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

var disLikeValue =document.getElementById("disLikeValue");
var dislike = document.getElementById("dislike");
var disliked = false;
var dislikecountInitial = parseInt(disLikeValue.textContent);
var thumbDown = document.getElementById("thumb-down");

dislike.addEventListener("click", () => {
    if(!disliked && !liked){
        dislikecountInitial = dislikecountInitial + 1;
        disLikeValue.textContent = dislikecountInitial;
        thumbDown.style.display = "block";
        dislike.style.display = "none";
        thumbDown.style.marginLeft = "3px"

    }
})

thumbDown.addEventListener("click", () => {
    thumbDown.style.display = "none";
    dislike.style.display = "block";
    dislikecountInitial = dislikecountInitial - 1;
    disLikeValue.textContent =dislikecountInitial;
});


// POST 2
var likeValue2 = document.getElementById("likeValue2");
var like2 = document.getElementById("like2");
var liked2 = false;
var heartSuit2 = document.getElementById("heartsuit2");
let likeCountInitial2 = parseInt(likeValue2.textContent);     

like2.addEventListener("click", () => {
    if(!liked2){
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


var disLikeValue2 =document.getElementById("disLikeValue2");
var dislike2 = document.getElementById("dislike2");
var disliked2 = false;
var dislikecountInitial2 = parseInt(disLikeValue2.textContent);
var thumbDown2 = document.getElementById("thumb-down2");

dislike2.addEventListener("click", () => {
    if(!disliked2){
        dislikecountInitial2 = dislikecountInitial2 + 1;
        disLikeValue2.textContent = dislikecountInitial2;
        thumbDown2.style.display = "block";
        dislike2.style.display = "none";
        thumbDown2.style.marginLeft = "3px"

    }
})

thumbDown2.addEventListener("click", () => {
    thumbDown2.style.display = "none";
    dislike2.style.display = "block";
    dislikecountInitial2 = dislikecountInitial2 - 1;
    disLikeValue2.textContent = dislikecountInitial2;
});


// POST 3
var likeValue3 = document.getElementById("likeValue3");
var like3 = document.getElementById("like3");
var liked3 = false;
var heartSuit3 = document.getElementById("heartsuit3");
let likeCountInitial3 = parseInt(likeValue3.textContent);     

like3.addEventListener("click", () => {
    if(!liked3){
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


var comment_name = document.getElementById("comment_name");
var submitBtn = document.getElementById("post_comment");

submitBtn.addEventListener("click", () => {
    let emailAddr = comment_name.value;
    console.log(emailAddr);

    comment_name.value = " ";
});





