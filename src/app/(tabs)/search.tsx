import { StyleSheet, FlatList, Text, View, TextInput, ActivityIndicator } from "react-native";
import { tracks } from "../../../assets//data/tracks";
//import { Text, View } from '@/src/components/Themed';
import TrackListItem from "@/src/components/TrackListItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { gql, useQuery } from '@apollo/client';
const query = gql`
query MyQuery($q: String) {
  search(q: $q) {
    tracks {
      items {
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
          height
          url
          width
        }
      }
      }
    }
  }
}
`;

export default function SearchScreen() {
  const [search, setSearch] = useState('');
  const { data, loading, error } = useQuery(query, {
    variables: { q: search },
  });
  const tracks = data?.search?.tracks?.items || [];
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <FontAwesome name="search" size={24} color="gray" />
        <TextInput
          value={search}
          onChangeText={(text) => setSearch(text)}
          placeholder="What do you want to listen to?"
          style={styles.input}
        ></TextInput>
        <Text onPress={() => setSearch('')} style={{ color: "white" }}>Cancel</Text>
      </View>
      {loading && <ActivityIndicator />}
      {error && <Text>Failed to fetch tracks</Text>}
      <FlatList
        data={tracks}
        renderItem={({ item }) => <TrackListItem track={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "#121314",
    padding:8,
    marginHorizontal: 10,
    borderRadius: 5,
    color: 'white',
    // Remove the placeholderTextColor property
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
