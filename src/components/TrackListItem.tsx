//import { Text, View } from '@/src/components/Themed';
import { Track } from '../types';
import { StyleSheet, Image, Text, View, Pressable  } from 'react-native';
import { userPlayerContext } from '../providers/PlayerProvider';

type TrackListItemProps = {
    track: Track;
}
export default function TrackListItem({ track }: TrackListItemProps) {
  const { setTrack } = userPlayerContext();
  return (
  <Pressable onPress={() => setTrack(track)} style={styles.container}>
      <Image 
        source={{ uri: track.album.images[0]?.url }}
        style={styles.image} 
       />
       <View>
        <Text style={styles.title}>{track.name}</Text>
        <Text style={styles.subtitle}>{track.artists[0]?.name}</Text>
       </View>
  </Pressable>
  );
  
}

const styles = StyleSheet.create({
    container: {
      marginVertical: 5,
      padding: 5,
      flexDirection: 'row',
      alignItems: 'center'
    },
    title: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16
    },
    subtitle: {
        color: 'lightgray'
    },
    image: {
      width: 75,
      aspectRatio: 1,
      borderRadius: 5
    },
    });