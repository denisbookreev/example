export interface IFingerprintSystem {
  browser: string
  browserVersion: string
  resolution: string
  language: string
  systemLanguage: string
  timezone: string
  os: string
  osVersion: string
  useragent: string
}

export interface IFingerprint {
  imprint: number,
  system: IFingerprintSystem
}