import React from "react";
import  { useRef, useEffect } from 'react';
import { View, Text, Image, StyleSheet,Animated } from "react-native";


const Item = ({ item }) => {
  
  const DayChange = () => {
    if(item.quote.USD.percent_change_24h<0){
    return (
      <View >
        <Text style={styles.colors1}>  24h % : {item.quote.USD.percent_change_24h}</Text>
      </View>
    );
    }
    else if (item.quote.USD.percent_change_24h>0){
      return(
      <View >
      <Text style={styles.colors}>  24h % : {item.quote.USD.percent_change_24h}</Text>
    </View>
      );
    }
  }
  const MonthChange = () => {
    if(item.quote.USD.percent_change_30d<0){
    return (
      <View >
        <Text style={styles.colors1}>  30d % : {item.quote.USD.percent_change_30d}</Text>
      </View>
    );
    }
    else if (item.quote.USD.percent_change_30d>0){
      return(
      <View >
      <Text style={styles.colors}>  30d % : {item.quote.USD.percent_change_30d}</Text>
    </View>
      );
    }
}
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
            
          <Text style={{color:'white',backgroundColor:'purple',fontSize:20,padding:5}}> {item.symbol}</Text>
          <Text style={{color:'white',backgroundColor:'purple',fontSize:20,padding:5}}> Name: {item.name}</Text>
          <Text style={{color:'white',backgroundColor:'purple',fontSize:20,padding:5}}> Price: {item.quote.USD.price}$</Text>
          <DayChange></DayChange>
         <MonthChange></MonthChange>
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
    backgroundColor:'limegreen',
    padding:5,
    fontSize:20
    
  },
  colors1:{
    color:'white',
    backgroundColor:'crimson',
    padding:5,
    fontSize:20
    
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
