canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
var rover_width=100;
rover_height=90;
background_image="racing.jpg";
car1_image="car1.png";
car2_image="car1.png"
var car1_x=10;
var car1_y=10;
var car2_x=10;
var car2_y=10;
function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uplaodbackground;
    background_imgtag.src=background_image;

    rover_imgtag=new Image();
    rover_imgtag.onload=uploadrover;
    rover_imgtag.src=car1_image;


    rover2_imgtag=new Image();
    rover2_imgtag.onload=uploadrover;
    rover2_imgtag.src=car2_image;
}
function uplaodbackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
    
}
function uploadrover(){
    ctx.drawImage(rover_imgtag,car1_x,car1_y,rover_width,rover_height);
    ctx.drawImage(rover2_imgtag,car2_x,car2_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed=='38'){
up();
console.log("up");
    }
    if(keypressed=='40'){
        down();
        console.log("down");

    }
    if(keypressed=='37'){
       left();
       console.log("left");
    }
    if(keypressed=='39'){
        right();
        console.log("right");
    }
    if (keypressed=='65'){
        left1();
        console.log("left1");
            }
            if(keypressed=='87'){
                up1();
                console.log("up1");
        
            }
            if(keypressed=='68'){
               right1();
               console.log("right1");
            }
            if(keypressed=='83'){
                down1();
                console.log("down1");
            }
}
function up(){
  if(car1_y>=0) {
      car1_y=car1_y-10;
      uplaodbackground();
      uploadrover();
  }
}

function down(){
    if(car1_y<=500) {
        car1_y=car1_y+10;
        uplaodbackground();
        uploadrover();
    }
  }


  function left(){
    if(car1_x>=0) {
        car1_x=car1_x-10;
        uplaodbackground();
        uploadrover();
    }
  }

  function right(){
    if(car1_x<=700) {
        car1_x=car1_x+10;
        uplaodbackground();
        uploadrover();
    }
  }


  function up1(){
    if(car2_y>=0) {
        car2_y=car2_y-10;
        uplaodbackground();
        uploadrover();
    }
  }
  
  function down1(){
      if(car2_y<=500) {
          car2_y=car2_y+10;
          uplaodbackground();
          uploadrover();
      }
    }
  
  
    function left1(){
      if(car2_x>=0) {
          car2_x=car2_x-10;
          uplaodbackground();
          uploadrover();
      }
    }
  
    function right1(){
      if(car2_x<=700) {
          car2_x=car2_x+10;
          uplaodbackground();
          uploadrover();
      }
    }