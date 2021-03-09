type FromAttribute = (value: string) => boolean | string
type ToAttribute = (value: string) => string

export interface BooleanConverter {
  fromAttribute: FromAttribute
  toAttribute: ToAttribute
}
