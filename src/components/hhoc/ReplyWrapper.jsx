import React from 'react';

class ReplyWrapper extends React.Component {
  render () {
    const { list, delItem, addItem } = this.props;

    return (
      <div>
        {
          list.map((item, index) => (
            <p onClick={() => delItem(index)}>{item}</p>
          ))
        }
        <button onClick={addItem}>add</button>
      </div>
    )
  }
}

export default ReplyWrapper;
