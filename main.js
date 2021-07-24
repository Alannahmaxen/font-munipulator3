
leftWristX=0;
rightWristX=0;
difference=0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 600);
    video.position(100,100)

    canvas = createCanvas(550,500);
     canvas.position(800,100)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log("results");
          leftWristX = results[0].pose.leftWrist.x;
          rightWristX = results[0].pose.rightWrist.x;
          difference = floor(leftWristX - rightWristX);
          console.log("leftWristX="+leftWristX+" rightWristX="+rightWristX);
   
    }
}

function draw(){
    background('#FFFFB7');
    fill('#0000FF');
    text("Alannah",50,400);
    textSize(difference);
    

}