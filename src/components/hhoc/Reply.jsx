import React from 'react';

const createBase = ({ mapPropsToFields }) => Component => {
  class BaseDOM extends React.Component {
    constructor(props) {
      super(props);
      this.state = mapPropsToFields(props)
    }

    componentWillReceiveProps(nextProps) {
      if (mapPropsToFields) {
        this.setState(nextProps(nextProps))
      }
    }

    delItem = (index) => {
      const { list } = this.state
      this.setState({
        ...list.slice(0, index),
        ...list.slice(list)
      })
    }

    addItem = () => {
      const text = prompt()
      if (text) {
        const { list } = this.state
        this.setState({
          ...list,
          text
        })
      }
    }

    isValid = (callback) => {
      return callback(this.state)
    }

    render() {


      return (
        <div className="BaseDOM">
          <Component {...this.props} reply={} />
        </div>
      )
    }
  }

  return BaseDOM
}

class Reply extends React.Component {
  static create = createBase

  render() {
    <ReplyContext>
      <Component />
    </ReplyContext>
  }
}

export default Reply;
