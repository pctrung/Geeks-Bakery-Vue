import type { PaginationParams } from '@models/index'
import HttpClient from './HttpClient'

const baseApiUrl = '/cakes'

const CakeApi = {
  getAllAsync: async (params: PaginationParams) => {
    const url = baseApiUrl
    try {
      const result = await HttpClient.get(url, { params })
      return result
    } catch (error) {
      console.error(error)
    }
  },
  getByIdAsync: async (id: string) => {
    try {
      const url = `${baseApiUrl}/${id}`
      const result = await HttpClient.get(url)
      return result
    } catch (error) {
      console.error(error)
    }
  }
}

export default CakeApi
