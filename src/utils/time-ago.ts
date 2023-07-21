export const TimeAgo = (date: string): string => {
  const now = new Date()

  const differenceInMs = now.getTime() - new Date(date).getTime()

  const differenceInSeconds = Math.floor(differenceInMs / 1000)
  const differenceInMinutes = Math.floor(differenceInSeconds / 60)
  const differenceInHours = Math.floor(differenceInMinutes / 60)
  const differenceInDays = Math.floor(differenceInHours / 24)

  if (differenceInSeconds < 60) {
    return differenceInSeconds + 'S'
  } else if (differenceInMinutes < 60) {
    return differenceInMinutes + 'Min'
  } else if (differenceInHours < 24) {
    return differenceInHours + 'h'
  } else if (differenceInDays === 1) {
    return 'Ontem'
  } else {
    return differenceInDays + 'Dias'
  }
}
