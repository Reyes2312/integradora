import React from 'react';
import { View, Text, TouchableOpacity, DrawerLayoutAndroid, Image } from 'react-native';
import styles from '../styles/Pantalla2ScreenStyles';

const Pantalla2Screen = ({ navigation }) => {
  const drawer = React.useRef(null);

  const navigationView = () => (
    <View style={styles.navigationContainer}>
      <View style={styles.navigationHeaderContainer}>
        <Text style={styles.navigationHeader}>Menú de Navegación</Text>
      </View>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => {
          drawer.current.closeDrawer();
          navigation.navigate('Inicio');
        }}
      >
        <Image source={require('../assets/images/home.png')} style={styles.navIcon} />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => {
          drawer.current.closeDrawer();
          navigation.navigate('Grafico');
        }}
      >
        <Image source={require('../assets/images/grafica.png')} style={styles.navIcon} />
        <Text style={styles.navText}>Gráfica</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => {
          drawer.current.closeDrawer();
          navigation.navigate('BombasDeAgua');
        }}
      >
        <Image source={require('../assets/images/bomba_agua.png')} style={styles.navIcon} />
        <Text style={styles.navText}>Bombas de Agua</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={navigationView}
    >
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
            <Image source={require('../assets/images/home.png')} style={styles.menuIcon} />
          </TouchableOpacity>
        </View>
        <Text>Bienvenido a la aplicación SmartAquatics</Text>
      </View>
    </DrawerLayoutAndroid>
  );
};

export default Pantalla2Screen;
