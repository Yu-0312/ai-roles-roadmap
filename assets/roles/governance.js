registerRole({
  id:'governance', name:'AI 治理與合規專家', en:'AI Governance, Risk & Compliance Specialist',
  tagline:'把 EU AI Act、ISO/IEC 42001、NIST AI RMF 轉成公司內部可稽核的規則與控制措施。',
  category:'nontech', level:1, weeks:12, fit:['legal','security','biz','domain'],
  marker:{week:11, short:'投遞', label:'開始投遞'},
  overview:{
    what:'AI 治理負責人定義組織如何安全、合法、合乎倫理地使用 AI,位在合規、資安與資料策略的交會點。他們處理傳統治理沒涵蓋的 AI 特有風險(偏誤、幻覺、prompt injection、資料外洩、不透明的自動化決策),盤點公司的 AI 系統並依風險分級、指定負責人,訂定政策與控制措施並持續監控、稽核。偏法律的 AI 合規顧問則把法規轉成產品上線與否的判斷。',
    daily:['建立 AI 系統清冊,依風險分級並指定負責人','訂定 AI 使用政策與控制措施','審查新 AI 專案的風險與法規要求','與法務、資安、資料、高層協調,向董事會報告'],
    skills:['法規素養:EU AI Act、GDPR、ISO/IEC 42001、NIST AI RMF','模型生命週期的風險管理','足以質詢資料科學家的技術素養','把原則轉成可稽核的控制與證據','跨部門溝通與領導'],
    entry:'多數人來自治理、風險與合規(GRC)、資料保護或資安。隱私律師、科技交易與智財律師轉入 AI 合規特別順(The AI Career Lab 估計約 6 至 12 週自學)。沒有單一必備證照。',
    pay:'QA 引述英國約 5.7 萬至 10 萬英鎊,倫敦資深者可達 10 萬英鎊以上。The AI Career Lab 的美國 AI 合規 / 法務顧問企業內約 19.5 萬至 38.5 萬美元。皆為業者整理,僅供參考。'
  },
  stages:[
    { id:'s1', short:'法規框架', name:'階段一', title:'法規與框架', range:[1,4],
      goal:'目標:掌握四大框架的結構與重點,能判斷一個 AI 系統落在什麼風險等級。',
      output:'一份四大框架對照表(要求、適用範圍、對公司的影響)。',
      items:[
        {w:[1,1], title:'AI 基礎素養', tasks:['理解機器學習、LLM、RAG、agent 的基本運作','了解 AI 特有風險:偏誤、幻覺、prompt injection、資料外洩、黑箱決策','親手使用 AI 工具並記錄風險觀察'], accept:'能向法務同事解釋這五種風險'},
        {w:[2,2], title:'EU AI Act', tasks:['理解風險分級(禁止、高風險、有限風險、最低風險)','整理高風險系統的義務','注意分階段生效時程(部分高風險期限可能延到 2027 年底)'], accept:'能判斷三個案例的風險等級'},
        {w:[3,3], title:'ISO/IEC 42001 與 NIST AI RMF', tasks:['理解 ISO/IEC 42001 的 AI 管理系統架構','理解 NIST AI RMF 的治理、對應、衡量、管理四大功能','比較兩者適用情境'], accept:'一頁兩者比較'},
        {w:[4,4], title:'GDPR 與在地法規', tasks:['整理 GDPR 中與自動化決策相關的條文','了解你所在市場(例如台灣)的 AI 與個資相關規範','完成四大框架對照表'], accept:'一份對照表'}
      ]},
    { id:'s2', short:'風險管理', name:'階段二', title:'風險管理與治理實務', range:[5,8],
      goal:'目標:能實際建立 AI 治理機制:清冊、分級、政策、控制。',
      output:'一套模擬公司的 AI 治理文件包:清冊、風險評估、政策、控制清單。',
      items:[
        {w:[5,5], title:'AI 系統清冊', tasks:['設計清冊欄位(用途、資料、供應商、負責人、風險等級)','為一間模擬公司盤點 10 個 AI 使用情境','依風險分級'], accept:'一份 10 筆的清冊'},
        {w:[6,6], title:'風險評估', tasks:['設計 AI 風險評估問卷','對 2 個高風險情境做完整評估','提出緩解措施'], accept:'兩份風險評估'},
        {w:[7,7], title:'政策與控制', tasks:['寫 AI 使用政策(可用、禁用、需核准)','把政策轉成可稽核的控制措施與證據要求','設計第三方 AI 供應商審查表'], accept:'每條政策都有對應控制與證據'},
        {w:[8,8], title:'生命週期治理', tasks:['定義 AI 專案從提案到下架的審核點','設計監控與定期重新評估機制','設計事件通報流程'], accept:'一張生命週期治理流程圖'}
      ]},
    { id:'s3', short:'稽核認證', name:'階段三', title:'稽核與證照', range:[9,10],
      goal:'目標:理解稽核如何進行,並考慮取得一張證照(非必要,但有助轉職)。',
      output:'一份模擬稽核報告,以及證照準備計畫。',
      items:[
        {w:[9,9], title:'模擬稽核', tasks:['以 ISO/IEC 42001 或 NIST AI RMF 為準,稽核你的模擬公司','找出缺口與改善建議','寫成稽核報告'], accept:'一份含缺口與建議的報告'},
        {w:[10,10], title:'證照規劃', tasks:['比較 AIGP、ISO/IEC 42001 Lead Implementer / Auditor、ISACA AAIA 等','依你的背景選一張','開始準備並排定考試日期'], accept:'選定證照與考試日期'}
      ]},
    { id:'s4', short:'作品求職', name:'階段四', title:'作品集與求職', range:[11,12],
      goal:'目標:把治理文件包整理成作品,並找到第一個 AI 治理角色。',
      output:'去識別化的治理文件包作品、改寫後的履歷。',
      items:[
        {w:[11,11], title:'作品與履歷', tasks:['整理治理文件包為作品集','履歷強調 GRC 經驗與 AI 框架知識','開始投遞(也可從現職內部爭取 AI 治理任務)'], accept:'作品集與履歷完成'},
        {w:[12,12], title:'面試準備', tasks:['練習:判斷一個新 AI 專案能否上線','練習:向董事會說明 AI 風險','準備一個跨部門推動合規的故事'], accept:'一次完整模擬面試'}
      ]}
  ],
  resources:[
    {stage:'全程', name:'QA:How to become an AI governance lead', url:'https://www.qa.com/browse/job-roles/ai-governance-lead/', use:'職責、框架、證照清單'},
    {stage:'全程', name:'AI Governance Jobs:How to become an AI governance analyst', url:'https://www.ai-governance-jobs.com/ai-governance-career-guides/how-to-become-an-ai-governance-analyst/', use:'分析師入門路線(僅搜尋結果)'},
    {stage:'三', name:'Training Camp:What is AIGP', url:'https://trainingcamp.com/what-is-aigp/', use:'AIGP 證照說明(僅搜尋結果)'},
    {stage:'一', name:'EU AI Act、ISO/IEC 42001、NIST AI RMF 官方文件', use:'原文是最可靠的來源'}
  ],
  related:['red-team','ai-consultant','ai-pm'],
  sources:[
    {name:'QA:How to become an AI governance lead', url:'https://www.qa.com/browse/job-roles/ai-governance-lead/'},
    {name:'The AI Career Lab:The Agentic-AI Job Guide', url:'https://theaicareerlab.com/blog/agentic-ai-jobs-guide-2026/raw', note:'AI Compliance / Legal Advisor'}
  ]
});
