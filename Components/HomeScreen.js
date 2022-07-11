import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#bebebe',
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerContainerHorizontal: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    centered: {
        justifyContent: 'center',
        alignItems: 'center',
    },
  });

const HomeScreen = () => {
    return (
      <View style={styles.main}>
        <View style={[styles.centerContainer]}>
            <Text style={[styles.centered, {margin: 16, fontSize: 22}]}>
                Placeholder Name
            </Text>
            <View style={[styles.centered, {width: 320, height: 120, backgroundColor: 'white'}]}>
                <Image
                    source={require('../images/barcode_sample.jpg')}
                    style={{width: 300, height: 100}}
                />
            </View>
        </View>
        <View style={styles.centerContainer}>
            <View style={styles.centerContainerHorizontal}>
                <View style={styles.centerContainer}>
                    <Button title="# Passes" />
                </View>
                <View style={styles.centerContainer}>
                    <Button
                        title="Memberships"
                    />
                </View>
            </View>
        </View>
        <View style={styles.centerContainer}>
            <Text>
                blah blah blah
            </Text>
        </View>
      </View>
    );
  };

export default HomeScreen