import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './style';

// Class type react-native

interface CAppProps {
    name: string;
    age: string;
    style: Object;
}
interface CAppState {
    name: string;
    age: string;
    style: Object;
}

export class CApp extends Component<CAppProps, CAppState> {
    constructor(props: CAppProps) {
        super(props); {/** for removing indicating error from super, using CAppProps */ }
        this.state = {
            name: 'Saksham Verma',
            age: '23',
            style: styles
        }
    }
    render() {
        return (
            <View>
                <Text style={this.state.style.ChildBText}>Name: {this.state.name}</Text>
                {/* * for removing indicating error from state, using CAppState */}
                <Text style={this.state.style.ChildBText}>Age: {this.state.age}</Text>
            </View>
        )
    }
}

export default CApp