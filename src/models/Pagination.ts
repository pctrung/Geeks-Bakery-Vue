export interface PaginationParams {
  search?: string
  page?: number
  limit?: number
}

export interface PaginationResult<T> {
  search: string
  totalItems: number
  totalPages: number
  page: number
  limit: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: number | null
  nextPage: number | null
  data: T[]
}
