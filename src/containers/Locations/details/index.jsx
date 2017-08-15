import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import DescriptionItem from '../../../components/DescriptionItem'
import * as GhibliActions from '../../../actions/ghibliActions'

function mapStateToProps(state) {
    return {
        location: state.location
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(GhibliActions, dispatch)
}

class LocationDetails extends React.Component {
    componentWillMount() {
        this.props.getLocation(this.props.match.params.id)
    }

    componentWillUnmount() {
        this.props.clearLocation()
    }

    render() {
        return (
            <Panel bsStyle="primary" header={<h4>{this.props.location.name}</h4>}>
                <DescriptionItem title="Climate" value={this.props.location.climate}/>
                <DescriptionItem title="Terrain" value={this.props.location.terrain}/>
                <DescriptionItem title="Surface Water" value={this.props.location.surface_water}/>
                <DescriptionItem title="Residents" value={this.props.location.residents} domainLink="people"/>
                <DescriptionItem title="Films" value={this.props.location.films} domainLink="films"/>
                <Link to="/locations">
                    <Button bsStyle="warning">Back to Locations</Button>
                </Link>
            </Panel>
        )
    }
}

LocationDetails.propTypes = {
    location: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        climate: PropTypes.string.isRequired,
        terrain: PropTypes.string.isRequired,
        surface_water: PropTypes.string.isRequired,
        residents: PropTypes.array.isRequired,
        films: PropTypes.array.isRequired
    }).isRequired,
    getLocation: PropTypes.func.isRequired,
    clearLocation: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationDetails)
