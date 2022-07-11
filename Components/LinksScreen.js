import React from 'react';
import { Linking, StyleSheet, View, Text, TextInput, Button, Alert, Share } from 'react-native';
const LinksScreen = () => {
    return (
      <View>
        <Button onPress={()=>{Linking.openURL('https://www.stonybrook.edu/commcms/studentaffairs/cpo/resources/health_education_resources.php').catch(e=>{console.error(e)})}
        } title="Health Education and Resources"/>
        <Button onPress={()=>{Linking.openURL('https://www.stonybrook.edu/commcms/studentaffairs/rec/sport_clubs/club-information').catch(e=>{console.error(e)})}
        } title="Sports Clubs"/>
        <Button onPress={()=>{Linking.openURL('https://www.stonybrook.edu/commcms/studentaffairs/rec/fitness/personal-training.php').catch(e=>{console.error(e)})}
        } title="Personal Training"/>
        <Button onPress={()=>{Linking.openURL('https://www.imleagues.com/spa/account/registration').catch(e=>{console.error(e)})}
        } title="Intramurals"/>
        <Button onPress={()=>{Linking.openURL('')} //Relace with some other URL?
        } title="Feedback"/>
      </View>
    )
  }

export default LinksScreen