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
        speciesList: state.speciesList
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(GhibliActions, dispatch)
}

class SpeciesOverview extends React.Component {
    componentWillMount() {
        this.props.getSpeciesList()
    }

    render() {
        return (
            <div className="species-overview-container">
                <h4>Click row to view species details</h4>
                <BootstrapTable
                    data={this.props.speciesList}
                    height="auto"
                    striped={true}
                    pagination={true}
                    search={true}
                    selectRow={{
                        mode: 'radio',
                        hideSelectColumn: true,
                        clickToSelect: true,
                        onSelect: row => this.props.history.push(`/species/${row.id}`)
                    }}
                >
                    <TableHeaderColumn dataField="id" isKey={true}>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="name" dataSort={true}>Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="classification" dataSort={true}>Classification</TableHeaderColumn>
                    <TableHeaderColumn
                        dataField="eye_colors"
                        dataSort={true}
                        tdStyle={{ overflow: "scroll", textOverflow: "initial" }}
                    >
                        Eye Colors
                    </TableHeaderColumn>
                    <TableHeaderColumn
                        dataField="hair_colors"
                        dataSort={true}
                        tdStyle={{ overflow: "scroll", textOverflow: "initial" }}
                    >
                        Hair Colors
                    </TableHeaderColumn>
                    <TableHeaderColumn
                        dataField="people"
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

SpeciesOverview.propTypes = {
    speciesList: PropTypes.array.isRequired,
    getSpeciesList: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeciesOverview)
