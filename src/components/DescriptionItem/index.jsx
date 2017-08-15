import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Label from 'react-bootstrap/lib/Label'
import getIdFromUrl from '../../utils/getIdFromUrl'

class DescriptionItem extends React.Component {
    constructor(props) {
        super(props)

        this.createLink = this.createLink.bind(this)
        this.renderValue = this.renderValue.bind(this)
    }

    createLink(value) {
        const id = getIdFromUrl(value)

        return this.props.domainLink === '' ? value : <Link to={`/${this.props.domainLink}/${id}`}>{id}</Link>
    }

    renderValue() {
        return this.props.value.constructor === Array
            ? (
                this.props.value.map((value, index) => (
                    <p key={index}>{this.createLink(value)}</p>
                ))
            ) : (
                <p>{this.createLink(this.props.value)}</p>
            )
    }

    render() {
        return (
            <div className="description-item">
                <h4><Label>{this.props.title}</Label></h4>
                {this.renderValue(this.props.value)}
            </div>
        )
    }
}

DescriptionItem.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    domainLink: PropTypes.string
}

DescriptionItem.defaultProps = {
    domainLink: ''
}

export default DescriptionItem
