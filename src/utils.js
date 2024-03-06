import React from 'react'

export function getOS () {
  const uA = navigator.userAgent || navigator.vendor || window.opera
  if ((/iPad|iPhone|iPod/.test(uA) && !window.MSStream) || (uA.includes('Mac') && 'ontouchend' in document)) return 'iOS'

  let i; const os = ['Windows', 'Android', 'Unix', 'Mac', 'Linux', 'BlackBerry']
  for (i = 0; i < os.length; i++) if (new RegExp(os[i], 'i').test(uA)) return os[i]
}

export function mapsSelector () {
  const os = getOS()
  if (os === 'iOS') {
    return 'https://maps.apple.com/?address=3832%20E%20Main%20St,%20Farmington,%20NM%2087402,%20United%20States&auid=14434958474571863594&ll=36.754303,-108.158349&lsp=9902&q=Curl%20Up%20and%20Dye&t=m'
  } else {
    return 'https://maps.app.goo.gl/EYQtPhvjuGU6fjnr7'
  }
}

export const useProgressiveImg = (lowQualitySrc, highQualitySrc) => {
  const [src, setSrc] = React.useState(lowQualitySrc)
  React.useEffect(() => {
    setSrc(lowQualitySrc)
    const img = new Image()
    img.src = highQualitySrc
    img.onload = () => {
      setSrc(highQualitySrc)
    }
  }, [lowQualitySrc, highQualitySrc])
  return [src, { blur: src === lowQualitySrc }]
}
