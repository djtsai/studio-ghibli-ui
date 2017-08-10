import React from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import { Switch, Route } from 'react-router-dom'
import Root from './Root'
import UndefinedRoute from './UndefinedRoute'

class GhibliApp extends React.Component {
    render() {
        return (
            <Grid className="ghibli-container" fluid={true}>
                <Switch>
                    <Route exact path="/" component={Root}/>
                    <Route path="/" render={props => <UndefinedRoute {...props}/>}/>
                </Switch>
            </Grid>
        )
    }
}

export default GhibliApp
