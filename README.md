# AI 新興職位學習地圖

12 個因 AI 而興起或大幅成長的職位,每個都有從入門到上手的互動學習路線:可勾選任務、自動記住進度、設定開始日期後標示「本週」、依背景篩選職位。

純靜態網站,不需要建置,直接放上 GitHub Pages 即可。

## 職位

FDE 前線部署工程師、AI 工程師、AI Agent 工程師、AI 評估工程師、LLMOps / AI 維運工程師、AI 產品經理、AI 顧問 / 策略師、AI 自動化專家、AI UX 設計師 / 研究員、AI 訓練師 / 資料標註專家、AI 紅隊 / AI 安全工程師、AI 治理與合規專家。

## 部署到 GitHub Pages

1. 把整個資料夾的內容 push 到 repo 根目錄。
2. Settings → Pages → Source 選 **Deploy from a branch**,Branch 選 `main`、資料夾 `/ (root)`。
3. 網址為 `https://<帳號>.github.io/<repo>/`。

## 檔案結構

```
index.html              首頁:職位總覽、背景篩選、比較表
role.html               職位頁(role.html?r=<職位 id>)
assets/style.css        樣式(含深色模式)
assets/app.js           共用程式
assets/roles/*.js       各職位內容,一個職位一個檔案
```

## 新增或修改職位

複製 `assets/roles/fde.js` 改內容,再到 `index.html` 和 `role.html` 各加一行 `<script>`。

注意:任務的勾選紀錄以「階段 id + 項目順序 + 任務順序」記錄,調整既有任務的順序會讓已勾選的進度對不上,新增任務請加在最後。

## 進度儲存

進度只存在訪客自己瀏覽器的 localStorage(`ai-roles:<職位 id>`),不會上傳。首頁可匯出、匯入全部進度。

## 資料來源與免責

內容整理自 2026 年 10 月可取得的公開文章與職缺分析,各頁底部列有來源。薪資與比例多來自非官方統計或業者部落格,僅供參考。
