import { StyleSheet, FlatList,Text, View, ActivityIndicator  } from 'react-native';
import {tracks } from '../../../assets//data/tracks';
//import { Text, View } from '@/src/components/Themed';
import TrackListItem from '@/src/components/TrackListItem';
import { gql, useQuery } from '@apollo/client';

const query = gql`
  query getFavorites($userId: String!) {
    favoritesByUserid(userid: $userId) {
      id
      trackid
      userid
      track {
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
            width
            height
          }
        }
      }
    }
  }
`;

export default function FavoriteScreen() {
  const { data, loading, error } = useQuery(query, {
    variables: { userId: 'Gaurav' },
  });

  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) {
    console.log(error);
  }
  console.log(data);
  const tracks = (data?.favoritesByUserid || []).map((fav:any) => fav.track);

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
