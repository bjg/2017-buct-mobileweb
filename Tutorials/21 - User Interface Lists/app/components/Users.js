import React, { Component } from 'react'

import {
    FlatList,
    View,
    Text,
    TouchableHighlight,
    StyleSheet
} from 'react-native'
import {List, ListItem} from 'react-native-elements'

export default class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            error: null
        }
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/?seed=1&page=1&results=20')
            .then( response => response.json() )
            .then( data => this.setState({
                users: data.results
            }))
            .catch( error => alert(error))
    }

    render() {
        return (
            <List>
                <FlatList
                    data={this.state.users}
                    keyExtractor={item => item.email}
                    renderItem={ ({item}) => (
                        <ListItem
                            roundAvatar
                            title={ `${item.name.first} ${item.name.last}` }
                            subtitle={item.email}
                            avatar={ { uri: item.picture.thumbnail } }
                        />
                    )}
                />
            </List>
        )
    }
}

const styles = StyleSheet.create({
    user: {
        fontSize: 30,
        padding: 5
    }
  });
