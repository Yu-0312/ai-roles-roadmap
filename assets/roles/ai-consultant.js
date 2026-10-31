registerRole({
  id:'ai-consultant', name:'AI 顧問 / 策略師', en:'AI Consultant & Strategist',
  tagline:'把「我們需要 AI」轉成具體的商業問題,規劃導入路線、工具選擇、教育訓練與治理。',
  category:'hybrid', level:1, weeks:12, fit:['biz','pm','domain','none'],
  marker:{week:10, short:'接案', label:'開始找客戶或投遞'},
  overview:{
    what:'AI 顧問協助個人與組織有效使用 AI,範圍包括策略、流程重設計、工具選擇、教育訓練、自動化與治理。核心工作是把模糊的「我們需要 AI」轉成具體商業問題,再判斷 AI 是否適合、適合放在哪裡。BuildAIQ 的一句話很精準:壞的 AI 顧問從工具開始,好的 AI 顧問從問題開始。',
    daily:['訪談客戶,盤點流程與痛點','用優先順序矩陣挑選導入案例','比較工具、評估風險、規劃路線圖','帶教育訓練工作坊,寫政策與文件'],
    skills:['AI 素養:生成式 AI、LLM、prompt、輸出評估','流程分析與使用案例辨識','客戶訪談、引導、變革管理','隱私、資安與負責任 AI 意識','進階:自動化、API、RAG、ROI 模型'],
    entry:'業務、顧問、PM、各領域專家(人資、行銷、財務等)都適合,技術門檻相對低。選定一個產業或職能當利基,比通才更容易接到案子。',
    pay:'LinkedIn 2026 年快速成長職位榜上,AI 顧問與策略師名列前茅,常見技能為 LLM、MLOps、電腦視覺,招募集中在舊金山、紐約、波士頓。獨立接案收入差異大,本站不列數字。'
  },
  stages:[
    { id:'s1', short:'AI 素養', name:'階段一', title:'AI 素養與定位', range:[1,3],
      goal:'目標:建立實用的 AI 素養(包含限制與風險),並選定你的利基。',
      output:'一份個人定位說明:服務對象、解決的問題、你的優勢。',
      items:[
        {w:[1,1], title:'生成式 AI 實作', tasks:['每天用 ChatGPT、Claude 或 Gemini 完成一件真實工作','整理 AI 擅長與不擅長的工作類型','學會評估 AI 輸出:事實、格式、偏誤'], accept:'一份「適合 / 不適合 AI」清單'},
        {w:[2,2], title:'進階概念', tasks:['理解 RAG、agent、自動化的基本概念與差異','了解資料隱私與企業使用 AI 的常見風險','試用一個無程式碼自動化工具(例如 Zapier 或 n8n)'], accept:'能向非技術主管解釋這三個概念'},
        {w:[3,3], title:'選定利基', tasks:['依產業、職能、公司規模或工具生態選一個利基','列出這個利基最常見的 5 個痛點','寫一頁定位說明'], accept:'定位說明能在 30 秒內講完'}
      ]},
    { id:'s2', short:'診斷', name:'階段二', title:'診斷與流程分析', range:[4,6],
      goal:'目標:學會結構化的診斷方法,找到真正值得做的案例。',
      output:'一份訪談問卷、一份流程稽核範例、一份使用案例優先順序矩陣。',
      items:[
        {w:[4,4], title:'訪談問卷', tasks:['設計涵蓋目標、流程、手動工作、資料、工具、團隊準備度、風險、預算的問卷','找一位朋友或同事實際訪談','修正問卷'], accept:'問卷經過一次實測'},
        {w:[5,5], title:'流程盤點', tasks:['畫出一個流程的觸發、輸入、輸出、決策、瓶頸','標出可用 AI 的步驟(摘要、分類、擷取、草擬)','畫出導入前後對照圖'], accept:'一張前後對照流程圖'},
        {w:[6,6], title:'優先順序矩陣', tasks:['用價值、可行性、複雜度、風險、成本、時程、資料需求評分','挑出 2 至 3 個優先案例','估算預期效益(節省工時、錯誤減少)'], accept:'一份有評分依據的矩陣'}
      ]},
    { id:'s3', short:'交付物', name:'階段三', title:'交付物與方法', range:[7,9],
      goal:'目標:建立一套可重複的交付流程與範本,讓服務可以定價、可以擴大。',
      output:'AI 導入路線圖範本、教育訓練簡報、AI 使用政策範本。',
      items:[
        {w:[7,7], title:'路線圖與工具建議', tasks:['寫一份 AI 策略路線圖範例(短、中、長期)','做一份工具比較表','加入風險評估與成功指標'], accept:'路線圖每一項都有負責人與指標'},
        {w:[8,8], title:'教育訓練', tasks:['設計一場 90 分鐘的 AI 工作坊','做一份 prompt 範例庫與品質評分標準','實際試講一次並收回饋'], accept:'工作坊回饋表'},
        {w:[9,9], title:'治理與政策', tasks:['寫一份中小企業 AI 使用政策範本','列出資料分級與禁止事項','了解你的市場適用的法規(例如 EU AI Act)'], accept:'一份可直接給客戶修改的政策範本'}
      ]},
    { id:'s4', short:'獲客', name:'階段四', title:'打包服務與獲客', range:[10,12],
      goal:'目標:把能力包裝成明確的服務,並拿到第一個案例。',
      output:'2 至 3 個明確的服務方案、一個案例研究、對外的作品頁。',
      items:[
        {w:[10,10], title:'服務包裝', tasks:['設計 2 至 3 個方案(例如 AI 準備度稽核、工作坊、自動化衝刺)','每個方案寫清楚問題、交付物、時程、價格、適合對象','做一頁服務介紹'], accept:'方案說明一頁讀完'},
        {w:[11,11], title:'第一個案例', tasks:['用免費或低價稽核換取一個真實案例','照你的流程完整交付','寫案例研究:問題、方法、風險、成果、學到什麼'], accept:'一份有成果數字的案例研究'},
        {w:[12,12], title:'獲客或求職', tasks:['用內容、熟人介紹、工作坊、合作夥伴開發客戶','或投遞顧問公司的 AI 策略職缺','準備案例面試:現場拆解一個客戶的 AI 導入問題'], accept:'至少 5 個潛在客戶對話或投遞'}
      ]}
  ],
  resources:[
    {stage:'全程', name:'BuildAIQ:How to Become an AI Consultant', url:'https://www.buildaiq.com/blog/how-to-become-an-ai-consultant', use:'路線、交付物與作品集清單'},
    {stage:'二', name:'The Mom Test', url:'https://momtestbook.com/', use:'客戶訪談'},
    {stage:'三', name:'BuildAIQ:How to Become an AI Strategist', url:'https://www.buildaiq.com/blog/how-to-become-an-ai-strategist', use:'策略面延伸閱讀(僅搜尋結果)'}
  ],
  related:['automation','ai-pm','fde','governance'],
  sources:[
    {name:'BuildAIQ:How to Become an AI Consultant', url:'https://www.buildaiq.com/blog/how-to-become-an-ai-consultant'},
    {name:'Dice:AI-related Jobs Top LinkedIn\'s Fastest-growing Roles List for 2026', url:'https://www.dice.com/career-advice/ai-related-jobs-top-linkedins-fastest-growing-roles-list-for-2026'}
  ]
});
