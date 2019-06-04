import React from 'react'
import { message } from 'antd-custom'

class PageMessage extends React.Component {
  warning = () => {
    message.warning('This is a normal message', 100)
  }

  render() {
    return (
      <button type="button" onClick={this.warning}>点击打开toast</button>
    )
  }
}

export default PageMessage

