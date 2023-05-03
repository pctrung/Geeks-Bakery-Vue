import type { Cake, PaginationParams, PaginationResult } from '@models/index'
import HttpClient from './HttpClient'

const baseApiUrl = '/cakes'

const CakeApi = {
  getAllAsync: async (params?: PaginationParams): Promise<PaginationResult<Cake> | null> => {
    const url = baseApiUrl
    try {
      // for demo purpose
      // const result = await HttpClient.get<PaginationResult<Cake>>(url, { params })
      // return result.data
      const data = await HttpClient.get(url, { params })
      const result: PaginationResult<Cake> = {
        data: data.data,
        search: '',
        totalItems: 20,
        totalPages: 2,
        page: 1,
        limit: 10,
        hasPrevPage: false,
        hasNextPage: true,
        prevPage: null,
        nextPage: 2
      }
      return result
    } catch (error) {
      return null
    }
  },
  getByIdAsync: async (id: string): Promise<Cake | null> => {
    try {
      const url = `${baseApiUrl}/${id}`
      const result = await HttpClient.get<Cake>(url)
      return result.data
    } catch (error) {
      return null
    }
  }
}

export default CakeApi
