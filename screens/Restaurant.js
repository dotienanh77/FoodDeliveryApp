/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Animated,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {icons, COLORS, SIZES, FONTS} from '../constants';
const Restaurant = ({route, navigation}) => {
  const [restaurant, setRestaurant] = React.useState(null);
  const [currentLocation, setCurrentLocation] = React.useState(null);

  React.useEffect(() => {
    let {item, currentLocation} = route.params;
    setRestaurant(item);
    setCurrentLocation(currentLocation);
  });
  function renderHeader() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: 'center',
          }}
          onPress={() => navigation.goBack()}>
          <Image
            style={{width: 30, height: 30}}
            source={icons.back}
            resizeMode="contain"
          />
        </TouchableOpacity>
        {/* Restaurant Name section */}
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              height: 50,
              backgroundColor: COLORS.lightGray3,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: SIZES.radius,
              paddingHorizontal: SIZES.padding * 3,
            }}>
            <Text style={{...FONTS.h3}}>{restaurant?.name}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: SIZES.padding * 2,
            justifyContent: 'center',
          }}
          // onPress={() => navigation.goBack()}
        >
          <Image
            style={{width: 30, height: 30}}
            source={icons.list}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    );
  }
  function renderFoodInfo() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        // onScroll
      >
        {/* Render food image - use map method */}
        {restaurant?.menu.map((item, index) => (
          <View style={{alignItems: 'center'}} key={`menu-${index}`}>
            <View style={{height: SIZES.height * 0.35}}>
              <Image
                source={item.photo}
                resizeMode="cover"
                style={{
                  width: SIZES.width,
                  height: '100%',
                }}
              />
              {/* Quatity section */}
              <View
                style={{
                  position: 'absolute',
                  bottom: -20,
                  width: SIZES.width,
                  height: 50,
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  style={{
                    width: 50,
                    backgroundColor: COLORS.white,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderTopLeftRadius: 25,
                    borderBottomLeftRadius: 25,
                  }}>
                  <Text style={{...FONTS.body1}}>-</Text>
                </TouchableOpacity>
                <View
                  style={{
                    width: 50,
                    backgroundColor: COLORS.white,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{...FONTS.h2}}>5</Text>
                </View>
                <TouchableOpacity
                  style={{
                    width: 50,
                    backgroundColor: COLORS.white,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderTopRightRadius: 25,
                    borderBottomRightRadius: 25,
                  }}>
                  <Text style={{...FONTS.body1}}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderFoodInfo()}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },
});
export default Restaurant;
