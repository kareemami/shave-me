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
