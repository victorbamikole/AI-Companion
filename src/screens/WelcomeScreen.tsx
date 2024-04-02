import {
  View,
  Text,
  SafeAreaView,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  NavigationProp,
  useNavigation,
  ParamListBase,
} from '@react-navigation/native';


const WelcomeScreen = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <SafeAreaView className="flex-1 flex justify-around bg-white">
      <View className="space-y-2">
        <Text
          style={{fontSize: wp(15)}}
          className="text-center font-bold text-gray-700">
          Jarvis
        </Text>
        <Text
          style={{fontSize: wp(4)}}
          className="text-center tracking-wider font-bold text-gray-500">
          The Future is Here, your AI Companion.
        </Text>
      </View>
      <View className="flex-row justify-center">
        <Image
          source={require('../../assets/images/ai-bot.png')}
          style={{width: wp(75), height: wp(75)}}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        className="bg-emerald-600 mx-5 p-4 rounded-2xl">
        <Text
          style={{fontSize: wp(6)}}
          className="text-center text-white font-bold text-2xl">
          Get Started
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
