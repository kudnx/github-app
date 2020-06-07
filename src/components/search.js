'use strict'

import React from 'react'

const Search = ({ isDisabled, handleSearch }) => (
  <div>
    <div className='search' />
    <input
      type='search'
      placeholder='Digite o nome do usuário do Github'
      disabled={isDisabled}
      onKeyUp={handleSearch}
    />
  </div>
)

Search.propTypes = {
  handleSearch: React.PropTypes.func.isRequired,
  isDisabled: React.PropTypes.bool.isRequired
}

export default Search
