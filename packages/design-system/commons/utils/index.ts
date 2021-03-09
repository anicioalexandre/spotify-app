import { BooleanConverter } from './types'

export const booleanConverter: BooleanConverter = {
  fromAttribute: (value: string) => value && value !== 'false',
  toAttribute: (value: string) => (value ? 'true' : 'false')
}
