import React from 'react';
import { StyleSheet, Text, View, useState } from 'react-native';
import { Appbar, PaperProvider, TextInput, Button } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <Login />
    </PaperProvider>
  );
}


function Login(){
  const [formData, setFormData] = useState({username: '', password: ''})
  const [showError, setShowError] = useState(false)

  const validateAndSubmit = () => {
    setShowError(true)
    if(formData.username.length > 0 && formData.password.length > 8){
      setFormData({username: '',password: ''})
      showError(false)
    }
  }
  return(
    <>
      <MainAppBar title="Login" />
      <View style={styles.container}>
        <TextInput 
          label='Username' 
          style={styles.inputs}
          value={formData.username}
          onChangeText={text => setFormData({...formData, username: text})}
          error={formData.username.length === 0 && showError}
         />
        <TextInput 
          label='Password' 
          style={styles.inputs}
          keyboardType='visible-password'
          value={formData.password}
          onChangeText={text => setFormData({...formData, password: text})} 
          error={formData.password.length === 0 && showError}
        />
        <Button mode='contained' style={styles.button} onPress={validateAndSubmit}>Submit</Button>
      </View>
    </>
  );
}

function MainAppBar(props) {
  return (
    <Appbar.Header mode="center-aligned" elevated={true}>
      <Appbar.Content title={props.title} />
    </Appbar.Header>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 20, 
  },
  inputs: {
    margin: 15, 
    backgroundColor: '#fcfcfc',
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 4,
    margin: 15, 
  },
});
