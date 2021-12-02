import React from 'react';
import { FlatList, View, Text } from 'react-native';

const LanguagesModal = ({selectedCountry}) => {
    return (
        <FlatList
        data={selectedCountry.languages}
        renderItem={Languages}
        />
    );
};

const Languages = ({ item }) => {
    return (
        <View>
            <Text>
                {item.name}
            </Text>
        </View>
    )
}

export default LanguagesModal;