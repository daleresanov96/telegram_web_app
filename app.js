document.getElementById('naqt').addEventListener('click', () => {
    const formHTML = `
        <form id="naqt-form">
            <input type="text" name="sender" placeholder="Имя отправителя" required>
            <input type="text" name="receiver" placeholder="Имя получателя" required>
            <input type="number" name="amount" placeholder="Сумма" required>
            <input type="text" name="phone" placeholder="Телефон" required>
            <input type="text" name="region" placeholder="Регион" value="Самарканд" required>
            <button type="submit">Отправить</button>
        </form>
    `;
    document.getElementById('form-container').innerHTML = formHTML;
});

document.getElementById('karta').addEventListener('click', () => {
    const formHTML = `
        <form id="karta-form">
            <input type="text" name="sender" placeholder="Имя отправителя" required>
            <input type="text" name="receiver" placeholder="Имя получателя" required>
            <input type="number" name="amount" placeholder="Сумма" required>
            <input type="text" name="phone" placeholder="Телефон" required>
            <input type="text" name="region" placeholder="Регион" value="Самарканд" required>
            <button type="submit">Отправить</button>
        </form>
    `;
    document.getElementById('form-container').innerHTML = formHTML;
});

// Обработка отправки формы (сохранение данных в Google Sheets)
document.getElementById('naqt-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    saveDataToGoogleSheets(data);
});

document.getElementById('karta-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    saveDataToGoogleSheets(data);
});

function saveDataToGoogleSheets(data) {
    fetch('https://script.google.com/macros/s/your-script-id/exec', {
        method: 'POST',
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
        alert('Данные успешно сохранены!');
    })
    .catch(error => {
        alert('Произошла ошибка при сохранении данных.');
    });
}

