import React from 'react'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import PageHeader from 'react-bootstrap/lib/PageHeader'
import { Switch, Route } from 'react-router-dom'
import PeopleOverview from './overview'
import PersonDetails from './details'

class People extends React.Component {
    render() {
        return (
            <Row className="people-container">
                <Col xs={12}>
                    <PageHeader>People</PageHeader>
                    <Switch>
                        <Route exact path="/people" component={PeopleOverview}/>
                        <Route path="/people/:id" component={PersonDetails}/>
                    </Switch>
                </Col>
            </Row>
        )
    }
}

export default People
