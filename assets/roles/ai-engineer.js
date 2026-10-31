registerRole({
  id:'ai-engineer', name:'AI 工程師', en:'AI Engineer / LLM Application Engineer',
  tagline:'用現成的大型語言模型與 AI 工具打造產品功能:RAG、工具呼叫、評估與上線。',
  category:'tech', level:2, weeks:16, fit:['engineer','data'],
  marker:{week:14, short:'投遞', label:'開始投遞'},
  overview:{
    what:'AI 工程師主要是「應用」既有的預訓練模型與 AI 工具來解決問題,而不是從零訓練模型(roadmap.sh 的定義)。日常是把 LLM 接進產品:設計 prompt 與結構化輸出、建 RAG 檢索、讓模型呼叫工具、用評估確認品質,最後部署並監控成本與延遲。',
    daily:['把 LLM API 整合進產品功能','設計檢索流程(RAG)與資料前處理','寫評估集與回歸測試,比較 prompt 或模型版本','監控上線後的品質、延遲與成本'],
    skills:['Python(或 TypeScript)、API 開發、SQL','LLM API、prompt、結構化輸出、tool use','RAG、向量資料庫、LangChain 等框架','Evals、可觀測性、基礎雲端部署','加分:PyTorch 與模型微調基礎'],
    entry:'最常見的是後端或全端工程師轉入;資料科學家與 ML 工程師也很順。完全新手建議先補程式基礎,第一階段會花比較久。',
    pay:'LinkedIn 2026 年快速成長職位榜,AI 工程師連續第二年排名第一,常見技能為 LangChain、RAG、PyTorch,職缺集中在舊金山、紐約、達拉斯。薪資各公司差異大,本站不列數字。',
    prereq:'能寫基本程式(任一語言),知道什麼是 API 與 JSON。完全沒寫過程式的話,第一階段建議延長到 6 至 8 週。'
  },
  stages:[
    { id:'s1', short:'程式基礎', name:'階段一', title:'程式與資料基礎', range:[1,4],
      goal:'目標:能用 Python 寫出可測試、可部署的小型 API 服務。已有後端經驗可直接跳到階段二。',
      output:'一個用 FastAPI 寫成、連接資料庫、有測試、可用 Docker 啟動的小型服務。',
      items:[
        {w:[1,1], title:'Python 實務', tasks:['熟悉型別提示、虛擬環境、套件管理','用 pytest 寫單元測試','練習讀寫 JSON 與處理例外'], accept:'一個有測試的 Python 小專案'},
        {w:[2,2], title:'API 開發', tasks:['用 FastAPI 寫 CRUD API','加入輸入驗證(Pydantic)','用 httpx 呼叫外部 API 並處理逾時與重試'], accept:'API 文件頁可正常開啟並測試'},
        {w:[3,3], title:'資料與 SQL', tasks:['PostgreSQL 基本查詢、join、索引','用 SQLAlchemy 或類似工具連接資料庫','用 pandas 做資料清理'], accept:'服務能讀寫資料庫'},
        {w:[4,4], title:'Git、Docker 與部署', tasks:['Git 分支與 PR 流程','寫 Dockerfile 並用 docker compose 啟動服務與資料庫','部署到任一雲端或 PaaS'], accept:'有一個公開網址可呼叫的 API'}
      ]},
    { id:'s2', short:'LLM 應用', name:'階段二', title:'LLM 應用開發', range:[5,9],
      goal:'目標:掌握 LLM 應用的四大積木:prompt 與結構化輸出、RAG、工具呼叫、評估。每週一個可執行的小專案。',
      output:'五個小專案:prompt 實驗、文件問答、RAG 改良版、工具呼叫助理、評估腳本。',
      items:[
        {w:[5,5], title:'LLM 基礎與 prompt', tasks:['理解 token、context window、temperature 的影響','用 Claude 或 OpenAI API 做結構化輸出(JSON schema)','整理 3 種模型會失敗的情況(幻覺、格式錯、拒答)'], accept:'能重現並解釋 3 種失敗案例'},
        {w:[6,6], title:'Embedding 與向量搜尋', tasks:['理解 embedding 與相似度','用 pgvector 或 Chroma 建索引','比較不同切塊大小對結果的影響'], accept:'一份切塊策略比較紀錄'},
        {w:[7,7], title:'RAG', tasks:['做一個文件問答,每個回答附來源','加入混合搜尋(關鍵字 + 向量)','加入 re-ranking 並比較前後差異'], accept:'回答都能點到來源段落'},
        {w:[8,8], title:'工具呼叫', tasks:['讓模型呼叫 2 個以上工具(例如查資料庫、查天氣)','處理工具失敗與參數錯誤','了解 MCP 的基本概念'], accept:'工具失敗時模型會說明而不是亂答'},
        {w:[9,9], title:'評估入門', tasks:['建立 30 至 50 題的測試集','用規則檢查 + LLM-as-judge 評分','改一次 prompt,比較前後分數'], accept:'有改動前後的數字對比'}
      ]},
    { id:'s3', short:'生產化', name:'階段三', title:'生產化與進階', range:[10,13],
      goal:'目標:把原型變成能長期運作的服務:可觀測、可控成本、安全,並理解何時需要微調。',
      output:'一個加上監控、快取、guardrails 的 RAG 服務,以及一份成本與延遲報告。',
      items:[
        {w:[10,10], title:'可觀測性', tasks:['記錄每次呼叫的 prompt、回應、延遲、token 數','用 Langfuse、LangSmith 或自建表格追蹤','設定錯誤率與延遲告警'], accept:'能查到任一次呼叫的完整紀錄'},
        {w:[11,11], title:'成本與效能', tasks:['加入回應快取','用小模型處理簡單請求、大模型處理困難請求(路由)','串流輸出改善體感速度'], accept:'一份成本與延遲前後比較'},
        {w:[12,12], title:'安全與 guardrails', tasks:['了解 prompt injection 與資料外洩風險','加入輸入過濾與輸出檢查','處理個資遮罩'], accept:'能擋下 3 種常見 prompt injection'},
        {w:[13,13], title:'微調與模型選擇', tasks:['理解何時用 prompt、RAG、微調','用 LoRA 微調一個小型開源模型(可用免費 Colab)','比較微調前後在測試集上的分數'], accept:'寫出「這個任務是否值得微調」的結論'}
      ]},
    { id:'s4', short:'作品求職', name:'階段四', title:'作品集與求職', range:[14,16],
      goal:'目標:把前面的成果整合成一個完整專案,並準備面試。面試常考實作、LLM 系統設計與評估思維,不只是演算法。',
      output:'一個完整上線的 AI 應用、一頁式作品集、改寫後的履歷。',
      items:[
        {w:[14,14], title:'整合作品', tasks:['選一個熟悉的領域做完整 AI 應用(例如客服助理、合約問答)','整合 RAG、工具呼叫、評估與監控','部署並準備 demo 網址'], accept:'別人能用網址實際操作'},
        {w:[15,15], title:'作品集與履歷', tasks:['README 寫清楚問題、架構、評估結果、失敗與修正','履歷每項經歷附數字(準確率、延遲、成本)','開始投遞'], accept:'作品集一頁讀完能懂'},
        {w:[16,16], title:'面試準備', tasks:['練習 LLM 系統設計題(例如設計企業文件問答)','準備說明 RAG 與微調的取捨','練習在 45 分鐘內完成一個小型 LLM 實作題'], accept:'能完整講完一題系統設計'}
      ]}
  ],
  resources:[
    {stage:'全程', name:'roadmap.sh:AI Engineer Roadmap', url:'https://roadmap.sh/ai-engineer', use:'完整主題地圖與專案題目'},
    {stage:'二', name:'Anthropic Academy:Claude with the Anthropic API', url:'https://anthropic.skilljar.com/claude-with-the-anthropic-api/287794', use:'LLM API、tool use'},
    {stage:'二', name:'DeepLearning.AI:Building and Evaluating Advanced RAG', url:'https://aiagentrank.io/learn/course/deeplearning-ai-building-evaluating-advanced-rag', use:'RAG 與評估'},
    {stage:'三', name:'AI FDE 作品集四個專案(含微調與 MCP 驗收標準)', url:'https://deepsunai.substack.com/p/the-4-portfolio-projects-every-ai', use:'微調、MCP 專案設計'}
  ],
  related:['agent-engineer','eval-engineer','llmops','fde'],
  sources:[
    {name:'Dice:AI-related Jobs Top LinkedIn\'s Fastest-growing Roles List for 2026', url:'https://www.dice.com/career-advice/ai-related-jobs-top-linkedins-fastest-growing-roles-list-for-2026'},
    {name:'roadmap.sh:AI Engineer', url:'https://roadmap.sh/ai-engineer'},
    {name:'Analytics Vidhya:What is a Forward Deployed Engineer(AI 技能堆疊部分)', url:'https://www.analyticsvidhya.com/blog/2026/08/what-is-a-forward-deployed-engineer/'}
  ]
});
