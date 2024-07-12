emailjs.init({
  publicKey: "bTKXYHZT7dJxrYq1A",
  // Do not allow headless browsers
  blockHeadless: true,
  limitRate: {
    // Set the limit rate for the application
    id: "app",
    // Allow 1 request per 10s
    throttle: 10000,
  },
})

function notify() {
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
