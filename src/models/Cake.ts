export interface Cake {
  id: string
  name: string
  slug: string
  images: { imageUrl: string; alt: string }[]
  price: number
  originalPrice: number
  description: string
  categoryId: string
}
