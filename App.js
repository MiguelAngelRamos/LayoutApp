import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const App = () => {
  return (
    <>
      <ScrollView>

        <View style={{ flexDirection: 'row' }}>
          <Image
            style={styles.banner}
            source={require("./assets/img/barra1.jpg")} />
        </View>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Comparte con tus amigos</Text>

          <ScrollView horizontal>
            <View>
              <Image
                style={styles.amigos}
                source={require('./assets/img/cli0.jpg')}
              />
            </View>

            <View>
              <Image
                style={styles.amigos}
                source={require('./assets/img/cli1.jpg')}
              />
            </View>

            <View>
              <Image
                style={styles.amigos}
                source={require('./assets/img/cli2.jpg')}
              />
            </View>

            <View>
              <Image
                style={styles.amigos}
                source={require('./assets/img/cli3.jpg')}
              />
            </View>

          </ScrollView>

          <Text style={styles.titulo}>Anuncios</Text>
          <View>
            <View>
              <Image
                style={styles.anuncios} 
                source={require('./assets/img/sizebarra1.jpg')}
              />
            </View>

            <View>
              <Image
                style={styles.anuncios} 
                source={require('./assets/img/sizebarra2.jpg')}
              />
            </View>

            <View>
              <Image
                style={styles.anuncios} 
                source={require('./assets/img/sizebarra3.jpg')}
              />
            </View>

            <Text style={styles.titulo}>Productos</Text>

            <View style={styles.listado}>

              <View>
                <Image 
                  source={require('./assets/img/royal-guard.jpg')}
                />
              </View>

              <View>
                <Image 
                  source={require('./assets/img/patagonia-hoppy.jpg')}
                />
              </View>

              <View>
                <Image 
                  source={require('./assets/img/kunstman.jpg')}
                />
              </View>

              <View>
                <Image 
                  source={require('./assets/img/sol.jpg')}
                />
              </View>

            </View>

          </View>
        </View>

      </ScrollView>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  anuncios: {
    width: '100%',
    height: 200,
    marginVertical: 5

  },
  amigos: {
    width: 250,
    height: 300,
    marginRight: 10
  },
  banner: {
    flex: 1,
    height: 250
  },
  contenedor: {

  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap', // para que las cajas bajen y tomen lo visible del dispositivo
    justifyContent: 'space-between'
  }
})
