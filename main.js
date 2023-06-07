noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(450,500);
    video.position(50,100);
    canvas=createCanvas(450,450);
    canvas.position(560,120);  
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw()
{
    background('#96bcfa');
    fill('#ff00c8');
    stroke('#ff00c8');
    square(noseX,noseY,difference);
    document.getElementById("sq_size").innerHTML='Size of the square= '+difference+'px';
}

function modelLoaded()
{
    console.log("Posenet is initialized!");
}

function gotPoses(results)
{
if(results.length>0)
{
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("nose x=" + noseX +"nose Y=" + noseY);
leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
difference=floor(leftWristX-rightWristX);
console.log("difference-"+difference+"leftWristX-"+leftWristX+"rightWristX-"+rightWristX);
}
}