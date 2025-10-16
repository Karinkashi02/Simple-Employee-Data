function mobiledev() {
    var isMobile = /Mobi|Android/i.test(navigator.userAgent);

    if (isMobile && !window.location.href.includes("dev.html")) {
        window.location.href = "./dev.html";
    } else if (!isMobile && !window.location.href.includes("devs.html")) {
        window.location.href = "./devs.html";
    }
}


function back() {
    window.history.back();
}

// document.addEventListener("DOMContentLoaded", () => {
//     const myBait = document.getElementById("bait");

//     window.addEventListener("scroll", () => {
//         if (window.scrollY > 100) { 
//             myBait.style.opacity = "0";   // hide
//         } else {
//             myBait.style.opacity = "1";   // show again
//         }
//     });
// });
