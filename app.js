// app.js

// Функция для обработки авторизации через Telegram
function onTelegramAuth(user) {
  console.log("Авторизация прошла успешно:", user);
  alert(`Добро пожаловать, ${user.first_name}!`);

  // Показываем кнопки выбора действия
  document.getElementById('naqt-btn').style.display = 'inline-block';
  document.getElementById('karta-btn').style.display = 'inline-block';
}

// Обработка нажатия на кнопки "Naqt" и "Karta"
document.getElementById('naqt-btn').addEventListener('click', function() {
  showForm('Naqt');
});

document.getElementById('karta-btn').addEventListener('click', function() {
  showForm('Karta');
});

function showForm(type) {
  // Показываем форму
  document.getElementById('form-container').style.display = 'block';

  // Обработчик нажатия кнопки отправки данных
  document.getElementById('submit-btn').addEventListener('click', function() {
    const sender = document.getElementById('sender').value;
    const recipient = document.getElementById('recipient').value;
    const amount = document.getElementById('amount').value;
    const phone = document.getElementById('phone').value;
    const region = document.getElementById('region').value;

    // Отправка данных в Google Sheets
    fetch('https://script.google.com/macros/s/AKfycbylkDxTCe7KvdDbTEQEGgE3WhdzrbxaeFe0tHCvCKW3swMhKMEJXZnrbMROMM8Y0Fs4eQ/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sender, recipient, amount, phone, region, type
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log("Данные отправлены в Google Sheets:", data);
      alert('Данные успешно отправлены');
    })
    .catch(err => {
      console.error('Ошибка при отправке данных:', err);
      alert('Ошибка при отправке данных');
    });
  });
}
