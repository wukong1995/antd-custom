import React from 'react';
import SortableList from './SortableList';
import { arrayMove } from 'react-sortable-hoc';

class Sortable extends React.Component {
  constructor() {
    super()

    this.state = {
      items: [1, 2, 34, 4]
    }
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex)
    })
  }

  render() {
    const { items } = this.state;

    return (
      <SortableList
        items={items}
        sortEnd={this.onSortEnd}
      />
    )
  }
}

export default Sortable;
