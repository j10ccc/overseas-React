import { CaretDownFilled, StarFilled } from "@ant-design/icons";
import { Button, Input, Select } from "antd";
import { useState } from "react";
import "./index.scss";

const { Option } = Select;

function ResultCard(props: any) {
  const { keyWord } = props;
  const [total, setTotal] = useState(128);

  return (
    <div className="corpus-demo-result-card">
      <div className="corpus-demo-result-card-header">
        <div className="result-info">
          <h1>{keyWord}</h1>
          <span>共 {total} 个结果</span>
        </div>
        <StarFilled className="mark-button" />
      </div>
      <div className="corpus-demo-result-card-body"></div>
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
              value={keyWord}
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
