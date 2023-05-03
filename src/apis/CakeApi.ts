import type { Cake, PaginationParams, PaginationResult } from '@models/index'
import HttpClient from './HttpClient'

const baseApiUrl = '/cakes'

const CakeApi = {
  getAllAsync: async (params?: PaginationParams): Promise<PaginationResult<Cake[]> | null> => {
    const url = baseApiUrl
    try {
      const result = await HttpClient.get<PaginationResult<Cake[]>>(url, { params })
      return result.data
    } catch (error) {
      console.error(error)
      return null
    }
  },
  getByIdAsync: async (id: string): Promise<Cake | null> => {
    try {
      const url = `${baseApiUrl}/${id}`
      const result = await HttpClient.get<Cake>(url)
      return result.data
    } catch (error) {
      console.error(error)
      return null
    }
  }
}

export default CakeApi
