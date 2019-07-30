import React from 'react'


class Item extends React.PureComponent {
  render() {
    const { item } = this.props

    console.log('item render', item)

    return (
      <p>{item}</p>
    )
  }
}

export default Item
