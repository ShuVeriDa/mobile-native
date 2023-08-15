import {Alert, FlatList, RefreshControl, TouchableOpacity, View} from 'react-native';
import {useEffect, useState} from "react";
import axios from "axios";
import {Post} from "../components/Post";
import {Loading} from "../components/Loading";

export const HomeScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [articles, setArticles] = useState([])

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const {data} = await axios.get('https://630a32f93249910032824d12.mockapi.io/drinks')
      setArticles(data)
      setIsLoading(false)
    } catch (e) {
      setIsLoading(false)
      console.log(e)
      Alert.alert("Ошибка", "Не удалось получить статьи")
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return <View style={{flex: 1}}>
      <Loading />
    </View>
  }

  return (
    <View>
      <FlatList data={articles}
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchData}/>}
                renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate("FullPost", {id: item.id, title: item.title})}>
                  <Post title={item.title}
                        imageUrl={item.imageUrl}
                        createdAt={item.createdAt}
                  />
                </TouchableOpacity>}
      />
    </View>
  );
}
