import React, { useEffect, useRef } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import 'ds-input'

const SearchInput = ({ label, placeholder }) => {
  const { query } = useParams()
  const history = useHistory()
  const input = useRef(null)

  const changePathOnKeyUp = (e) => {
    if (e.key === 'Enter' && input.current.value) {
      history.push(`/search/${input.current.value}`)
    }
  }
  useEffect(() => {
    if (input.current) {
      input.current.addEventListener('keyup', changePathOnKeyUp)
    }
    return () => {
      input.current.removeEventListener('keyup', changePathOnKeyUp)
    }
  }, [])

  useEffect(() => {
    const decodedQuery = decodeURI(query)
    if (input.current && input.current.value !== decodedQuery) {
      input.current.value = decodedQuery
    }
  }, [query])

  return <ds-input ref={input} label={label} placeholder={placeholder} />
}

SearchInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string
}

export default SearchInput
