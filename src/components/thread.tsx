import { Thread as IThread } from '@/types/threads'
import { FC } from 'react'
import { Text, View, useColorScheme, StyleSheet } from 'react-native'

import {
  MaterialIcons,
  Feather,
  FontAwesome,
  Ionicons,
  AntDesign,
} from '@expo/vector-icons'
import { TimeAgo } from '@/utils/time-ago'
import { Image } from 'expo-image'

type ThreadProps = {
  data: IThread
}
const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

export const Thread: FC<ThreadProps> = ({ data }) => {

  return (
    <View style={styles.container}>
      <PostLeftSide {...data} />
      <View style={{ gap: 6 }}>
        <Text>{data.author.username}</Text>
        <PostHeader
          name={data.author.name}
          verified={data.author.verified}
          created_at={data.created_at}
        />

        <Text>{data.content}</Text>

        {data.image && (
          <Image
            alt=""
            source={data.image}
            style={{
              width: '100%',
              minHeight: 300,
              borderRadius: 10,
            }}
            placeholder={blurhash}
            contentFit="cover"
            transition={200}
          />
        )}

        <SharedIcons />
        <PostFooter likes={data.likes_count} replies={data.replies_count} />
      </View>
    </View>
  )
}

type PostHeaderProps = {
  name: string
  verified: boolean
  created_at: string
}

const PostHeader: FC<PostHeaderProps> = ({ name, verified, created_at }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexGrow: 1,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <Text style={{ fontWeight: '500' }}>{name}</Text>
        {verified && (
          <MaterialIcons name="verified" size={14} color={'#60A5FA'} />
        )}
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <Text style={{ color: 'gray' }}>{TimeAgo(created_at)}</Text>
        <Feather name="more-horizontal" size={14} color={'gray'} />
      </View>
    </View>
  )
}

type PostFooterProps = {
  replies: number
  likes: number
}

const PostFooter: FC<PostFooterProps> = ({ likes, replies }) => {
  return (
    <Text style={{ color: 'gray' }}>
      Respostas {replies} | Curtidas {likes}{' '}
    </Text>
  )
}

const SharedIcons: FC = () => {
  const size = 20
  const currentTheme = useColorScheme()
  const color = currentTheme === 'dark' ? 'white' : 'black'
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
      <FontAwesome name="heart-o" color={color} size={size} />
      <Ionicons name="chatbubble-outline" color={color} size={size} />
      <AntDesign name="retweet" color={color} size={size} />
      <Feather name="send" color={color} size={size} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 30,
    gap: 6,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
})

const PostLeftSide = (thread: IThread) => {
  const currentTheme = useColorScheme()

  const borderColor = currentTheme === 'light' ? '#00000020' : '#FFFFFF20'

  return (
    <View style={{ justifyContent: 'space-between' }}>
      <Image
        alt=""
        source={thread.author.photo}
        style={styles.image}
        placeholder={blurhash}
        contentFit="cover"
        transition={200}
      />

      <View
        style={{
          flexGrow: 1,
          borderWidth: 1,
          borderColor,
          alignSelf: 'center',
        }}
      />

      <View
        style={{
          width: 20,
          gap: 3,
          alignItems: 'center',
          alignSelf: 'center',
        }}
      >
        {[1, 2, 3].map((index) => (
          <Image
            key={index}
            // @ts-ignore
            source={thread.replies[index - 1]?.author.photo}
            alt=""
            style={{
              width: index * 7,
              height: index * 7,
              borderRadius: 15,
            }}
            placeholder={blurhash}
            transition={500}
          />
        ))}
      </View>
    </View>
  )
}
