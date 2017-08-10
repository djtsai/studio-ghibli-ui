import React from 'react'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import PageHeader from 'react-bootstrap/lib/PageHeader'
import { Switch, Route } from 'react-router-dom'
import FilmsOverview from './overview'
import UndefinedRoute from '../../components/UndefinedRoute'

class Films extends React.Component {
    render() {
        return (
            <Row className="films-container">
                <Col xs={12}>
                    <PageHeader>Films</PageHeader>
                    <Switch>
                        <Route exact path="/films" component={FilmsOverview}/>
                        <Route path="/films" render={props => <UndefinedRoute {...props} redirectTo="/films"/>}/>
                    </Switch>
                </Col>
            </Row>
        )
    }
}

export default Films
