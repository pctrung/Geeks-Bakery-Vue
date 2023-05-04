export const FormatToVND = (price: number): string => {
  return price.toLocaleString('vi', { style: 'currency', currency: 'VND' })
}
