var tl = new TimelineMax({paused:true});
var bezierData = MorphSVGPlugin.pathDataToBezier("#anim_path");
tl.set("#velo", {autoAlpha:1, xPercent:-50, yPercent:-50,  transformOrigin: "50% 50%"});
tl.to("#velo", 32.8, {bezier: {values:bezierData, type:"cubic", autoRotate:0}, ease:Linear.easeNone, repeat:0, yoyo:true});
tl.play();
// requires MorphSVGPlugin http://greensock.com/morphSVG which is a bonus plugin for Club GreenSock members (Shockingly Green and Business Green).
// more info on Club GreenSock: http://www.greensock.com/club

