import React from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import { Switch, Route } from 'react-router-dom'
import Root from './Root'
import Films from './Films'
import People from './People'
import Locations from './Locations'
import UndefinedRoute from '../components/UndefinedRoute'

class GhibliApp extends React.Component {
    render() {
        return (
            <Grid className="ghibli-container" fluid={true}>
                <Switch>
                    <Route exact path="/" component={Root}/>
                    <Route path="/films" component={Films}/>
                    <Route path="/people" component={People}/>
                    <Route path="/locations" component={Locations}/>
                    <Route path="/" component={UndefinedRoute}/>
                </Switch>
            </Grid>
        )
    }
}

export default GhibliApp
