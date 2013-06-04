/**
 * Created with IntelliJ IDEA.
 * User: sasmitas
 * Date: 31/5/13
 * Time: 3:44 PM
 * To change this template use File | Settings | File Templates.
 */

var flowerImages=new Array("flower1.jpg","flower2.jpg");
var carImages=new Array("car1.jpg","car2.jpg","car3.jpg");
var birdImages=new Array("bird1.jpg","bird2.jpg","bird3.jpg","bird4.jpg","bird5.jpg","bird6.jpg");
var natureImages=new Array("Nature1.jpg","Nature2.jpg","Nature3.jpg");

var currentImageArray=null;
var filePath="./images/";
var currentImageIndex=0;

var showh2=window.setInterval("js_show()",3000);
var showSelectBox=window.setInterval("js_show_SelectBox()",6000);
 var images ;
function onBodyLoad()
{
    document.body.style.backgroundImage='block';
    document.body.style.backgroundImage="url(./images/welcomeBackground.jpg)";

}
function js_show()
{

    var x = document.getElementById('h2');
    x.style.display = "block";
    clearInterval(showh2);
 }
function js_show_SelectBox()
{

    var x = document.getElementById('selectbox');
    x.style.display = "block";
    clearInterval(showSelectBox);
}



function showSlides(){
    filePath="./images/";
    var headersDiv = document.getElementById('headersDiv');
    var selectbox = document.getElementById('selectbox');
    headersDiv.style.display = "none";
    selectbox.style.display = "none";
    document.body.style.backgroundImage="url(./images/slideshowBackground.jpg)";

    var canvas = document.getElementById('canvasdiv');
    canvas.style.display = "block";
    var option=(document.getElementById("options")).value;


      if(option == 'Flowers'){
        filePath=filePath+'Flowers' ;
        currentImageArray=flowerImages;
    }else if(option == 'Birds'){
        filePath=filePath+option;
        currentImageArray=birdImages;
    }   else if(option == 'Cars'){

    }   else{
        filePath=filePath+option;
        currentImageArray=natureImages;
    }
    createImagesAndFillCanvas(filePath,currentImageArray);
}

function createImagesAndFillCanvas(filePath,currentImageArray){
     images=new Array(currentImageArray.length)  ;
    for(var k=0;k<currentImageArray.length;k++)   {
        images[k]  = new Image();
        images[k].src = filePath+"/"+currentImageArray[k];
       // console.log("filePath/"+currentImageArray[k])  ;

    }
    playSlideShow();
}
function playSlideShow() {
    var canvas = document.getElementById('cnv1');
    var context = canvas.getContext('2d');
    document.getElementById('PrevButton').disabled=false;
    document.getElementById('NextButton').disabled=false;


    var i = -1;
    interval = setInterval(function() {
        i=i+1;

        context.drawImage(images[i], 0,0, 350,450);

        if(i==images.length-1)  {
            document.getElementById('NextButton').disabled=true;;
            document.getElementById('PrevButton').disabled=false;

            i=-1;
        }
        else if(i==0){
            document.getElementById('NextButton').disabled=false;
            document.getElementById('PrevButton').disabled=true;
            currentImageIndex=images.length-1;
        }  else  {
            document.getElementById('PrevButton').disabled=false;
            document.getElementById('NextButton').disabled=false;
            currentImageIndex=i;
        }

    },2000);
}
function showMainPage(){
    onBodyLoad();
    document.getElementById('headersDiv').style.display = "block";
    document.getElementById('selectbox').style.display = "block";
    document.getElementById('canvasdiv').style.display = "none";
}

function showPrevImage(){
    clearInterval(interval)   ;
    var canvas = document.getElementById('cnv1');
    var context = canvas.getContext('2d');
    context.drawImage(images[currentImageIndex-1], 0,0, 350,450);

    currentImageIndex--;
    if(currentImageIndex==0)  {
         document.getElementById('PrevButton').disabled=true;
         document.getElementById('NextButton').disabled=false;
    }
    else{
        document.getElementById('PrevButton').disabled=false;
        document.getElementById('NextButton').disabled=false;
    }

}
function showNextImage(){
    clearInterval(interval) ;
    var canvas = document.getElementById('cnv1');
    var context = canvas.getContext('2d');
    context.drawImage(images[currentImageIndex+1], 0,0, 350,450);

    currentImageIndex++;
    if(currentImageIndex==images.length-1)  {
         document.getElementById('PrevButton').disabled=false;
         document.getElementById('NextButton').disabled=true;

    } else{
        document.getElementById('PrevButton').disabled=false;
        document.getElementById('NextButton').disabled=false;
    }
}