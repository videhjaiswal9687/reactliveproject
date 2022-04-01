import React from "react";
import {Message,Login,Logout} from './Content'


// Parent Homepage Component
class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = { isLoggedIn: false };

        this.ifLoginClicked = this.ifLoginClicked.bind(this);
        this.ifLogoutClicked = this.ifLogoutClicked.bind(this);
    }

    ifLoginClicked() {
        this.setState({ isLoggedIn: true });
    }

    ifLogoutClicked() {
        this.setState({ isLoggedIn: false });
    }

    render() {

        return (

            <div>

                <Message isLoggedIn={this.state.isLoggedIn} />

                {
                    (this.state.isLoggedIn) ? (
                        <Logout clickFunc={this.ifLogoutClicked} />
                    ) : (
                        <Login clickFunc={this.ifLoginClicked} />
                    )
                }

            </div>

        );
    }
}

export default Home;