const username = prompt("What is your name?")

const startApp = () => {
  let randomNumber = Math.floor(Math.random() * 10) + 1
  alert(`Welcome ${username}`)



  let userNumber = prompt("Please enter a number?")

  if (userNumber == randomNumber) {
    alert(`Congratulations move to level two`)
    randomNumber = Math.floor(Math.random() * 10) + 1
    userNumber = prompt("Please enter a number?")


    if (userNumber == randomNumber) {
      alert(`Congratulations you are done`)
    } else {
      alert(`Wrong number you failed`)
    }
  } else {
    alert(`Wrong number you failed`)
  }
}


startApp()