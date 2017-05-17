import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import SelectableList from './selectable-list'

describe('selectable-list-v2/selectable-list.js', () => {
  let list

  const ItemList = ({ data }) => (
    <div className='ItemData'>
      {`${data.id} - ${data.name}`}
    </div>
  )

  const props = {
    items: [
      { id: 1, name: 'Lorem' },
      { id: 2, name: 'Ipsum' }
    ],
    itemComponent: ItemList,
    onCheckItem: data => {},
    onSelectItem: data => {}
  }

  beforeEach(() => {
    list = shallow(<SelectableList {...props} />)
  })
  
  it('should render without crashed', () => {
    expect(list).to.be.ok
  })

  it('should render children like itemComponent', () => {
    expect(list.find(ItemList).length).to.equal(2)
  })
  
  it('should pass to children items data and onClick', () => {
    expect(list.find(ItemList).at(0).props()).to.deep.equal({
      checked: false,
      data: props.items[0],
      onSelect: props.onSelectItem,
      onCheck: props.onCheckItem
    })
    
    expect(list.find(ItemList).at(1).props()).to.deep.equal({
      checked: false,
      data: props.items[1],
      onSelect: props.onSelectItem,
      onCheck: props.onCheckItem
    })
  })

  it('should mark with checked an item of list', () => {
    list.setProps({ selected: [2] })
    expect(list.find(ItemList).at(0).props().checked).to.equal(false)
    expect(list.find(ItemList).at(1).props().checked).to.equal(true)
  })

  it('should mark with checked many items of list', () => {
    list.setProps({ selected: [1, 2] })
    expect(list.find(ItemList).at(0).props().checked).to.equal(true)
    expect(list.find(ItemList).at(1).props().checked).to.equal(true)
  })

  it('should possible change keyname used on select my items', () => {
    const items = [
      { uuid: 'ofi903', name: 'Lorem' },
      { uuid: 'kiro89', name: 'Ipsum' }
    ]
    list.setProps({ keyname: 'uuid', items, selected: ['ofi903'] })
    expect(list.find(ItemList).at(0).props().checked).to.equal(true)
    expect(list.find(ItemList).at(1).props().checked).to.equal(false)
  })
})
