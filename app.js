let selectedType = "https://script.google.com/macros/s/AKfycbylkDxTCe7KvdDbTEQEGgE3WhdzrbxaeFe0tHCvCKW3swMhKMEJXZnrbMROMM8Y0Fs4eQ/exec";

// Показать форму при нажатии кнопок
document.getElementById("naqt-btn").addEventListener("click", () => {
  selectedType = "Naqt";
  showForm();
});

document.getElementById("karta-btn").addEventListener("click", () => {
  selectedType = "Karta";
  showForm();
});

function showForm() {
  document.getElementById("form-container").style.display = "block";
}

// Отправка данных
document.getElementById("submit-btn").addEventListener("click", () => {
  const sender = document.getElementById("sender").value;
  const recipient = document.getElementById("recipient").value;
  const amount = document.getElementById("amount").value;
  const phone = document.getElementById("phone").value;
  const region = document.getElementById("region").value;

  if (!sender || !recipient || !amount || !phone) {
    alert("Заполните все поля!");
    return;
  }

  const payload = {
    type: selectedType,
    sender,
    recipient,
    amount,
    phone,
    region,
    date: new Date().toLocaleDateString(),
    telegramId: window.Telegram.WebApp.initDataUnsafe?.user?.id || "Unknown"
  };

  // Отправка данных в Google Apps Script
  fetch("ВАШ_GOOGLE_APPS_SCRIPT_URL", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  })
    .then(response => response.json())
    .then(data => {
      alert("Данные успешно отправлены!");
      console.log(data);
      window.Telegram.WebApp.close(); // Закрыть WebApp
    })
    .catch(error => console.error("Ошибка:", error));
});
