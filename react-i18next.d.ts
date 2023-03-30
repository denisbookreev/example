/**
 * If you want to enable locale keys typechecking and enhance IDE experience.
 *
 * Requires `resolveJsonModule:true` in your tsconfig.json.
 *
 * @link https://www.i18next.com/overview/typescript
 */
import common from 'public/locales/en/common.json'
import home from 'public/locales/en/home.json'
import personal from 'public/locales/en/personal.json'
import ui from 'public/locales/en/ui.json'

import 'react-i18next'

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'personal'
    resources: {
      common: typeof common
      home: typeof home
      personal: typeof personal
      ui: typeof ui
    }
  }
}