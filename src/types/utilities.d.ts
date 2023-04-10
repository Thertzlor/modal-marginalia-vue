type Present<T,P extends keyof T = keyof T> = T & {[K in P]-?: NonNullable<T[K]> }
type SomeOf<T,P extends keyof T = keyof T> = {[K in keyof T]: K extends P ? Partial<T[K]>:T[K] }
