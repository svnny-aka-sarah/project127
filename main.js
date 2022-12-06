
song1 = "";
song2 = "";

function preLoad()
{
song1 = loadSound("hp.mp3");
song2 = loadSound("kothm.mp3")
}

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas =createCanvas(550, 550);
    canvas.position(550, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function draw()
{
    image(video, 0, 0, 600, 500);
}
