import React, { useState } from 'react'

import { Modal, Tooltip } from 'antd-custom'

export default function PageModal() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Tooltip title="这是一个ToolTip">hover打开Tooltip</Tooltip>
      <button type="button" onClick={() => setVisible(true)}>点击打开modal</button>
      <Modal
        visible={visible}
        title={'更新日志'}
        footer={null}
        onCancel={() => setVisible(false)}
      ></Modal>
    </div>
  );
}
