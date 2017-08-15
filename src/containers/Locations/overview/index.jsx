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
        locations: state.locations
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(GhibliActions, dispatch)
}

class LocationsOverview extends React.Component {
    componentWillMount() {
        this.props.getLocations()
    }

    render() {
        return (
            <div className="locations-overview-container">
                <h4>Click row to view location details</h4>
                <BootstrapTable
                    data={this.props.locations}
                    height="auto"
                    striped={true}
                    pagination={true}
                    search={true}
                    selectRow={{
                        mode: 'radio',
                        hideSelectColumn: true,
                        clickToSelect: true,
                        onSelect: row => this.props.history.push(`/locations/${row.id}`)
                    }}
                >
                    <TableHeaderColumn dataField="id" isKey={true}>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="name" dataSort={true}>Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="climate" dataSort={true}>Climate</TableHeaderColumn>
                    <TableHeaderColumn dataField="terrain" dataSort={true}>Terrain</TableHeaderColumn>
                    <TableHeaderColumn
                        dataField="surface_water"
                        dataSort={true}
                        sortFunc={(a, b, order) => {
                            if (order === 'asc') {
                                return parseInt(a.surface_water) - parseInt(b.surface_water)
                            } else {
                                return parseInt(b.surface_water) - parseInt(a.surface_water)
                            }
                        }}
                    >
                        Surface Water
                    </TableHeaderColumn>
                    <TableHeaderColumn
                        dataField="residents"
                        dataSort={true}
                        tdStyle={{ overflow: "scroll", textOverflow: "initial" }}
                    >
                        Residents
                    </TableHeaderColumn>
                    <TableHeaderColumn
                        dataField="films"
                        dataSort={true}
                        tdStyle={{ overflow: "scroll", textOverflow: "initial" }}
                    >
                        Films
                    </TableHeaderColumn>
                </BootstrapTable>
                <Link to="/">
                    <Button bsStyle="warning">Back</Button>
                </Link>
            </div>
        )
    }
}

LocationsOverview.propTypes = {
    locations: PropTypes.array.isRequired,
    getLocations: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationsOverview)
