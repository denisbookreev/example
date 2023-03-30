declare global {
  const Ya: undefined | {
    Context: {
      AdvManager: {
        render: (prop: {
          blockId: string
          renderTo: string
          statId: number
          onRender?: (data) => void
          onClose?: () => void
          onError?: (data: { type: string, text: string, code: string }) => void
        }) => void
      }
    }
  }

  const ya: undefined | {
    videoAd: {
      play: (params: {
        videoSlot: HTMLVideoElement
        slot: HTMLDivElement
        config: {
          category: number
          partnerId: number
          additionalParams: Record<string, number>
          trackingEvents?: {
            start: string[]
          }
        }
      }) => Promise
    }
  }

  interface Window {
    yaContextCb: undefined | Array<() => void>
  }
}

export default global