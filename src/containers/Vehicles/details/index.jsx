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
        vehicle: state.vehicle
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(GhibliActions, dispatch)
}

class VehicleDetails extends React.Component {
    componentWillMount() {
        this.props.getVehicle(this.props.match.params.id)
    }

    componentWillUnmount() {
        this.props.clearVehicle()
    }

    render() {
        return (
            <Panel bsStyle="primary" header={<h4>{this.props.vehicle.name}</h4>}>
                <DescriptionItem title="Climate" value={this.props.vehicle.description}/>
                <DescriptionItem title="Vehicle Class" value={this.props.vehicle.vehicle_class}/>
                <DescriptionItem title="Length" value={this.props.vehicle.length}/>
                <DescriptionItem title="Pilot" value={this.props.vehicle.pilot} domainLink="people"/>
                <DescriptionItem title="Films" value={this.props.vehicle.films} domainLink="films"/>
                <Link to="/vehicles">
                    <Button bsStyle="warning">Back to Vehicles</Button>
                </Link>
            </Panel>
        )
    }
}

VehicleDetails.propTypes = {
    vehicle: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        vehicle_class: PropTypes.string.isRequired,
        length: PropTypes.string.isRequired,
        pilot: PropTypes.string.isRequired,
        films: PropTypes.string.isRequired
    }).isRequired,
    getVehicle: PropTypes.func.isRequired,
    clearVehicle: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleDetails)
