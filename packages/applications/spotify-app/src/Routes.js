import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Search from './pages/Search'

const Routes = () => {
  return (
    <Switch>
      <Route path="/search/:query" component={Search} />
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default Routes
