import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Comp1 from './components/Comp1';
import Estilo from './components/Estilo';

export default () => (
  <View style={[Estilo.viewSafeAndroid, { backgroundColor: '#000020' }]}>
    <StatusBar barStyle="white-content" />
    <Text
      style={[
        Estilo.txtTitulo,
        { color: '#FFFFFF', fontSize: 24, textAlign: 'center', padding: 5 },
      ]}
    >
      {' '}
      Prime Video{' '}
    </Text>
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
        <Text
          style={[
            Estilo.txtTitulo,
            {
              color: '#FFFFFF',
              fontSize: 20,
              textAlign: 'start',
              paddingTop: 5,
              paddingLeft: 30,
            },
          ]}
        >
          A Fuga das Galinhas
        </Text>
      </View>
      <View style={Estilo.buttonContainer}>
        <TouchableOpacity
          style={[
            Estilo.button,
            {
              backgroundColor: '#3498db',
              padding: 15,
              margin: 10,
              borderRadius: 5,
              alignItems: 'center',
            },
          ]}
        >
          <Text style={Estilo.buttonText}>Play Movie</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            Estilo.button,
            {
              backgroundColor: '#808080',
              padding: 15,
              margin: 10,
              borderRadius: 5,
              alignItems: 'center',
            },
          ]}
        >
          <Text style={Estilo.buttonText}>Download</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={[
            Estilo.txtTitulo,
            { color: '#FFFFFF', fontSize: 15, paddingTop: 5, paddingLeft: 30 },
          ]}
        >
          {' '}
          No galinheiro de uma fazenda inglesa dos anos 1950, galinhas cumprem
          sua função e vivem pacatamente sonhando com uma vida melhor. Uma
          delas, Ginger, sonha com a liberdade e planeja sair voando dali junto
          com suas companheiras.{' '}
        </Text>
      </View>
    </ScrollView>
    <Comp1 />
  </View>
);
