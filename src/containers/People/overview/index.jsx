import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/lib/Button'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import * as GhibliActions from '../../../actions/ghibliActions'

function mapStateToProps(state) {
    return {
        people: state.people
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(GhibliActions, dispatch)
}

class PeopleOverview extends React.Component {
    componentWillMount() {
        this.props.getPeople()
    }

    render() {
        return (
            <div className="people-overview-container">
                <h4>Click row to view person details</h4>
                <BootstrapTable
                    data={this.props.people}
                    height="auto"
                    striped={true}
                    pagination={true}
                    search={true}
                    selectRow={{
                        mode: 'radio',
                        hideSelectColumn: true,
                        clickToSelect: true,
                        onSelect: row => this.props.history.push(`/people/${row.id}`)
                    }}
                >
                    <TableHeaderColumn dataField="id" isKey={true}>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="name" dataSort={true}>Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="gender" dataSort={true}>Description</TableHeaderColumn>
                    <TableHeaderColumn dataField="age" dataSort={true}>Age</TableHeaderColumn>
                    <TableHeaderColumn dataField="eye_color" dataSort={true}>Eye Color</TableHeaderColumn>
                    <TableHeaderColumn dataField="hair_color" dataSort={true}>Hair Color</TableHeaderColumn>
                    <TableHeaderColumn dataField="films" dataSort={true}>Films</TableHeaderColumn>
                    <TableHeaderColumn dataField="species" dataSort={true}>Species</TableHeaderColumn>
                </BootstrapTable>
                <Link to="/">
                    <Button bsStyle="warning">Back</Button>
                </Link>
            </div>
        )
    }
}

PeopleOverview.propTypes = {
    people: PropTypes.array.isRequired,
    getPeople: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleOverview)
