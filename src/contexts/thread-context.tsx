import { ReactNode, createContext, useEffect, useState } from 'react'
import { Thread } from '@/types/threads'
import { generateThreads } from '@/data'

export const ThreadsContext = createContext<Thread[]>([])

interface Props {
  children: ReactNode
}

export const ThreadProvider = ({ children }: Props) => {
  const [threads, setThreads] = useState<Thread[]>([])

  useEffect(() => {
    setThreads(generateThreads())
  }, [])

  return (
    <ThreadsContext.Provider value={threads}>
      {children}
    </ThreadsContext.Provider>
  )
}
