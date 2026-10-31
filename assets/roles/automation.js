registerRole({
  id:'automation', name:'AI 自動化專家', en:'AI Automation Specialist / Workflow Engineer',
  tagline:'用 n8n、Zapier、Make 等工具加上 AI,重新設計流程、串接系統、減少手動工作。',
  category:'hybrid', level:1, weeks:12, fit:['none','biz','ops','domain','data'],
  marker:{week:11, short:'投遞', label:'開始投遞或接案'},
  overview:{
    what:'AI 自動化專家設計並建置結合 AI 與自動化的工作流程,用來減少手動工作、串接系統、清理資料與分派資訊。重點是重新設計商業流程,而不只是寫 prompt 或開發軟體。常見頭銜包括 AI Workflow Designer、AI Operations Specialist、Automation Consultant。Box 執行長也提到「內部自動化工程師」是公司兩年前還沒有的職位。',
    daily:['盤點流程:觸發、輸入、輸出、決策、瓶頸','在自動化平台建立流程,加入 AI 節點','處理資料驗證、錯誤與重試','寫文件、教使用者、追蹤成效'],
    skills:['流程盤點與工作流設計','一個自動化平台(n8n、Zapier、Make、Power Automate)','可重複使用的 prompt 設計','資料清理、欄位對應、驗證','進階:API、webhook、JSON、基礎 Python 或 JavaScript'],
    entry:'技術門檻最低的路線之一,行政、營運、業務、行銷、人資等任何熟悉流程的人都適合。先把一個平台學深,比每個都碰一點有用。',
    pay:'公開薪資資料不足,本站不列數字。這類工作也常以專案形式接案。'
  },
  stages:[
    { id:'s1', short:'流程盤點', name:'階段一', title:'流程盤點', range:[1,2],
      goal:'目標:自動化之前先看懂流程。很多失敗的自動化,問題出在沒先想清楚流程。',
      output:'三張流程圖(含前後對照)與一份自動化機會清單。',
      items:[
        {w:[1,1], title:'流程圖', tasks:['挑 3 個你熟悉的重複性工作','畫出觸發、輸入、輸出、系統、決策、審核、瓶頸','估算每個流程每週花多少時間'], accept:'三張流程圖'},
        {w:[2,2], title:'找機會', tasks:['標出哪些步驟適合規則、哪些適合 AI、哪些需要人','依「節省時間 × 容易做 × 出錯代價」排序','選一個流程當第一個專案'], accept:'一份有排序的機會清單'}
      ]},
    { id:'s2', short:'自動化平台', name:'階段二', title:'學深一個自動化平台', range:[3,5],
      goal:'目標:把一個平台學到能處理分支、排程、錯誤。建議 n8n(可自架、彈性高)或 Zapier(上手最快)。',
      output:'一個不含 AI、但穩定可靠的自動化流程。',
      items:[
        {w:[3,3], title:'基本操作', tasks:['觸發、動作、篩選','串接 Google Sheets、Gmail、Slack 或 Notion','完成第一個端到端流程'], accept:'流程能自動跑完一次'},
        {w:[4,4], title:'邏輯與排程', tasks:['分支(router)、迴圈、排程','webhook 觸發','變數與資料轉換'], accept:'能依條件走不同路徑'},
        {w:[5,5], title:'錯誤處理', tasks:['設定失敗通知','重試與錯誤分支','記錄每次執行結果'], accept:'故意給錯資料時流程不會默默失敗'}
      ]},
    { id:'s3', short:'AI 節點', name:'階段三', title:'加入 AI 與資料品質', range:[6,8],
      goal:'目標:在流程中「刻意」放 AI——摘要、分類、擷取、草擬、評分——規則能做的就用規則。',
      output:'一個含 AI 節點、輸出結構化、有驗證機制的流程。',
      items:[
        {w:[6,6], title:'AI 節點', tasks:['在流程中加入摘要或分類步驟','要求 AI 輸出固定 JSON 格式','比較 AI 與規則在同一步驟的表現'], accept:'AI 輸出能被下一步驟直接使用'},
        {w:[7,7], title:'資料品質', tasks:['定義必填欄位與驗證規則','去重檢查','AI 輸出不合格時轉人工'], accept:'錯誤資料不會流進下游系統'},
        {w:[8,8], title:'測試與文件', tasks:['準備 20 筆測試資料跑一輪','記錄準確率與失敗案例','寫使用說明與維護文件'], accept:'一份測試結果與操作文件'}
      ]},
    { id:'s4', short:'技術延伸', name:'階段四', title:'技術延伸', range:[9,10],
      goal:'目標:補上 API 與基礎程式能力,處理平台內建功能做不到的事。',
      output:'一個透過 HTTP 請求呼叫外部 API 或 AI API 的流程,以及一段自訂程式碼節點。',
      items:[
        {w:[9,9], title:'API 與 JSON', tasks:['理解 HTTP 方法、標頭、驗證(API key、OAuth)','在流程中直接呼叫一個沒有內建整合的 API','處理限流與分頁'], accept:'成功串接一個無內建整合的服務'},
        {w:[10,10], title:'程式與 agent', tasks:['在流程中寫一段 JavaScript 或 Python 處理資料','了解 RAG 與 AI agent 在自動化中的用法','做一個能查資料再回答的小 agent'], accept:'自訂程式碼節點能正常運作'}
      ]},
    { id:'s5', short:'作品集', name:'階段五', title:'作品集與定位', range:[11,12],
      goal:'目標:用成果說話——減少多少手動時間、資料變多乾淨、流程快多少。',
      output:'3 個作品案例(含流程圖、邏輯、AI 步驟、測試、成效)。',
      items:[
        {w:[11,11], title:'作品案例', tasks:['從題目清單挑 2 個做完整作品(見下方)','每個作品附流程圖、AI 步驟說明、測試結果、成效數字','錄 2 分鐘 demo 影片'], accept:'作品有前後成效數字'},
        {w:[12,12], title:'定位與投遞', tasks:['履歷寫成果(節省幾小時、錯誤減少多少)','投遞或在接案平台上架服務','準備現場示範一個流程'], accept:'至少 5 個投遞或潛在客戶'}
      ],
      extra:{title:'作品題目清單(任選)', tasks:[
        '潛在客戶表單 → AI 評分 → 分派業務 → 自動追蹤',
        '應徵履歷 → AI 分類 → 產生摘要給招募者',
        '客服工單 → AI 摘要與分類 → 分派到正確團隊',
        '會議紀錄 → 待辦事項 → 寫入專案管理工具',
        '發票或收據 → AI 擷取欄位 → 寫入財務表'
      ]}}
  ],
  resources:[
    {stage:'全程', name:'BuildAIQ:How to Become an AI Automation Specialist', url:'https://www.buildaiq.com/blog/how-to-become-an-ai-automation-specialist', use:'路線、工具與作品題目'},
    {stage:'二', name:'n8n、Zapier、Make 官方教學', use:'自動化平台'},
    {stage:'四', name:'Anthropic Academy:Claude with the Anthropic API', url:'https://anthropic.skilljar.com/claude-with-the-anthropic-api/287794', use:'直接呼叫 AI API'}
  ],
  related:['ai-consultant','agent-engineer','ai-pm'],
  sources:[
    {name:'BuildAIQ:How to Become an AI Automation Specialist', url:'https://www.buildaiq.com/blog/how-to-become-an-ai-automation-specialist'},
    {name:'Let\'s Data Science:Companies Identify 20 Agentic AI Jobs for 2026', url:'https://letsdatascience.com/news/companies-identify-20-agentic-ai-jobs-for-2026-598e685f', note:'內部自動化工程師'}
  ]
});
