import React from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import './style.less'
import logo from '../../logo.svg';


const SortableItem = SortableElement(({ value, setItemInner, index }) => {
  return (
    <div className="sortable-item">
      <div className="sortable-inner">
        {
          index === 1 ? (
            <div className="sortable-image">
              <img src={logo} alt="logo" height="100%" />
            </div>
          ) : (
            <div className="sortable-input-group">
              <input type="text" className="sortable-input" />
              <input type="text" className="sortable-input" />
              <input type="text" className="sortable-input" />
            </div>
          )
        }
        {setItemInner(value)}
      </div>
    </div>
  )
})

const SortableWrapper = SortableContainer(({ items, setItemInner }) => {
  return (
    <div className="sortable-container">
      {items.map((value, index) => (
        <SortableItem
          key={`item-${index}`}
          index={index}
          value={value}
          setItemInner={setItemInner}
        />
      ))}
    </div>
  )
})

const SortableList = ({ items, sortEnd, setItemInner }) => {
  return (
    <SortableWrapper
      onSortStart={(_, event) => event.preventDefault()}
      onSortEnd={sortEnd}
      items={items}
      helperClass="sortable-helper"
      setItemInner={setItemInner}
    />
  )
}

SortableList.defaultProps = {
  theme: 'block',
  setItemInner: (value) => <span>{value}</span>
}

export default SortableList;
