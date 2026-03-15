import React from "react";
import {View,Text,Image,Button, StyleSheet} from "react-native";

const  ProductCard = ({product}) => {

  return(

    <View style={styles.container}>

      <Image
        source={{uri:product.thumbnail}}
        style={styles.image}
        resizeMode="contain"
      />

      <Text>{product.title}</Text>

      <Text>{product.brand}</Text>

      <Text>${product.price}</Text>

      <Text>⭐⭐⭐⭐ {product.rating}</Text>

      <Text>Stock: {product.stock}</Text>
      <Button title="View Details"/>

    </View>

  )
}
export default React.memo(ProductCard);
const styles = StyleSheet.create({
    container:{
      padding:10,
      margin:10,
      borderWidth:1
    },
   image:{
   height:150,
   width:150
   }
})
