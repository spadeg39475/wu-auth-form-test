import { getInfo } from './local-storage'
import compareVersions from 'compare-versions'
import { isIOS } from 'react-device-detect'

export const isShowStickyFooter = (iosDei) => {
  if (isWuAppIosWebview() && iosDei) return false

  return true
}

export function isWuAppWebview() {
  if (typeof window !== 'object') return false

  const platformInfo = getInfo('platform')

  if (platformInfo) {
    const { platform, version } = platformInfo
    if (!['ios', 'android'].includes(platform)) return false

    return compareVersions.compare(version, '3.0.5', '>=')
  }

  return false
}

export function isWuAppIosWebview() {
  if (typeof window !== 'object') return false

  const platformInfo = getInfo('platform')

  if (platformInfo) {
    const { platform, version } = platformInfo
    if (platform !== 'ios') return false

    return compareVersions.compare(version, '3.0.5', '>=')
  }

  return false
}

export function isWuAppAndroidWebview() {
  if (typeof window !== 'object') return false

  const platformInfo = getInfo('platform')

  if (platformInfo) {
    const { platform, version } = platformInfo
    if (platform !== 'android') return false

    return compareVersions.compare(version, '3.0.5', '>=')
  }

  return false
}

export function isIosWebview() {
  if (typeof window !== 'object') return false
  const agent = window.navigator.userAgent.toLowerCase()

  // No matter what broswer an iOS device uses to access shops,
  // the user agent always contains 'safari' word.
  // But, if the device is using webview, it doesn't have 'safari' keyword
  const safari = /safari/.test(agent)

  // No matter an iOS device uses broswer or WebView,
  // the user agent always contains it's device name
  const ios = /iphone|ipod|ipad/.test(agent)

  if (!ios) return false
  return !safari
}

export function isAndroidWebview() {
  if (typeof window !== 'object') return false
  const agent = window.navigator.userAgent.toLowerCase()

  // https://developer.chrome.com/multidevice/user-agent#webview_user_agent
  // It needs to be case-insensitive as we notice some devices use all lowercase
  // which is different from the google doc
  const isChrome = /Chrome\/[\d.]+\sMobile/i.test(agent)
  const isWebview = /; wv\)/.test(agent)
  return isChrome && isWebview
}

export const isClient = () => typeof window === 'object'
