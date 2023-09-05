import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';

import BaseThemeComponent from '../base-theme';
import UserProps from './model/user-prop';

class UserComponent extends BaseThemeComponent<UserProps> {

    get displayText(): boolean {
        return this.props.displayText;
    }

    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <Image style={styles.imageContainer} source={{ uri: 'https://media.istockphoto.com/id/1336246945/photo/beauty-portrait-of-african-american-girl-with-afro-hair.jpg?s=612x612&w=0&k=20&c=Sj-7HB9bj8nBwj3lWSgML1d4LrFlaWd6wJgpfWKIhBM=' }}></Image>
                {this.displayText ? (
                    <View style={styles.textContainer}>
                        <Text style={styles.userName}>User Name</Text>
                        <Text style={styles.editProfile}>Profile name</Text>
                    </View>
                ) : null}
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    imageContainer: {
        width: 65,
        height: 65,
        borderRadius: 32.5,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 15,
        shadowOpacity: .4,
    },
    textContainer: {
        display: 'flex',
        marginLeft: 15
    },
    userName: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    editProfile: {
        color: 'white',
        marginTop: 3
    }
});

export default connect(BaseThemeComponent.mapStateToProps, BaseThemeComponent.mapDispatchToProps)(UserComponent);
