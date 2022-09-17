export function documentHeight() {
  const docHeight = document.documentElement
  docHeight.style.setProperty('--doc-height', `${window.innerHeight}px`)
  console.log('window height function ran')
}
