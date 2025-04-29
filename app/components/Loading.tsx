import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

type LoadingProps = {
  color?: 'black' | 'white';
  size?: 'small' | 'large';
};

const Loading = ({ color = 'black', size = 'large' }: LoadingProps) => {
  const spinnerColor = color === 'white' ? '#FFFFFF' : '#000000';

  return (
    <View style={styles.container}>
      <ActivityIndicator color={spinnerColor} size={size} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
