registerRole({
  id:'red-team', name:'AI 紅隊 / AI 安全工程師', en:'AI Red Teamer / AI Security & Trust and Safety',
  tagline:'像駭客一樣攻擊 AI 系統,在上線前找出 prompt injection、越獄、資料外洩等漏洞。',
  category:'tech', level:2, weeks:14, fit:['security','engineer','domain'],
  marker:{week:12, short:'投遞', label:'開始投遞'},
  overview:{
    what:'AI 紅隊模擬對 AI 系統(尤其是 LLM)的攻擊,在上線前找出弱點,可以想成把滲透測試套用到模型上。相關的 AI 信任與安全負責人(Trust & Safety Lead)則制定 AI 產品的使用政策、設計審核機制、帶紅隊演練並負責濫用事件的應變。',
    daily:['測試 prompt injection 與越獄','探測偏誤、歧視與有害輸出','嘗試擷取訓練資料或系統 prompt','撰寫含嚴重程度與修補建議的漏洞報告'],
    skills:['Python 撰寫測試腳本','LLM 基礎:tokenization、context window、system prompt','OWASP LLM Top 10 與 MITRE ATLAS','紅隊工具:PyRIT、Garak、Promptfoo','對抗性思維、技術寫作、領域知識'],
    entry:'資安背景(滲透測試、應用安全)最順。非技術背景可先從 AI 安全評估員入門。信任與安全職位則適合社群或消費平台的 T&S 人員轉入。目前沒有公認必備的證照,作品比證書重要。',
    pay:'The AI Career Lab 的 2026 年美國薪資帶:AI 信任與安全負責人約 17.5 萬至 30 萬美元。屬業者整理,僅供參考。'
  },
  stages:[
    { id:'s1', short:'基礎', name:'階段一', title:'資安與 LLM 基礎', range:[1,3],
      goal:'目標:理解 LLM 怎麼運作,以及傳統資安思維怎麼套用到 AI。已有資安背景可加快。',
      output:'一份筆記:LLM 應用的資料流與信任邊界圖。',
      items:[
        {w:[1,1], title:'LLM 運作原理', tasks:['理解 transformer、tokenization、context window 的基本概念','理解 system prompt、使用者訊息、工具結果的差別','用 API 做一個簡單的聊天機器人'], accept:'能畫出 prompt 組成的示意圖'},
        {w:[2,2], title:'資安基礎', tasks:['複習威脅建模(STRIDE 或類似方法)','理解注入攻擊、權限提升、資料外洩','寫 Python 腳本批次送出測試輸入'], accept:'一個可批次測試的腳本'},
        {w:[3,3], title:'LLM 應用的攻擊面', tasks:['畫出一個 RAG + 工具呼叫應用的資料流','標出所有不受信任的輸入(使用者、文件、網頁、工具結果)','列出可能的攻擊點'], accept:'一張資料流與信任邊界圖'}
      ]},
    { id:'s2', short:'攻擊面', name:'階段二', title:'攻擊手法與框架', range:[4,6],
      goal:'目標:系統性學習已知的 AI 攻擊手法與分類框架。',
      output:'一份對照 OWASP LLM Top 10 的攻擊手法筆記與範例。',
      items:[
        {w:[4,4], title:'OWASP LLM Top 10', tasks:['逐項閱讀 OWASP LLM Top 10','每一項寫一個具體攻擊範例','寫出對應的防禦方法'], accept:'十項都有範例與防禦'},
        {w:[5,5], title:'MITRE ATLAS', tasks:['閱讀 MITRE ATLAS 的戰術與技術','對照傳統 ATT&CK 理解差異','挑 3 個案例研究深入閱讀'], accept:'能用 ATLAS 描述一次攻擊'},
        {w:[6,6], title:'越獄與間接注入', tasks:['在自建的練習應用上測試越獄手法','測試間接 prompt injection(透過文件或網頁)','測試從 agent 工具結果發動的攻擊'], accept:'在自己的應用上成功重現 3 種攻擊'}
      ]},
    { id:'s3', short:'工具實戰', name:'階段三', title:'工具與實戰', range:[7,10],
      goal:'目標:熟練自動化紅隊工具,並對自建或公開允許測試的目標做系統化測試。只測試你有權限的系統。',
      output:'對一個自建 LLM 應用的完整紅隊報告。',
      items:[
        {w:[7,7], title:'Garak', tasks:['安裝並對一個模型 API 執行 Garak','理解各類 probe 與偵測器','整理結果'], accept:'一份 Garak 掃描結果摘要'},
        {w:[8,8], title:'PyRIT 與 Promptfoo', tasks:['用 PyRIT 執行多輪攻擊','用 Promptfoo 寫紅隊測試設定','比較三種工具的適用情境'], accept:'一份工具比較筆記'},
        {w:[9,9], title:'偏誤與有害內容', tasks:['設計偏誤與歧視探測題','測試有害內容與敏感情境','記錄結果與嚴重程度'], accept:'一份偏誤測試結果'},
        {w:[10,10], title:'完整演練', tasks:['對自建的 RAG + agent 應用做完整紅隊','寫漏洞報告:重現步驟、嚴重程度、修補建議','修補後重測'], accept:'報告含修補前後結果'}
      ]},
    { id:'s4', short:'防禦政策', name:'階段四', title:'防禦與政策', range:[11,11],
      goal:'目標:從攻擊者轉到防守方視角,並理解信任與安全的政策面。',
      output:'一份 guardrails 設計與一份 AI 使用政策草案。',
      items:[
        {w:[11,11], title:'防禦與政策', tasks:['設計輸入過濾、輸出檢查、權限限制等多層防禦','寫一份 AI 產品可接受使用政策草案','設計濫用事件的應變流程'], accept:'一份多層防禦設計與政策草案'}
      ]},
    { id:'s5', short:'作品求職', name:'階段五', title:'作品集與求職', range:[12,14],
      goal:'目標:用真實發現建立作品集。文章建議作品比證照更有說服力。',
      output:'公開的紅隊報告作品集(去除敏感細節)、開源貢獻、履歷。',
      items:[
        {w:[12,12], title:'作品集', tasks:['整理 2 至 3 份結構化漏洞報告','公開你的測試腳本與方法論','開始投遞(非技術背景可先投 AI 安全評估員)'], accept:'作品集公開可讀'},
        {w:[13,13], title:'開源與社群', tasks:['對 Garak、Promptfoo 或開源評估框架貢獻一個 PR','參與公開的 AI 紅隊活動或 CTF','分享一篇技術文章'], accept:'一個已送出的 PR 或文章'},
        {w:[14,14], title:'面試準備', tasks:['練習現場對一個 LLM 應用做威脅建模','準備說明一次你發現的漏洞與修補','準備回答負責任揭露的問題'], accept:'一次完整模擬面試'}
      ]}
  ],
  resources:[
    {stage:'全程', name:'GUVI:What is an AI Red Teamer', url:'https://www.guvi.in/blog/what-is-an-ai-red-teamer/', use:'職責、工具、學習路線'},
    {stage:'二', name:'OWASP Top 10 for LLM Applications', use:'攻擊分類(請搜尋 OWASP GenAI 官方網站)'},
    {stage:'二', name:'MITRE ATLAS', use:'AI 攻擊戰術與案例(請搜尋 MITRE ATLAS 官方網站)'},
    {stage:'三', name:'PyRIT(Microsoft)、Garak(NVIDIA)、Promptfoo', use:'紅隊工具,於 GitHub 搜尋專案名稱'}
  ],
  related:['eval-engineer','governance','ai-trainer'],
  sources:[
    {name:'GUVI:What is an AI Red Teamer', url:'https://www.guvi.in/blog/what-is-an-ai-red-teamer/'},
    {name:'The AI Career Lab:The Agentic-AI Job Guide', url:'https://theaicareerlab.com/blog/agentic-ai-jobs-guide-2026/raw', note:'AI Trust & Safety Lead'},
    {name:'QA:How to become an AI governance lead', url:'https://www.qa.com/browse/job-roles/ai-governance-lead/', note:'AI 特有風險:prompt injection、資料外洩'}
  ]
});
