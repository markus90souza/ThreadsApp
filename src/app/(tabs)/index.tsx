import {
  Platform,
  RefreshControl,
  SafeAreaView,
  ScrollView,
} from 'react-native'

import Lottie from 'lottie-react-native'

import { useRef } from 'react'
import { useThreads } from '@/hooks/use-threads'
import { Thread } from '@/components/thread'

const Home = () => {
  const animationThreadsRef = useRef<Lottie>(null)

  const threads = useThreads()

  return (
    <SafeAreaView style={{ paddingHorizontal: 20}}>
      <ScrollView
        contentContainerStyle={{          
          paddingTop: Platform.select({ android: 30 }),
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {
              animationThreadsRef.current?.play()
            }}
            titleColor={'transparent'}
          />
        }
      >
        <Lottie
          ref={animationThreadsRef}
          source={require('@/assets/animations/threads.json')}
          loop={false}
          autoPlay
          style={{
            width: 90,
            height: 90,
            alignSelf: 'center',
          }}
        />
        {threads.map((thread) => (
          <Thread key={thread.id} data={thread} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
