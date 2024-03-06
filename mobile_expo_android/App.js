import {Text,View,SafeAreaView,ScrollView,Image, StatusBar} from 'react-native'
import Comp1 from './components/Comp1'
import Estilo from './components/Estilo'
 
export default ()=>(
    
  <View style={[Estilo.viewSafeAndroid, {backgroundColor: '#000020'}]}>
    <StatusBar barStyle='white-content'/>
    <Text style={[Estilo.txtTitulo, {color: '#FFFFFF', fontSize: 24, textAlign: 'center',padding:5},{}]}> Prime Video </Text>
    <ScrollView>
      <SafeAreaView>
        <View style={Estilo.viewImage}>
          <Image
            style={Estilo.tamImage}
            source={require('./assets/fugadasgalinhas.png')}
          />
        </View>
        </SafeAreaView>
        <View>
          <Text style={[Estilo.txtTitulo, {color: '#FFFFFF', fontSize: 50, textAlign: 'start',paddingTop:5,paddingLeft:30},{}]}>
          A Fuga das Galinhas
          </Text>
        </View>
        <View>
          <Text style={[Estilo.txtTitulo, {color: '#FFFFFF', fontSize: 24,paddingTop:5,paddingLeft:30}]}> No galinheiro de uma fazenda inglesa dos anos 1950, galinhas cumprem sua função e vivem pacatamente sonhando com uma vida melhor. Uma delas, Ginger, sonha com a liberdade e planeja sair voando dali junto com suas companheiras. </Text>
        </View>

        
    </ScrollView>
  </View>
)


