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
        species: state.species
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(GhibliActions, dispatch)
}

class SpeciesDetails extends React.Component {
    componentWillMount() {
        this.props.getSpecies(this.props.match.params.id)
    }

    componentWillUnmount() {
        this.props.clearSpecies()
    }

    render() {
        return (
            <Panel bsStyle="primary" header={<h4>{this.props.species.name}</h4>}>
                <DescriptionItem title="Classification" value={this.props.species.classification}/>
                <DescriptionItem title="Eye Colors" value={this.props.species.eye_colors}/>
                <DescriptionItem title="Hair Colors" value={this.props.species.hair_colors}/>
                <DescriptionItem title="People" value={this.props.species.people} domainLink="people"/>
                <DescriptionItem title="Films" value={this.props.species.films} domainLink="films"/>
                <Link to="/species">
                    <Button bsStyle="warning">Back to Species</Button>
                </Link>
            </Panel>
        )
    }
}

SpeciesDetails.propTypes = {
    species: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        classification: PropTypes.string.isRequired,
        eye_colors: PropTypes.string.isRequired,
        hair_colors: PropTypes.string.isRequired,
        people: PropTypes.array.isRequired,
        films: PropTypes.array.isRequired
    }).isRequired,
    getSpecies: PropTypes.func.isRequired,
    clearSpecies: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeciesDetails)
