var btns=document.getElementsByClassName("wordboxbtn");console.log(1);var xxk1=document.getElementsByClassName("imgboxxxk");console.log(2);var xxk2=document.getElementsByClassName("wordxxk");console.log(3);var xxk3=document.getElementsByClassName("imgboxxxk3");console.log(4);for(var xxk4=document.getElementsByClassName("words2"),i=0;i<btns.length;i++)console.log("按钮个数"),btns[i].onclick=function(){for(console.log("d"),i=0;i<btns.length;i++)console.log(999),xxk1[i].className="imgboxxxk",xxk2[i].className="wordxxk",xxk3[i].className="imgboxxxk3",xxk4[i].className="words2",btns[i].className="wordboxbtn";var s=this.getAttribute("a");xxk1[s].className="imgboxxxk active",xxk2[s].className="wordxxk active",xxk3[s].className="imgboxxxk3 active",xxk4[s].className="words2 active",this.className="wordboxbtn active"};var srcs=["../images/aiweier.banner.png","../images/lxwm.banner.png","../images/mochabanner.png"];function qianjin(){var s=srcs.shift();srcs.push(s),bg.src=srcs[0]}dsq=setInterval(function(){qianjin()},2e3),banner.onmouseover=function(){clearInterval(dsq)},banner.onmouseout=function(){dsq=setInterval(function(){qianjin()},2e3)};