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
        vehicles: state.vehicles
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(GhibliActions, dispatch)
}

class VehiclesOverview extends React.Component {
    componentWillMount() {
        this.props.getVehicles()
    }

    render() {
        return (
            <div className="vehicles-overview-container">
                <h4>Click row to view vehicle details</h4>
                <BootstrapTable
                    data={this.props.vehicles}
                    height="auto"
                    striped={true}
                    pagination={true}
                    search={true}
                    selectRow={{
                        mode: 'radio',
                        hideSelectColumn: true,
                        clickToSelect: true,
                        onSelect: row => this.props.history.push(`/vehicles/${row.id}`)
                    }}
                >
                    <TableHeaderColumn dataField="id" isKey={true}>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="name" dataSort={true}>Name</TableHeaderColumn>
                    <TableHeaderColumn
                        dataField="description"
                        tdStyle={{ overflow: "scroll", textOverflow: "initial" }}
                    >
                        Description
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="vehicle_class" dataSort={true}>Vehicle Class</TableHeaderColumn>
                    <TableHeaderColumn
                        dataField="length"
                        dataSort={true}
                        sortFunc={(a, b, order) => {
                            if (order === 'asc') {
                                return parseInt(a.length.replace(',', '')) - parseInt(b.length.replace(',', ''))
                            } else {
                                return parseInt(b.length.replace(',', '')) - parseInt(a.length.replace(',', ''))
                            }
                        }}
                    >
                        Length
                    </TableHeaderColumn>
                    <TableHeaderColumn
                        dataField="pilot"
                        dataSort={true}
                        tdStyle={{ overflow: "scroll", textOverflow: "initial" }}
                    >
                        Pilot
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

VehiclesOverview.propTypes = {
    vehicles: PropTypes.array.isRequired,
    getVehicles: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(VehiclesOverview)
