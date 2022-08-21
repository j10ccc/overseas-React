import {
  CaretDownFilled,
  DownloadOutlined,
  EllipsisOutlined,
  FilterOutlined,
  PieChartOutlined,
  StarFilled
} from "@ant-design/icons";
import { Button, Input, List, Select, Space } from "antd";
import { useState } from "react";
import "./index.scss";

const result = {
  translate: "Valve",
  total: 128,
  marked: false,
  list: [
    {
      name: "阀门结构、零件",
      associations: [
        "阀轮yoke",
        "外螺纹阀杆及阀轭 outside screw and yoke (OS & Y)",
        "阀杆stem",
        "内螺纹inside screw (IS)",
        "阀轭套yoke sleeve",
        "阀杆环stem ring",
        "阀座valve seat (body seat)",
        "阀座环、密封圈seat ring",
        "整体（阀）座integral seat",
        "堆焊（阀）座deposited seat",
        "阀芯（包括密封圈、杆等内件）trim",
        "阀盘 disc",
        "阀盘密封圈disc seat",
        "阀体body",
        "阀盖bonnet",
        "阀盖衬套bonnet bush"
      ]
    }
  ]
};
const { Option } = Select;

function ResultCard(props: any) {
  const { keyWord } = props;
  const [total, setTotal] = useState(result.total);
  const [marked, setMarked] = useState(result.marked);

  const handleMarkClick = () => {
    setMarked(!marked);
  };
  return (
    <div className="corpus-demo-result-card">
      <div className="corpus-demo-result-card-header">
        <div className="result-info">
          <h1>
            {keyWord} {result.translate}
          </h1>
          <span>共 {total} 个结果</span>
        </div>
        <StarFilled
          className={`mark-button ${marked ? "mark-button-active" : null}`}
          onClick={handleMarkClick}
        />
      </div>
      <div className="corpus-demo-result-card-body">
        <div className="operate-area">
          <Space>
            <Button type="primary" shape="round" icon={<PieChartOutlined />}>
              统计
            </Button>
            <Button type="primary" shape="round" icon={<FilterOutlined />}>
              筛选
            </Button>
            <Button type="primary" shape="round" icon={<DownloadOutlined />}>
              下载
            </Button>
            <Button type="primary" shape="round" icon={<EllipsisOutlined />}>
              高级
            </Button>
          </Space>
          <div>
            <label>排序设置：</label>
            <Select
              defaultValue="顺序排列"
              bordered={false}
              suffixIcon={<CaretDownFilled />}>
              <Option value="顺序排列">顺序排列</Option>
            </Select>
          </div>
        </div>
        <div className="corpus-area">
          {result.list.map((item, index) => {
            return (
              <div className="corpus-result-item">
                <h2>
                  （{index + 1}）{item.name}
                </h2>
                <ul>
                  {item.associations.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function CorpusDemo() {
  const [keyWord, setKeyWord] = useState("阀门");
  return (
    <div className="corpus-demo">
      <div className="corpus-demo-search-card">
        <div className="corpus-demo-search-card-header">
          <div className="selector-wrapper">
            <label>呈现形式：</label>
            <Select
              defaultValue="中英文混排"
              suffixIcon={<CaretDownFilled style={{ color: "#477840" }} />}>
              <Option value="中英文混排">绿色化工</Option>
            </Select>
          </div>
          <div className="selector-wrapper">
            <label>检索领域：</label>
            <Select
              defaultValue="名词/词语"
              suffixIcon={<CaretDownFilled style={{ color: "#477840" }} />}>
              <Option value="名词/词语">名词/词语</Option>
            </Select>
          </div>
          <div className="selector-wrapper">
            <label>涉及行业：</label>
            <Select
              defaultValue="工程经济类 绿色化工"
              suffixIcon={<CaretDownFilled style={{ color: "#477840" }} />}>
              <Option value="工程经济类 绿色化工">工程经济类 绿色化工</Option>
            </Select>
          </div>
        </div>
        <div className="corpus-demo-search-card-body">
          <div className="corpus-demo-search-input-wrapper">
            <Input
              placeholder="请输入单词或词语"
              size="large"
              defaultValue={keyWord}
            />
            <Button
              type="primary"
              size="large"
              className="corpus-demo-search-submit-button">
              检索
            </Button>
          </div>
        </div>
      </div>
      <ResultCard keyWord={keyWord} />
    </div>
  );
}

export default CorpusDemo;
