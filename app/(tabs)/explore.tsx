import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
              <Image
                source={require('@/assets/images/descargar.jpg')}
                contentFit="cover"
                style={styles.reactLogo}
              />
            }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">92 Til infinity</ThemedText>
      </ThemedView>
      
      <Collapsible title="Mac Miller">
        <ThemedText>Mac Miller was an American rapper, singer, and record producer. He was born on January 19,
        1992, in Pittsburgh, Pennsylvania, and began his career in the hip-hop scene as a teenager.</ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>{' '}
        <ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>{' '}
        </ThemedText>
      </Collapsible>
      <Collapsible title="Discography">
        <ThemedText>
        Studio Albums:

Blue Slide Park (2011)   
Watching Movies with the Sound Off (2013)   
GO:OD AM (2015)   
The Divine Feminine (2016)   
Swimming (2018)   
Circles (2020)   
Balloonerism (2025)   
Mixtapes:

But My Mackin' Ain't Easy (2007) (as Easy Mac)   
How High (2008) (with Beedie as The Ill Spoken)
The Jukebox: Prelude to Class Clown (2009)   
The High Life (2009) (with Most Dope & Big Jerm)
K.I.D.S. (Kickin' Incredibly Dope Shit) (2010)   
Best Day Ever (2011)
I Love Life, Thank You (2011)   
Macadelic (2012)   
Run-On Sentences Vol. 1 (2013) (as Larry Fisherman)   
Stolen Youth (2013) (as Larry Fisherman, with Vince Staples)   
Delusional Thomas (2013) (as Delusional Thomas)   
Faces (2014)   
Run-On Sentences Vol. 2 (2015) (as Larry Fisherman)   
Live Albums:

Live from Space (2013)   
Spotify Singles (2018)
Extended Plays (EPs):

On and On and Beyond (2011)   
You (2012) (as Larry Lovestein & The Velvet Revival)   
This discography showcases Mac Miller's evolution as an artist, from his early party-centric sound to his more introspective and experimental later work. His mixtapes were particularly influential in building his early fanbase and often explored different sonic landscapes compared to his studio albums. The posthumous releases, Circles and Balloonerism, offered fans a final glimpse into his artistic vision.
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
      </Collapsible>
    
        
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  reactLogo: {
    height: 250,
    width: 350,
    bottom: 0,
    left: 0,
    position: 'contain',
  },
});
