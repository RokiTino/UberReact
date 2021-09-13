import React from 'react'
import { SafeAreaView, StyleSheet, Text, View,Image } from 'react-native'
import tw from 'react-native-tailwind-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";

const HomeScreen = () => {



    return (
        <SafeAreaView style={[{backgroundColor:'white',},{height:1000}]}>
            <View style={[{padding:5,}]}>
                <Image 
                style={{
                    width:100,height:100,resizeMode:'contain',
                }}
                    source={{
                        uri: "https://links.papareact.com/gzs",
                    }}
                />
                <GooglePlacesAutocomplete
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={40}
                    placeholder="Where from"
                    styles ={{container:{flex:0,},textInput:{fontSize:18,},}}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language:'en',
                    }}
                />
            <NavOptions/>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
   
})
