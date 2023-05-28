const anim = gsap.timeline({ defaults: { duration: 0.75 } })

anim.fromTo('.cookieContainer', { scale: 0 }, { scale: 1 })
anim.fromTo('.cookie', { opacity: 0, x: -50, rotation: '-45deg' }, { opacity: 1, x: 0, rotation: '0deg' })
anim.fromTo('.farelo', { opacity: 0, y: -50, rotation: '-30deg' }, { opacity: 1, y: 0, rotation: '0deg' })


function myFuncion() {

    

}
