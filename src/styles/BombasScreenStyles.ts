import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10, // Ajuste aquí para mover el menú hacia arriba
  },
  menuIcon: {
    width: 30,
    height: 30,
    tintColor: '#000',
  },
  navigationContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navigationHeaderContainer: {
    backgroundColor: '#000',
    padding: 16,
  },
  navigationHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  navIcon: {
    width: 24,
    height: 24,
    marginRight: 16,
    tintColor: '#000',
  },
  navText: {
    fontSize: 18,
    color: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  bombaImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
