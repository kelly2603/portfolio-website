document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_u9nppkq",
    "template_zuafdo2",
    this
  ).then(() => {
    alert("Message sent!");
    this.reset();
  }, (error) => {
    alert("Failed to send message");
  });
});