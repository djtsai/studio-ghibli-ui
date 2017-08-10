import React from 'react'
import PropTypes from 'prop-types'

class UndefinedRoute extends React.Component {
    componentWillMount() {
        this.props.history.push(this.props.redirectTo)
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
