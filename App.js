import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => <View style={styles.separator} />;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          
        </Text>
        <Button title="Login" onPress={() => Alert.alert('Simple Button pressed')} />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          
        </Text>
        <Button
          title="Checklist"
          color="#f194ff"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}></Text>
        <Button title="Amazon" disabled onPress={() => Alert.alert('Cannot press this one')} />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          
        </Text>
        <View style={styles.fixToText}>
          <Button title="Left button" onPress={() => Alert.alert('Left button pressed')} />
          <Button title="Right button" onPress={() => Alert.alert('Right button pressed')} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});