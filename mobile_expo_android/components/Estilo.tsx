import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
    txtG:{
      fontSize:20
    },
    txtTitulo:{
        fontSize:30,
        fontFamily:'sans-serif-medium',
        fontWeight:'normal',
    },
    viewSafeAndroid:{
      flex:1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight:0
    },
    tamImage:{
      width:450,
      height:200
    },
    viewImage:{
      alignItems:'center'
    },
    viewAlign:{
      flex:'start'
    }
  })
