import moment from 'moment'

import { fetchGoalProgress } from 'app/dynamo/goals/queries'
import { fetchPollResults } from 'app/dynamo/polls/queries'
import { IGoal } from 'app/lib/types/goal'
import { IPoll } from 'app/lib/types/poll'
import { IStreamer } from 'app/lib/types/streamer'

export const fetchInitialData = async (streamer: IStreamer) => {
  const promises: [
    Promise<IPoll | null>,
    Promise<IGoal | null>,
  ] = [
    Promise.resolve(null),
    Promise.resolve(null),
  ]

  if (streamer.poll) {
    promises[0] = fetchPollResults({
      pollId: streamer.poll.id,
      streamerId: streamer.id,
    })
  }

  if (streamer.goal) {
    promises[1] = fetchGoalProgress({
      goalId: streamer.goal.id,
      streamerId: streamer.id,
      date: moment().format('YYYY-MM-DD'),
    })
  }
  
  const [ 
    pollResults,
    goalProgress,
  ] = await Promise.all(promises)

  return {
    pollResults, 
    goalProgress,
  }
}