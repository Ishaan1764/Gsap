// gsap.from("#page1 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:100
// })

// gsap.from("#page2 #box",{
//     scale:0,
//     delay:1,
//     duration:1,
//     rotate:100,
     // scrollTrigger:"#page2 #box"
//     scrollTrigger:{
         // trigger:animation ka starting point
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%"
//     }
// })

gsap.from("#page2 h1",{
    opacity:0,
    x:500,
    duration:2,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        markers:true,
        start:"top 50%"
    }
});

gsap.from("#page2 h2",{
    opacity:0,
    x:-500,
    duration:2,
    scrollTrigger:{
        trigger:"#page2 h2",
        scroller:"body",
        markers:true,
        start:"top 50%",
        end:"top 30%",
        scrub:2,
        //agar pin use keya to parent ko trigger krna ha
        //start:"top 0%"
        pin:true

    }
})

gsap.from("#page3 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:700,
    scrollTrigger:{
        trigger:"#page3 #box",
        scroller:"body",
        markers:true,
        start:"top 50%",
        //agar pura animation scrolling ke bases pe ho jab uper kro to chle ya bnd ho
        //mtlb jase jase scroll hoega vase vase animate hoega
        //scroller start aur end ke bhich es leye hmne end ko bhi pass laya.
        end:"top 30%",
        // scrub:2
    }
})