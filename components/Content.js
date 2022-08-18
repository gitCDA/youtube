import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import MiniCards from './cards/MiniCards'
import MaxiCards from './cards/MaxiCards'
import MaxiVideo from './cards/MaxiVideo'
import { categories } from '../constante/categories'
import { videos } from '../constante/videos'


const Content = () => {
  return (
  <View style={styles.content}>
      
    <Text style={styles.textcontent}>Catégories</Text>

    <FlatList
      contentContainerStyle= { styles.flatlisttendances}

      data={categories}

      renderItem={ ({item})=> <MaxiCards type='categories' item = { item } /> }

      keyExtractor={(item) => item.id}

      horizontal
    />

    <FlatList
      contentContainerStyle= { styles.flatlisttendances} 

      // horizontal

      data={videos}

      renderItem={ ({item}) => <MaxiCards item = { item } /> }

      keyExtractor={(item) => item.id}
    />

  </View>
  )
}

export default Content

const styles = StyleSheet.create({

  content:{
    flex:1,
    // backgroundColor:'rgba(55, 245, 39, 0.5)',
  },

  textcontent:{
    // textAlign:"center",
    paddingHorizontal:10,
    color:'black',
    fontSize:15,
    fontWeight:'500',
    fontStyle:"italic",
    marginVertical:5
  },

  // flatlisttendances:{
  //   // flex:1,
  // },
   
})