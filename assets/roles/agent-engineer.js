registerRole({
  id:'agent-engineer', name:'AI Agent 工程師', en:'Agentic AI Engineer / AI Agent Architect',
  tagline:'設計會自己規劃、呼叫工具、協調子代理的 AI 系統,並確保它可靠、可評估。',
  category:'tech', level:3, weeks:14, fit:['engineer'],
  marker:{week:13, short:'投遞', label:'開始投遞'},
  overview:{
    what:'Agent 工程師打造能「做事」而不只是「回答」的 AI 系統:模型會規劃步驟、呼叫工具、在多個子代理之間分工,並記住狀態。資深一級的 Agent 架構師則負責決定哪些部分該用工具、哪些該用子代理、哪些該是固定流程,以及在哪裡加入人工審核。',
    daily:['設計 agent 的工具、記憶與控制流程','決定哪些步驟用確定性程式、哪些交給模型判斷','建立評估框架,衡量 agent 是否真的完成任務','處理成本、延遲、安全與失敗回復'],
    skills:['Python 或 TypeScript、後端與雲端','至少一種 agent 框架(LangGraph、OpenAI Agents SDK、smolagents 等)','工具設計、MCP、狀態與記憶管理','評估設計、可觀測性','架構師層級:分散式系統、成本模型、安全設計'],
    entry:'The AI Career Lab 估計:後端工程師約 2 至 4 個月可轉入,ML 工程師約 1 至 2 個月;新鮮人若有強的公開 agent 專案也有機會。架構師通常需要 8 年以上後端、系統或 ML 平台經驗。',
    pay:'The AI Career Lab 的 2026 年美國薪資帶:Agentic AI 工程師底薪約 18.5 萬至 32 萬美元;Agent 架構師底薪約 26 萬至 42 萬美元,另有股票。屬業者整理,僅供參考。',
    prereq:'建議先完成「AI 工程師」路線的階段一、二,或已能用 LLM API 做出 RAG 與工具呼叫。'
  },
  stages:[
    { id:'s1', short:'Agent 基礎', name:'階段一', title:'Agent 基礎', range:[1,3],
      goal:'目標:不用框架、從零寫出一個 agent 迴圈,真正理解它怎麼運作,再來比較框架。',
      output:'一個純 Python 寫成、能呼叫 3 個工具的 agent,以及一份「工作流 vs agent」的取捨筆記。',
      items:[
        {w:[1,1], title:'Agent 迴圈', tasks:['讀 Anthropic 的 agent 設計指引,理解 workflow 與 agent 的差別','不用框架寫出「思考 → 呼叫工具 → 觀察 → 再思考」的迴圈','設定最大步數與停止條件'], accept:'agent 不會無限迴圈'},
        {w:[2,2], title:'工具設計', tasks:['設計 3 個工具並寫清楚描述與參數','處理工具錯誤、逾時與參數驗證','觀察工具描述寫法如何影響模型選擇'], accept:'工具描述改寫後,誤用率下降'},
        {w:[3,3], title:'常見模式', tasks:['實作 prompt chaining、routing、parallelization','實作 orchestrator-workers 與 evaluator-optimizer','寫下每種模式適合的情境'], accept:'一份五種模式的比較筆記'}
      ]},
    { id:'s2', short:'工具記憶', name:'階段二', title:'工具、記憶與框架', range:[4,6],
      goal:'目標:讓 agent 能接上真實系統、記住狀態,並學會一個主流框架。',
      output:'一個用框架重寫、接上 MCP server 與長期記憶的 agent。',
      items:[
        {w:[4,4], title:'MCP 與整合', tasks:['寫一個 MCP server 暴露一個資料來源','讓 agent 透過 MCP 使用它','處理驗證與權限範圍'], accept:'在真實 MCP client 中跑通'},
        {w:[5,5], title:'記憶與狀態', tasks:['區分短期(對話)與長期(使用者偏好、任務紀錄)記憶','用資料庫或向量庫存長期記憶','處理 context 過長:摘要與裁剪'], accept:'agent 跨對話記得使用者偏好'},
        {w:[6,6], title:'框架', tasks:['選一個框架(LangGraph 或 OpenAI Agents SDK)重寫階段一的 agent','比較自寫與框架的程式量、除錯難度','學會用框架的 tracing 功能'], accept:'寫下「何時不需要框架」的結論'}
      ]},
    { id:'s3', short:'多代理架構', name:'階段三', title:'多代理與架構設計', range:[7,9],
      goal:'目標:學會拆分子代理、設計人工審核點,並估算成本。這是 Agent 架構師的核心能力。',
      output:'一份多代理系統架構文件(含成本估算與人工審核點)與對應實作。',
      items:[
        {w:[7,7], title:'子代理與交接', tasks:['設計一個協調者 + 2 個專責子代理的系統','實作子代理之間的交接(handoff)','比較單一 agent 與多代理的成功率與成本'], accept:'有單一與多代理的數字比較'},
        {w:[8,8], title:'人工審核與安全', tasks:['在高風險動作前加入人工確認','限制工具權限(唯讀、白名單)','測試 prompt injection 透過工具結果攻擊 agent'], accept:'高風險動作一定經過確認'},
        {w:[9,9], title:'成本與延遲', tasks:['估算每次任務的 token 與費用','用快取、小模型、平行化降低成本與延遲','寫一份架構文件,說明哪些部分刻意不用 agent'], accept:'架構文件含成本估算'}
      ]},
    { id:'s4', short:'評估可靠', name:'階段四', title:'評估與可靠性', range:[10,12],
      goal:'目標:證明 agent 真的能完成任務。評估 agent 比評估單次回答難,要看整條軌跡與最終結果。',
      output:'一套 agent 評估框架:任務集、成功判定、軌跡分析與回歸測試。',
      items:[
        {w:[10,10], title:'任務型評估', tasks:['建立 30 個以上有明確成功條件的任務','衡量任務成功率、步數、成本','分類失敗原因(選錯工具、參數錯、提早放棄)'], accept:'有一份失敗原因分佈'},
        {w:[11,11], title:'軌跡分析與回歸', tasks:['記錄並檢視完整執行軌跡','把每次失敗加入回歸測試集','改進一次後重跑,比較前後成功率'], accept:'成功率有可量化的改善'},
        {w:[12,12], title:'上線準備', tasks:['加入重試、逾時、降級(fallback)策略','設定監控與告警','寫事故處理手冊'], accept:'模擬工具故障時系統能優雅降級'}
      ]},
    { id:'s5', short:'作品求職', name:'階段五', title:'作品集與求職', range:[13,14],
      goal:'目標:一個在真實領域「會採取行動」的 agent 作品,而不是聊天機器人。',
      output:'公開 repo(含評估數據與失敗模式)、demo、履歷。',
      items:[
        {w:[13,13], title:'作品整理', tasks:['README 列出準確率、失敗模式與對應處理、單次成本與延遲','錄一段 demo','在 README 引用你參考的 agent 設計指引'], accept:'作品有可驗證的數字'},
        {w:[14,14], title:'面試準備', tasks:['練習 agent 系統設計:何時用 agent、何時用固定流程','準備說明一次 agent 失敗與你的修正','開始投遞'], accept:'能在 45 分鐘內完成一題 agent 架構設計'}
      ]}
  ],
  resources:[
    {stage:'一', name:'Anthropic:Building effective agents(路線指引)', url:'https://codesignal.com/learn/paths/building-effective-agents-claude-python', use:'workflow 與 agent 的模式(此為 CodeSignal 依該指引設計的課程)'},
    {stage:'二', name:'Anthropic Academy:Claude with the Anthropic API', url:'https://anthropic.skilljar.com/claude-with-the-anthropic-api/287794', use:'tool use 與 agent 基礎'},
    {stage:'二~五', name:'AI FDE 作品集四個專案', url:'https://deepsunai.substack.com/p/the-4-portfolio-projects-every-ai', use:'agent 與 MCP 專案驗收標準'}
  ],
  related:['ai-engineer','eval-engineer','fde','automation'],
  sources:[
    {name:'The AI Career Lab:The Agentic-AI Job Guide', url:'https://theaicareerlab.com/blog/agentic-ai-jobs-guide-2026/raw', note:'薪資與轉職時間'},
    {name:'Let\'s Data Science:Companies Identify 20 Agentic AI Jobs for 2026', url:'https://letsdatascience.com/news/companies-identify-20-agentic-ai-jobs-for-2026-598e685f'},
    {name:'Deepsun AI:The 4 portfolio projects for AI FDE candidates', url:'https://deepsunai.substack.com/p/the-4-portfolio-projects-every-ai'}
  ]
});
