import React from 'react'
import PropTypes from 'prop-types'

class DescriptionItem extends React.Component {
    render() {
        return (
            <div className="description-item">
                <h5>{this.props.title}</h5>
                <p>{this.props.value}</p>
            </div>
        )
    }
}

DescriptionItem.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default DescriptionItem
