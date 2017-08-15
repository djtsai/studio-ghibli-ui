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
        person: state.person
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(GhibliActions, dispatch)
}

class PersonDetails extends React.Component {
    componentWillMount() {
        this.props.getPerson(this.props.match.params.id)
    }

    componentWillUnmount() {
        this.props.clearPerson()
    }

    render() {
        return (
            <Panel bsStyle="primary" header={<h4>{this.props.person.name}</h4>}>
                <DescriptionItem title="Gender" value={this.props.person.gender}/>
                <DescriptionItem title="Age" value={this.props.person.age}/>
                <DescriptionItem title="Eye Color" value={this.props.person.eye_color}/>
                <DescriptionItem title="Hair Color" value={this.props.person.hair_color}/>
                <DescriptionItem title="Films" value={this.props.person.films} domainLink="films"/>
                <DescriptionItem title="Species" value={this.props.person.species} domainLink="species"/>
                <Link to="/people">
                    <Button bsStyle="warning">Back to People</Button>
                </Link>
            </Panel>
        )
    }
}

PersonDetails.propTypes = {
    person: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        eye_color: PropTypes.string.isRequired,
        hair_color: PropTypes.string.isRequired,
        films: PropTypes.array.isRequired,
        species: PropTypes.string.isRequired
    }).isRequired,
    getPerson: PropTypes.func.isRequired,
    clearPerson: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonDetails)
