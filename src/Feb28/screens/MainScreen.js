import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {loadQuote} from '../Store/action';

const MainScreen = () => {
  const dispatch = useDispatch();
  const getQuotes = useSelector(store => store.quote);
  const getAnime = useSelector(store => store.anime);
  const getCharacter = useSelector(store => store.character);
  const isLoading = useSelector(store => store.isLoading)


  const getQuote = () => {
    dispatch(loadQuote());
  };
  return (
    <View style={styles.mainContainer}>

        <Text>Random Anime Quote Generator</Text>
        
    
      <View style={styles.quoteContainer}>
      {isLoading ?
        <ActivityIndicator size="large" color="#FF6464"/>
    :
    <>
        <Text style={styles.quoteText}>{getQuotes}</Text>
        <Text style={styles.characterText}>~ {getCharacter}</Text>
        <Text style={styles.animeText}>- {getAnime}</Text>
        </>
        }
      </View>

        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button} onPress={() => getQuote()}>
            <Text style={styles.textInsideButton}>Load Quote</Text>
          </TouchableOpacity>
          
        </View>
    </View>
  );
};

export default MainScreen;
