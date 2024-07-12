;(function () {
  emailjs.init({
    publicKey: "bTKXYHZT7dJxrYq1A",
  })
})()
function notify(e) {
  e.preventDefault()
  emailjs
    .send("service_tqreypl", "template_ldp58ue", {
      from_name: document.getElementById("name").value,
      from_tel: document.getElementById("number").value,
      from_mail: document.getElementById("mail").value,
    })
    .then((res) => {
      alert("Успешно!" + res)
    })
}
