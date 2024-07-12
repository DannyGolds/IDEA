let contacts = document.querySelector(".links-sidebar")
let contLk = document.getElementById("contacts")
let header = document.querySelector(".header__body")
let headerItemMenu = document.querySelector(".header__item-menu")

brg.onclick = () => {
  brg.classList.toggle("active")
  menu.classList.toggle("active")
}

headerItemMenu.addEventListener("click", addActiveClass)
function addActiveClass() {
  setElPos()
  toggleEl()
}

function setElPos() {
  contacts.style.left = contLk.getBoundingClientRect().left + "px"
  contacts.style.top = header.offsetHeight + 10 + "px"
}

function toggleEl() {
  headerItemMenu.classList.toggle("active")
  contacts.classList.toggle("active")
}

window.addEventListener("scroll", headerAdding)
function headerAdding() {
  if (window.pageYOffset > 500) {
    hdr.style.zIndex = 100
    hdr.style.position = "fixed"
  } else {
    hdr.style.position = "static"
  }
}
