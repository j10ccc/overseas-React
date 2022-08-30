import { CaretDownFilled } from "@ant-design/icons";
import { Select, Button } from "antd";
import { useState } from "react";
import "./index.scss";
const { Option } = Select;

function TranslateDemo() {
  const [finish, setFinish] = useState(false);

  const handleCheckClick = () => {
    setFinish(true);
  };
  const handleBackClick = () => {
    setFinish(false);
  };

  return (
    <>
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
                spellCheck={false}
                placeholder="在此处键入或粘贴问题">
                <span>
                  Based on engineering practice, the authors selected the
                  special space of China Yueyang Petrochemical Industrial Park
                  as the object of discussion,
                </span>
                <em>addressed</em> the main problems and challenges facing its
                development,
                <em>
                  and between the relationship of industrial symbiosis and
                  spatial symbiotic
                </em>
                <span>
                  . From the analysis of the current situation, the circular
                  symbiotic industrial chain network, and the layout of the
                  symbiotic park are included in the spatial planning of the
                  industrial park.
                </span>
              </div>
              <div className="translate-demo-textarea-counter">320 / 400</div>
            </div>
          </div>
          <div className="translate-demo-card-footer">
            {!finish ? (
              <Button
                type="primary"
                size="large"
                onClick={handleCheckClick}
                style={{ background: "#4CAF50", border: "none" }}>
                检查文本
              </Button>
            ) : (
              <>
                <Button
                  size="large"
                  onClick={handleBackClick}
                  icon={<span className="iconfont icon-back"></span>}>
                  返回
                </Button>
                <Button
                  size="large"
                  icon={<span className="iconfont icon-copy"></span>}>
                  复制
                </Button>
                <Button
                  size="large"
                  type="primary"
                  icon={<span className="iconfont icon-kefu"></span>}>
                  人工矫正
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      {!finish ? (
        <>
          <div className="demo-content-title">
            <h1>个性化配置专业译员</h1>
            <span className="demo-content-title-split"></span>
          </div>
          <div className="customed-translate">
            <div className="customed-translate-card">
              <div className="customed-translate-card-body">
                <div className="customed-translate-card-content">
                  为高翻译要求客户，提供个性化配置专业译员
                </div>
              </div>
              <div className="customed-translate-card-footer">
                <Button
                  className="customed-translate-card-button"
                  shape="round"
                  type="primary">
                  加入我们
                </Button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default TranslateDemo;
