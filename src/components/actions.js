'use strict'

import React from 'react'

const Actions = ({ getRepos, getStarred }) => (
  <div className='actions'>
    <button onClick={getRepos}>Ver repositorios</button>
    <button onClick={getStarred}>Ver favoritos</button>
  </div>
)

Actions.propTypes = {
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired,
}

export default Actions
