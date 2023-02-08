type Nullish = null|undefined|''
type Unspace<T> = {[K in keyof T]:T[K]}

type Quote = {text: string} 

type UploadedFile = {
   name: string
   alternativeText: string
   caption: string
   width: number
   height: number
   formats: Record<string, ImageFileData>
   hash: string
   ext: string
   mime: string
   size: number
   url: string
   previewUrl: string
   provider: string
   provider_metadata?: Record<string, any>
   related: any
   createdAt: Date
   updatedAt: Date
}

type AboutPage = {
   text: string,
   title: string,
   images: RelationCollection<UploadedFile>
   toenotes?: string,
   footnotes?: string
}

type ImageFileData = {
   ext:string,
   hash:string,
   mime:string,
   height:number,
   width:number,
   size:number,
   url:string,
   public_id:string,
   path:string|null
}

type Post = {
   title: string
   tags: RelationCollection<Tag>
   header: Relation<UploadedFile>
   images: RelationCollection<UploadedFile>
   body: string
   slug: string
   teaser: string
   category: Relation<Category>
   toc:boolean,
   comments_enabled: boolean
   footnotes: string
   toenotes: string
   body_searchable: string|null
   createdAt: Date
   updatedAt: Date
   publishedAt: Date
}

type PluginComment ={
   content:string
   author:Relation<User>
   related_to:Relation<PLuginContentId>
   createdAt:Date
}

type PLuginContentId ={
   slug:string
   slag:RelationCollection<Post>
}

type User ={
   username:string
}

type Category = {
   name: string
   posts: RelationCollection<Post>
   description: string
   slug: string
   color: string
   createdAt: Date
   updatedAt: Date
}

type Tag = {
   name: string
   posts: RelationCollection<Post>
   slug: string
   color: string
   tier: number
   description:string
   createdAt: Date
   updatedAt: Date
}


type MetaData = {
   pagination: {
      total: number,
      page: number,
      pageSize: number,
      pageCount: number,
   }
}

type ID = string | number

type Unrelate<T> = T extends RelationCollection<any> ? T['data'][number]['attributes'] : T extends Relation<any> ? T['data']['attributes'] : T

type Entity<T> = {id: ID, attributes: T}

type EntityCollection<T> = {data: Entity<T>[], meta: MetaData}

type Relation<T> = {data: Entity<T>}

type RelationCollection<T> = {data: Entity<T>[]}

type QueryFilter<T extends any> = T extends Date ? FilterPrimitive<T> : T extends any[] ? QueryFilter<T[number]> : T extends Record<string, any> ? FilterObject<T> : FilterPrimitive<T>

type FilterObject<T extends Record<string, any>> = Partial<{[K in keyof T]: QueryFilter<Unrelate<T[K]>>}
   & {and: FilterObject<T>[], or: FilterObject<T>[], not: FilterObject<T>[], id: FilterPrimitive<ID>}>

type PaginationArg = {page: number, pageSize: number}

type FilterPrimitive<T extends any = any> = Partial<{
   not: FilterPrimitive<T>,
   eq: T,
   ne: T,
   contains: T,
   containsi: T,
   notContains: T
   notContainsi: T,
   gt: T,
   gte: T,
   lt: T,
   lte: T,
   null: boolean,
   notNull: boolean,
   in: T[],
   between: T[]
}>