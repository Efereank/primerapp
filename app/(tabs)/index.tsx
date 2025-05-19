import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useFonts } from 'expo-font';
import React, { useCallback, useRef } from 'react';
import { Dimensions, Image, Platform, StyleSheet, TextStyle, View } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';


const { width: screenWidth } = Dimensions.get('window');
const aspectRatio = 16 / 9; // Relación de aspecto estándar de YouTube

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'default',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: screenWidth - 30,
    marginLeft: 16,
    fontFamily: 'BebasNeue-Regular',
    fontSize: 35,
  },

  titleContainerWeb: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  stepContainer: {
    gap: 8,
    marginBottom: 8,
    fontFamily: 'BebasNeue-Regular',
    fontSize: 20,
  },
  reactLogo: {
    height: 250,
    width: 350,
    bottom: 0,
    left: 0,
    position: 'contain',
  },

  stepContainerWeb: {
    gap: 8,
    marginBottom: 8,
    alignItems: 'center',
  },

  videoContainerMobile: {
    alignItems: 'center',
    marginLeft: '16px',
    marginBottom: 20,
    width: screenWidth - 64,
    height: (screenWidth - 32) / aspectRatio,
  },
  videoContainerWeb: {
    alignItems: 'center',
    marginBottom: 16,
    width: screenWidth - 32,
    maxWidth: 600,
    aspectRatio: 16 / 9,
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
  },

  imageContainerWeb: {
    width: '100%',
    maxWidth: 1400,
    height: 600,
    marginLeft: 'center',
  },


  imageWeb: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  
  // Nuevos estilos añadidos
  headerImageContainer: {
    position: 'relative',
    width: '90%',
  },
  imageWithText: {
    height: 30,
    width: Platform.OS === 'web' ? 1355 : 360,
    bottom: 0,
    position: 'cover',
    height: Platform.OS === 'web' ? 250 : 300,
    resizeMode: 'cover',
  },
  textOverlay: {
    position: 'absolute',
    top: Platform.OS === 'web' ? 100 : 125,
    left: Platform.OS === 'web' ? 70 : 50,
    right: 20,
  },

  tituloContenido: {
    fontFamily: 'BebasNeue-Regular',
    fontSize: 50,
    color: '#ff7c00',
    lineHeight: 50,
    padding: 0,
    margin: 50,
  },
});

