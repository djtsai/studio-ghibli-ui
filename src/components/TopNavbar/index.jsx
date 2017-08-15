import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'

class TopNavbar extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.context = context
        this.state = {
            activeItem: context.router.route.location.pathname.split('/')[1] || ''
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const nextActiveItem = nextContext.router.route.location.pathname.split('/')[1]
        if (this.state.activeItem !== nextActiveItem) {
            this.setState({ activeItem: nextActiveItem })
        }
    }

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Studio Ghibli UI</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav
                    activeKey={this.state.activeItem}
                    onSelect={eventKey => this.context.router.history.push(`/${eventKey}`)}
                >
                    <NavItem eventKey="films">Films</NavItem>
                    <NavItem eventKey="people">People</NavItem>
                    <NavItem eventKey="locations">Locations</NavItem>
                    <NavItem eventKey="species">Species</NavItem>
                    <NavItem eventKey="vehicles">Vehicles</NavItem>
                </Nav>
            </Navbar>
        )
    }
}

TopNavbar.contextTypes = {
    router: PropTypes.object.isRequired
}

export default TopNavbar
