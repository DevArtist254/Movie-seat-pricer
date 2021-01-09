const movie = document.getElementById("movie")
const container = document.querySelector(".container")
const uiTotal = document.getElementById("total")
const uiCount = document.getElementById("count")
let value

//function
let count = 0

//select seat the clicked seat and the moive
function selectSeat(e) {
  //find the selected movie
  if (e.target.className === "seat") {
    e.target.classList.add("selected")
    addUI()
  } else if (e.target.className === "seat selected") {
    e.target.classList.remove("selected")
    removeUI()
  }
}

//the set movie
function selectedMovie(e) {
  value = e.target.value
}

function addUI() {
  ++count

  let price = count * value

  //update local storage
  localStorage.setItem("price", price)
  localStorage.setItem("count", count)

  //init our app
  updateUI()
}

function removeUI() {
  --count

  let price = count * value

  //update local storage
  localStorage.setItem("price", price)
  localStorage.setItem("count", count)

  //init our app
  updateUI()
}

//sending items to UI from the local storage
function updateUI() {
  uiTotal.innerHTML = localStorage.getItem("price")
  uiCount.innerHTML = localStorage.getItem("count")
}

//the event listener

//eventlistener for movie selected
movie.addEventListener("change", selectedMovie)

//eventlistener for clicked set
container.addEventListener("click", selectSeat)

//init our app
updateUI()
