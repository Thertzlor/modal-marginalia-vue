import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from 'vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type AboutPage = {
  __typename?: 'AboutPage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  footnotes?: Maybe<Scalars['String']['output']>;
  images?: Maybe<UploadFileRelationResponseCollection>;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  toenotes?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type AboutPageImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AboutPageEntity = {
  __typename?: 'AboutPageEntity';
  attributes?: Maybe<AboutPage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type AboutPageEntityResponse = {
  __typename?: 'AboutPageEntityResponse';
  data?: Maybe<AboutPageEntity>;
};

export type AboutPageInput = {
  footnotes?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  text?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  toenotes?: InputMaybe<Scalars['String']['input']>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Category = {
  __typename?: 'Category';
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  posts?: Maybe<PostRelationResponseCollection>;
  priority: Scalars['Int']['output'];
  slug: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CategoryPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse';
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  color?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  posts?: InputMaybe<PostFiltersInput>;
  priority?: InputMaybe<IntFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Comment = {
  __typename?: 'Comment';
  admin_comment?: Maybe<Scalars['Boolean']['output']>;
  author?: Maybe<UsersPermissionsUserEntityResponse>;
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  depth: Scalars['Int']['output'];
  post?: Maybe<PostEntityResponse>;
  subcomments?: Maybe<CommentRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CommentSubcommentsArgs = {
  filters?: InputMaybe<CommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CommentEntity = {
  __typename?: 'CommentEntity';
  attributes?: Maybe<Comment>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CommentEntityResponse = {
  __typename?: 'CommentEntityResponse';
  data?: Maybe<CommentEntity>;
};

export type CommentEntityResponseCollection = {
  __typename?: 'CommentEntityResponseCollection';
  data: Array<CommentEntity>;
  meta: ResponseCollectionMeta;
};

export type CommentFiltersInput = {
  admin_comment?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<CommentFiltersInput>>>;
  author?: InputMaybe<UsersPermissionsUserFiltersInput>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  depth?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CommentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CommentFiltersInput>>>;
  post?: InputMaybe<PostFiltersInput>;
  subcomments?: InputMaybe<CommentFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CommentInput = {
  admin_comment?: InputMaybe<Scalars['Boolean']['input']>;
  author?: InputMaybe<Scalars['ID']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  depth?: InputMaybe<Scalars['Int']['input']>;
  email: Scalars['String']['input'];
  post?: InputMaybe<Scalars['ID']['input']>;
  subcomments?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  token: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type CommentRelationResponseCollection = {
  __typename?: 'CommentRelationResponseCollection';
  data: Array<CommentEntity>;
};

export type ContentReleasesRelease = {
  __typename?: 'ContentReleasesRelease';
  actions?: Maybe<ContentReleasesReleaseActionRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  releasedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ContentReleasesReleaseActionsArgs = {
  filters?: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentReleasesReleaseAction = {
  __typename?: 'ContentReleasesReleaseAction';
  contentType: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  entry?: Maybe<GenericMorph>;
  locale?: Maybe<Scalars['String']['output']>;
  release?: Maybe<ContentReleasesReleaseEntityResponse>;
  type: Enum_Contentreleasesreleaseaction_Type;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ContentReleasesReleaseActionEntity = {
  __typename?: 'ContentReleasesReleaseActionEntity';
  attributes?: Maybe<ContentReleasesReleaseAction>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ContentReleasesReleaseActionEntityResponse = {
  __typename?: 'ContentReleasesReleaseActionEntityResponse';
  data?: Maybe<ContentReleasesReleaseActionEntity>;
};

export type ContentReleasesReleaseActionEntityResponseCollection = {
  __typename?: 'ContentReleasesReleaseActionEntityResponseCollection';
  data: Array<ContentReleasesReleaseActionEntity>;
  meta: ResponseCollectionMeta;
};

export type ContentReleasesReleaseActionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseActionFiltersInput>>>;
  contentType?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseActionFiltersInput>>>;
  release?: InputMaybe<ContentReleasesReleaseFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContentReleasesReleaseActionInput = {
  contentType?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  release?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Enum_Contentreleasesreleaseaction_Type>;
};

export type ContentReleasesReleaseActionRelationResponseCollection = {
  __typename?: 'ContentReleasesReleaseActionRelationResponseCollection';
  data: Array<ContentReleasesReleaseActionEntity>;
};

export type ContentReleasesReleaseEntity = {
  __typename?: 'ContentReleasesReleaseEntity';
  attributes?: Maybe<ContentReleasesRelease>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ContentReleasesReleaseEntityResponse = {
  __typename?: 'ContentReleasesReleaseEntityResponse';
  data?: Maybe<ContentReleasesReleaseEntity>;
};

export type ContentReleasesReleaseEntityResponseCollection = {
  __typename?: 'ContentReleasesReleaseEntityResponseCollection';
  data: Array<ContentReleasesReleaseEntity>;
  meta: ResponseCollectionMeta;
};

export type ContentReleasesReleaseFiltersInput = {
  actions?: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ContentReleasesReleaseFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseFiltersInput>>>;
  releasedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContentReleasesReleaseInput = {
  actions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  releasedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Contentreleasesreleaseaction_Type {
  Publish = 'publish',
  Unpublish = 'unpublish'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = AboutPage | Category | Comment | ContentReleasesRelease | ContentReleasesReleaseAction | I18NLocale | Post | Quote | Tag | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createComment?: Maybe<CommentEntityResponse>;
  createContentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>;
  createContentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>;
  createPost?: Maybe<PostEntityResponse>;
  createQuote?: Maybe<QuoteEntityResponse>;
  createTag?: Maybe<TagEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteAboutPage?: Maybe<AboutPageEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteComment?: Maybe<CommentEntityResponse>;
  deleteContentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>;
  deleteContentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>;
  deletePost?: Maybe<PostEntityResponse>;
  deleteQuote?: Maybe<QuoteEntityResponse>;
  deleteTag?: Maybe<TagEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAboutPage?: Maybe<AboutPageEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateComment?: Maybe<CommentEntityResponse>;
  updateContentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>;
  updateContentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updatePost?: Maybe<PostEntityResponse>;
  updateQuote?: Maybe<QuoteEntityResponse>;
  updateTag?: Maybe<TagEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};


export type MutationCreateCommentArgs = {
  data: CommentInput;
};


export type MutationCreateContentReleasesReleaseArgs = {
  data: ContentReleasesReleaseInput;
};


export type MutationCreateContentReleasesReleaseActionArgs = {
  data: ContentReleasesReleaseActionInput;
};


export type MutationCreatePostArgs = {
  data: PostInput;
};


export type MutationCreateQuoteArgs = {
  data: QuoteInput;
};


export type MutationCreateTagArgs = {
  data: TagInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteContentReleasesReleaseArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteContentReleasesReleaseActionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteQuoteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTagArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateAboutPageArgs = {
  data: AboutPageInput;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCommentArgs = {
  data: CommentInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateContentReleasesReleaseArgs = {
  data: ContentReleasesReleaseInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateContentReleasesReleaseActionArgs = {
  data: ContentReleasesReleaseActionInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdatePostArgs = {
  data: PostInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateQuoteArgs = {
  data: QuoteInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateTagArgs = {
  data: TagInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Post = {
  __typename?: 'Post';
  body_searchable?: Maybe<Scalars['String']['output']>;
  body_vue?: Maybe<Scalars['String']['output']>;
  category?: Maybe<CategoryEntityResponse>;
  comments?: Maybe<CommentRelationResponseCollection>;
  comments_enabled: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  footnotes: Scalars['String']['output'];
  header?: Maybe<UploadFileEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  tags?: Maybe<TagRelationResponseCollection>;
  teaser?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  toc?: Maybe<Scalars['Boolean']['output']>;
  toenotes: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PostCommentsArgs = {
  filters?: InputMaybe<CommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PostTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostEntity = {
  __typename?: 'PostEntity';
  attributes?: Maybe<Post>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PostEntityResponse = {
  __typename?: 'PostEntityResponse';
  data?: Maybe<PostEntity>;
};

export type PostEntityResponseCollection = {
  __typename?: 'PostEntityResponseCollection';
  data: Array<PostEntity>;
  meta: ResponseCollectionMeta;
};

export type PostFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>;
  body?: InputMaybe<StringFilterInput>;
  body_searchable?: InputMaybe<StringFilterInput>;
  body_vue?: InputMaybe<StringFilterInput>;
  category?: InputMaybe<CategoryFiltersInput>;
  comments?: InputMaybe<CommentFiltersInput>;
  comments_enabled?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  footnotes?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<PostFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>;
  progress?: InputMaybe<FloatFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  teaser?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  toc?: InputMaybe<BooleanFilterInput>;
  toenotes?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PostInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  body_searchable?: InputMaybe<Scalars['String']['input']>;
  body_vue?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['ID']['input']>;
  comments?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  comments_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  footnotes?: InputMaybe<Scalars['String']['input']>;
  header?: InputMaybe<Scalars['ID']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  progress?: InputMaybe<Scalars['Float']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  teaser?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  toc?: InputMaybe<Scalars['Boolean']['input']>;
  toenotes?: InputMaybe<Scalars['String']['input']>;
};

export type PostRelationResponseCollection = {
  __typename?: 'PostRelationResponseCollection';
  data: Array<PostEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  aboutPage?: Maybe<AboutPageEntityResponse>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  comment?: Maybe<CommentEntityResponse>;
  comments?: Maybe<CommentEntityResponseCollection>;
  contentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>;
  contentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>;
  contentReleasesReleaseActions?: Maybe<ContentReleasesReleaseActionEntityResponseCollection>;
  contentReleasesReleases?: Maybe<ContentReleasesReleaseEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  post?: Maybe<PostEntityResponse>;
  posts?: Maybe<PostEntityResponseCollection>;
  quote?: Maybe<QuoteEntityResponse>;
  quotes?: Maybe<QuoteEntityResponseCollection>;
  tag?: Maybe<TagEntityResponse>;
  tags?: Maybe<TagEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCommentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCommentsArgs = {
  filters?: InputMaybe<CommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContentReleasesReleaseArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryContentReleasesReleaseActionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryContentReleasesReleaseActionsArgs = {
  filters?: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContentReleasesReleasesArgs = {
  filters?: InputMaybe<ContentReleasesReleaseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPostArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryQuoteArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryQuotesArgs = {
  filters?: InputMaybe<QuoteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTagArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Quote = {
  __typename?: 'Quote';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  text: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type QuoteEntity = {
  __typename?: 'QuoteEntity';
  attributes?: Maybe<Quote>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type QuoteEntityResponse = {
  __typename?: 'QuoteEntityResponse';
  data?: Maybe<QuoteEntity>;
};

export type QuoteEntityResponseCollection = {
  __typename?: 'QuoteEntityResponseCollection';
  data: Array<QuoteEntity>;
  meta: ResponseCollectionMeta;
};

export type QuoteFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<QuoteFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<QuoteFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<QuoteFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type QuoteInput = {
  text?: InputMaybe<Scalars['String']['input']>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Tag = {
  __typename?: 'Tag';
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  posts?: Maybe<PostRelationResponseCollection>;
  slug: Scalars['String']['output'];
  tier?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type TagPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TagEntity = {
  __typename?: 'TagEntity';
  attributes?: Maybe<Tag>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type TagEntityResponse = {
  __typename?: 'TagEntityResponse';
  data?: Maybe<TagEntity>;
};

export type TagEntityResponseCollection = {
  __typename?: 'TagEntityResponseCollection';
  data: Array<TagEntity>;
  meta: ResponseCollectionMeta;
};

export type TagFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  color?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TagFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  posts?: InputMaybe<PostFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  tier?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TagInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tier?: InputMaybe<Scalars['Int']['input']>;
};

export type TagRelationResponseCollection = {
  __typename?: 'TagRelationResponseCollection';
  data: Array<TagEntity>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  comments?: Maybe<CommentRelationResponseCollection>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};


export type UsersPermissionsUserCommentsArgs = {
  filters?: InputMaybe<CommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  comments?: InputMaybe<CommentFiltersInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  comments?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type TotalPagesFragment = { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } };

export type FullPageFragment = { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } };

export type InitQueryVariables = Exact<{
  pg?: InputMaybe<PaginationArg>;
}>;


export type InitQuery = { __typename?: 'Query', quotes?: { __typename?: 'QuoteEntityResponseCollection', data: Array<{ __typename?: 'QuoteEntity', id?: string | null, attributes?: { __typename?: 'Quote', text: string } | null }> } | null, categories?: { __typename?: 'CategoryEntityResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', name: string, slug: string, priority: number } | null }> } | null, posts?: { __typename?: 'PostEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } }, data: Array<{ __typename?: 'PostEntity', id?: string | null, attributes?: { __typename?: 'Post', publishedAt?: any | null, title: string, slug: string } | null }> } | null };

export type LastPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type LastPostsQuery = { __typename?: 'Query', posts?: { __typename?: 'PostEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } } } | null };

export type AboutQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutQuery = { __typename?: 'Query', aboutPage?: { __typename?: 'AboutPageEntityResponse', data?: { __typename?: 'AboutPageEntity', attributes?: { __typename?: 'AboutPage', text?: string | null, title?: string | null, footnotes?: string | null, toenotes?: string | null } | null } | null } | null };

export type TagListQueryVariables = Exact<{ [key: string]: never; }>;


export type TagListQuery = { __typename?: 'Query', tags?: { __typename?: 'TagEntityResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', name: string, slug: string, color?: string | null, posts?: { __typename?: 'PostRelationResponseCollection', data: Array<{ __typename?: 'PostEntity', id?: string | null }> } | null } | null }> } | null };

export type PostSearchQueryVariables = Exact<{
  postFilter: PostFiltersInput;
  pg: PaginationArg;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type PostSearchQuery = { __typename?: 'Query', posts?: { __typename?: 'PostEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } }, data: Array<{ __typename?: 'PostEntity', id?: string | null, attributes?: { __typename?: 'Post', publishedAt?: any | null, body_searchable?: string | null, title: string, teaser?: string | null, slug: string, header?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', formats?: any | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', name: string, slug: string, color?: string | null } | null }> } | null, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', name: string, slug: string, color?: string | null } | null } | null } | null } | null }> } | null };

export type SinglePostQueryVariables = Exact<{
  postId?: InputMaybe<Scalars['ID']['input']>;
  commentPagination?: InputMaybe<PaginationArg>;
}>;


export type SinglePostQuery = { __typename?: 'Query', comments?: { __typename?: 'CommentEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } }, data: Array<{ __typename?: 'CommentEntity', attributes?: { __typename?: 'Comment', depth: number, createdAt?: any | null, content: string, subcomments?: { __typename?: 'CommentRelationResponseCollection', data: Array<{ __typename?: 'CommentEntity', id?: string | null }> } | null, author?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', username: string } | null } | null } | null } | null }> } | null, post?: { __typename?: 'PostEntityResponse', data?: { __typename?: 'PostEntity', id?: string | null, attributes?: { __typename?: 'Post', title: string, body_vue?: string | null, slug: string, toc?: boolean | null, publishedAt?: any | null, updatedAt?: any | null, comments_enabled: boolean, footnotes: string, toenotes: string, header?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } | null, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', color?: string | null, name: string, slug: string } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', color?: string | null, name: string, slug: string } | null }> } | null } | null } | null } | null };

export type PostCheckQueryVariables = Exact<{
  postId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type PostCheckQuery = { __typename?: 'Query', post?: { __typename?: 'PostEntityResponse', data?: { __typename?: 'PostEntity', id?: string | null, attributes?: { __typename?: 'Post', updatedAt?: any | null } | null } | null } | null };

export type PostCountQueryVariables = Exact<{
  pf?: InputMaybe<PostFiltersInput>;
  pg: PaginationArg;
}>;


export type PostCountQuery = { __typename?: 'Query', posts?: { __typename?: 'PostEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, pageSize: number } } } | null };

export type PostListQueryVariables = Exact<{
  pf?: InputMaybe<PostFiltersInput>;
  tf: TagFiltersInput;
  cf?: InputMaybe<CategoryFiltersInput>;
  pg: PaginationArg;
}>;


export type PostListQuery = { __typename?: 'Query', posts?: { __typename?: 'PostEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } }, data: Array<{ __typename?: 'PostEntity', id?: string | null, attributes?: { __typename?: 'Post', publishedAt?: any | null, title: string, teaser?: string | null, slug: string, header?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', formats?: any | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', name: string, slug: string, color?: string | null } | null }> } | null, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', name: string, slug: string, color?: string | null } | null } | null } | null } | null }> } | null, tags?: { __typename?: 'TagEntityResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', name: string, slug: string, color?: string | null, description?: string | null } | null }> } | null, categories?: { __typename?: 'CategoryEntityResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', name: string, slug: string, color?: string | null, description?: string | null } | null }> } | null };

export type CommentatorMutationVariables = Exact<{
  post: Scalars['ID']['input'];
  username: Scalars['String']['input'];
  content: Scalars['String']['input'];
  email: Scalars['String']['input'];
  token: Scalars['String']['input'];
}>;


export type CommentatorMutation = { __typename?: 'Mutation', createComment?: { __typename?: 'CommentEntityResponse', data?: { __typename?: 'CommentEntity', id?: string | null } | null } | null };

export const TotalPagesFragmentDoc = gql`
    fragment totalPages on ResponseCollectionMeta {
  pagination {
    total
  }
}
    `;
export const FullPageFragmentDoc = gql`
    fragment fullPage on ResponseCollectionMeta {
  pagination {
    total
    page
    pageSize
    pageCount
  }
}
    `;
export const InitDocument = gql`
    query Init($pg: PaginationArg) {
  quotes(pagination: $pg) {
    data {
      id
      attributes {
        text
      }
    }
  }
  categories(filters: {posts: {publishedAt: {notNull: true}}}) {
    data {
      attributes {
        name
        slug
        priority
      }
    }
  }
  posts(pagination: {start: 0, limit: 5}, sort: "publishedAt:desc") {
    meta {
      ...totalPages
    }
    data {
      id
      attributes {
        publishedAt
        title
        slug
      }
    }
  }
}
    ${TotalPagesFragmentDoc}`;

/**
 * __useInitQuery__
 *
 * To run a query within a Vue component, call `useInitQuery` and pass it any options that fit your needs.
 * When your component renders, `useInitQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useInitQuery({
 *   pg: // value for 'pg'
 * });
 */
export function useInitQuery(variables: InitQueryVariables | VueCompositionApi.Ref<InitQueryVariables> | ReactiveFunction<InitQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<InitQuery, InitQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<InitQuery, InitQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<InitQuery, InitQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<InitQuery, InitQueryVariables>(InitDocument, variables, options);
}
export function useInitLazyQuery(variables: InitQueryVariables | VueCompositionApi.Ref<InitQueryVariables> | ReactiveFunction<InitQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<InitQuery, InitQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<InitQuery, InitQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<InitQuery, InitQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<InitQuery, InitQueryVariables>(InitDocument, variables, options);
}
export type InitQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<InitQuery, InitQueryVariables>;
export const LastPostsDocument = gql`
    query lastPosts {
  posts {
    meta {
      ...totalPages
    }
  }
}
    ${TotalPagesFragmentDoc}`;

/**
 * __useLastPostsQuery__
 *
 * To run a query within a Vue component, call `useLastPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLastPostsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useLastPostsQuery();
 */
export function useLastPostsQuery(options: VueApolloComposable.UseQueryOptions<LastPostsQuery, LastPostsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<LastPostsQuery, LastPostsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<LastPostsQuery, LastPostsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<LastPostsQuery, LastPostsQueryVariables>(LastPostsDocument, {}, options);
}
export function useLastPostsLazyQuery(options: VueApolloComposable.UseQueryOptions<LastPostsQuery, LastPostsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<LastPostsQuery, LastPostsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<LastPostsQuery, LastPostsQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<LastPostsQuery, LastPostsQueryVariables>(LastPostsDocument, {}, options);
}
export type LastPostsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<LastPostsQuery, LastPostsQueryVariables>;
export const AboutDocument = gql`
    query about {
  aboutPage {
    data {
      attributes {
        text
        title
        footnotes
        toenotes
      }
    }
  }
}
    `;

/**
 * __useAboutQuery__
 *
 * To run a query within a Vue component, call `useAboutQuery` and pass it any options that fit your needs.
 * When your component renders, `useAboutQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAboutQuery();
 */
export function useAboutQuery(options: VueApolloComposable.UseQueryOptions<AboutQuery, AboutQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AboutQuery, AboutQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AboutQuery, AboutQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AboutQuery, AboutQueryVariables>(AboutDocument, {}, options);
}
export function useAboutLazyQuery(options: VueApolloComposable.UseQueryOptions<AboutQuery, AboutQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AboutQuery, AboutQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AboutQuery, AboutQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AboutQuery, AboutQueryVariables>(AboutDocument, {}, options);
}
export type AboutQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AboutQuery, AboutQueryVariables>;
export const TagListDocument = gql`
    query TagList {
  tags(filters: {posts: {id: {notNull: true}, publishedAt: {notNull: true}}}) {
    data {
      attributes {
        name
        slug
        color
        posts(filters: {publishedAt: {notNull: true}, id: {notNull: true}}) {
          data {
            id
          }
        }
      }
    }
  }
}
    `;

/**
 * __useTagListQuery__
 *
 * To run a query within a Vue component, call `useTagListQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagListQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useTagListQuery();
 */
export function useTagListQuery(options: VueApolloComposable.UseQueryOptions<TagListQuery, TagListQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TagListQuery, TagListQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TagListQuery, TagListQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<TagListQuery, TagListQueryVariables>(TagListDocument, {}, options);
}
export function useTagListLazyQuery(options: VueApolloComposable.UseQueryOptions<TagListQuery, TagListQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TagListQuery, TagListQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TagListQuery, TagListQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<TagListQuery, TagListQueryVariables>(TagListDocument, {}, options);
}
export type TagListQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<TagListQuery, TagListQueryVariables>;
export const PostSearchDocument = gql`
    query postSearch($postFilter: PostFiltersInput!, $pg: PaginationArg!, $sort: [String]) {
  posts(filters: $postFilter, pagination: $pg, sort: $sort) {
    meta {
      ...fullPage
    }
    data {
      id
      attributes {
        publishedAt
        body_searchable
        title
        teaser
        slug
        header {
          data {
            attributes {
              formats
            }
          }
        }
        tags {
          data {
            attributes {
              name
              slug
              color
            }
          }
        }
        category {
          data {
            attributes {
              name
              slug
              color
            }
          }
        }
      }
    }
  }
}
    ${FullPageFragmentDoc}`;

/**
 * __usePostSearchQuery__
 *
 * To run a query within a Vue component, call `usePostSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostSearchQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = usePostSearchQuery({
 *   postFilter: // value for 'postFilter'
 *   pg: // value for 'pg'
 *   sort: // value for 'sort'
 * });
 */
export function usePostSearchQuery(variables: PostSearchQueryVariables | VueCompositionApi.Ref<PostSearchQueryVariables> | ReactiveFunction<PostSearchQueryVariables>, options: VueApolloComposable.UseQueryOptions<PostSearchQuery, PostSearchQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<PostSearchQuery, PostSearchQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<PostSearchQuery, PostSearchQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<PostSearchQuery, PostSearchQueryVariables>(PostSearchDocument, variables, options);
}
export function usePostSearchLazyQuery(variables: PostSearchQueryVariables | VueCompositionApi.Ref<PostSearchQueryVariables> | ReactiveFunction<PostSearchQueryVariables>, options: VueApolloComposable.UseQueryOptions<PostSearchQuery, PostSearchQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<PostSearchQuery, PostSearchQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<PostSearchQuery, PostSearchQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<PostSearchQuery, PostSearchQueryVariables>(PostSearchDocument, variables, options);
}
export type PostSearchQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<PostSearchQuery, PostSearchQueryVariables>;
export const SinglePostDocument = gql`
    query SinglePost($postId: ID, $commentPagination: PaginationArg) {
  comments(filters: {post: {id: {eq: $postId}}}, pagination: $commentPagination) {
    meta {
      ...fullPage
    }
    data {
      attributes {
        depth
        subcomments {
          data {
            id
          }
        }
        createdAt
        content
        author {
          data {
            attributes {
              username
            }
          }
        }
      }
    }
  }
  post(id: $postId) {
    data {
      id
      attributes {
        title
        header {
          data {
            attributes {
              url
              caption
              width
              height
              alternativeText
              formats
            }
          }
        }
        body_vue
        slug
        toc
        publishedAt
        updatedAt
        comments_enabled
        footnotes
        toenotes
        category {
          data {
            attributes {
              color
              name
              slug
            }
          }
        }
        tags {
          data {
            attributes {
              color
              name
              slug
            }
          }
        }
      }
    }
  }
}
    ${FullPageFragmentDoc}`;

/**
 * __useSinglePostQuery__
 *
 * To run a query within a Vue component, call `useSinglePostQuery` and pass it any options that fit your needs.
 * When your component renders, `useSinglePostQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useSinglePostQuery({
 *   postId: // value for 'postId'
 *   commentPagination: // value for 'commentPagination'
 * });
 */
export function useSinglePostQuery(variables: SinglePostQueryVariables | VueCompositionApi.Ref<SinglePostQueryVariables> | ReactiveFunction<SinglePostQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<SinglePostQuery, SinglePostQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<SinglePostQuery, SinglePostQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<SinglePostQuery, SinglePostQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<SinglePostQuery, SinglePostQueryVariables>(SinglePostDocument, variables, options);
}
export function useSinglePostLazyQuery(variables: SinglePostQueryVariables | VueCompositionApi.Ref<SinglePostQueryVariables> | ReactiveFunction<SinglePostQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<SinglePostQuery, SinglePostQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<SinglePostQuery, SinglePostQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<SinglePostQuery, SinglePostQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<SinglePostQuery, SinglePostQueryVariables>(SinglePostDocument, variables, options);
}
export type SinglePostQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<SinglePostQuery, SinglePostQueryVariables>;
export const PostCheckDocument = gql`
    query postCheck($postId: ID) {
  post(id: $postId) {
    data {
      id
      attributes {
        updatedAt
      }
    }
  }
}
    `;

/**
 * __usePostCheckQuery__
 *
 * To run a query within a Vue component, call `usePostCheckQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostCheckQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = usePostCheckQuery({
 *   postId: // value for 'postId'
 * });
 */
export function usePostCheckQuery(variables: PostCheckQueryVariables | VueCompositionApi.Ref<PostCheckQueryVariables> | ReactiveFunction<PostCheckQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<PostCheckQuery, PostCheckQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<PostCheckQuery, PostCheckQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<PostCheckQuery, PostCheckQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<PostCheckQuery, PostCheckQueryVariables>(PostCheckDocument, variables, options);
}
export function usePostCheckLazyQuery(variables: PostCheckQueryVariables | VueCompositionApi.Ref<PostCheckQueryVariables> | ReactiveFunction<PostCheckQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<PostCheckQuery, PostCheckQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<PostCheckQuery, PostCheckQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<PostCheckQuery, PostCheckQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<PostCheckQuery, PostCheckQueryVariables>(PostCheckDocument, variables, options);
}
export type PostCheckQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<PostCheckQuery, PostCheckQueryVariables>;
export const PostCountDocument = gql`
    query PostCount($pf: PostFiltersInput, $pg: PaginationArg!) {
  posts(filters: $pf, pagination: $pg) {
    meta {
      pagination {
        total
        pageSize
      }
    }
  }
}
    `;

/**
 * __usePostCountQuery__
 *
 * To run a query within a Vue component, call `usePostCountQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostCountQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = usePostCountQuery({
 *   pf: // value for 'pf'
 *   pg: // value for 'pg'
 * });
 */
export function usePostCountQuery(variables: PostCountQueryVariables | VueCompositionApi.Ref<PostCountQueryVariables> | ReactiveFunction<PostCountQueryVariables>, options: VueApolloComposable.UseQueryOptions<PostCountQuery, PostCountQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<PostCountQuery, PostCountQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<PostCountQuery, PostCountQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<PostCountQuery, PostCountQueryVariables>(PostCountDocument, variables, options);
}
export function usePostCountLazyQuery(variables: PostCountQueryVariables | VueCompositionApi.Ref<PostCountQueryVariables> | ReactiveFunction<PostCountQueryVariables>, options: VueApolloComposable.UseQueryOptions<PostCountQuery, PostCountQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<PostCountQuery, PostCountQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<PostCountQuery, PostCountQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<PostCountQuery, PostCountQueryVariables>(PostCountDocument, variables, options);
}
export type PostCountQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<PostCountQuery, PostCountQueryVariables>;
export const PostListDocument = gql`
    query PostList($pf: PostFiltersInput, $tf: TagFiltersInput!, $cf: CategoryFiltersInput, $pg: PaginationArg!) {
  posts(filters: $pf, pagination: $pg, sort: "publishedAt:desc") {
    meta {
      ...fullPage
    }
    data {
      id
      attributes {
        publishedAt
        title
        teaser
        slug
        header {
          data {
            attributes {
              formats
            }
          }
        }
        tags {
          data {
            attributes {
              name
              slug
              color
            }
          }
        }
        category {
          data {
            attributes {
              name
              slug
              color
            }
          }
        }
      }
    }
  }
  tags(filters: $tf) {
    data {
      attributes {
        name
        slug
        color
        description
      }
    }
  }
  categories(filters: $cf) {
    data {
      attributes {
        name
        slug
        color
        description
      }
    }
  }
}
    ${FullPageFragmentDoc}`;

/**
 * __usePostListQuery__
 *
 * To run a query within a Vue component, call `usePostListQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostListQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = usePostListQuery({
 *   pf: // value for 'pf'
 *   tf: // value for 'tf'
 *   cf: // value for 'cf'
 *   pg: // value for 'pg'
 * });
 */
export function usePostListQuery(variables: PostListQueryVariables | VueCompositionApi.Ref<PostListQueryVariables> | ReactiveFunction<PostListQueryVariables>, options: VueApolloComposable.UseQueryOptions<PostListQuery, PostListQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<PostListQuery, PostListQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<PostListQuery, PostListQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<PostListQuery, PostListQueryVariables>(PostListDocument, variables, options);
}
export function usePostListLazyQuery(variables: PostListQueryVariables | VueCompositionApi.Ref<PostListQueryVariables> | ReactiveFunction<PostListQueryVariables>, options: VueApolloComposable.UseQueryOptions<PostListQuery, PostListQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<PostListQuery, PostListQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<PostListQuery, PostListQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<PostListQuery, PostListQueryVariables>(PostListDocument, variables, options);
}
export type PostListQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<PostListQuery, PostListQueryVariables>;
export const CommentatorDocument = gql`
    mutation commentator($post: ID!, $username: String!, $content: String!, $email: String!, $token: String!) {
  createComment(
    data: {post: $post, content: $content, username: $username, email: $email, token: $token}
  ) {
    data {
      id
    }
  }
}
    `;

/**
 * __useCommentatorMutation__
 *
 * To run a mutation, you first call `useCommentatorMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCommentatorMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCommentatorMutation({
 *   variables: {
 *     post: // value for 'post'
 *     username: // value for 'username'
 *     content: // value for 'content'
 *     email: // value for 'email'
 *     token: // value for 'token'
 *   },
 * });
 */
export function useCommentatorMutation(options: VueApolloComposable.UseMutationOptions<CommentatorMutation, CommentatorMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CommentatorMutation, CommentatorMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CommentatorMutation, CommentatorMutationVariables>(CommentatorDocument, options);
}
export type CommentatorMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CommentatorMutation, CommentatorMutationVariables>;