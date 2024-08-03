import { Stack, Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home() {
  const router = useRouter();
  const [channel, setChannel] = useState('');
  const onJoin = () => {
    router.navigate(`./channel/${channel}`);
  }
  return (
    <View>
      <TextInput
      value={channel}
      onChangeText={setChannel}
      style={styles.input}
      inputMode='text'
      placeholder='Enter board name'
      placeholderTextColor='#808080'
      />
      <TouchableOpacity onPress={onJoin} style={styles.button}>
        <Text style={styles.text}>Create</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#808080',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    margin: 8,
  },
  button: {
    backgroundColor: '#2E8A58',
    borderRadius: 8,
    padding: 12,
    margin: 8,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18
  }
})
