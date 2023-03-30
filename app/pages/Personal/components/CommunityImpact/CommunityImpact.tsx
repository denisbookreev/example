import styles from './CommunityImpact.module.scss'

import React from 'react'
import { useTranslation } from 'next-i18next'

import { WhiteBlock } from 'app/components/ui/WhiteBlock'

import { useImpactValue } from './useImpactValue'


export const CommunityImpact = () => {
  const { t } = useTranslation('personal')
  const { min, max } = useImpactValue()

  return (
    <WhiteBlock
      title={t('communityImpact.title')}
      description={t('communityImpact.description')}
    >
      <div className={styles.container}>
        <div className={styles.amount}>
          { min } — { max }
        </div>
      </div>
    </WhiteBlock>
  )
}
