import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import SearchInput from '../../components/SearchInput'
import { getSearch } from '../../redux/modules/search'

const Search = ({ token, getSearchAction }) => {
  const { query } = useParams()
  useEffect(() => {
    console.log(query, 'mudei a query')
    if (token) getSearchAction(token, query)
  }, [query])
  return (
    <SearchInput
      label="Busque por álbuns ou músicas"
      placeholder="Comece a escrever..."
    />
  )
}

const mapStateToProps = ({ auth, search }) => {
  return {
    token: auth.token
  }
}

const mapDispatchToProps = {
  getSearchAction: getSearch
}

Search.propTypes = {
  token: PropTypes.string,
  getSearchAction: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
