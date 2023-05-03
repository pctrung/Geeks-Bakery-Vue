import HttpClient from './HttpClient'

const baseApiUrl = '/categories'

const CategoryApi = {
  getAllAsync: async () => {
    const url = baseApiUrl
    try {
      const result = await HttpClient.get(url)
      return result
    } catch (error) {
      //alert(error);
      console.error(error)
    }
  }
}

export default CategoryApi
