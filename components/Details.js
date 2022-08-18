import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import React from 'react'
import  Icone from "react-native-vector-icons/Entypo"
import  Icone2 from "react-native-vector-icons/FontAwesome"
import Header from './Header'

const Details = ( { route } ) => {

  const { item } = route.params;

  console.log( item )

  return (
    <View>

      <Header></Header>
      
      <Image
        style={styles.image}
        source={ item.image }
      />


      <Text style={styles.text}>{ item.titre }</Text>

      <View style={styles.titre}>
      <Icone name='thumbs-up' size={25} color='black' />
      <Icone name='thumbs-down' size={25} color='black' />
      <Icone2 name='share' size={25} color='black' />
      <Icone2 name='check-square-o' size={25} color='black' />
      </View>

      <View style={styles.viewchannel}>
        <Text style={styles.channel}>Nom de l'utilisateur</Text>
        <Text style={styles.channel2}>S'ABONNER</Text>
      </View>

      <Text style={styles.comms}>Commentaires</Text>

    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  image:{
    height:'55%',
    width:'100%',
  },

  text:{
    fontSize:25,
    fontWeight:'500',
    color:'black',
    paddingHorizontal:10,
  },

  titre:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:25,
    height:95,
  },

  channel:{
    fontSize:15,
    fontWeight:'500',
    color:'black',
    height:75,
  },

  channel2:{
    fontSize:15,
    fontWeight:'500',
    color:'red',
    height:75,
  },

  viewchannel:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    textAlignVertical:'center',
    backgroundColor:'green',
    paddingHorizontal:15,

  },

  comms:{
    fontSize:15,
    paddingHorizontal:10,
  },
})