import { ThreadsContext } from '@/contexts/thread-context'
import { useContext } from 'react'

export const useThreads = () => {
  const context = useContext(ThreadsContext)
  return context
}
