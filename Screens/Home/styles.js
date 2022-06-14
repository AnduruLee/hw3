import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      width: 'initial',
      height: '100%',
  },
    logo: {
      width: 50,
      height: 50,
      top: 100,
      justifyContent: 'flex-start',
      resizeMode: 'contain',
      alignSelf: 'flex-end',
      marginTop: '30%',
      marginRight: '15%',
  },
    
    image: {
      width: '100%',
      height: undefined,
      aspectRatio: 1.55,
      resizeMode: 'cover',
      position: 'absolute',
  },
  
  
  });
  
  
  export default styles;