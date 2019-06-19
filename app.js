// For browser support
navigator.getUserMedia =
  navigator.getDisplayMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia;

// Select all imports in HTML
const video = document.querySelector("#video");
const audio = document.querySelector("#audio");
const canvas = document.querySelector("#canvas");
// Set that Iam working with 2D context
const context = canvas.getContext("2d");
// Train AI based on model, get gigher accuracy for hand detections
let model;

// Starts a CAM and stream to html canvas
handTrack.startVideo(video).then(status => {
  if (status) {
    navigator.getUserMedia(
      { video: {} },
      stream => {
        video.srcObject = stream;
      },
      err => console.log(err)
    );
  }
});

handTrack.load().then(lmodel => {
  model = lmodel;
});
