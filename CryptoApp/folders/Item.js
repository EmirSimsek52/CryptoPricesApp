import React from "react";
import  { useRef, useEffect } from 'react';
import { View, Text, Image, StyleSheet,Animated } from "react-native";

const Item = ({ item }) => {
  return (
    <>
      <FadeInView>
      <View style={styles.container}>
        <View
        style={{backgroundColor:'purple'}}>
        <Image
          source={{
            uri: `https://s2.coinmarketcap.com/static/img/coins/64x64/${item.id}.png`,
          }}
          style={{ width: 64, height: 64,margin:10  }}
        />
        </View>
        <View style={styles.texts}>
            
          <Text style={styles.colors}> {item.symbol}</Text>
          <Text style={styles.colors}> Name: {item.name}</Text>
          <Text style={styles.colors}> Price: {item.quote.USD.price}$</Text>
        </View>
      </View>
     
      </FadeInView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    paddingHorizontal: 16,
    paddingVertical: 12,
    
  },
  texts: {
    marginStart: 0,

  },
  divider: {
    
   
    
  },
  colors:{
    color:'white',
    backgroundColor:'purple',
    padding:5
    
  }
});
const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 10000/2,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 
      style={{
        ...props.style,
        opacity: fadeAnim,        
      }}
    >
      {props.children}
    </Animated.View>
  );
}
export default Item;