import type { Category } from '@models/index'
import HttpClient from './HttpClient'

const baseApiUrl = '/categories'

const CategoryApi = {
  getAllAsync: async (): Promise<Category[]> => {
    const url = baseApiUrl
    try {
      const result = await HttpClient.get(url)
      return result.data
    } catch (error) {
      console.error(error)
      return []
    }
  }
}

export default CategoryApi
