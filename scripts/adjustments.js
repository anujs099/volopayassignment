function changeresolution(){
    var test_width=window.screen.width;
    console.warn("warning about screen width",test_width);
    if(test_width<1000){
    var width_cal=window.screen.width-150;
    console.log(width_cal);
    actualwidth=width_cal+"px";
    var div_element=document.getElementById("flexcontainer"); 
    div_element.style.width=actualwidth;

    var parray=document.getElementsByTagName("p");
    for(var i=0;i<parray.length;i++){
        parray[i].style.width="100vw";
    }
    var divarray=document.getElementsByTagName("div");
    for(var i=0;i<divarray.length;i++){
        divarray[i].style.width=actualwidth;
    }
    var imgarray=document.getElementsByTagName("img");
    for(var j=0;j<imgarray.length;j++){
        imgarray[j].style.width=actualwidth;
        imgarray[j].style.height="auto";
    }
    }
    // var height_cal=window.screen.height;
    
}
