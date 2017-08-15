import React from 'react'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import PageHeader from 'react-bootstrap/lib/PageHeader'
import { Switch, Route } from 'react-router-dom'
import VehiclesOverview from './overview'
import VehicleDetails from './details'

class Vehicles extends React.Component {
    render() {
        return (
            <Row className="vehicles-container">
                <Col xs={12}>
                    <PageHeader>Vehicles</PageHeader>
                    <Switch>
                        <Route exact path="/vehicles" component={VehiclesOverview}/>
                        <Route path="/vehicles/:id" component={VehicleDetails}/>
                    </Switch>
                </Col>
            </Row>
        )
    }
}

export default Vehicles
