import { View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { Stack } from 'expo-router'
import { DrawingBoard } from '~/components/DrawingBoard'

const Page = () => {
  const { channel } = useLocalSearchParams();
  const randomId = Math.floor(Math.random() * 1000);
  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <Stack.Screen options={{ title: `${channel} user-${randomId}` }}/>
      <DrawingBoard/>
    </View>
  )
}

export default Page;