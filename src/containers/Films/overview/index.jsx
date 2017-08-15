import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import * as GhibliActions from '../../../actions/ghibliActions'

function mapStateToProps(state) {
    return {
        films: state.films
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(GhibliActions, dispatch)
}

class FilmsOverview extends React.Component {
    componentWillMount() {
        this.props.getFilms()
    }

    render() {
        return (
            <div className="films-overview-container">
                <h4>Click row to view film details</h4>
                <BootstrapTable
                    data={this.props.films}
                    height="auto"
                    striped={true}
                    pagination={true}
                    search={true}
                    selectRow={{
                        mode: 'radio',
                        hideSelectColumn: true,
                        clickToSelect: true,
                        onSelect: row => this.props.history.push(`/films/${row.id}`)
                    }}
                >
                    <TableHeaderColumn dataField="id" isKey={true}>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="title" dataSort={true}>Title</TableHeaderColumn>
                    <TableHeaderColumn
                        dataField="description"
                        tdStyle={{ overflow: "scroll", textOverflow: "initial" }}
                    >
                        Description
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="director" dataSort={true}>Director</TableHeaderColumn>
                    <TableHeaderColumn dataField="producer" dataSort={true}>Producer</TableHeaderColumn>
                    <TableHeaderColumn dataField="release_date" width="128px" dataSort={true}>
                        Release Date
                    </TableHeaderColumn>
                    <TableHeaderColumn
                        dataField="rt_score"
                        width="100px"
                        dataSort={true}
                        sortFunc={(a, b, order) => {
                            if (order === 'asc') {
                                return parseInt(a.rt_score) - parseInt(b.rt_score)
                            } else {
                                return parseInt(b.rt_score) - parseInt(a.rt_score)
                            }
                        }}
                    >
                        RT Score
                    </TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}

FilmsOverview.propTypes = {
    films: PropTypes.array.isRequired,
    getFilms: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmsOverview)
