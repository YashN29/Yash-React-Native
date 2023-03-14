import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

const MainScreen = () => {
  //   const [name, setName] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [username, setUsername] = useState('');
  const [showname, setShowName] = useState('');
  const [userName, setUserName] = useState('');
  const [showemail, setshowEmail] = useState('');

  //   const GetResource = () => {
  //     fetch('https://jsonplaceholder.typicode.com/users/5')
  //       .then(response => response.json())
  //       .then(data => {
  //         setName(data.name);
  //         setEmail(data.email);
  //         setUsername(data.username);
  //       });
  //   };

  const PostResource = () => {
    fetch('https://jsonplaceholder.typicode.com/users/5', {
      method: 'GET',
      //   body: JSON.stringify({
      //     name: name,
      //     email: email,
      //     username: username,
      //   }),
      //   headers: {
      //     'Content-type': 'application/json; charset=UTF-8',
      //   },
    })
      .then(response => response.json())
      .then(data => {
        setShowName(data.name);
        setshowEmail(data.email);
        setUserName(data.username);
      });
  };

  const DeleteResource = () => {
    fetch('https://jsonplaceholder.typicode.com/users/5', {
      method: 'DELETE',
      //   body: JSON.stringify({
      //     name: name,
      //     email: email,
      //     username: username,
      //   }),
      //   headers: {
      //     'Content-type': 'application/json; charset=UTF-8',
      //   },
    })
      .then(response => response.json())
      .then(data => {
        setShowName(data.name);
        setshowEmail(data.email);
        setUserName(data.username);
      });
  };

  return (
    <View style={styles.mainContainer}>
      {/* <Text style={styles.name}>NAME</Text>

      <TextInput
        value={name}
        style={styles.Input_name}
        placeholder="Enter Your Name"
        onChangeText={actualName => setName(actualName)}
        placeholderTextColor="grey"
        selectionColor="#545974"
      />

      <Text style={styles.email}>EMAIL</Text>

      <TextInput
        value={email}
        style={styles.Input_email}
        placeholder="Enter Your E-mail"
        onChangeText={actualEmail => {
          setEmail(actualEmail);
        }}
        placeholderTextColor="grey"
        selectionColor="#545974"
      />
      <Text style={styles.email}>USERNAME</Text>

      <TextInput
        value={username}
        style={styles.Input_email}
        placeholder="Enter Your Username"
        onChangeText={actualUsername => {
          setUsername(actualUsername);
        }}
        placeholderTextColor="grey"
        selectionColor="#545974"
      /> */}

      <View style={styles.topView}>
        <ScrollView>
          <Text style={styles.text}>Name: {showname}</Text>
          <Text style={styles.text}>Username: {userName}</Text>
          <Text style={styles.text}>Email: {showemail}</Text>
        </ScrollView>
      </View>
      
        <View style={styles.btn_view}>
          <TouchableOpacity style={styles.button} onPress={PostResource}>
            <Text style={styles.text_inside_btn}>Fetch API</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btn_view}>
          <TouchableOpacity style={styles.button} onPress={DeleteResource}>
            <Text style={styles.text_inside_btn}>Delete API</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default MainScreen;
