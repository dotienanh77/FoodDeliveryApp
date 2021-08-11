/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {COLORS, SIZES, FONTS, icons, GOOGLE_API_KEY} from '../constants';

const OrderDelivery = ({route, navigation}) => {
  const [restaurant, setRestaurant] = React.useState(null);
  const [streetName, setStreetName] = React.useState('');
  const [fromLocation, setFromLocation] = React.useState(null);
  const [toLocation, setToLocation] = React.useState(null);
  const [region, setRegion] = React.useState(null);

  React.useEffect(() => {
    //pass over from restaurant screen
    let {restaurant, currentLocation} = route.params;
  },[])

  function renderMap() {
    return (
      <View style={{flex: 1}}>
        <MapView style={{flex: 1}}>
          
        </MapView>
      </View>
    );
  }
  return (
    
      <View style={{flex: 1}}>{renderMap()}</View>
  );
};
export default OrderDelivery;
