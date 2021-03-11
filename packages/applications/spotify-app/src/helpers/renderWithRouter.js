import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

const renderWithRouter = (component, initialEntries = ['/']) => (
  <Router history={createMemoryHistory({ initialEntries })}>{component}</Router>
)

export default renderWithRouter
