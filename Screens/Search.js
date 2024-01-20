import React, { useState } from 'react';
import { Dimensions,Image,SafeAreaView,StyleSheet,Text,View } from 'react-native';
import { FlatList,ScrollView,TextInput,TouchableHighlight,TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../Const/Colors';
import {  useSelector } from 'react-redux';
import { restaurantrecipe } from '../Const/ApiData';



const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;


const Search = ({meals}) => {
const [ filter,setFilterData ] = useState([]);
const [ search,setSearch ] = useState('');

const SearchItem = useSelector(state => state.product);


const SearchFilter = (text) => {
if(text){
  const newData = meals.filter((item) => {
    console.log("data",newData)  
   const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase(); 
    const textData = text.toUpperCase();
    return itemData.indexOf(textData) > -1;
  });
  setFilterData(newData);
  setSearch(text);
}else{
  setFilterData(null);
  setSearch(text);
 }
}
  
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
        <View style={style.inputContainer}>
          <Icon name="search" size={28} />
          <TextInput
            style={{flex: 1, fontSize: 18,height:50}}
            placeholder="Search"
            value={search}
            onChangeText={(text) => SearchFilter(text)}/>   
        </View> 
     {filter?.map((item,i) => {
      return(
          <View key={i} style={{flex:1,justifyContent:'center',alignItems:'center'}} >
          <TouchableHighlight
          underlayColor={COLORS.white}
          activeOpacity={0.9}>
        
          <View style={style.card}>
            <View style={{alignItems: 'center', top: -30}}>
              <Image source={item.image} style={{width:130, height:100, borderRadius:20}} />
            </View>
            <View style={{marginHorizontal: 20}}>
              <Text style={{fontSize: 16, fontWeight:'500',color:COLORS.dark}}>{item.name}</Text>
                </View>   
                
          </View>
        </TouchableHighlight>          
          </View>
      )
     })}
    
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
 
  inputContainer: {
    flex: 1,
    width:"90%",
    height: "110%",
    marginLeft:15,
    borderRadius: 30,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
 
  card: {
    height: 180,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 10,
    backgroundColor: COLORS.white,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    marginRight:10,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Search;