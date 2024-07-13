const serviceID = "service_5jhztzi"
const templateID = "template_ldp58ue"

fBtn.onclick = (ev) => {
  let templateParams = {
    from_name: document.getElementById("name").value,
    from_tel: document.getElementById("number").value,
    from_mail: document.getElementById("mail").value,
  }
  ev.preventDefault()
  emailjs
    .send(serviceID, templateID, templateParams)
    .then((result, error) => {
      console.log(result)
      document.getElementById("name").value = ""
      document.getElementById("number").value = ""
      document.getElementById("mail").value = ""
      if (result.text == "OK") {
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
    })
    .catch((error) => {
      alert("К сожаления произошла ошибка!" + error.name)
    })
}
