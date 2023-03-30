import 'app/styles/normalize.scss'
import 'app/styles/globals.scss'

import React from 'react'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { appWithTranslation } from 'next-i18next'

import { AdsBlock } from 'app/components/AdsBlock'
import { store } from 'app/store'

const Fingerprint = dynamic(() => import('app/components/Fingerprint'), { ssr: false })
const noscriptHtml = {
  __html: `
    <iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-P89KMWW"
      height="0" width="0" 
      style="display: 'none'; visibility: 'hidden';" 
    />
  `
}

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      {/* Google Tag Manager (noscript) */}
      <noscript dangerouslySetInnerHTML={noscriptHtml}></noscript>
    
      <Fingerprint />
      <AdsBlock />
      <Component {...pageProps} />
    </Provider>
  )
}

export default appWithTranslation(App)