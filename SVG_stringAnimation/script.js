var path=`M 10 100 Q 500 100 990 100`

var finalPath=`M 10 100 Q 500 100 990 100`;

var string= document.querySelector('#string');

string.addEventListener("mousemove",(dets)=>{
    path=`M 10 100 Q ${dets.x} ${dets.y} 990 100`
    //dets me aega sara mouse event 
    //usme x:coordinates,y:coordinsates sb hoega.
    //hmne event listener mouse pe keya ha esleye dets mouse events vapis deta ha as an object

    gsap.to("svg path",{
        //attr: for changing attribute
        attr:{d:path},
        duration:0.2,
        ease:"power3.out"
    })
})

string.addEventListener("mouseleave",()=>{
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.2,
        ease:"elastic.out"
    })
})

