import React, { Component } from 'react';
import { observer } from 'mobx-react';

import LeftSideBar from '../components/LeftSideBar';



@observer
export default class CustomerLookup extends Component {
    render() {
        return (
            <div>
                <LeftSideBar/>
            </div>
        );
    }
};

