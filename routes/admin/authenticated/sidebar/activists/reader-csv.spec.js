import { expect } from 'chai'
import ReaderCSV from './reader-csv'


describe('ReaderCSV', () => {

  const text = `community_id,activist_id,email,name
8,26105,jnewman@terra.com.br,Jose Newman`

  it('should return a object with fields', () => {
    const row = ReaderCSV(text)[0]

    expect(row.community_id).to.equal('8')
    expect(row.activist_id).to.equal('26105')
    expect(row.email).to.equal('jnewman@terra.com.br')
    expect(row.name).to.equal('Jose Newman')
  })
})
