/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import MT from 'moment-timezone';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  console.log("Listing semester modules and recommended eats");
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              //Exerise 1
              <Welcome/>
              //Exercise 2
              <MyFirstApp/>
            </View>
            //exercise 3
            <View style={styles.sectionContainer}>
              <Text>My modules this semester: </Text>
              <SemModule day="Monday" moduleCode="C348"/>
              <SemModule day="Tuesday" moduleCode="C237"/>
              <SemModule day="friday" moduleCode="C308"/>
            </View>
            //Exercise 4
            <View style={styles.sectionContainer}>
              <Text>Recommended Eats @ RP </Text>
              <Eats name="Sweet Tooth Waffle" location="W6 Level 1, E-canteen"/>
            </View>
            <View style={styles.sectionContainer}>
              <Eats name="Crowded Bowl" location="W4/W6 Lawn canteen"/>
            </View>
            <View style={styles.sectionContainer}>
              <Eats name="Western Cuisine @ Koufu" location="E1 Level 1, Koufu"/>
            </View>
            <View style={styles.sectionContainer}>
              <Eats name="Ayam Penyet" location="W4/W6 Lawn canteen"/>
            </View>
            //Mini Project
            <View style={styles.sectionContainer}>
              <Text>World Clock</Text>
              <Clock city="Asia/Singapore" captureTiming={MT.tz("Asia/Singapore").format("H:mm Z")}/>
              <Clock city="Europe/London" captureTiming={MT.tz("Europe/London").format("H:mm Z")}/>
              <Clock city="America/New_York" captureTiming={MT.tz("America/New_York").format("H:mm Z")}/>
              <Clock city="Europe/Oslo" captureTiming={MT.tz("Europe/Oslo").format("H:mm Z")}/>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
//Exercise 1
const Welcome = () => {
  return(<Text>Welcome to C308 Web Frameworks!</Text>);
};
//exercise 2
class MyFirstApp extends React.Component{
  render() {
    return(<Text>My First React Native App</Text>);
  }
}
//Exercise 3
const SemModule = (props) => {
  return (<Text>{props.day} - {props.moduleCode}</Text>);
};
//Exercise 4
class Eats extends React.Component{
  render() {
    return(<Text>{this.props.name}{"\n"}{this.props.location}</Text>);
  }
}
//Mini Project
class Clock extends React.Component{
  render(){
    return(<Text>{this.props.city} - {this.props.captureTiming}</Text>);
  }
}
const WorldClock = (props) => {
  return (<Text><Clock captureTiming={MT.tz("Asia/Singapore").format("H:mm Z")}/><Clock captureTiming={MT.tz("Europe/London").format("H:mm Z")}/><Clock captureTiming={MT.tz("America/New_York").format("H:mm Z")}/><Clock captureTiming={MT.tz("Europe/Oslo").format("H:mm Z")}/></Text>);
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
