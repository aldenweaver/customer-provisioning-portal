import React from 'react';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';

import CustomerSearch from '../components/CustomerSearch';
import CustomerList from '../components/CustomerList';

export default class LeftSideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        return (
            <div>
                <RaisedButton
                    label="Customer Search"
                    onTouchTap={this.handleToggle}
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <CustomerSearch onTouchTap={this.handleClose}/>
                    <CustomerList onTouchTap={this.handleClose}/>
                </Drawer>
            </div>
        );
    }
}

