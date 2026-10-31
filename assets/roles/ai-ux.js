registerRole({
  id:'ai-ux', name:'AI UX 設計師 / 研究員', en:'AI UX Designer & Researcher',
  tagline:'設計使用者如何下指令、理解與修正 AI 輸出、決定何時信任,以及 AI 出錯時如何復原。',
  category:'hybrid', level:1, weeks:14, fit:['design','pm','none'],
  marker:{week:13, short:'投遞', label:'開始投遞'},
  overview:{
    what:'AI UX 設計師為會生成、預測、推薦、摘要或自動化的產品設計體驗。重點是使用者怎麼提供輸入、怎麼理解和修正輸出、何時信任結果,以及 AI 失敗時怎麼復原。AI UX 研究員則研究人們實際怎麼使用 AI 產品,包括過度信任、困惑與意料之外的使用方式。相關頭銜有 Conversation Designer、Human-AI Interaction Designer、Responsible AI Designer。',
    daily:['設計 prompt 引導、可編輯輸出、重新生成、引用來源','設計錯誤、拒答、無結果的狀態與復原路徑','研究使用者對 AI 的信任、過度依賴與修正行為','原型測試強、弱、被擋、無答案等不同輸出'],
    skills:['UX 研究、互動設計、原型、可用性測試、無障礙','AI 素養:LLM、幻覺、RAG 基礎、不確定性','對話式 UX 與輸入設計','信任與透明度設計、人工介入流程','負責任 AI:偏誤、隱私、揭露'],
    entry:'The AI Career Lab 估計:現任 UX 研究員約 6 至 10 週可轉入;認知科學與心理學背景很適合。非設計背景需先補 UX 基礎(階段一)。',
    pay:'The AI Career Lab 的 2026 年美國薪資帶:AI UX 研究員約 14.5 萬至 26 萬美元。屬業者整理,僅供參考。'
  },
  stages:[
    { id:'s1', short:'UX 基礎', name:'階段一', title:'UX 基礎', range:[1,4],
      goal:'目標:補齊 UX 基本功。已是設計師或研究員可快速複習後跳過。',
      output:'一個完整走過研究、設計、測試流程的小型案例。',
      items:[
        {w:[1,1], title:'使用者研究', tasks:['學會設計訪談大綱','訪談 3 位使用者','整理洞察(affinity map)'], accept:'一份研究洞察摘要'},
        {w:[2,2], title:'資訊架構與互動設計', tasks:['畫使用者流程','設計線框稿','學會 Figma 基本操作'], accept:'一套線框稿'},
        {w:[3,3], title:'原型與可用性測試', tasks:['做可點擊原型','對 3 人做可用性測試','依結果修改'], accept:'修改前後對照'},
        {w:[4,4], title:'無障礙與設計系統', tasks:['理解 WCAG 基本原則','檢查對比與鍵盤操作','整理元件與樣式'], accept:'原型通過基本無障礙檢查'}
      ]},
    { id:'s2', short:'AI 模式', name:'階段二', title:'AI 素養與 AI UX 模式', range:[5,8],
      goal:'目標:從使用者角度理解 AI 的行為與限制,並熟悉常見的 AI 介面模式。',
      output:'一份 AI UX 模式庫,以及一份對現有 AI 產品的體驗稽核。',
      items:[
        {w:[5,5], title:'AI 怎麼運作', tasks:['每天使用 2 到 3 種 AI 產品完成真實任務','記錄 AI 出錯、讓你困惑或過度自信的時刻','理解幻覺、context、RAG 的使用者影響'], accept:'一份 AI 失敗時刻日誌'},
        {w:[6,6], title:'輸入設計', tasks:['研究 prompt 引導、範例提示、追問設計','設計對話式介面的開場與澄清問題','比較自由輸入與結構化輸入'], accept:'一組輸入引導設計'},
        {w:[7,7], title:'輸出設計', tasks:['設計可編輯輸出、重新生成、引用來源','設計信心提示與不確定性呈現','設計回饋按鈕與回饋收集'], accept:'一份模式庫(至少 8 種模式)'},
        {w:[8,8], title:'體驗稽核', tasks:['挑一個現有 AI 產品','用模式庫逐一檢查','寫出 5 個改善建議'], accept:'一份稽核報告'}
      ]},
    { id:'s3', short:'研究信任', name:'階段三', title:'研究、信任與透明', range:[9,11],
      goal:'目標:研究人與 AI 的互動——信任、過度依賴、修正行為——並設計透明的體驗。',
      output:'一份 AI 使用者研究報告與一套信任設計方案。',
      items:[
        {w:[9,9], title:'研究非確定性系統', tasks:['設計研究:同一任務多次執行、輸出不同時使用者的反應','觀察使用者何時檢查、何時直接接受 AI 輸出','記錄心智模型'], accept:'研究計畫與至少 3 場觀察'},
        {w:[10,10], title:'信任與透明', tasks:['設計 AI 使用揭露、來源呈現、限制說明','設計人工審核點','避免過度承諾的文案'], accept:'一套信任設計方案'},
        {w:[11,11], title:'負責任 AI', tasks:['檢查偏誤、隱私、對使用者的潛在傷害','設計拒答與敏感情境的處理','寫一頁風險與對策'], accept:'一頁負責任 AI 檢查表'}
      ]},
    { id:'s4', short:'原型作品', name:'階段四', title:'原型與作品集', range:[12,14],
      goal:'目標:做出能展示判斷力的 AI 產品案例,而不只是漂亮畫面。',
      output:'2 個 AI UX 案例研究(研究、設計、測試、迭代)。',
      items:[
        {w:[12,12], title:'AI 原型', tasks:['用 Lovable、Bolt、Voiceflow 或 Figma 做可互動原型','模擬強、弱、被擋、無答案四種輸出','加入編輯與確認流程'], accept:'原型涵蓋四種輸出狀態'},
        {w:[13,13], title:'測試與案例研究', tasks:['對 3 至 5 人測試原型','依結果迭代','寫成案例研究並開始投遞'], accept:'案例研究含測試發現與修改'},
        {w:[14,14], title:'面試準備', tasks:['準備 10 分鐘作品講述','練習 AI 設計白板題(例如設計 AI 研究助理)','準備說明你如何處理 AI 失敗狀態'], accept:'一次完整模擬面試'}
      ],
      extra:{title:'作品題目(任選)', tasks:[
        '附引用來源的 AI 研究助理','AI 會議摘要與待辦追蹤','有安全護欄的 AI 醫療問診前置助理','給招募主管的 AI 助理'
      ]}}
  ],
  resources:[
    {stage:'全程', name:'BuildAIQ:How to Become an AI UX Designer', url:'https://www.buildaiq.com/blog/how-to-become-an-ai-ux-designer', use:'路線、模式與作品題目'},
    {stage:'二', name:'Conversation Design Institute:Career paths in Conversational AI', url:'https://www.conversationdesigninstitute.com/blog/what-is-a-conversation-designer', use:'對話設計職涯(僅搜尋結果)'},
    {stage:'一', name:'Figma、Maze、Dovetail 官方教學', use:'設計與研究工具'}
  ],
  related:['ai-pm','ai-trainer','governance'],
  sources:[
    {name:'BuildAIQ:How to Become an AI UX Designer', url:'https://www.buildaiq.com/blog/how-to-become-an-ai-ux-designer'},
    {name:'The AI Career Lab:The Agentic-AI Job Guide', url:'https://theaicareerlab.com/blog/agentic-ai-jobs-guide-2026/raw', note:'AI UX 研究員薪資與轉職時間'}
  ]
});
