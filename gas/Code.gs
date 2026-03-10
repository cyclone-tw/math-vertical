function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('答題記錄');

    if (!sheet) {
      sheet = ss.insertSheet('答題記錄');
      sheet.appendRow([
        '學生姓名', '日期時間', '運算類型', '位數設定',
        '進退位', '題目', '學生答案', '正確答案', '結果', '用時(秒)'
      ]);
    }

    sheet.appendRow([
      data.studentName,
      data.dateTime,
      data.operation,
      data.digitConfig,
      data.carryConfig,
      data.problem,
      data.studentAnswer,
      data.correctAnswer,
      data.result,
      data.timeTaken
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
