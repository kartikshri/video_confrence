// Access video elements
const localVideo = document.getElementById('local-video');
const remoteVideo = document.getElementById('remote-video');

// Access control buttons
const joinButton = document.getElementById('join-button');
const leaveButton = document.getElementById('leave-button');

// Variables to store local stream and remote stream
let localStream, remoteStream;

// Function to handle joining the video conference
async function joinConference() {
  try {
    // Get access to user's camera and microphone
    localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

    // Display local stream in the local video element
    localVideo.srcObject = localStream;

    // TODO: Implement logic to establish connection with remote participants

    // Enable leave button and disable join button
    joinButton.disabled = true;
    leaveButton.disabled = false;
  } catch (error) {
    console.error('Error accessing media devices:', error);
  }
}

// Function to handle leaving the video conference
function leaveConference() {
  // Stop the local stream and remove it from the video element
  localStream.getTracks().forEach(track => track.stop());
  localVideo.srcObject = null;

  // TODO: Implement logic to disconnect from remote participants

  // Enable join button and disable leave button
  joinButton.disabled = false;
  leaveButton.disabled = true;
}

// Add event listeners to control buttons
joinButton.addEventListener('click', joinConference);
leaveButton.addEventListener('click', leaveConference);
