import React, { useState, useEffect } from 'react';
import { 
    View, 
    FlatList, 
    Text, 
    ActivityIndicator, 
    StyleSheet,
    Pressable} from 'react-native';
import { Modal, Provider } from '@ant-design/react-native'
import LanguagesModal from './LanguagesModal';

const styles = StyleSheet.create({
    countryContainer: {
        margin: 10,
        alignItems: 'center'
    },
    country: {
        fontSize: 18
    },
    capital: {
        fontWeight: 'bold',
    },
    region: {
        fontStyle: 'italic',
    }
    // modal: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: 'coral',
    //     padding: 20,
    // }
})

const List = () => {

    const [countries, setCountries] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState(null)

    
    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
        .then(response => response.json())
        .then (data => setCountries(data))
    }, [])
    
    // Fonctions
    const handlePressVisible = (element) => {
        setIsModalVisible(true)
        setSelectedCountry(element)
    }

    const handlePressNotVisible = () => {
        setIsModalVisible(false)
    }

    // Condition
    if (!countries) {
        <ActivityIndicator />
    }

    return (
        <Provider>
            <Modal 
                title='Languages'
                transparent
                onClose={handlePressNotVisible}
                visible={isModalVisible}
                closable
            >
                {/* <View> */}
                <LanguagesModal selectedCountry={selectedCountry} />
                {/* <Pressable onPress={handlePressNotVisible}>
                    <Text>Close</Text>
                </Pressable> */}
                {/* </View> */}
            </Modal>
        
            <FlatList
                keyExtractor={item => item.name}
                data={countries}
                renderItem={({item}) => (
                    <Country 
                        item={item}
                        onPress={() => handlePressVisible(item)}
                    />
                )} 
            />
        </Provider>
    );
};

const Country = ({ item, onPress }) => {
    return(
        <View style={styles.countryContainer}>
            <Pressable onPress={onPress}>
                <Text style={styles.country}>{item.name}</Text>
            </Pressable>
            <Text style={styles.capital}>{item.capital}</Text>
            <Text style={styles.region}>{item.region}</Text>
        </View>
    )
}

export default List;