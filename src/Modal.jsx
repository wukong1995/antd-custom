import React, { useState } from 'react'

import Modal from 'antd/lib/modal'
import './styles/modal.less';
// import './styles/cover_modal.less';

export default function SysUpdateLogModal() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
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
