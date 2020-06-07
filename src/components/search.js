'use strict'

import React from 'react'

const Search = ({ handleSearch }) => (
  <div>
    <div className='search' />
    <input
      type='search'
      placeholder='Digite o nome do usuário do Github'
      onKeyUp={handleSearch}
    />
  </div>
)

Search.propTypes = {
  handleSearch: React.PropTypes.func.isRequired
}

export default Search
