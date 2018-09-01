import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'
import Article from './components/Article'

class MyRouter extends React.Component {
    render() {
        return (
            <Router>
                <App>
                    <Switch>
                        <Route exact path="/blog" component={Home} />
                        <Route path="/blog/article/:title" component={Article} />
                        <Redirect to="/blog" />
                        {/* <Route component={NoMatch} /> */}
                    </Switch>
                </App>
            </Router>
        )
    }
}

export default MyRouter
