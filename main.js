// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
// main.js

// Add hidden class so error modal is initially invisible
const errorModal = document.getElementById('modal');
errorModal.classList.add('hidden');

// Grab all heart elements
const hearts = document.querySelectorAll('.like-glyph');

// Add click listeners to each heart
hearts.forEach((heart) => {
  heart.addEventListener('click', () => {
    const glyph = heart;

    // Call fake server
    mimicServerCall()
      .then(() => {
        // Toggle between empty and full heart
        if (glyph.innerText === EMPTY_HEART) {
          glyph.innerText = FULL_HEART;
          glyph.classList.add('activated-heart');
        } else {
          glyph.innerText = EMPTY_HEART;
          glyph.classList.remove('activated-heart');
        }
      })
      .catch((error) => {
        // Show error modal with message
        const messageNode = document.getElementById('modal-message');
        messageNode.innerText = error;
        errorModal.classList.remove('hidden');

        // Hide modal after 3 seconds
        setTimeout(() => {
          errorModal.classList.add('hidden');
        }, 3000);
      });
  });
});

// Provided mimicServerCall (do not modify)
function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Random failure
      const isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
