// Butona tıklandığında mesaj göster
document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("btn");
  const msg = document.getElementById("msg");

  btn.addEventListener("click", function() {
    msg.innerText = "Butona tıkladın! 🎉";
  });
});
