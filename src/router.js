import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'

 class MyRouter extends React.Component {
    render() {
        return (
            <Router>
                <App>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Redirect to="/" />
                        {/* <Route component={NoMatch} /> */}
                    </Switch>
                </App>
            </Router>
        )
    }
}

export default MyRouter