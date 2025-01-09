document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // منع الإرسال الافتراضي للنموذج

    // عرض رسالة تأكيد
    const successMessage = document.createElement("p");
    successMessage.textContent = "Thank you! Your booking has been received.";
    successMessage.style.color = "green";
    successMessage.style.fontWeight = "bold";

    // إخفاء النموذج وإظهار الرسالة
    form.style.display = "none";
    form.parentNode.appendChild(successMessage);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("qQQWF7ncSYKLJ5Whz"); // استبدل YOUR_USER_ID بمعرف المستخدم الخاص بك

  const form = document.getElementById("bookingForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // منع الإرسال الافتراضي للنموذج

    // جمع البيانات من النموذج
    const formData = {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      date: document.getElementById("date").value,
    };

    // إرسال البيانات عبر EmailJS
    emailjs.send("service_fist37f", "template_7xdt26k", formData)
      .then(() => {
        alert("Your booking has been sent successfully!");
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        alert("There was an error sending your booking.");
      });
  });
});
