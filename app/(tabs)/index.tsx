import { Image, TouchableOpacity, StyleSheet, Dimensions, Platform, View, TextStyle } from 'react-native';
import React, { useCallback, useRef } from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import YoutubeIframe from 'react-native-youtube-iframe';

const { width: screenWidth } = Dimensions.get('window');
const aspectRatio = 16 / 9; // Relación de aspecto estándar de YouTube

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 70,
    width: 40,
  },

  titleContainerWeb: {
    alignItems: 'center', // Centra los elementos hijos horizontalmente
    justifyContent: 'center', // Centra los elementos hijos verticalmente (opcional, pero útil si hay más espacio)
    flexDirection: 'column', // Para apilar el título y el subtítulo verticalmente y permitir el centrado
  },

  stepContainer: {
    gap: 8,
    marginBottom: 8,
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
    alignItems: 'center', // Esta línea es la clave para centrar el texto en la web
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
    maxWidth: 600, // Ajusta este valor según lo que consideres similar al ancho móvil
    aspectRatio: 16 / 9,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  iframeWeb: {
    width: '100%',
    height: '100%',
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginHorizontal: 5,
  },

  titleFont: { // Nuevo estilo para la fuente del título
    fontFamily: 'Boldonse-Regular.ttf',
    fontSize: 25,

  },

});

export default function HomeScreen() {
  const youtubeRef = useRef<YoutubeIframe | null>(null);

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      console.log('video ended!');
      // Aquí podrías realizar alguna acción al finalizar el video
    }
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/descargar.jpg')}
          contentFit="cover"
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={Platform.OS === 'web' ? styles.titleContainerWeb : styles.titleContainer}>
  <ThemedText type="title" style={[Platform.OS === 'web' && { textAlign: 'center' }, styles.titleFont]}>Balloonerism</ThemedText>
  <ThemedText type="subtitle" style={[Platform.OS === 'web' ? ({ textAlign: 'center' } as TextStyle) : undefined, styles.titleFont]}>Mac Miller</ThemedText>
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
        {/* Opcional: Botón para controlar la reproducción */}
        {/* <TouchableOpacity onPress={() => youtubeRef.current?.play()} style={styles.button}>
          <ThemedText>Play</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => youtubeRef.current?.pause()} style={styles.button}>
          <ThemedText>Pause</ThemedText>
        </TouchableOpacity> */}
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedView style={Platform.OS === 'web' ? styles.stepContainerWeb : styles.stepContainer}>
          <ThemedText type="subtitle">Mac Miller - DJ’s Chord Organ (feat. SZA)</ThemedText>
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
        {/* Opcional: Botón para controlar la reproducción */}
        {/* <TouchableOpacity onPress={() => youtubeRef.current?.play()} style={styles.button}>
          <ThemedText>Play</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => youtubeRef.current?.pause()} style={styles.button}>
          <ThemedText>Pause</ThemedText>
        </TouchableOpacity> */}
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
        {/* Opcional: Botón para controlar la reproducción */}
        {/* <TouchableOpacity onPress={() => youtubeRef.current?.play()} style={styles.button}>
          <ThemedText>Play</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => youtubeRef.current?.pause()} style={styles.button}>
          <ThemedText>Pause</ThemedText>
        </TouchableOpacity> */}
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
        {/* Opcional: Botón para controlar la reproducción */}
        {/* <TouchableOpacity onPress={() => youtubeRef.current?.play()} style={styles.button}>
          <ThemedText>Play</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => youtubeRef.current?.pause()} style={styles.button}>
          <ThemedText>Pause</ThemedText>
        </TouchableOpacity> */}
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
        {/* Opcional: Botón para controlar la reproducción */}
        {/* <TouchableOpacity onPress={() => youtubeRef.current?.play()} style={styles.button}>
          <ThemedText>Play</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => youtubeRef.current?.pause()} style={styles.button}>
          <ThemedText>Pause</ThemedText>
        </TouchableOpacity> */}
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
        {/* Opcional: Botón para controlar la reproducción */}
        {/* <TouchableOpacity onPress={() => youtubeRef.current?.play()} style={styles.button}>
          <ThemedText>Play</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => youtubeRef.current?.pause()} style={styles.button}>
          <ThemedText>Pause</ThemedText>
        </TouchableOpacity> */}
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
        {/* Opcional: Botón para controlar la reproducción */}
        {/* <TouchableOpacity onPress={() => youtubeRef.current?.play()} style={styles.button}>
          <ThemedText>Play</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => youtubeRef.current?.pause()} style={styles.button}>
          <ThemedText>Pause</ThemedText>
        </TouchableOpacity> */}
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
        {/* Opcional: Botón para controlar la reproducción */}
        {/* <TouchableOpacity onPress={() => youtubeRef.current?.play()} style={styles.button}>
          <ThemedText>Play</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => youtubeRef.current?.pause()} style={styles.button}>
          <ThemedText>Pause</ThemedText>
        </TouchableOpacity> */}
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
        {/* Opcional: Botón para controlar la reproducción */}
        {/* <TouchableOpacity onPress={() => youtubeRef.current?.play()} style={styles.button}>
          <ThemedText>Play</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => youtubeRef.current?.pause()} style={styles.button}>
          <ThemedText>Pause</ThemedText>
        </TouchableOpacity> */}
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
        {/* Opcional: Botón para controlar la reproducción */}
        {/* <TouchableOpacity onPress={() => youtubeRef.current?.play()} style={styles.button}>
          <ThemedText>Play</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => youtubeRef.current?.pause()} style={styles.button}>
          <ThemedText>Pause</ThemedText>
        </TouchableOpacity> */}
      </ThemedView>

    </ParallaxScrollView>
  );
}