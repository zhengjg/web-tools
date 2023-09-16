"use client";

import { useState, useEffect, useRef } from "react";
import {
  Form,
  Row,
  Col,
  Card,
  Select,
  Input,
  Button,
  Slider,
  ColorPicker,
  Switch,
  Radio,
  message,
} from "antd";
import JsBarcode from "jsbarcode";
import { barcodeTypeOptions } from "@/app/constants";
import { PrinterOutlined } from "@ant-design/icons";
import type { Color } from "antd/es/color-picker";
import styles from "./page.module.css";

type FieldType = {
  codeType?: string;
  barContent: string;
};

type AttrFieldType = {
  width: number;
  height: number;
  background: Color | string;
  lineColor: Color | string;
  displayValue: boolean;
  textAlign: string;
};
const contentAttr: FieldType = {
  codeType: "CODE128",
  barContent: "",
};
const initAttr: AttrFieldType = {
  width: 2,
  height: 100,
  background: "#ffffff",
  lineColor: "#000000",
  displayValue: true,
  textAlign: "center",
};

const Content: React.FC = () => {
  const [barcode, setBarcode] = useState<FieldType>(contentAttr);
  const [attr, setAttr] = useState<AttrFieldType>(initAttr);
  const [form] = Form.useForm();
  const canvasRef = useRef<SVGSVGElement>(null);

  const onFinish = (values: FieldType) => {
    console.log("Success:", values);
    setBarcode(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onAttrValuesChange = (changedValues: any, allValues: AttrFieldType) => {
    console.log("changedValues", changedValues);
    console.log("allValues", allValues);
    setAttr(allValues);
  };

  // 实时渲染图片
  useEffect(() => {
    console.log("生成barcode");
    console.log("barcode", barcode);
    console.log("attr", attr);
    if (barcode.barContent) {
      const barcodeAttr = {
        ...attr,
        format: barcode.codeType,
        background:
          typeof attr.background === "string"
            ? attr.background
            : attr.background.toHexString(),
        lineColor:
          typeof attr.lineColor === "string"
            ? attr.lineColor
            : attr.lineColor.toHexString(),
      };
      try {
        JsBarcode(canvasRef.current, barcode.barContent, barcodeAttr);
      } catch (error: any) {
        console.log("error", error);
        message.error(error);
      }
    }

    //createBarcode(barcode, attr);
  }, [barcode, attr]);

  return (
    <Row gutter={6} className="row-margin-top">
      <Col span={14}>
        <Card>
          <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 15 }}
            //style={{ maxWidth: 600 }}
            initialValues={contentAttr}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="条码类型"
              name="codeType"
              rules={[{ required: true, message: "请选择条码类型" }]}
            >
              <Select options={barcodeTypeOptions}></Select>
            </Form.Item>

            <Form.Item<FieldType>
              label="条码内容"
              name="barContent"
              rules={[{ required: true, message: "请输入条码内容" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
              <Button type="primary" size="large" htmlType="submit">
                生成条形码
              </Button>
            </Form.Item>
          </Form>
        </Card>
        <Card className="row-margin-top">
          <Form
            name="attr"
            disabled={!barcode.barContent}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 15 }}
            form={form}
            initialValues={initAttr}
            onValuesChange={onAttrValuesChange}
          >
            <Form.Item<AttrFieldType> label="条码宽度" name="width">
              <Slider min={1} max={4}></Slider>
            </Form.Item>
            <Form.Item<AttrFieldType> label="条码高度" name="height">
              <Slider min={20} max={160}></Slider>
            </Form.Item>
            <Form.Item<AttrFieldType> label="背景颜色" name="background">
              <ColorPicker showText disabled={!barcode.barContent} />
            </Form.Item>
            <Form.Item<AttrFieldType> label="线条颜色" name="lineColor">
              <ColorPicker showText disabled={!barcode.barContent} />
            </Form.Item>
            <Form.Item<AttrFieldType> label="显示文字" name="displayValue">
              <Switch defaultChecked />
            </Form.Item>
            <Form.Item<AttrFieldType> label="文字方向" name="textAlign">
              <Radio.Group>
                <Radio.Button value="left">left</Radio.Button>
                <Radio.Button value="center">center</Radio.Button>
                <Radio.Button value="right">right</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Form>
        </Card>
      </Col>
      <Col span={10}>
        <Card className={styles.barcodeContainer}>
          <Row>
            <Col span={24}>
              <div className={styles.svgContainer}>
                <svg className={styles.svgElement} ref={canvasRef}></svg>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Button type="primary" size="large">
                保存到本地
              </Button>
            </Col>
            <Col span={12}>
              <Button
                style={{ width: 130 }}
                size="large"
                icon={<PrinterOutlined />}
              >
                打印
              </Button>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default Content;
