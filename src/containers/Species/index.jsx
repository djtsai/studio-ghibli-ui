import React from 'react'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import PageHeader from 'react-bootstrap/lib/PageHeader'
import { Switch, Route } from 'react-router-dom'
import SpeciesOverview from './overview'
import SpeciesDetails from './details'

class Species extends React.Component {
    render() {
        return (
            <Row className="species-container">
                <Col xs={12}>
                    <PageHeader>Species</PageHeader>
                    <Switch>
                        <Route exact path="/species" component={SpeciesOverview}/>
                        <Route path="/species/:id" component={SpeciesDetails}/>
                    </Switch>
                </Col>
            </Row>
        )
    }
}

export default Species
