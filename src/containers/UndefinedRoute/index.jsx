import React from 'react'
import PropTypes from 'prop-types'

class UndefinedRoute extends React.Component {
    componentWillMount() {
        this.props.history.push('/')
    }

    render() {
        return null
    }
}

UndefinedRoute.propTypes = {
    redirectTo: PropTypes.string,
    history: PropTypes.object.isRequired
}

UndefinedRoute.defaultProps = {
    redirectTo: '/'
}

export default UndefinedRoute
