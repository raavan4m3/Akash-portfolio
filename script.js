// script.js

window.addEventListener("load", () => {
    // GSAP animation for the loader
    const timeline = gsap.timeline();

    timeline
        .to(".block", {
            duration: 2.5,
            scaleY: 0,
            ease: "power2.inOut",
            stagger: {
                each: 0.1,
                from: "center",
                grid: "auto",
            },
        })
        .to(".welcome-message", {
            duration: 2,
            opacity: 0,
            y: -50,
            ease: "power2.inOut",
        }, "-=0.3")
        .to("#loader", {
            duration: 0.5, // Changed to a positive duration
            opacity: 0,
            onComplete: () => {
                document.getElementById("loader").style.display = "none"; // Hide the loader
                startIntroAnimations();
            },
        });
});
let main = document.querySelector("#main")
let cursor = document.querySelector("#cursor")
main.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x + 20,
        y: dets.y + 10,
    })

})
// Add event listeners to hide the custom cursor when over #nav
const nav = document.querySelector("#nav");
nav.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
        opacity: 0,
        duration: 0.2,
    });
});

nav.addEventListener("mouseleave", () => {
    gsap.to(cursor, { opacity: 1, duration: 0.2 });
});

function startIntroAnimations() {
    // Define intro animations here
    gsap.to(".elem", {
        y: 0,
        delay: -1,
        duration: 3,
        ease: "expo.inOut",
        stagger: 0.2
    });

    gsap.to(".adobe-img", {
        x: 0,
        delay: -1,
        duration: 4,
        ease: "expo.inOut",
        stagger: 0.1
    });
}


// GSAP ScrollTrigger for the second section background and text color
gsap.to("#second", {
    color: "#fff",
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#intro",
        scroller: "body",
        start: "top -50%", // Adjust this based on your layout
        end: "top -100%",
        scrub: 2,
    }
});

gsap.to("#profile img", {
    // boxShadow as a string
    height: "30vh",
    scrollTrigger: {
        trigger: "#intro",
        scroller: "body",
        start: "top -50%", // Adjust this based on your layout
        end: "top -100%",
        scrub: 2,
    }
});


gsap.to("#details h3", {
    // boxShadow as a string
    x: 0,
    ease: "expo.inOut",
    scrollTrigger: {
        trigger: "#intro",
        scroller: "body",
        start: "top -50%", // Adjust this based on your layout
        end: "top -100%",
        scrub: 2,
    }
});

gsap.to("#details h2", {
    // boxShadow as a string
    y: 0,
    ease: "expo.inOut",
    scrollTrigger: {
        trigger: "#intro",
        scroller: "body",
        start: "top -50%", // Adjust this based on your layout
        end: "top -100%",
        scrub: 2,
    }
});
var details = document.querySelector("#details")
details.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
        scale: 2.5,
        duration: 0.2,
    });
});
details.addEventListener("mouseleave", () => {
    gsap.to(cursor, { 
        scale: 1,
        duration: 0.1
    });
})

// Function to increase glow
function increaseGlow() {
    gsap.to(cursor, { 
        boxShadow: "0 0 25px rgba(255, 0, 0, 5), 0 0 50px rgba(255, 0, 0, 0.8)", 
        duration: 0.3 
    });
}

// Function to reset glow
function resetGlow() {
    gsap.to(cursor, { 
        boxShadow: "0 0 15px rgba(255, 0, 0, 0.6), 0 0 30px rgba(255, 0, 0, 0.4)", 
        duration: 0.3 
    });
}

// Example usage
document.querySelector("#details").addEventListener("mouseenter", increaseGlow);
document.querySelector("#details").addEventListener("mouseleave", resetGlow);


gsap.to("#nav", {
    color: "#000",
    boxShadow: "0px 8px 12px rgba(255, 255, 255, 0.6)", // boxShadow as a string
    backgroundColor: "#7a7b7b",
    scrollTrigger: {
        trigger: "#intro",
        scroller: "body",
        start: "top -50%", // Adjust this based on your layout
        end: "top -100%",
        scrub: 2,
    }
});

gsap.to("#nav a", {
    color: "rgba(255, 255, 255, 0.646)",
    backgroundColor: "#7a7b7b",
    scrollTrigger: {
        trigger: "#intro",
        scroller: "body",
        start: "top -50%", // Adjust this based on your layout
        end: "top -100%",
        scrub: 2,
    }
});
// GSAP hover effect for navbar links
const buttons = document.querySelectorAll('#nav a');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        gsap.to(button, {
            color: "#fff",
            // opacity: 0.8,
            x: 10,
            y: -10,
            duration: 0.8,
            ease: "power3.out", // Add ease for a smoother effect
        });
    });

    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            color: "rgba(255, 255, 255, 0.646)",
            opacity: 1,
            x: 0, // Return to original position
            y: 0,
            duration: 0.8,
            ease: "power3.out", // Add ease for a smoother effect
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const owner = document.getElementById("owner");

    // Add a mousemove event listener to the document
    document.addEventListener("mousemove", (e) => {
        // Calculate the target position for #owner based on mouse coordinates
        const targetX = e.clientX;
        const targetY = e.clientY;

        // Animate #owner to smoothly follow the mouse with interpolation
        gsap.to(owner, {
            x: gsap.utils.interpolate(parseFloat(owner.style.left) || 0, targetX - owner.offsetWidth / 2, 0.1),
            y: gsap.utils.interpolate(parseFloat(owner.style.top) || 0, targetY - owner.offsetHeight / 2, 0.1),
            duration: 0.4,
            ease: "power2.out"
        });
    });
});





const video1btn=document.querySelector("#video1btn");
const modal=document.querySelector(".modal");
const close1=document.querySelector('#close1');
video1btn.addEventListener('click', ()=>{
    modal.classList.add('open')
})
close1.addEventListener('click', ()=>{
    modal.classList.remove('open')
})