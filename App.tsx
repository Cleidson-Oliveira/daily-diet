import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import { useFonts } from 'expo-font';
import { NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';

import { Loading } from '@components/Loading';
import { Routes } from './src/routes';

import theme from './src/theme';

export default function App() {
  let [ fontsLoaded ] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      <>
        <StatusBar style="auto" backgroundColor="transparent" translucent />
        { fontsLoaded ? <Routes /> : <Loading />}
      </>
    </ThemeProvider>
  );
}
