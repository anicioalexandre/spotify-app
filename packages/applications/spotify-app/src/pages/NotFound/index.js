import React from 'react'
import 'ds-image-label'

import './style.css'
import { NOT_FOUND_LABELS, NOT_FOUND_SRC } from './constants'

const NotFound = () => (
  <div className="not-found-container">
    <ds-image-label
      imageSrc={NOT_FOUND_SRC}
      primaryLabel={NOT_FOUND_LABELS.message}
    />
  </div>
)

export default NotFound
