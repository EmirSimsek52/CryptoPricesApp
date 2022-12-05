import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList,View,Text } from "react-native";
import Item from "./folders/Item";
import { fetchData } from "./folders/api";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  return (
    <SafeAreaView
    style={{
      backgroundColor:'black'
    }}>
         <View
         style={{
          backgroundColor:'black',
          borderWidth:0,
          borderBottomWidth:4,
          borderRadius:25 ,
          borderColor:'white',
          margin:10,
          padding:5
         }}>
        <Text style={{
            color:'white',
            alignSelf:'center',
            fontSize:35,
            margin:1,
            padding:1,
           
        }}
            >
             Cryptocurrencies Current Prices($)
        </Text>
    </View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default App;