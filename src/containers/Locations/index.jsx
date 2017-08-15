import React from 'react'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import PageHeader from 'react-bootstrap/lib/PageHeader'
import { Switch, Route } from 'react-router-dom'
import LocationsOverview from './overview'
import LocationDetails from './details'

class Locations extends React.Component {
    render() {
        return (
            <Row className="locations-container">
                <Col xs={12}>
                    <PageHeader>Locations</PageHeader>
                    <Switch>
                        <Route exact path="/locations" component={LocationsOverview}/>
                        <Route path="/locations/:id" component={LocationDetails}/>
                    </Switch>
                </Col>
            </Row>
        )
    }
}

export default Locations
