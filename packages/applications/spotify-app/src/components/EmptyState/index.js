import React from 'react'
import PropTypes from 'prop-types'
import 'ds-image-label'

import './styles.css'
import { EMPTY_BOX_SRC, EMPTY_STATE_LABELS } from './constants'

const EmptyState = ({ customLabel }) => {
  return (
    <div className="empty-state-container">
      <ds-image-label
        imageSrc={EMPTY_BOX_SRC}
        primaryLabel={customLabel || EMPTY_STATE_LABELS.message}
      />
    </div>
  )
}

EmptyState.propTypes = {
  customLabel: PropTypes.string
}

export default EmptyState
