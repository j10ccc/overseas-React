export type ProdIntroductionType = {
  name: string;
  description: string;
  featureList: ProdFeature[];
  extra: string[];
  advantages: ProdAdvantage[];
};
export type ProdFeature = {
  icon: string;
  name: string;
  alias: string;
  description: string[];
  demoRoute: string;
};

export type ProdAdvantage = {
  icon: string;
  label: string;
};
