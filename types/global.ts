export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T
}

export type Nullable<T> = T | null
