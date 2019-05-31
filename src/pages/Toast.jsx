import React from 'react'

import Toast from '../components/Toast'

class PageToast extends React.Component {
  warning = () => {
    Toast.warning('This is a normal message', 100)
  }

  render() {
    return (
      <button type="button" onClick={this.warning}>点击打开toast</button>
    )
  }
}

export default PageToast

