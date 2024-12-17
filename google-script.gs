function doPost(e) {
    var sheet = SpreadsheetApp.openById("1iBOWIRxqHPuqaEk2n0X0TIwpS1HtSTs-702MYtArobs").getSheetByName("Spisok");
    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([new Date(), data.sender, data.receiver, data.amount, data.phone, data.region]);
    return ContentService.createTextOutput(JSON.stringify({ result: 'success' }));
}

