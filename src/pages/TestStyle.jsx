import React from 'react'
import Item from '../components/TestStyleItem.jsx'

const style = {aa: 'red'}

// string[]
class TestStyle extends React.Component {
  state = {
    list: []
  }


  add = () => {
    const text = prompt()

    if (text) {
      const { list } = this.state
      list.push(text)
      this.setState({
        list
      })
    }
  }

  render() {
    const { list } = this.state

    return(
      <div>
        {list.map((item) => (
          <Item item={item} key={item} style={{aa: 'red'}} />
        ))}
        <button onClick={this.add}>add</button>
      </div>
    )
  }
}

export default TestStyle
