import React, { useState, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';

const List = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
        .then(response => response.json())
        .then (data => setCountries(data))
    }, [])
    console.log(countries)

    return (
        <FlatList
            data={countries}
            renderItem={Country}
        />
    );
};

const Country = ({ item }) => {
    return(
        <View>
            <Text>{item.name}</Text>
            <Text>{item.capital}</Text>
            <Text>{item.region}</Text>
        </View>
    )
}

export default List;