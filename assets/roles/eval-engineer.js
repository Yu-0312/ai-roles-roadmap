registerRole({
  id:'eval-engineer', name:'AI 評估工程師', en:'AI Evaluation (Evals) Engineer',
  tagline:'設計測試集、評分方式與評估基礎設施,決定新模型、新 prompt 能不能上線。',
  category:'tech', level:2, weeks:14, fit:['engineer','data'],
  marker:{week:12, short:'投遞', label:'開始投遞'},
  overview:{
    what:'評估工程師負責回答「這個 AI 到底好不好、有沒有變好」。他們建立反映真實使用者行為的評估資料集,設計規則、模型評分與人工審查混合的評分系統,打造測試執行器、儀表板與回歸告警,並訂出新 prompt、模型、功能上線前必須通過的品質門檻。Box 執行長也提到,「agent 評估」是公司兩年前還不存在的新職位。',
    daily:['從真實使用紀錄中抽樣建立評估集','設計評分標準:規則、LLM 評分、人工審查','建置評估執行器、儀表板與回歸告警','分析「通過率很高但使用者還是抱怨」這類落差'],
    skills:['紮實的 Python 與 SQL','統計:抽樣、信賴區間、顯著性檢定、A/B 測試','離線評估、線上評估、紅隊三者的差異','能讀懂 ML 論文的程度(不必會訓練模型)','工具:OpenAI Evals、lm-eval-harness、HELM、Braintrust、LangSmith'],
    entry:'軟體工程師(尤其做過測試或資料工程)與資料科學家最容易轉入。面試比 ML 工程師少考演算法,多考資料處理、評估設計與統計。',
    pay:'公開薪資資料不足,本站不列數字。Scale AI、Braintrust、xAI 等公司都有公開的評估工程師職缺。'
  },
  stages:[
    { id:'s1', short:'統計資料', name:'階段一', title:'統計與資料基礎', range:[1,3],
      goal:'目標:補齊評估最常用的統計與資料處理能力。評估做得好不好,常常取決於抽樣與統計判斷。',
      output:'一份用 pandas 完成的分析筆記:從大量紀錄中分層抽樣,並對兩個版本做顯著性檢定。',
      items:[
        {w:[1,1], title:'資料處理', tasks:['熟練 pandas 的 groupby、merge、pivot','用 SQL 從使用紀錄撈出不同類型的對話','練習資料清洗與去重'], accept:'能在 30 分鐘內完成一份資料切片分析'},
        {w:[2,2], title:'統計基礎', tasks:['理解抽樣誤差與信賴區間','做一次 bootstrap 估計','理解為什麼小樣本的「進步 2%」可能不可信'], accept:'能說明一個結果是否顯著'},
        {w:[3,3], title:'A/B 測試與分層抽樣', tasks:['設計一次 A/B 測試(樣本數、指標、停止條件)','練習分層抽樣:保留少見但重要的案例','比較整體數字與各區段數字的差異'], accept:'能指出整體變好但某區段變差的情況'}
      ]},
    { id:'s2', short:'評估方法', name:'階段二', title:'評估方法', range:[4,7],
      goal:'目標:學會為不同 AI 任務設計資料集、指標與評分方式。',
      output:'三份評估設計文件:客服機器人、RAG 問答、程式碼生成。',
      items:[
        {w:[4,4], title:'評估資料集設計', tasks:['把資料分成典型、邊界、對抗、過去失敗四類','為一個任務建 100 題評估集','避免資料污染與標籤洩漏'], accept:'評估集四類案例都有'},
        {w:[5,5], title:'指標與評分', tasks:['區分「對使用者有價值」與「好看但沒用」的指標','實作規則評分(格式、關鍵字、可執行性)','實作 LLM-as-judge,並設計評分 rubric'], accept:'rubric 讓兩個人評分結果一致'},
        {w:[6,6], title:'校準評分模型', tasks:['人工標註 50 題作為基準','計算 LLM 評分與人工的一致率','調整 rubric 直到一致率可接受'], accept:'有一致率數字與調整紀錄'},
        {w:[7,7], title:'RAG 與 agent 評估', tasks:['用 Ragas 評估 faithfulness、answer relevancy、context precision','為 agent 設計任務成功判定','練習三題評估系統設計(客服、程式碼補全、醫療 RAG)'], accept:'三份評估設計文件'}
      ]},
    { id:'s3', short:'評估平台', name:'階段三', title:'評估基礎設施', range:[8,11],
      goal:'目標:把評估變成工程系統:自動執行、可比較版本、能擋住退步。',
      output:'一個開源的評估框架:非同步執行、結果儲存、版本比較、CI 中的回歸門檻。',
      items:[
        {w:[8,8], title:'評估執行器', tasks:['用 asyncio 平行執行大量評估','處理 API 限流與重試','設計評估框架的 API(資料集、評分器、報告)'], accept:'500 題評估能在合理時間跑完'},
        {w:[9,9], title:'非確定性處理', tasks:['同一題重複執行多次,量化變異','決定需要跑幾次才能下結論','報告附信賴區間'], accept:'報告不只是一個平均數'},
        {w:[10,10], title:'回歸與 CI', tasks:['把評估接進 GitHub Actions','設定分數下降就擋住合併的門檻','保留歷次結果做趨勢比較'], accept:'故意改壞 prompt 時 CI 會失敗'},
        {w:[11,11], title:'工具與開源', tasks:['試用 Braintrust 或 LangSmith 並與自建框架比較','讀 lm-eval-harness 或 HELM 的原始碼結構','嘗試對開源評估專案貢獻一個 PR'], accept:'一份工具比較筆記'}
      ]},
    { id:'s4', short:'作品面試', name:'階段四', title:'作品集與面試', range:[12,14],
      goal:'目標:公開一個你熟悉任務的評估框架,並準備評估工程師特有的面試題。',
      output:'公開 repo(含方法論說明)、改寫後的履歷、面試題練習紀錄。',
      items:[
        {w:[12,12], title:'公開作品', tasks:['為一個你熟悉的任務公開評估框架與資料集','在 README 說明方法論:抽樣、評分、統計檢定','開始投遞'], accept:'別人能照 README 重跑評估'},
        {w:[13,13], title:'評估資料設計題', tasks:['練習:從大量使用紀錄建小而有代表性的評估集','練習:通過率高但使用者抱怨,怎麼解釋','練習:新模型發布,如何快速判斷是否更好'], accept:'三題都能講出分層抽樣與區段比較'},
        {w:[14,14], title:'實作與 take-home', tasks:['在 2 至 4 小時內完成一個含 LLM 評分的小型評估框架','練習 Python 資料處理與非同步題','準備行為題:一次你發現評估本身有問題的經驗'], accept:'模擬 take-home 能準時完成'}
      ]}
  ],
  resources:[
    {stage:'二~四', name:'Techinterview.org:Interviewing for AI Eval Engineering Roles', url:'https://www.techinterview.org/post/3233475313/interviewing-ai-eval-engineering-roles-2026/', use:'職責、技能、面試題型'},
    {stage:'二', name:'DeepLearning.AI:Building and Evaluating Advanced RAG', url:'https://aiagentrank.io/learn/course/deeplearning-ai-building-evaluating-advanced-rag', use:'RAG 評估'},
    {stage:'二', name:'AI FDE 作品集四個專案(Ragas 驗收標準)', url:'https://deepsunai.substack.com/p/the-4-portfolio-projects-every-ai', use:'評估指標實例'}
  ],
  related:['ai-engineer','agent-engineer','ai-trainer','red-team'],
  sources:[
    {name:'Techinterview.org:Interviewing for AI Eval Engineering Roles: The 2026 Specialty', url:'https://www.techinterview.org/post/3233475313/interviewing-ai-eval-engineering-roles-2026/?format=md'},
    {name:'Let\'s Data Science:Companies Identify 20 Agentic AI Jobs for 2026', url:'https://letsdatascience.com/news/companies-identify-20-agentic-ai-jobs-for-2026-598e685f', note:'Box 的 agent 評估職位'}
  ]
});
