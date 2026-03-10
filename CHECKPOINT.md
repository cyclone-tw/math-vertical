# math-vertical Checkpoint
**最後更新：** 2026-03-10 20:27 GMT+8
**GitHub：** https://github.com/cyclone-tw/math-vertical
**線上測試：** https://cyclone-tw.github.io/math-vertical/

---

## 目前狀態
已完成基本功能，正在持續 bug 修復中。

## 已完成功能
- [x] 老師設定畫面（運算類型/位數/進退位/出題數/限時/鷹架等級/TTS設定）
- [x] 四則運算出題引擎（進退位控制、除法整除）
- [x] 直式排版（CSS Grid 位值對位，個位綠/十位藍/百位橘）
- [x] 逐步引導作答模式（逐格解鎖）
- [x] 三級鷹架提示（再想想/步驟提示/完全引導）
- [x] 再想想錯2次自動升級到步驟提示
- [x] 進位格三級提示（加法/乘法）
- [x] 退位視覺化（橘色小字標示借10→XX，不劃掉原始數字）
- [x] 乘法三步驟（個位乘/十位位值概念/加總）
- [x] 動畫音效（星星/震動/彩帶/靜音開關）
- [x] TTS 語音（Web Speech API，zh-TW/zh/zh-HK fallback，語速滑桿）
- [x] 計時器（限時模式最後10秒紅色閃爍）
- [x] 放棄按鈕（確認對話框）
- [x] hadError 答錯記錄（任何格填錯即標記，正確率真實反映）
- [x] 結果報告（正確率/每題明細/✓✗標記）
- [x] CSV 下載 / 複製到 Sheets / 上傳 Sheets
- [x] Google Apps Script (gas/) + clasp 部署設定
- [x] GitHub Pages 自動部署

## 待測試 / 已知問題
- [ ] TTS 聲音：Cyclone 回報仍無聲音（Web Speech API 瀏覽器限制，待進一步測試）
- [ ] 乘除法逐步引導：完整測試未完成
- [ ] gas/ clasp 部署：Cyclone 尚未執行 clasp login 和部署流程

## 下次繼續要做的事
- Cyclone 測試後回報 bug 清單
- TTS 如果還是沒聲音，考慮改用其他方案
- 乘除法步驟引導全面測試

## 技術棧
- 純 HTML + CSS + JS（單一 index.html，約 2000+ 行）
- Google Apps Script（gas/Code.gs）
- clasp 部署工具（已安裝 v3.2.0）
- GitHub Pages（自動部署）

## 重要檔案
- `~/projects/math-vertical/index.html` — 主程式
- `~/projects/math-vertical/gas/Code.gs` — Sheets 記錄腳本
- `~/projects/math-vertical/SPEC.md` — 完整規格
- `~/projects/math-vertical/README.md` — clasp 部署說明
