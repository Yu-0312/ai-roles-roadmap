registerRole({
  id:'fde', name:'FDE 前線部署工程師', en:'Forward Deployed Engineer',
  tagline:'嵌入客戶團隊,在客戶的真實環境裡寫程式、把產品(尤其是 AI)落地上線。',
  category:'hybrid', level:3, weeks:20, fit:['engineer','data','biz'],
  marker:{week:17, short:'投遞', label:'開始投遞'},
  overview:{
    what:'FDE 是嵌入客戶團隊、在客戶真實環境裡寫程式並把產品上線的工程師。與顧問的關鍵差異是「交付後誰對系統負責」:顧問交付建議,FDE 交付能持續在線上運作的程式。這個角色由 Palantir 發展成型,後來 OpenAI、Anthropic、Databricks、Scale AI 等公司也採用類似模式。',
    daily:['和客戶一起釐清模糊需求、定義範圍','用客戶的真實資料快速做原型','在客戶系統中整合、部署、除錯','訓練客戶團隊接手,並把共通需求回饋給產品團隊'],
    skills:['Python(約六成以上職缺要求)、TypeScript','SQL、資料管線、REST API、OIDC/SAML 驗證','RAG、Agent、MCP、Evals','需求探索、問題拆解、向非技術者溝通'],
    entry:'多數人從後端或全端工程轉入,證明自己能處理客戶對話後即可轉換。早期新創工程師、動手做的解決方案架構師、資料或 ML 工程師也是常見來源。',
    pay:'美國公開報導:Palantir FDSE 約 17 萬至 30 萬美元;前沿 AI 公司中階約 35 萬至 45 萬美元,資深可達 50 萬至 60 萬美元以上。出差比例約 20% 至 50%。'
  },
  stages:[
    { id:'s1', short:'工程基礎', name:'階段一', title:'工程基礎', range:[1,5],
      goal:'目標:能獨立寫出「能連外部系統、處理髒資料、可部署」的 Python 服務。已有後端或 DevOps 經驗可跳過,提早 4 至 5 週。',
      output:'一個「資料同步服務」——從公開 API 拉資料、清洗後寫入 PostgreSQL、對外提供查詢 API,以 Docker 部署,含錯誤處理與重試。',
      items:[
        {w:[1,1], title:'Python 與 Git', tasks:['用 Python 寫一個 CLI 工具','學會 Git 分支與 PR 流程','把專案推上 GitHub,補上 README 與測試'], accept:'一個有 README 與測試的 GitHub repo'},
        {w:[2,2], title:'SQL 與資料處理', tasks:['用 PostgreSQL 練習 join 與 window function','用 pandas 清洗一份髒 CSV','寫出 10 支對應真實商業問題的查詢'], accept:'10 支查詢都附上它回答的商業問題'},
        {w:[3,3], title:'API 與整合', tasks:['呼叫 REST API,處理分頁、限流、重試','用 FastAPI 寫自己的 API','串接一個第三方 API 並做好容錯'], accept:'第三方 API 掛掉時,服務不會整個崩潰'},
        {w:[4,4], title:'驗證與企業環境', tasks:['理解 OAuth2 / OIDC / SAML 基本概念','實作一次 OAuth 登入','能口頭解釋 token 流程'], accept:'能用白板講清楚一次登入的流程'},
        {w:[5,5], title:'容器與雲端', tasks:['把服務 Docker 化','部署到 AWS 或 GCP 任一平台','加入基本日誌與監控'], accept:'有公開網址可存取的服務'}
      ]},
    { id:'s2', short:'AI/LLM', name:'階段二', title:'AI / LLM 應用能力', range:[6,11],
      goal:'目標:不只會把 LLM 接起來,還能證明它「真的有用」。多篇路線文章都把評估(evals)視為最能拉開差距的項目。每週產出一個可執行的小程式資料夾,最後在階段四組合。',
      output:'每週一個小專案資料夾(prompt 測試、RAG、agent、eval、MCP server、風險清單)。',
      items:[
        {w:[6,6], title:'LLM API 與 Prompt', tasks:['用 Claude 或 OpenAI API 做結構化輸出、tool use、串流','理解幻覺與 context 限制','寫一支 prompt 測試腳本,呈現失敗案例'], accept:'腳本能重現至少 3 種失敗案例'},
        {w:[7,7], title:'RAG', tasks:['比較不同切塊策略','用 pgvector 建向量索引(和階段一的 PostgreSQL 接軌)','加入混合搜尋與 re-ranking'], accept:'每個回答都附來源段落'},
        {w:[8,8], title:'Agent', tasks:['實作迭代迴圈與工具呼叫','整理何時用確定性流程、何時交給 LLM 判斷','做一個能處理例外的多步驟 agent'], accept:'agent 遇到工具失敗時能回報而不是亂答'},
        {w:[9,9], title:'Evals', tasks:['自建 golden dataset','建立每次改動都會跑的回歸測試','用 LLM-as-judge 或 Ragas 指標評分'], accept:'有「改動前後」的數字對比'},
        {w:[10,10], title:'MCP 與工具整合', tasks:['寫一個 MCP server','加入驗證、輸入檢查、錯誤處理','在真實 MCP client 跑通'], accept:'錯誤輸入與驗證失敗都有處理並展示'},
        {w:[11,11], title:'可觀測性與安全', tasks:['記錄 trace、成本與延遲','加入 guardrails、人工覆核與稽核紀錄','寫一頁風險與緩解清單'], accept:'一頁寫得清楚的風險與緩解清單'}
      ]},
    { id:'s3', short:'客戶面', name:'階段三', title:'客戶面能力', range:[9,14], note:'與階段二平行',
      goal:'目標:多數工程師最容易忽略、卻最常決定面試結果的部分。每個練習都要「出聲」並錄音,不能只看文章。',
      output:'數份一頁式「模糊需求轉技術規格」文件,以及數次錄音過的 discovery 訪談。',
      items:[
        {w:[9,9], title:'需求探索(一)', tasks:['讀完 The Mom Test','找朋友扮演不給明確規格的客戶,錄音練習 30 分鐘 discovery 訪談','寫一頁「模糊需求轉技術規格」'], accept:'訪談中問的是「過去的行為」,不是「你希望什麼」'},
        {w:[10,10], title:'需求探索(二)', tasks:['重聽錄音,標出自己太早提案的地方','再做一次訪談並比較差異','練習問:誰在用、完成的標準、過去失敗經驗、答錯的代價'], accept:'提案前至少問完上述四類問題'},
        {w:[11,11], title:'問題拆解', tasks:['15 分鐘內把「物流公司交貨一直晚」拆成指標、資料來源、假設與 MVP','再練兩題不同情境','寫一頁規格'], accept:'能提出「最小可行版本」並說明取捨'},
        {w:[12,12], title:'向非技術者溝通', tasks:['用一句話解釋「為什麼 LLM 會錯」','用一句話說明「為什麼這個功能不該做」','練習對客戶說「不」'], accept:'請非技術朋友聽完能複述重點'},
        {w:[13,13], title:'交付與交接', tasks:['寫一份狀態更新','寫一份失敗報告','寫一份讓客戶自己能維運的文件'], accept:'客戶不靠你也能照文件操作'},
        {w:[14,14], title:'綜合模擬', tasks:['完整 60 分鐘模擬:discovery、方案、取捨','請人給具體回饋並記錄','列出下一輪要改進的三件事'], accept:'有回饋紀錄與改進清單'}
      ]},
    { id:'s4', short:'作品集', name:'階段四', title:'作品集與實戰專案', range:[12,18],
      goal:'目標:用一個有真實感的專案,產出三件作品:上線的 agent、評估套件、影子部署報告。選你熟悉的領域(例如發票對帳、保單理賠、客服工單),接進真實感的文件或資料。',
      output:'一頁式作品集,每個專案寫清楚「客戶問題、我的判斷、數字結果、失敗與修正」。',
      items:[
        {w:[12,12], title:'選題與規劃', tasks:['選定熟悉領域與真實感的文件或資料','寫下客戶問題與成功指標','列出會用到階段二的哪些技術'], accept:'一頁專案提案'},
        {w:[13,13], title:'作品一:建 agent', tasks:['實作 tool use 與對真實資料的檢索','加入錯誤處理','提供 API 或整合介面'], accept:'功能可從外部呼叫'},
        {w:[14,14], title:'作品一:上線', tasks:['實際部署(不是 notebook)','準備 demo 網址','補上 README'], accept:'有可訪問的 demo 網址與 README'},
        {w:[15,15], title:'作品二:評估套件(上)', tasks:['建立 golden dataset','建立每次改動都會跑的回歸測試'], accept:'回歸測試可一鍵執行'},
        {w:[16,16], title:'作品二:評估套件(下)', tasks:['整理失敗模式清單','做一次「評估抓到退步」的前後比較'], accept:'失敗模式清單與前後數字'},
        {w:[17,17], title:'作品三:影子部署報告', tasks:['在模擬真實流量下與現有流程對比品質、成本、延遲','寫分階段上線計畫'], accept:'2 至 3 頁、非工程師看得懂的報告'},
        {w:[18,18], title:'作品集整理', tasks:['在 GitHub 與個人網站整理一頁式作品集','每個專案寫「客戶問題、判斷、結果、失敗與修正」','練習 10 分鐘內講完一個專案'], accept:'10 分鐘內能講完一個專案'}
      ],
      extra:{title:'支線專案(選 2 個即可)', tasks:[
        'RAG:對企業文件做混合搜尋與 re-ranking,以 Ragas 測 faithfulness、answer relevancy、context precision,公開 re-ranking 前後分數',
        'MCP server:把 RAG 索引包成 MCP server,展示驗證失敗與錯誤輸入的處理',
        '微調:用 LoRA/QLoRA 微調小型開源模型,與「直接 prompt」和「RAG」比較,寫出何時值得微調'
      ]}},
    { id:'s5', short:'求職面試', name:'階段五', title:'求職與面試準備', range:[17,20],
      goal:'目標:FDE 面試不像一般軟體工程,演算法難題不是重點,問題拆解與客戶情境才是。投遞時優先看員工 11 至 200 人的公司,對沒有 FDE 頭銜的人較開放(DEV Community 引用的分析約 58% 的 FDE 職缺在此規模)。',
      output:'改寫後的履歷、5 個 STAR 故事、至少 6 次案例題模擬紀錄。',
      items:[
        {w:[17,17], title:'履歷與投遞', tasks:['把履歷從「做了什麼」改成「客戶遇到什麼問題、我怎麼判斷、結果怎樣」','列出 10 間目標公司(含員工 11 至 200 人的公司)','開始投遞'], accept:'履歷每項經歷都有數字結果'},
        {w:[18,18], title:'案例題', tasks:['本週至少模擬兩次案例題','先問清楚誰會用、完成的標準、答錯的代價','提出最小可行版本並講取捨'], accept:'兩次模擬都有錄音與自評'},
        {w:[19,19], title:'作品集講述與行為題', tasks:['10 分鐘講完一個專案','準備 5 個 STAR 故事:主導權、模糊情境、難溝通的利害關係人、失敗與學習','找人模擬行為題'], accept:'5 個故事各能在 2 分鐘內講完'},
        {w:[20,20], title:'技術深入與公司研究', tasks:['準備 RAG 與微調的取捨、guardrails、evals 設計','準備系統設計中的營運面向','閱讀目標公司產品文件與公開案例;Anthropic 類職位另需熟悉其安全立場'], accept:'能解釋「怎麼衡量這個部署是否有效」'}
      ]}
  ],
  tables:[{
    title:'各公司 FDE 面試流程',
    head:['公司','流程重點','優先準備'],
    rows:[
      ['Palantir','三輪各 60 分鐘現場面試,題型含拆解、學習陌生程式碼、重構除錯、系統設計;行為題穿插每輪','拆解題、讀陌生程式碼、系統化除錯'],
      ['OpenAI','約 3 至 5 週;案例、客戶同理與商業判斷約占一半','商業判斷、重新框架問題'],
      ['Anthropic(第三方整理)','技術電話面試、3 至 4 小時實作、客戶對話模擬、虛擬現場','用 Claude API 做小型應用、discovery 對話、評估設計、安全與部署風險'],
      ['通用流程','招募者電話、約 5 小時 take-home、技術深入、案例題、行為題','案例題通過率最低,值得多練']
    ],
    note:'以上為網路上的第三方說法,實際流程以職缺為準。'
  }],
  resources:[
    {stage:'一', name:'Python、SQL、Docker 官方文件', use:'工程基礎,選自己熟悉的平台即可'},
    {stage:'二', name:'Anthropic Academy:Claude with the Anthropic API', url:'https://anthropic.skilljar.com/claude-with-the-anthropic-api/287794', use:'LLM API、tool use、代理概念'},
    {stage:'二', name:'DeepLearning.AI:Building and Evaluating Advanced RAG', url:'https://aiagentrank.io/learn/course/deeplearning-ai-building-evaluating-advanced-rag', use:'RAG 與評估指標'},
    {stage:'二、四', name:'AI FDE 作品集四個專案', url:'https://deepsunai.substack.com/p/the-4-portfolio-projects-every-ai', use:'Agent、RAG、微調、MCP 的驗收標準'},
    {stage:'三', name:'The Mom Test', url:'https://momtestbook.com/', use:'客戶訪談與需求探索'},
    {stage:'三', name:'Palantir:Dev versus Delta', url:'https://blog.palantir.com/dev-versus-delta-demystifying-engineering-roles-at-palantir-ad44c2a6e87', use:'理解 FDE 與產品工程師的分工'},
    {stage:'五', name:'Techinterview.org:FDE 面試實際考什麼', url:'https://www.techinterview.org/post/3233477236/forward-deployed-engineer-interview/?format=md', use:'面試題型與評分重點'}
  ],
  related:['ai-engineer','agent-engineer','ai-consultant'],
  sources:[
    {name:'DataCamp:What is a Forward Deployed Engineer', url:'https://www.datacamp.com/blog/what-is-forward-deployed-engineer'},
    {name:'Analytics Vidhya:What is a Forward Deployed Engineer', url:'https://www.analyticsvidhya.com/blog/2026/08/what-is-a-forward-deployed-engineer/'},
    {name:'DEV Community:How to become a Forward Deployed Engineer', url:'https://dev.to/pickuma/how-to-become-a-forward-deployed-engineer-ais-most-in-demand-hybrid-role-211j'},
    {name:'DEV Community:How do you become an FDE in 2026', url:'https://dev.to/manduks/how-do-you-become-a-forward-deployed-engineer-2026-2l8p'},
    {name:'Hashnode:The complete 2026 guide to the FDE', url:'https://hashnode.com/blog/a-complete-guide-to-the-forward-deployed-engineer', note:'作者為 Bug0 共同創辦人'},
    {name:'Techinterview.org:What the FDE interview really tests', url:'https://www.techinterview.org/post/3233477236/forward-deployed-engineer-interview/?format=md'},
    {name:'Perspective AI:Anthropic applied AI engineer interview process', url:'https://getperspective.ai/blog/anthropic-applied-ai-engineer-interview-process-frontier-lab-2026', note:'廠商部落格'},
    {name:'Palantir Blog:Dev versus Delta', url:'https://blog.palantir.com/dev-versus-delta-demystifying-engineering-roles-at-palantir-ad44c2a6e87'}
  ]
});
