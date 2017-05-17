import React, { Component } from 'react'


class SelectableList extends Component {

  render() { 
    
    const {
      items,
      selected,
      keyname,
      itemComponent: Item,
      onCheckItem,
      onSelectItem
    } = this.props

    return (
      <div className='SelectableList'>
        {items.map((d, index) => (
          <Item
            key={`SelectableListItem-${index}`}
            checked={selected.findIndex(i => i === d[keyname]) !== -1}
            data={d}
            onCheck={() => onCheckItem(d)}
            onSelect={() => onSelectItem(d)}
          />
        ))}
      </div>
    )
  }
}

SelectableList.defaultProps = {
  items: [],
  selected: [],
  keyname: 'id'
}

export default SelectableList
