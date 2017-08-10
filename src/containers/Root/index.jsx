import React from 'react'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Button from 'react-bootstrap/lib/Button'

class Root extends React.Component {
    render() {
        return (
            <Row>
                <Col xs={12} sm={6} smOffset={3}>
                    <Button bsStyle="primary" block>View Films</Button>
                    <Button bsStyle="primary" block>View People</Button>
                    <Button bsStyle="primary" block>View Locations</Button>
                    <Button bsStyle="primary" block>View Species</Button>
                    <Button bsStyle="primary" block>View Vehicles</Button>
                </Col>
            </Row>
        )
    }
}

export default Root
