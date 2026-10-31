registerRole({
  id:'ai-pm', name:'AI 產品經理', en:'AI Product Manager',
  tagline:'定義 AI 功能該做什麼、不該做什麼,用評估標準與商業指標決定能不能上線。',
  category:'hybrid', level:2, weeks:16, fit:['pm','engineer','design','biz'],
  marker:{week:14, short:'投遞', label:'開始投遞'},
  overview:{
    what:'AI 產品經理決定一個 AI 功能做什麼、不做什麼,哪裡需要人工審核,評估標準是什麼,以及怎麼上線。和一般 PM 最大的差別,是要從「確定性」思維轉成「機率性」思維:同一個輸入可能得到不同輸出,所以需要評估、錯誤處理與信任設計。',
    daily:['判斷一個問題該不該用 AI、用哪種架構(API、RAG、微調)','估算 token 成本與毛利','和工程一起訂評估標準,連結到商業指標','處理法規、隱私與上線風險'],
    skills:['傳統 PM 能力:探索、排序、規格','機率性思維與架構取捨(API / RAG / 微調 / 小模型)','評估素養:golden dataset、LLM-as-judge','AI UX:不確定性呈現、人工介入、回饋','法規與隱私:EU AI Act、資料流向'],
    entry:'The AI Career Lab 估計:現任 PM 約 4 至 8 週可轉入,主要靠作品;技術型 PM 最快,設計師也能轉。',
    pay:'The AI Career Lab 的 2026 年美國薪資帶:大公司底薪約 18.5 萬至 32 萬美元加股票;新創約 16 萬至 24 萬美元加股權。屬業者整理,僅供參考。',
    prereq:'有產品、專案或業務經驗會比較順;沒有的話,建議同時補一般產品管理基礎(例如讀 Continuous Discovery Habits)。'
  },
  stages:[
    { id:'s1', short:'技術素養', name:'階段一', title:'技術素養與機率性思維', range:[1,4],
      goal:'目標:能和 AI 工程師講同一種語言,理解不同架構在延遲、成本、準確度上的取捨。不需要會寫模型,但要自己動手用過。',
      output:'一份文件:針對一個商業問題(例如客服自動化)比較三種架構並說明取捨。',
      items:[
        {w:[1,1], title:'LLM 是怎麼運作的', tasks:['理解 token、context window、幻覺、temperature','親手用 2 種模型做同一個任務並比較','整理 5 種模型常犯的錯'], accept:'能用非技術語言解釋為什麼 AI 會錯'},
        {w:[2,2], title:'架構選項', tasks:['理解 API、RAG、微調(LoRA/PEFT)、小模型各自適合的情境','用無程式碼工具(或簡單腳本)做一個 RAG 原型','比較有無 RAG 的回答差異'], accept:'能說出何時該用 RAG、何時該微調'},
        {w:[3,3], title:'延遲、成本、準確度', tasks:['理解首字延遲(TTFT)與 token 用量','試算一個功能每月的 API 成本','找出降低成本的方法(快取、小模型)'], accept:'一份成本試算表'},
        {w:[4,4], title:'架構比較文件', tasks:['選一個商業問題','比較三種架構的成本、延遲、品質、風險','寫出建議與理由'], accept:'一頁可交給工程團隊討論的文件'}
      ]},
    { id:'s2', short:'機會探索', name:'階段二', title:'機會探索與可行性評估', range:[5,8],
      goal:'目標:判斷哪些問題值得用 AI 解,以及自建、購買或組合的決策。',
      output:'一份「自建 vs 購買」建議書,含 token 成本預估與單位經濟。',
      items:[
        {w:[5,5], title:'問題探索', tasks:['讀 Continuous Discovery Habits','訪談 3 位使用者,找出重複、耗時、可容錯的工作','判斷哪些適合 AI、哪些用規則就好'], accept:'一份機會清單與排序理由'},
        {w:[6,6], title:'AI 產品畫布', tasks:['用 AI Product Canvas 評估:做對的價值 vs 做錯的代價','定義「可接受的錯誤率」','找出需要人工審核的環節'], accept:'每個機會都有錯誤代價評估'},
        {w:[7,7], title:'自建、購買、組合', tasks:['比較自建、買現成工具、組合 API 的優缺點','比較自架 GPU 與按次計費 API 的成本','考慮向量資料庫等周邊成本'], accept:'一份單位經濟試算(每用戶、每次互動)'},
        {w:[8,8], title:'建議書', tasks:['寫一頁「自建 vs 購買」建議書','附 token 成本預估與毛利影響','請工程或財務背景的朋友挑戰你的假設'], accept:'建議書經過一次外部挑戰並修正'}
      ]},
    { id:'s3', short:'UX評估', name:'階段三', title:'AI UX、評估系統與迭代', range:[9,12],
      goal:'目標:設計能處理不確定性的體驗,並用評估驅動開發。這是 AI PM 與一般 PM 最大的差異。',
      output:'一份評估方案:至少 3 個自動指標 + 人工評估計畫,並連結到商業 KPI。',
      items:[
        {w:[9,9], title:'不確定性的體驗', tasks:['設計如何呈現不確定性(引用來源、信心提示)','設計失敗時的降級與求助路徑','設計使用者回饋收集'], accept:'一份 AI 功能的錯誤狀態設計'},
        {w:[10,10], title:'評估驅動開發', tasks:['建立 golden dataset 並設定基準','選擇自動指標或 LLM-as-judge','把模型指標連到商業 KPI'], accept:'評估方案含至少 3 個自動指標'},
        {w:[11,11], title:'上線前紅隊', tasks:['用 Promptfoo 對原型做 prompt injection 與邊界測試','整理風險並決定哪些必須修','設計人工審核與回報流程'], accept:'一份上線前風險清單'},
        {w:[12,12], title:'寫 AI 功能規格', tasks:['寫一份完整 AI 功能 PRD:目標、非目標、評估標準、人工介入點','把 prompt 當作規格的一部分','定義上線與回滾條件'], accept:'工程師讀完能直接開工'}
      ]},
    { id:'s4', short:'治理求職', name:'階段四', title:'治理、領導與求職', range:[13,16],
      goal:'目標:理解法規與隱私如何影響架構,並把成果整理成作品集。',
      output:'一份 AI 風險評估、一個完整 AI 產品案例作品集、改寫後的履歷。',
      items:[
        {w:[13,13], title:'法規與隱私', tasks:['讀 EU AI Act 摘要,判斷你的產品風險等級','整理哪些資料會送到外部供應商','了解 SOC 2、HIPAA 對架構的影響'], accept:'一頁 AI 風險評估(法規、隱私、UX 各一項風險)'},
        {w:[14,14], title:'作品集', tasks:['把前面的文件整理成 1 至 2 個完整案例','每個案例寫問題、決策、評估、結果','開始投遞'], accept:'作品集能在 5 分鐘內讀完'},
        {w:[15,15], title:'產品設計題', tasks:['練習 AI 產品設計題(例如設計一個 AI 客服)','練習 AI 指標題(這個 AI 功能怎麼衡量成功)','練習取捨題(準確度 vs 延遲 vs 成本)'], accept:'每題都能講到評估與錯誤代價'},
        {w:[16,16], title:'技術與行為面試', tasks:['準備向面試官解釋 RAG 與微調差異','準備一個推動跨部門(工程、法務)決策的故事','模擬一次完整面試'], accept:'一次完整模擬與回饋'}
      ]}
  ],
  resources:[
    {stage:'全程', name:'KDnuggets:The Roadmap to Becoming an AI Product Manager in 2026', url:'https://kdnuggets.com/the-roadmap-to-becoming-an-ai-product-manager-in-2026', use:'四階段路線與推薦書單'},
    {stage:'一', name:'Hands-On Large Language Models(Alammar & Grootendorst)', use:'LLM 技術素養'},
    {stage:'二', name:'Continuous Discovery Habits(Teresa Torres)', use:'產品探索方法'},
    {stage:'三', name:'Designing Machine Learning Systems(Chip Huyen)', use:'ML 系統與評估'},
    {stage:'三', name:'Ragas、Braintrust、Promptfoo', use:'評估與紅隊工具'}
  ],
  related:['ai-ux','ai-consultant','eval-engineer','governance'],
  sources:[
    {name:'KDnuggets:The Roadmap to Becoming an AI Product Manager in 2026', url:'https://kdnuggets.com/the-roadmap-to-becoming-an-ai-product-manager-in-2026'},
    {name:'The AI Career Lab:The Agentic-AI Job Guide', url:'https://theaicareerlab.com/blog/agentic-ai-jobs-guide-2026/raw', note:'AI PM 薪資與轉職時間'}
  ]
});
