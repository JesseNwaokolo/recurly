import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Redirect href="/(tabs)" />
    </View>
  )
}

export default SignIn