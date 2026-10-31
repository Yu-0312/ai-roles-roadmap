registerRole({
  id:'ai-trainer', name:'AI 訓練師 / 資料標註專家', en:'AI Trainer / RLHF Specialist / Data Annotator',
  tagline:'用你的專業知識撰寫、評分、標註資料,教模型回答得更好、更安全。',
  category:'nontech', level:1, weeks:8, fit:['domain','none','design'],
  marker:{week:7, short:'接案', label:'開始申請平台或職缺'},
  overview:{
    what:'AI 訓練師負責建立、整理與標註用來微調和對齊模型的資料,包括 RLHF 比較評分、評估集、紅隊測試與評分標準(rubric)。資料標註員則是負責標記與審查資料的入門職位。LinkedIn 2026 年快速成長職位榜上也有資料標註員。各領域專家(醫療、法律、程式、數學、寫作)在這個職位特別吃香。',
    daily:['比較兩個模型回答,依標準評分並寫理由','撰寫高品質的示範回答','依指引標註或審查資料','資深者設計評分標準、帶標註團隊'],
    skills:['某個領域的專業知識','清楚的書面推理能力','精確遵守冗長指引','一致性與細心','資深一級:rubric 設計、評估集設計、基礎 Python'],
    entry:'The AI Career Lab 估計:各領域專家約 4 至 8 週可入行;編輯與內容策略背景適合資深一級。是技術門檻最低、也最容易從非技術背景接觸 AI 的路線。',
    pay:'The AI Career Lab 的 2026 年美國薪資帶:一般 AI 訓練師約 9.5 萬至 18 萬美元;主導專案的資深訓練師約 20 萬至 30 萬美元。接案平台多為時薪計酬且依專業差異大。屬業者整理,僅供參考。'
  },
  stages:[
    { id:'s1', short:'LLM基礎', name:'階段一', title:'理解模型是怎麼被訓練的', range:[1,2],
      goal:'目標:理解預訓練、微調、RLHF 的基本概念,知道你的評分會怎麼影響模型。',
      output:'一份筆記:用自己的話解釋 RLHF,以及好回答的標準。',
      items:[
        {w:[1,1], title:'模型訓練概念', tasks:['理解預訓練、指令微調、RLHF 的差別','理解為什麼人類偏好資料能讓模型變好','了解幻覺、偏誤、拒答過度等常見問題'], accept:'能向朋友解釋 RLHF'},
        {w:[2,2], title:'什麼是好回答', tasks:['整理「有幫助、誠實、無害」各自代表什麼','比較 10 組模型回答,寫出哪個比較好與原因','練習找出回答中的事實錯誤'], accept:'10 組比較都有清楚理由'}
      ]},
    { id:'s2', short:'標註評分', name:'階段二', title:'標註與評分實務', range:[3,4],
      goal:'目標:練到能穩定、快速、一致地依指引評分。平台測驗常常就是在考這個。',
      output:'一份自己的評分練習紀錄,含一致性自我檢查。',
      items:[
        {w:[3,3], title:'遵守指引', tasks:['找一份公開的標註指引並完整讀完','依指引標註 50 筆資料','一週後重標同樣 50 筆,檢查自己的一致性'], accept:'前後一致率達 90% 以上'},
        {w:[4,4], title:'寫示範回答與理由', tasks:['在你的專業領域寫 10 題高品質示範回答','練習用 3 句話寫清楚評分理由','計時練習,兼顧速度與品質'], accept:'10 題示範回答'}
      ]},
    { id:'s3', short:'進階', name:'階段三', title:'進階:評分標準、評估集與紅隊', range:[5,6],
      goal:'目標:往資深訓練師發展——設計評分標準與評估集,並學會找模型弱點。',
      output:'一份你專業領域的評分 rubric 與 30 題評估集。',
      items:[
        {w:[5,5], title:'設計 rubric', tasks:['為你的領域設計評分標準(含各分數的範例)','請另一人用你的 rubric 評分,比較一致性','依落差修改 rubric'], accept:'兩人評分一致率提高'},
        {w:[6,6], title:'評估集與紅隊', tasks:['設計 30 題能考倒模型的專業題目','嘗試讓模型給出不安全或錯誤的回答,並記錄','學一點 Python,用腳本整理評分結果'], accept:'一份含失敗案例的評估集'}
      ]},
    { id:'s4', short:'入行', name:'階段四', title:'入行與升級', range:[7,8],
      goal:'目標:拿到第一份工作或接案,並規劃往資深或評估工程師發展。',
      output:'更新後的履歷(強調專業領域與寫作能力)與至少 3 個申請。',
      items:[
        {w:[7,7], title:'申請', tasks:['履歷強調專業領域、寫作與細心','申請 AI 訓練平台或 AI 公司的資料職缺','準備平台的專業測驗與寫作測驗'], accept:'至少 3 個申請'},
        {w:[8,8], title:'規劃下一步', tasks:['評估往資深訓練師、評估工程師或 AI UX 研究的哪條路發展','如果往技術走,開始「AI 評估工程師」路線','建立你的作品:rubric、評估集、分析報告'], accept:'選定下一條路線'}
      ]}
  ],
  resources:[
    {stage:'全程', name:'The AI Career Lab:The Agentic-AI Job Guide(AI Trainer 章節)', url:'https://theaicareerlab.com/blog/agentic-ai-jobs-guide-2026/raw', use:'職責、薪資、入行方式'},
    {stage:'一', name:'OpenTrain:RLHF explained for job seekers', url:'https://www.opentrain.ai/blog/rlhf-explained-for-job-seekers/', use:'RLHF 入門說明(僅搜尋結果)'},
    {stage:'四', name:'Second Talent:RLHF Specialist', url:'https://www.secondtalent.com/occupations/rlhf-specialist/', use:'職缺技能說明(僅搜尋結果)'}
  ],
  related:['eval-engineer','ai-ux','red-team'],
  sources:[
    {name:'The AI Career Lab:The Agentic-AI Job Guide', url:'https://theaicareerlab.com/blog/agentic-ai-jobs-guide-2026/raw'},
    {name:'Dice:AI-related Jobs Top LinkedIn\'s Fastest-growing Roles List for 2026', url:'https://www.dice.com/career-advice/ai-related-jobs-top-linkedins-fastest-growing-roles-list-for-2026', note:'資料標註員'}
  ]
});
