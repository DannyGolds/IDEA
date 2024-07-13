const serviceID = "service_5jhztzi"
const templateID = "template_ldp58ue"
const mailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
const phoneRegex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/

function clearForm() {
  Array.from(document.getElementById("postForm")).forEach((i) => {
    console.log(i.value)
    if (i.tagName == "INPUT") i.value = ""
  })
}

fBtn.onclick = (ev) => {
  ev.preventDefault()
  if (
    Array.from(document.getElementById("postForm"))[1].value.match(
      phoneRegex
    ) &&
    Array.from(document.getElementById("postForm"))[2].value.match(mailRegex)
  ) {
    emailjs
      .sendForm(serviceID, templateID, document.getElementById("postForm"))
      .then((response) => {
        if (response.text == "OK") {
          notify.innerHTML = "<p>✓</p>"
          notify.classList.add("access")
          setTimeout(() => {
            notify.classList.remove("access")
          }, 5000)
        } else {
          notify.innerHTML = "<p>x</p>"
          notify.classList.add("error")
          setTimeout(() => {
            notify.classList.remove("error")
          }, 5000)
        }
        clearForm()
      })
  } else {
    alert(new Error("Введите корректные данные!"))
  }
}
