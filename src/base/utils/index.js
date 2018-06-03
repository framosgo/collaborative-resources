export const debounce = (func: () => void, wait: number, immediate: boolean) => {
  let timeout
  return (...argmnts) => {
    const context = this
    const args = argmnts
    const later = () => {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}
