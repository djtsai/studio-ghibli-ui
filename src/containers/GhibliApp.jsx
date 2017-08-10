import React from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import { Switch, Route } from 'react-router-dom'
import Root from './Root'

class GhibliApp extends React.Component {
    render() {
        return (
            <Grid className="ghibli-container" fluid={true}>
                <Switch>
                    <Route exact path="/" component={Root}/>
                </Switch>
            </Grid>
        )
    }
}

export default GhibliApp
