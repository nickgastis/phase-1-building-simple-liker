// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const likes = document.querySelectorAll('.like-glyph')

likes.forEach((pushLike) => {
  pushLike.addEventListener('click', () => {

    if (pushLike.textContent === EMPTY_HEART) {
      mimicServerCall()
      .then(() => {
        pushLike.textContent = FULL_HEART
        pushLike.className = 'activated-heart'
      })
      .catch((error) => {
        const errMessage = document.getElementsById('modal')
        errMessage.className = ''
        errMessage.textContent = error
        setTimeout(() => {
          errMessage.className = ('hidden', 3000)
        }) 
    
      })
    } else {
      pushLike.textContent = EMPTY_HEART
      pushLike.className = 'like-glyph'
    }
    })
})

// console.log(likes)

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
