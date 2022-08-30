type serviceType = {
  name: string;
  route: string;
};

const serviceList: serviceType[] = [
  {
    name: "首页",
    route: "/"
  },
  {
    name: "品牌介绍",
    route: "/introduction"
  },
  {
    name: "定制服务",
    route: "/customized-service"
  },
  {
    name: "联系我们",
    route: "/contact"
  }
];

export default serviceList;
