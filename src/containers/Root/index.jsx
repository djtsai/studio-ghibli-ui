import React from 'react'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Button from 'react-bootstrap/lib/Button'
import { Link } from 'react-router-dom'

import './index.scss'

class Root extends React.Component {
    render() {
        return (
            <Row className="root-container">
                <Col xs={12} sm={6} smOffset={3}>
                    <Link to="/films">
                        <Button bsStyle="primary" block>View Films</Button>
                    </Link>
                    <Link to="/people">
                        <Button bsStyle="primary" block>View People</Button>
                    </Link>
                    <Link to="/locations">
                        <Button bsStyle="primary" block>View Locations</Button>
                    </Link>
                    <Button bsStyle="primary" block>View Species</Button>
                    <Button bsStyle="primary" block>View Vehicles</Button>
                </Col>
            </Row>
        )
    }
}

export default Root
