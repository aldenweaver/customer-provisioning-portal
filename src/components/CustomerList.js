import React, {Component, PropTypes} from 'react';
import {List, ListItem, MakeSelectable} from 'material-ui/List';
import { FontIcon } from 'material-ui';
import { black } from 'material-ui/styles/colors';

let SelectableList = MakeSelectable(List);

function wrapState(ComposedComponent) {
    return class SelectableList extends Component {
        static propTypes = {
            children: PropTypes.node.isRequired,
            defaultValue: PropTypes.number.isRequired
        };

        componentWillMount() {
            this.setState({
                selectedIndex: this.props.defaultValue
            });
        }

        handleRequestChange = (event, index) => {
            this.setState({
                selectedIndex: index
            });
        };

        render() {
            return (
                <ComposedComponent
            value={this.state.selectedIndex}
            onChange={this.handleRequestChange}
        >
            {this.props.children}
        </ComposedComponent>
        );
        }
    };
}

SelectableList = wrapState(SelectableList);

export default class ListExampleSelectable extends React.Component {
    render() {
        return (
            <div>
                <SelectableList defaultValue={3}>
                    <ListItem
                        value={1}
                        primaryText="Brendan Lim"
                        leftAvatar={<FontIcon className="fa-user" color={black}/>}
                        nestedItems={[
                            <ListItem
                                value={2}
                                primaryText="Grace Ng"
                                leftAvatar={<FontIcon className="fa-user" color={black}/>}
                            />
                        ]}
                    />
                    <ListItem
                        value={3}
                        primaryText="Kerem Suer"
                        leftAvatar={<FontIcon className="muidocs-icon-action-home" color={black}/>}
                    />
                    <ListItem
                        value={4}
                        primaryText="Eric Hoffman"
                        leftAvatar={<FontIcon className="fa-user" color={black}/>}
                    />
                    <ListItem
                        value={5}
                        primaryText="Raquel Parrado"
                        leftAvatar={<FontIcon className="fa-user" color={black}/>}
                    />
                </SelectableList>
            </div>
        )
    }
}
