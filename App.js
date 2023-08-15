import {ActivityIndicator, Alert, FlatList, StatusBar, Text, View} from 'react-native';
import {Post} from "./components/Post";
import {useEffect, useState} from "react";
import axios from "axios";


export default function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [articles, setArticles] = useState([])

  useEffect(() => {
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

    fetchData()
  }, [])

  if (isLoading) {
    return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <ActivityIndicator/>
        <Text style={{marginTop: "15px"}}>Загрузка...</Text>
      </View>
    )
  }

  return (
    <View>
      <FlatList data={articles}
                renderItem={({item}) => <Post
                  title={item.title}
                  imageUrl={item.imageUrl}
                  createdAt={item.createdAt}
                />}
      />
      <StatusBar/>
    </View>
  );
}
