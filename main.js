noseX=0;
noseY=0;

eyeX = 0;
eyeY = 0;

function preload() {
//clown_nose    clown_nose = loadImage('https://i.postimg.cc/pdbxKZhX/Pngtree-clown-red-nose-animation-illustration-4568263.png');
  //shades      
  shades = loadImage('https://i.postimg.cc/ry47Qz43/glasses2.png');
//  clown_face = loadImage('https://i.postimg.cc/J0xL6YR4/clown.png');
}

function setup() {
  canvas = createCanvas(400, 400);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(400, 400);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    eyeX = results[0].pose.leftEye.x - 90 ;
    console.log(eyeX);       //-90 for shades
    eyeY = results[0].pose.leftEye.y - 60 ; 
    console.log(eyeY);       //-75 for shades
  }
}

function draw() {
  image(video, 0, 0, 400, 400);
  image(shades, eyeX, eyeY, 120, 100);
  
  //fill(255,0,0);
  //stroke(255,0,0);
  //circle(noseX, noseY, 20);

  //image('myFilterImage', 400, 400, 200, 200); 
}

function take_snapshot(){    
  save('myFilterImage.png');
  
}
