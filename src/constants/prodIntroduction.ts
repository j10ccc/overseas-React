import { ProdIntroductionType } from "@/types/index";

const prodIntroduction: ProdIntroductionType[] = [
  {
    name: "商业文书写作助手",
    description: "超强大的语言矫正功能和个性化译员配置",
    extra: [
      "应用 Language Tool（LT）搭载完整的专业术语语料库，为商业文书提供专业的语言矫正服务。",
      "利用大数据标签技术，为高翻译要求用户提供个性化配置专业译员。"
    ],
    advantages: [
      {
        label: "权威语料库",
        icon: "#1660619917679"
      },
      {
        label: "专业人才库",
        icon: "#1660619945936"
      },
      {
        label: "双用户定位",
        icon: "#1660619952414"
      },
      {
        label: "新众包模式",
        icon: "#1660619959945"
      }
    ],
    featureList: [
      {
        icon: "#1660619985610",
        alias: "语料库",
        name: "语料查询系统",
        description: [
          "团队运用计算机辅助翻译（CAT）技术搭载自建专业术语库",
          "欧盟权威语言检测工具Language Tool，内含欧洲地区27种常用语言和方言，提供地道的专业行业语料支持",
          "高校一流化工、专业的人才库支持"
        ],
        demoRoute: "/demo/corpus"
      },
      {
        icon: "#1660619973144",
        alias: "翻译矫正",
        name: "翻译矫正",
        description: [
          "弥补传统翻译软件行业用语翻译专业性低的缺陷，打破传统企业人工翻译成本高昂困境",
          "构建集成语言纠正服务优势与人工翻译专业优势的独创性文书写作软件"
        ],
        demoRoute: "/demo/translate"
      }
    ]
  }
];

export default prodIntroduction;
