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

const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));