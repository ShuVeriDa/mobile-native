import {Alert, View} from "react-native";
import styled from "styled-components/native";
import {useEffect, useState} from "react";
import axios from "axios";
import {Loading} from "../components/Loading";

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`
export const FullPostScreen = ({route, navigation}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [article, setArticle] = useState()
  const {id, title} = route.params

  const fetchData = async () => {
    navigation.setOptions({
      title
    })
    setIsLoading(true)
    try {
      const {data} = await axios.get(`https://630a32f93249910032824d12.mockapi.io/drinks/${id}`)
      setArticle(data)
      setIsLoading(false)
    } catch (e) {
      setIsLoading(false)
      console.log(e)
      Alert.alert("Ошибка", "Не удалось получить статью")
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return <View style={{padding: 20}} id={article?.id}>
    <PostImage source={{uri: article?.imageUrl}}/>
    <PostText>{article?.text}</PostText>
  </View>
}