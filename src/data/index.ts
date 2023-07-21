import { fakerPT_BR as Faker } from '@faker-js/faker'
import { Thread, User } from '@/types/threads'

export const createRandonFollowers = (): User => {
  return {
    id: Faker.string.uuid(),
    name: Faker.person.firstName() + '' + Faker.person.lastName(),
    verified: Math.random() >= 0.5,
    username: Faker.internet.userName(),
    bio: Faker.person.bio(),
    photo: Faker.image.avatar(),
    link: Faker.internet.url(),
  }
}

export const createRandonUser = (): User => {
  return {
    id: Faker.string.uuid(),
    name: Faker.person.firstName() + '' + Faker.person.lastName(),
    verified: Math.random() >= 0.5,
    username: Faker.internet.userName(),
    bio: Faker.person.bio(),
    photo: Faker.image.avatar(),
    link: Faker.internet.url(),
    followers: new Array(Math.floor(Math.random() * 10))
      .fill(null)
      .map(() => createRandonFollowers()),
  }
}

export const createRandonThreads = (): Thread => {
  const author = createRandonUser()
  const mention_user = createRandonUser()
  return {
    id: Faker.string.uuid(),
    author,
    content: Faker.lorem.paragraph(),
    image: Math.random() > 0.5 ? Faker.image.url() : undefined,
    mention: Math.random() >= 0.5,
    mention_user,
    replies: new Array(Math.floor(Math.random() * 10)).fill(null).map(() => ({
      id: Faker.string.uuid(),
      author: createRandonUser(),
      content: Faker.lorem.sentence(),
      likes: Math.floor(Math.random() * 1000),
      created_at: Faker.date.recent().toISOString(),
    })),
    replies_count: Math.floor(Math.random() * 100),
    likes_count: Math.floor(Math.random() * 1000),
    created_at: Faker.date.recent().toISOString(),
  }
}

export const generateThreads = (): Thread[] => {
  return new Array(50).fill(null).map(() => createRandonThreads())
}
