# math-vertical 數學直式練習工具

## 部署 Google Apps Script（答題記錄後端）

### 前置需求

- 安裝 [clasp](https://github.com/google/clasp)：`npm install -g @google/clasp`
- Google 帳號：（填入你的 Google 帳號）

### 步驟

#### 1. 登入 clasp

```bash
clasp login
```

在瀏覽器中授權 Google 帳號。

#### 2. 建立 Google Sheets 試算表

1. 前往 [Google Sheets](https://sheets.google.com) 建立新的試算表
2. 從網址列複製試算表 ID（`https://docs.google.com/spreadsheets/d/<試算表ID>/edit`）

#### 3. 建立 Apps Script 專案

```bash
cd gas
clasp create --type sheets --title 'math-vertical-recorder' --rootDir .
```

執行完成後會產生 `.clasp.json`，內含 `scriptId`。

#### 4. 綁定試算表

編輯 `gas/.clasp.json`，確認 `scriptId` 正確（clasp create 完成後會自動填入）。

#### 5. 推送程式碼

```bash
clasp push
```

如果提示要啟用 Apps Script API，前往 https://script.google.com/home/usersettings 開啟。

#### 6. 部署 Web App

```bash
clasp deploy --description "v1"
```

記錄輸出的 Deployment ID。然後前往 Apps Script 編輯器：

```bash
clasp open
```

在編輯器中：「部署」→「管理部署作業」→ 確認存取權限為「所有人」。

取得 Web App URL，格式為：
```
https://script.google.com/macros/s/<DEPLOYMENT_ID>/exec
```

#### 7. 設定前端

將 Web App URL 填入 `index.html` 老師設定區的「Google Sheets URL」欄位。

### 測試

#### 健康檢查

```bash
curl "https://script.google.com/macros/s/<DEPLOYMENT_ID>/exec"
# 回傳: {"status":"ok"}
```

#### 送出答題記錄

```bash
curl -X POST "https://script.google.com/macros/s/<DEPLOYMENT_ID>/exec" \
  -H "Content-Type: application/json" \
  -d '{
    "studentName": "測試學生",
    "dateTime": "2026-03-10 10:00:00",
    "operation": "加法",
    "digitConfig": "2位數+2位數",
    "carryConfig": "有進位",
    "problem": "45+37",
    "studentAnswer": "82",
    "correctAnswer": "82",
    "result": "正確",
    "timeTaken": 15
  }'
# 回傳: {"success":true}
```
