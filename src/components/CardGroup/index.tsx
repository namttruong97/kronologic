import { Col, Row } from 'antd';

import CardBlock from 'components/CardBlock';

const CardGroup = () => (
  <Row gutter={[16, 16]}>
    <Col span={12}>
      <CardBlock delay={1.5} index={1} />
    </Col>
    <Col span={12}>
      <CardBlock delay={2} index={2} />
    </Col>
    <Col span={12}>
      <CardBlock delay={2.5} index={3} />
    </Col>
  </Row>
);

export default CardGroup;