export default function HomeScreen() {
  const youtubeRef = useRef<YoutubeIframe | null>(null);

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      console.log('video ended!');
    }
  }, []);

  const [fontsLoaded] = useFonts({
    'BebasNeue-Regular': require('@/assets/fonts/BebasNeue-Regular.ttf'),
  });
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#' }}
      headerImage={
        <View style={styles.headerImageContainer}>
          <Image
            source={require('@/assets/images/descargar.jpg')}
            style={styles.imageWithText}
          />
          <View style={styles.textOverlay}>
            <ThemedText style={styles.tituloContenido}></ThemedText>
          </View>
        </View>
      }>
      <ThemedView style={Platform.OS === 'web' ? styles.titleContainerWeb : styles.titleContainer}>
        <ThemedText type="title" style={[Platform.OS === 'web' ? styles.titleContainerWeb : styles.titleContainer]}>Balloonerism</ThemedText>
        <ThemedText type="subtitle" style={[Platform.OS === 'web' && { } as TextStyle, { marginBottom: 4 }]}>Mac Miller</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        <ThemedView style={Platform.OS === 'web' ? styles.stepContainerWeb : styles.stepContainer}>
          <ThemedText type="subtitle">Mac Miller - Tambourine Dream</ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={Platform.OS === 'web' ? styles.videoContainerWeb : styles.videoContainerMobile}>
        <YoutubeIframe
          ref={youtubeRef}
          videoId="pG_9cqMsYYU"
          width="100%"
          height="100%"
          onReady={() => console.log('ready')}
          onChangeState={onStateChange}
          style={Platform.OS === 'web' ? styles.iframeWeb : undefined}
        />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedView style={Platform.OS === 'web' ? styles.stepContainerWeb : styles.stepContainer}>
          <ThemedText type="subtitle">Mac Miller - DJ's Chord Organ (feat. SZA)</ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={Platform.OS === 'web' ? styles.videoContainerWeb : styles.videoContainerMobile}>
        <YoutubeIframe
          ref={youtubeRef}
          videoId="lJqDlEYEUA8"
          width="100%"
          height="100%"
          onReady={() => console.log('ready')}
          onChangeState={onStateChange}
          style={Platform.OS === 'web' ? styles.iframeWeb : undefined}
        />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedView style={Platform.OS === 'web' ? styles.stepContainerWeb : styles.stepContainer}>
          <ThemedText type="subtitle">Mac Miller - Do You Have A Destination?</ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={Platform.OS === 'web' ? styles.videoContainerWeb : styles.videoContainerMobile}>
        <YoutubeIframe
          ref={youtubeRef}
          videoId="exfNMKltGKg"
          width="100%"
          height="100%"
          onReady={() => console.log('ready')}
          onChangeState={onStateChange}
          style={Platform.OS === 'web' ? styles.iframeWeb : undefined}
        />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedView style={Platform.OS === 'web' ? styles.stepContainerWeb : styles.stepContainer}>
          <ThemedText type="subtitle">Mac Miller - 5 Dollars Pony Rides</ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={Platform.OS === 'web' ? styles.videoContainerWeb : styles.videoContainerMobile}>
        <YoutubeIframe
          ref={youtubeRef}
          videoId="90QSE0QLryI"
          width="100%"
          height="100%"
          onReady={() => console.log('ready')}
          onChangeState={onStateChange}
          style={Platform.OS === 'web' ? styles.iframeWeb : undefined}
        />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedView style={Platform.OS === 'web' ? styles.stepContainerWeb : styles.stepContainer}>
          <ThemedText type="subtitle">Mac Miller - Friendly Hallucinations</ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={Platform.OS === 'web' ? styles.videoContainerWeb : styles.videoContainerMobile}>
        <YoutubeIframe
          ref={youtubeRef}
          videoId="IpL_q927ofQ"
          width="100%"
          height="100%"
          onReady={() => console.log('ready')}
          onChangeState={onStateChange}
          style={Platform.OS === 'web' ? styles.iframeWeb : undefined}
        />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedView style={Platform.OS === 'web' ? styles.stepContainerWeb : styles.stepContainer}>
          <ThemedText type="subtitle">Mac Miller - Mrs. Deborah Downer</ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={Platform.OS === 'web' ? styles.videoContainerWeb : styles.videoContainerMobile}>
        <YoutubeIframe
          ref={youtubeRef}
          videoId="lJovDVpKrrY"
          width="100%"
          height="100%"
          onReady={() => console.log('ready')}
          onChangeState={onStateChange}
          style={Platform.OS === 'web' ? styles.iframeWeb : undefined}
        />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedView style={Platform.OS === 'web' ? styles.stepContainerWeb : styles.stepContainer}>
          <ThemedText type="subtitle">Mac Miller - Stoned</ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={Platform.OS === 'web' ? styles.videoContainerWeb : styles.videoContainerMobile}>
        <YoutubeIframe
          ref={youtubeRef}
          videoId="m94MMHG1fJY"
          width="100%"
          height="100%"
          onReady={() => console.log('ready')}
          onChangeState={onStateChange}
          style={Platform.OS === 'web' ? styles.iframeWeb : undefined}
        />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedView style={Platform.OS === 'web' ? styles.stepContainerWeb : styles.stepContainer}>
          <ThemedText type="subtitle">Mac Miller - Shangri La</ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={Platform.OS === 'web' ? styles.videoContainerWeb : styles.videoContainerMobile}>
        <YoutubeIframe
          ref={youtubeRef}
          videoId="r1mTyiE-JTA"
          width="100%"
          height="100%"
          onReady={() => console.log('ready')}
          onChangeState={onStateChange}
          style={Platform.OS === 'web' ? styles.iframeWeb : undefined}
        />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedView style={Platform.OS === 'web' ? styles.stepContainerWeb : styles.stepContainer}>
          <ThemedText type="subtitle">Mac Miller - Funny Papers</ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={Platform.OS === 'web' ? styles.videoContainerWeb : styles.videoContainerMobile}>
        <YoutubeIframe
          ref={youtubeRef}
          videoId="IMUNeQ3W2ew"
          width="100%"
          height="100%"
          onReady={() => console.log('ready')}
          onChangeState={onStateChange}
          style={Platform.OS === 'web' ? styles.iframeWeb : undefined}
        />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedView style={Platform.OS === 'web' ? styles.stepContainerWeb : styles.stepContainer}>
          <ThemedText type="subtitle">Mac Miller - Excelsior</ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={Platform.OS === 'web' ? styles.videoContainerWeb : styles.videoContainerMobile}>
        <YoutubeIframe
          ref={youtubeRef}
          videoId="f4e3aVU7cjI"
          width="100%"
          height="100%"
          onReady={() => console.log('ready')}
          onChangeState={onStateChange}
          style={Platform.OS === 'web' ? styles.iframeWeb : undefined}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}