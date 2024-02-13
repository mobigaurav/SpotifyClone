import { StyleSheet, FlatList,Text, View, ActivityIndicator  } from 'react-native';
import {tracks } from '../../../assets//data/tracks';
//import { Text, View } from '@/src/components/Themed';
import TrackListItem from '@/src/components/TrackListItem';
import { gql, useQuery } from '@apollo/client';

const query = gql`
  query MyQuery($genres: String!) {
    recommendations(seed_genres: $genres) {
      tracks {
        id
        name
        preview_url
        artists {
          id
          name
        }
        album {
          id
          name
          images {
            url
            height
            width
          }
        }
      }
    }
  }
`;
export default function HomeScreen() {
  const { data, loading, error } = useQuery(query, {
    variables: { genres: 'guitar' },
  });

  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Failed to fetch recommendations. {error.message}</Text>;
  }
  const tracks = data?.recommendations?.tracks || [];
  
  return (
     <FlatList
      data={tracks}
      renderItem={({ item }) => <TrackListItem track={item} />}
      keyExtractor={(item) => item.id} 
      showsVerticalScrollIndicator={false}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
