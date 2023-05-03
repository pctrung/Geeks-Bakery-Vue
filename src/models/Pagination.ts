export interface PaginationParams {
  search?: string
  page?: number
  limit?: number
}

export interface PaginationResult<T> {
  itemCount: number
  perPage: number
  pageCount: number
  page: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: number | null
  nextPage: number | null
  data: T[]
}
