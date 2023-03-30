import { useMemo,useState } from 'react'

import { IdType } from 'app/lib/types/base-types'
import { ISupporter } from 'app/lib/types/supporter'

export const usePoll = ({
  poll,
  supporter,
  results,
}: {
  supporter: ISupporter | null,
  poll: {
    id: IdType,
    question: string,
    answers: string[],
  },
  results: number[],
}) => {
  const { id: pollId, answers } = poll
  const [isSuccess, setSuccess] = useState(false)
  const givenAnswer = useMemo<typeof NaN | number>(() => Number(supporter?.votes[pollId]), [pollId, supporter?.votes])
  const hasAnswer = useMemo(() => Number.isInteger(givenAnswer), [givenAnswer])
  const [answer, setAnswer] = useState<null | number>(hasAnswer ? givenAnswer : null)
  const isVoted = useMemo<boolean>(() => isSuccess || hasAnswer, [isSuccess, hasAnswer])
  const exactResults = useMemo<number[]>(() => {
    return answers.map((item, i) => {
      const result = results[i] || 0
      if (!hasAnswer && isSuccess && answer === i) {
        return result + 1
      }
      return result
    })
  }, [answers, results, hasAnswer, isSuccess, answer])
  const value = useMemo(() => {
    return hasAnswer ? givenAnswer : answer
  }, [hasAnswer, answer, givenAnswer])

  return {
    value,
    answers,
    answer,
    isVoted,
    isSuccess,
    exactResults,
    setAnswer,
    setSuccess,
  }
}