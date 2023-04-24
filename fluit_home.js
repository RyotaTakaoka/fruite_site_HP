const images = ["image/grapes-553463_1920.jpg", "image/grapes-276070_1920.jpg", "image/peach-2721852_1920.jpg", "image/plums-276075_1920.jpg"]

const count = 0;
const slideimage =()=>{
  if(count>images.length){
    count = 0;
  }else{
    document.getElementById("js_slideshow").src = images[count];
    count++;
  }
}
