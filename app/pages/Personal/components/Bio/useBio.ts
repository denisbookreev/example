import { useMemo } from 'react'
import { useTranslation } from 'next-i18next'

import { IStreamer } from 'app/lib/types/streamer'

export const useBio = (streamer: IStreamer) => {
  const { t } = useTranslation('personal')

  const rows = useMemo(() => {
    return [
      {
        label: t('bio.fields.language'),
        value: streamer.language.en_title
      },
      {
        label: t('bio.fields.realName'),
        value: streamer.real_name
      },
      {
        label: t('bio.fields.gender'),
        value: streamer.gender.en_title,
      },
      {
        label: t('bio.fields.country'),
        value: streamer.country.en_title,
      },
    ]
  }, [streamer])

  return { rows }
}