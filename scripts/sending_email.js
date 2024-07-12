const serviceID = "service_5jhztzi"
const templateID = "template_ldp58ue"

fBtn.onclick = (ev) => {
  let templateParams = {
    from_name: document.getElementById("name").value,
    from_tel: document.getElementById("number").value,
    from_mail: document.getElementById("mail").value,
  }
  ev.preventDefault()
  emailjs.send(serviceID, templateID, templateParams).then((result, error) => {
    result ? console.log("Wow, ", result) : console.log("Bang, ", error)
    console.log(templateParams)
  })
}
