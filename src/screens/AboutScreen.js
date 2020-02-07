import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

export const AboutScreen = ({}) => {
    return (
        <View style={styles.center}>
            <Text> Best app for personal notes! </Text>
            <Text style={styles.version}> v1.0.0 </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    version: {
       fontFamily: 'open-bold' 
    }
});

AboutScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'About application',
    headerLeft: (
        <HeaderButtons HeaderButtonComponent={ AppHeaderIcon } >
            <Item  
                title='Toggle Drawer' 
                iconName='ios-menu' 
                onPress={ () => navigation.toggleDrawer()} 
            />
        </HeaderButtons>
    )  
});

