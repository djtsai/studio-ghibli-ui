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
        film: state.film
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(GhibliActions, dispatch)
}

class FilmDetails extends React.Component {
    componentWillMount() {
        this.props.getFilm(this.props.match.params.id)
    }

    componentWillUnmount() {
        this.props.clearFilm()
    }

    render() {
        return (
            <Panel bsStyle="primary" header={<h4>{this.props.film.title}</h4>}>
                <DescriptionItem title="Description" value={this.props.film.description}/>
                <DescriptionItem title="Director" value={this.props.film.director}/>
                <DescriptionItem title="Producer" value={this.props.film.producer}/>
                <DescriptionItem title="Release Date" value={this.props.film.release_date}/>
                <DescriptionItem title="Rotten Tomatoes Score" value={this.props.film.rt_score}/>
                <Link to="/films">
                    <Button bsStyle="warning">Back to Films</Button>
                </Link>
            </Panel>
        )
    }
}

FilmDetails.propTypes = {
    film: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        producer: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        rt_score: PropTypes.string.isRequired
    }).isRequired,
    getFilm: PropTypes.func.isRequired,
    clearFilm: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetails)
