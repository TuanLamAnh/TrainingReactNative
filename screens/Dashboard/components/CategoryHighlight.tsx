import { observer } from "mobx-react";
import React from "react";
import { FlatList,StyleSheet, Text, TouchableOpacity, View } from "react-native";
import bookStore from "../../../store/bookStore";
import { width } from "../../../utils/dimensions";
import { Product } from "../../../components/Product";
import { Title } from "../../../components/Title";

export const CategoryHighlight = observer(({ data, navigation }: any) => {
    const renderItem = ({ item }: any) => {return(
      <Product data = {item} navigation = {navigation}/>
    )};
  
    return (
        <View style = {{marginBottom: 20}}>
          <Title title = {data.name} icon = {data.thumbnail}/>
          <FlatList style={styles.flatList}
            data={data.books}
            renderItem={renderItem}
            keyExtractor={(item,index) => index.toString()}
            horizontal = { true}
            showsHorizontalScrollIndicator = {false}
            showsVerticalScrollIndicator = {false}
          />
           <TouchableOpacity style = {styles.button}
           onPress={() => {
            navigation.navigate("ListProduct",{
              id: data.id,});
            bookStore.setKey("");
        }}>
            <Text style = {styles.textButton}>Xem thêm</Text>
        </TouchableOpacity>
        </View>
      );
    }
  );
    
  
  const styles = StyleSheet.create({
      flatList: {
          display: 'flex',
         marginHorizontal: 10,
      },
      button: {
          backgroundColor: '#489620',
          paddingVertical: 10,
          paddingHorizontal: 10,
          borderRadius: 60,
          alignItems: 'center',
          width: 100,
          marginLeft: width/2-50,
          marginTop: 10,
      }
      ,
      textButton: {
          color: '#fff',
          fontSize: 16,
          fontWeight: 'bold',
      }
      
  });