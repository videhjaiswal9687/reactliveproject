import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from './Action'
import { Button, Table } from 'react-bootstrap'
class Users extends Component {
    render() {
        return (
            <div>
                <h1>Users</h1>
                <Button onClick={() => this.props.getUsers()}>Download</Button>
                {this.props.loading ? <h1 style={{ color: 'teal' }}>Download...</h1> :
                    <Table responsive border='1' style={{ backgroundColor: 'brown', color: 'white' }}>
                        {this.props.users.length > 0 ? <thead>
                            <tr>
                                <th>Name</th>
                                <th>UserName</th>
                                <th>Email</th>
                                <th>City</th>
                            </tr>
                        </thead> : null}
                        <tbody>
                            {this.props.users.map(user =>
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address.city}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.user.loading,
        users: state.user.users,
        error: state.user.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => dispatch(fetchUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)