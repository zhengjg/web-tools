import Link from "next/link";
import { Card, Breadcrumb } from "antd";
import Content from "./content";

const Barcode: React.FC = () => {

  return (
    <div>
      <Card>
        <Breadcrumb
          items={[
            {
              title: <Link href="/">首页</Link>,
            },
            {
              title: <Link href="/barcode">条形码生成器</Link>,
            },
          ]}
        />
      </Card>
      <Content></Content>
    </div>
  );
};

export default Barcode;
