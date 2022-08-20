import { CaretDownFilled } from "@ant-design/icons";
import { Select, Button } from "antd";
import "./index.scss";
const { Option } = Select;

function TranslateDemo() {
  return (
    <div className="translate-demo">
      <div className="translate-demo-card">
        <div className="translate-demo-card-header">
          <div className="selector-wrapper">
            <label>行业： </label>
            <Select
              defaultValue="绿色化工"
              suffixIcon={<CaretDownFilled style={{ color: "#477840" }} />}>
              <Option value="绿色化工">绿色化工</Option>
            </Select>
          </div>
          <div className="selector-wrapper">
            <label>语言： </label>
            <Select
              defaultValue="英语"
              suffixIcon={<CaretDownFilled style={{ color: "#477840" }} />}>
              <Option value="英语">英语</Option>
            </Select>
          </div>
        </div>
        <div className="translate-demo-card-body">
          <div className="translate-demo-textarea-wrapper">
            <div
              contentEditable="true"
              className="textarea"
              placeholder="在此处键入或粘贴问题"></div>
          </div>
        </div>
        <div className="translate-demo-card-footer">
          <Button
            type="primary"
            size="large"
            style={{ background: "#4CAF50", border: "none" }}>
            检查文本
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TranslateDemo;
