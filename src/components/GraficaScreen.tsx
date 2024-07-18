import React from 'react';
import { View, Text, TouchableOpacity, DrawerLayoutAndroid, Image } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import styles from '../styles/GraficaScreenStyles';

const GraficaScreen: React.FC = ({ navigation }) => {
  const drawer = React.useRef(null);
  const screenWidth = Dimensions.get('window').width;

  const data = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [
      {
        data: [6.5, 6.6, 6.4, 6.7, 6.3, 6.5],
        color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
        strokeWidth: 2,
      },
    ],
    legend: ['Nivel de pH'],
  };

  const chartConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#ffffff',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };

  const navigationView = () => (
    <View style={styles.navigationContainer}>
      <View style={styles.navigationHeaderContainer}>
        <Text style={styles.navigationHeader}>Menú de Navegación</Text>
      </View>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => {
          drawer.current.closeDrawer();
          navigation.navigate('Pantalla2');
        }}
      >
        <Image source={require('../assets/images/home.png')} style={styles.navIcon} />
        <Text style={styles.navText}>Inicio</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => {
          drawer.current.closeDrawer();
          navigation.navigate('Grafica');
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
        <Text style={styles.title}>Gráfica de pH</Text>
        <LineChart
          data={data}
          width={screenWidth - 32}
          height={220}
          chartConfig={chartConfig}
          bezier
          style={styles.chart}
        />
      </View>
    </DrawerLayoutAndroid>
  );
};

export default GraficaScreen;
