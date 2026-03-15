import React,{useEffect,useState} from "react";
import {FlatList,TextInput, StyleSheet, View, Button} from "react-native";
import ProductCard from "../../components/ProductCard";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from "react-redux";
import { Logout } from "../../redux/loginSlice";
import useProducts from "../../Hooks/hooks";

const  ProductListScreen = () => {

const dispatch = useDispatch();
const {products,fetchProducts,searchProducts} = useProducts();
const [skip,setSkip] = useState(0);
const [search,setSearch] = useState("");

useEffect(()=>{
fetchProducts();
},[])

const handleSearch = (text)=>{
setSearch(text)
searchProducts(text)
}

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.textcontent}>
      <View style={styles.input}>
      <Icon name="search" size={25} color="black" />
      <TextInput
        placeholder="Search products......"
        value={search}
        onChangeText={handleSearch}
        />
      </View>
        <Button title="Logout" onPress={()=>{
        dispatch(Logout())
      }} />
      </View>

      <FlatList
       data={products}
       keyExtractor={(item, index) => `${item.id}-${index}`}
       renderItem={({item})=>(
        <ProductCard product={item}/>
       )}

       onEndReached={()=>{
        setSkip(skip+10)
        fetchProducts()
       }}
  showsVerticalScrollIndicator={false}
      />

    </SafeAreaView>
  )
}

export default ProductListScreen;
const styles = StyleSheet.create({
    container:{
        flex:1,
         backgroundColor: '#f5f5f5',
    },
    textcontent:{
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  marginRight:15
    },
    input:{
      marginHorizontal:10,
      paddingLeft:5,
      marginVertical:2,
      borderWidth:1,
      borderRadius:5,
      backgroundColor:'#fff',
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      width:'70%'
    }
})