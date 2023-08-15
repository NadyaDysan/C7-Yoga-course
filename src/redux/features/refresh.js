export const storeRefresh = (refresh) => {
    localStorage.setItem('refresh', refresh)
  }
  
export const deleteRefresh = () => {
    localStorage.removeItem('refresh')
  }
  
export const getRefresh = () => localStorage.getItem('refresh') || ''

export const isRefreshExists = () => Boolean(getRefresh())