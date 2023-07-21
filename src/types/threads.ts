export interface User {
  id: string
  name: string
  username: string
  verified: boolean
  photo: string
  bio: string
  link?: string
  followers?: User[]
}

export interface Reply {
  id: string
  author: User
  content: string
  likes: number
  created_at: string
}

export interface Thread {
  id: string
  author: User
  content: string
  image?: string
  replies?: Reply[]
  replies_count: number
  likes_count: number
  mention?: boolean
  mention_user?: User
  created_at: string
}
