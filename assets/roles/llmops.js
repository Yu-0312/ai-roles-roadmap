registerRole({
  id:'llmops', name:'LLMOps / AI 維運工程師', en:'LLMOps Engineer / AI Operations',
  tagline:'讓 AI 系統在線上穩定、可觀測、可回滾,並控制 GPU 與 API 成本。',
  category:'tech', level:3, weeks:16, fit:['ops','engineer'],
  marker:{week:15, short:'投遞', label:'開始投遞'},
  overview:{
    what:'LLMOps 工程師負責讓 ML 與 LLM 系統在正式環境「可部署、可觀測、可擴充、可復原」。相較傳統 DevOps,多了模型版本、prompt 部署、評估節奏、推論服務與 token 成本這些新問題。The AI Career Lab 稱為 AI Operations Manager:管理部署中 agent 底下的基礎設施與事故應變。',
    daily:['維護模型服務與推論基礎設施(例如 vLLM)','建 CI/CD,讓評估不過就擋住上線','監控延遲、吞吐量、錯誤率與每次查詢成本','處理事故、寫 runbook 與回滾流程'],
    skills:['Docker、Kubernetes、Helm、Terraform','AWS / GCP / Azure,含網路與 IAM','模型服務與 GPU 基礎(vLLM、批次、量化)','監控與可觀測性、事故應變(SRE 方法)','成本工程、多模型路由'],
    entry:'The AI Career Lab 估計:SRE 與 DevOps 工程師約 2 至 3 個月可轉入;有 on-call 經驗的後端工程師約 4 至 6 個月。',
    pay:'The AI Career Lab 的 2026 年美國薪資帶:AI 營運經理約 15.5 萬至 27.5 萬美元。屬業者整理,僅供參考。',
    prereq:'熟悉 Linux 指令列與至少一種程式語言。沒有維運經驗的話,階段一需要更多時間。'
  },
  stages:[
    { id:'s1', short:'容器雲端', name:'階段一', title:'容器、雲端與基礎設施即程式碼', range:[1,4],
      goal:'目標:打好 DevOps 基本功。已是 SRE / DevOps 可快速複習後跳過。',
      output:'用 Terraform 建立、在 Kubernetes 上執行、有 CI/CD 的一般 Web 服務。',
      items:[
        {w:[1,1], title:'Linux 與 Docker', tasks:['熟悉程序、網路、檔案權限等 Linux 基礎','寫多階段 Dockerfile 並縮小映像','用 docker compose 跑多個服務'], accept:'映像大小有明顯縮減'},
        {w:[2,2], title:'Kubernetes', tasks:['部署 Deployment、Service、Ingress','設定資源限制與健康檢查','用 Helm 打包服務'], accept:'服務在 Pod 重啟後自動恢復'},
        {w:[3,3], title:'雲端與 IaC', tasks:['用 Terraform 建立雲端網路與叢集','理解 IAM 最小權限','管理機密(secrets)'], accept:'整套環境可用一個指令重建'},
        {w:[4,4], title:'CI/CD', tasks:['用 GitHub Actions 建置、測試、部署','實作藍綠或金絲雀部署','寫並測試回滾流程'], accept:'回滾在 5 分鐘內完成'}
      ]},
    { id:'s2', short:'模型服務', name:'階段二', title:'模型服務與推論', range:[5,8],
      goal:'目標:能部署並調校 LLM 推論服務,理解 GPU、批次與量化對成本與延遲的影響。',
      output:'一個自架的開源模型推論服務,附壓力測試與成本比較報告。',
      items:[
        {w:[5,5], title:'推論基礎', tasks:['理解 prefill、decode、KV cache、首字延遲(TTFT)','用 vLLM 部署一個小型開源模型','測量延遲與吞吐量'], accept:'有一份延遲與吞吐量基準'},
        {w:[6,6], title:'效能調校', tasks:['比較不同批次大小與並發數','試用量化模型並比較品質與速度','理解 GPU 記憶體的限制'], accept:'找到一組延遲與成本平衡的設定'},
        {w:[7,7], title:'API 與路由', tasks:['在自架模型與商用 API 之間做路由','加入快取與限流','處理供應商 API 故障時的備援'], accept:'主要供應商故障時自動切換'},
        {w:[8,8], title:'模型與 prompt 版本管理', tasks:['對模型、prompt、設定做版本控制','實驗追蹤(例如 MLflow 或 W&B)','資料版本管理概念'], accept:'能追溯任一次上線用了哪個版本'}
      ]},
    { id:'s3', short:'觀測與CI', name:'階段三', title:'可觀測性與評估閘門', range:[9,12],
      goal:'目標:讓 AI 系統的品質、延遲、成本都看得見,並讓評估成為上線門檻。',
      output:'一個「評估閘門」發布流程:離線評估 + 金絲雀檢查,不過就不上線。',
      items:[
        {w:[9,9], title:'監控', tasks:['用 Prometheus 與 Grafana 監控延遲、錯誤、吞吐量','加入每次查詢成本與 token 用量','設定告警閾值'], accept:'儀表板一頁看完系統健康度'},
        {w:[10,10], title:'LLM 追蹤', tasks:['用 OpenTelemetry 或 Langfuse 追蹤完整請求','記錄 prompt、回應、工具呼叫','處理個資遮罩'], accept:'能從告警一路追到單一請求'},
        {w:[11,11], title:'評估閘門', tasks:['在 CI 中跑離線評估','金絲雀發布時比較新舊版本指標','指標退步自動回滾'], accept:'故意上線壞版本時會被擋下或回滾'},
        {w:[12,12], title:'線上品質監控', tasks:['收集使用者回饋訊號','偵測輸出品質漂移','定期抽樣人工審查'], accept:'有一份每週品質報告範本'}
      ]},
    { id:'s4', short:'成本事故', name:'階段四', title:'成本與事故應變', range:[13,14],
      goal:'目標:能控制 AI 成本並沉著處理事故。',
      output:'成本儀表板(依團隊與模型分攤)與兩份事故 runbook。',
      items:[
        {w:[13,13], title:'成本工程', tasks:['依團隊與模型分攤 GPU 與 API 成本','找出三個降低成本的機會(快取、小模型、spot 執行個體)','估算每月成本並設預算告警'], accept:'有成本降低的前後數字'},
        {w:[14,14], title:'事故應變', tasks:['寫兩份 runbook:供應商 API 故障、模型品質突然下降','做一次混沌測試(關掉一個依賴)','寫一份無責事後檢討'], accept:'照 runbook 能在時限內恢復'}
      ]},
    { id:'s5', short:'作品求職', name:'階段五', title:'作品集與求職', range:[15,16],
      goal:'目標:把階段二到四整合成一個 LLMOps 平台雛形作品。',
      output:'公開 repo:模型服務 + 追蹤 + 告警 + CI/CD + 回滾計畫。',
      items:[
        {w:[15,15], title:'平台雛形', tasks:['整合模型服務、追蹤、告警、評估閘門','README 附架構圖與基準數據','開始投遞'], accept:'他人能照 README 部署'},
        {w:[16,16], title:'面試準備', tasks:['練習 AI 系統設計:設計一個多租戶 LLM 平台','準備事故處理經驗的 STAR 故事','準備說明推論成本的取捨'], accept:'能在 45 分鐘講完一題平台設計'}
      ]}
  ],
  resources:[
    {stage:'全程', name:'GenAI Notes:MLOps / LLMOps Engineer Career Guide', url:'https://bhaskarjha-com.github.io/genai-notes/career/roles/mlops-engineer.html', use:'職責、技能清單與專案題目'},
    {stage:'三', name:'GitHub Actions、Prometheus、Grafana 官方文件', use:'CI/CD 與監控'},
    {stage:'二', name:'vLLM 官方文件', use:'開源模型推論服務'}
  ],
  related:['ai-engineer','agent-engineer','eval-engineer'],
  sources:[
    {name:'GenAI Notes:MLOps / LLMOps Engineer Career Guide', url:'https://bhaskarjha-com.github.io/genai-notes/career/roles/mlops-engineer.html'},
    {name:'The AI Career Lab:The Agentic-AI Job Guide', url:'https://theaicareerlab.com/blog/agentic-ai-jobs-guide-2026/raw', note:'AI Operations Manager 薪資與轉職時間'},
    {name:'Let\'s Data Science:Companies Identify 20 Agentic AI Jobs for 2026', url:'https://letsdatascience.com/news/companies-identify-20-agentic-ai-jobs-for-2026-598e685f'}
  ]
});
