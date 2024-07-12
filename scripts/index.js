let contacts = document.querySelector(".links-sidebar")
let contLk = document.getElementById("contacts")
let header = document.querySelector(".header__body")
let headerItemMenu = document.querySelector(".header__item-menu")

brg.onclick = () => {
  brg.classList.toggle("active")
  menu.classList.toggle("active")
}
document.addEventListener("DOMContentLoaded", () => {
  let map = document.getElementById("map_iframe")
  setSize(document.documentElement, map, 30)
  window.addEventListener("resize", () => {
    setElPos()
    setSize(document.documentElement, map, 30)
  })
})

function setSize(doc, el, sizeRatio) {
  if (doc.offsetWidth <= 1000) {
    el.setAttribute("height", -50 + "px")
    return
  }
  el.setAttribute("width", doc.offsetWidth + "px")
  el.setAttribute(
    "height",
    parseInt(el.getAttribute("width")) * 0.01 * sizeRatio + "px"
  )
  findDiv.style.right =
    (doc.offsetWidth - document.querySelector(".container").offsetWidth) / 2 +
    "px"
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
