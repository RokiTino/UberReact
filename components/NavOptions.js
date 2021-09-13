import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { FlatList, Text, Image,TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
const data = [
    {
        id:"123",
        title:"Get a ride",
        image:"https://image.freepik.com/free-vector/modern-blue-urban-adventure-suv-vehicle-illustration_1344-205.jpg",
        screen:"MapScreen",
    },
    {
        id:"456",
        title:"Order food",
        image:"https://image.freepik.com/free-photo/3d-cheese-burger-cartoon-icon-illustration-3d-food-object-icon-concept-isolated-premium-design-flat-cartoon-style_138676-3573.jpg",
        screen:"EatsScreen",
    },
];

const NavOptions = () => {

    const navigation = useNavigation();

    return (
        <FlatList
            data = {data}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({item}) => (
                <TouchableOpacity
                    style={
                        [
                            {
                                padding:2,
                                paddingLeft:6,
                                paddingBottom:8,
                                paddingTop:4,
                                backgroundColor:'gray',
                                margin:2,
                            }
                        ]
                    }
                    onPress={()=>navigation.navigate(item.screen)}>
                    <View>
                        <Image
                            style={{width: 120,height: 120,resizeMode: 'contain',}}
                            source={{ uri: item.image }}
                        />
                        <Text style={["normal",{margin:2},{fontSize:15},]}>{item.title}</Text>
                        <Icon 
                            name = "arrowright" color="white" type="antdesign"
                            style={[{padding:2},{backgroundColor:"black"},{margin:4},{type:"rounded"}]}
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    );
}

export default NavOptions

