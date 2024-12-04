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
};

export type AboutPage = {
  __typename?: 'AboutPage';
  /** @deprecated Use root level fields instead */
  attributes: AboutPage;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** @deprecated Use root level fields instead */
  data: AboutPage;
  documentId: Scalars['ID']['output'];
  footnotes?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `documentId` instead */
  id: Scalars['ID']['output'];
  images: Maybe<UploadFile>[];
  images_connection?: Maybe<UploadFileRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  text: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  toenotes?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type AboutPageImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
};


export type AboutPageImages_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
};

export type AboutPageInput = {
  footnotes?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  toenotes?: InputMaybe<Scalars['String']['input']>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<InputMaybe<Scalars['Boolean']['input']>[]>;
  between?: InputMaybe<InputMaybe<Scalars['Boolean']['input']>[]>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<InputMaybe<Scalars['Boolean']['input']>[]>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<InputMaybe<Scalars['Boolean']['input']>[]>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<InputMaybe<Scalars['Boolean']['input']>[]>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Category = {
  __typename?: 'Category';
  /** @deprecated Use root level fields instead */
  attributes: Category;
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** @deprecated Use root level fields instead */
  data: Category;
  description?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  /** @deprecated Use `documentId` instead */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  posts: Maybe<Post>[];
  posts_connection?: Maybe<PostRelationResponseCollection>;
  priority: Scalars['Int']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CategoryPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
};


export type CategoryPosts_ConnectionArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  /** @deprecated Use `nodes` field instead */
  data: Category[];
  /** @deprecated Use the `pageInfo` field instead */
  meta: ResponseCollectionMeta;
  nodes: Category[];
  pageInfo: Pagination;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<InputMaybe<CategoryFiltersInput>[]>;
  color?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<InputMaybe<CategoryFiltersInput>[]>;
  posts?: InputMaybe<PostFiltersInput>;
  priority?: InputMaybe<IntFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Comment = {
  __typename?: 'Comment';
  admin_comment?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use root level fields instead */
  attributes: Comment;
  author?: Maybe<UsersPermissionsUser>;
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** @deprecated Use root level fields instead */
  data: Comment;
  depth: Scalars['Int']['output'];
  documentId: Scalars['ID']['output'];
  /** @deprecated Use `documentId` instead */
  id: Scalars['ID']['output'];
  post?: Maybe<Post>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  subcomments: Maybe<Comment>[];
  subcomments_connection?: Maybe<CommentRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CommentSubcommentsArgs = {
  filters?: InputMaybe<CommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
};


export type CommentSubcomments_ConnectionArgs = {
  filters?: InputMaybe<CommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
};

export type CommentEntityResponseCollection = {
  __typename?: 'CommentEntityResponseCollection';
  /** @deprecated Use `nodes` field instead */
  data: Comment[];
  /** @deprecated Use the `pageInfo` field instead */
  meta: ResponseCollectionMeta;
  nodes: Comment[];
  pageInfo: Pagination;
};

export type CommentFiltersInput = {
  admin_comment?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<InputMaybe<CommentFiltersInput>[]>;
  author?: InputMaybe<UsersPermissionsUserFiltersInput>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  depth?: InputMaybe<IntFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CommentFiltersInput>;
  or?: InputMaybe<InputMaybe<CommentFiltersInput>[]>;
  post?: InputMaybe<PostFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
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
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  subcomments?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  token: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type CommentRelationResponseCollection = {
  __typename?: 'CommentRelationResponseCollection';
  /** @deprecated Use `nodes` field instead */
  data: Comment[];
  nodes: Comment[];
};

export type DateTimeFilterInput = {
  and?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  between?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DeleteMutationResponse = {
  __typename?: 'DeleteMutationResponse';
  documentId: Scalars['ID']['output'];
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<InputMaybe<Scalars['Float']['input']>[]>;
  between?: InputMaybe<InputMaybe<Scalars['Float']['input']>[]>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<InputMaybe<Scalars['Float']['input']>[]>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<InputMaybe<Scalars['Float']['input']>[]>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<InputMaybe<Scalars['Float']['input']>[]>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = AboutPage | Category | Comment | I18NLocale | Post | Quote | ReviewWorkflowsWorkflow | ReviewWorkflowsWorkflowStage | Tag | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  /** @deprecated Use root level fields instead */
  attributes: I18NLocale;
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** @deprecated Use root level fields instead */
  data: I18NLocale;
  documentId: Scalars['ID']['output'];
  /** @deprecated Use `documentId` instead */
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  /** @deprecated Use `nodes` field instead */
  data: I18NLocale[];
  /** @deprecated Use the `pageInfo` field instead */
  meta: ResponseCollectionMeta;
  nodes: I18NLocale[];
  pageInfo: Pagination;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<InputMaybe<I18NLocaleFiltersInput>[]>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<InputMaybe<I18NLocaleFiltersInput>[]>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  between?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<InputMaybe<Scalars['Int']['input']>[]>;
  between?: InputMaybe<InputMaybe<Scalars['Int']['input']>[]>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<InputMaybe<Scalars['Int']['input']>[]>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<InputMaybe<Scalars['Int']['input']>[]>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<InputMaybe<Scalars['Int']['input']>[]>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<InputMaybe<Scalars['JSON']['input']>[]>;
  between?: InputMaybe<InputMaybe<Scalars['JSON']['input']>[]>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<InputMaybe<Scalars['JSON']['input']>[]>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<InputMaybe<Scalars['JSON']['input']>[]>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<InputMaybe<Scalars['JSON']['input']>[]>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createCategory?: Maybe<Category>;
  createComment?: Maybe<Comment>;
  createPost?: Maybe<Post>;
  createQuote?: Maybe<Quote>;
  createReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  createReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  createTag?: Maybe<Tag>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteAboutPage?: Maybe<DeleteMutationResponse>;
  deleteCategory?: Maybe<DeleteMutationResponse>;
  deleteComment?: Maybe<DeleteMutationResponse>;
  deletePost?: Maybe<DeleteMutationResponse>;
  deleteQuote?: Maybe<DeleteMutationResponse>;
  deleteReviewWorkflowsWorkflow?: Maybe<DeleteMutationResponse>;
  deleteReviewWorkflowsWorkflowStage?: Maybe<DeleteMutationResponse>;
  deleteTag?: Maybe<DeleteMutationResponse>;
  deleteUploadFile?: Maybe<UploadFile>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAboutPage?: Maybe<AboutPage>;
  updateCategory?: Maybe<Category>;
  updateComment?: Maybe<Comment>;
  updatePost?: Maybe<Post>;
  updateQuote?: Maybe<Quote>;
  updateReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  updateReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  updateTag?: Maybe<Tag>;
  updateUploadFile: UploadFile;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateCommentArgs = {
  data: CommentInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreatePostArgs = {
  data: PostInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateQuoteArgs = {
  data: QuoteInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateTagArgs = {
  data: TagInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteCategoryArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteCommentArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeletePostArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteQuoteArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteTagArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
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


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateAboutPageArgs = {
  data: AboutPageInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateCommentArgs = {
  data: CommentInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdatePostArgs = {
  data: PostInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateQuoteArgs = {
  data: QuoteInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateTagArgs = {
  data: TagInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateUploadFileArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
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
  /** @deprecated Use root level fields instead */
  attributes: Post;
  body: Scalars['String']['output'];
  body_searchable?: Maybe<Scalars['String']['output']>;
  body_vue?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Category>;
  comments: Maybe<Comment>[];
  comments_connection?: Maybe<CommentRelationResponseCollection>;
  comments_enabled: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** @deprecated Use root level fields instead */
  data: Post;
  documentId: Scalars['ID']['output'];
  footnotes?: Maybe<Scalars['String']['output']>;
  header?: Maybe<UploadFile>;
  human_id: Scalars['Int']['output'];
  /** @deprecated Use `documentId` instead */
  id: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  tags: Maybe<Tag>[];
  tags_connection?: Maybe<TagRelationResponseCollection>;
  teaser?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  toc?: Maybe<Scalars['Boolean']['output']>;
  toenotes?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PostCommentsArgs = {
  filters?: InputMaybe<CommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
};


export type PostComments_ConnectionArgs = {
  filters?: InputMaybe<CommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
};


export type PostTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
};


export type PostTags_ConnectionArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
};

export type PostEntityResponseCollection = {
  __typename?: 'PostEntityResponseCollection';
  /** @deprecated Use `nodes` field instead */
  data: Post[];
  /** @deprecated Use the `pageInfo` field instead */
  meta: ResponseCollectionMeta;
  nodes: Post[];
  pageInfo: Pagination;
};

export type PostFiltersInput = {
  and?: InputMaybe<InputMaybe<PostFiltersInput>[]>;
  body?: InputMaybe<StringFilterInput>;
  body_searchable?: InputMaybe<StringFilterInput>;
  body_vue?: InputMaybe<StringFilterInput>;
  category?: InputMaybe<CategoryFiltersInput>;
  comments?: InputMaybe<CommentFiltersInput>;
  comments_enabled?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  footnotes?: InputMaybe<StringFilterInput>;
  human_id?: InputMaybe<IntFilterInput>;
  not?: InputMaybe<PostFiltersInput>;
  or?: InputMaybe<InputMaybe<PostFiltersInput>[]>;
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
  comments?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  comments_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  footnotes?: InputMaybe<Scalars['String']['input']>;
  header?: InputMaybe<Scalars['ID']['input']>;
  human_id?: InputMaybe<Scalars['Int']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  teaser?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  toc?: InputMaybe<Scalars['Boolean']['input']>;
  toenotes?: InputMaybe<Scalars['String']['input']>;
};

export type PostRelationResponseCollection = {
  __typename?: 'PostRelationResponseCollection';
  /** @deprecated Use `nodes` field instead */
  data: Post[];
  nodes: Post[];
};

export enum PublicationStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type Query = {
  __typename?: 'Query';
  aboutPage?: Maybe<AboutPage>;
  categories: Maybe<Category>[];
  categories_connection?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<Category>;
  comment?: Maybe<Comment>;
  comments: Maybe<Comment>[];
  comments_connection?: Maybe<CommentEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocale>;
  i18NLocales: Maybe<I18NLocale>[];
  i18NLocales_connection?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  post?: Maybe<Post>;
  posts: Maybe<Post>[];
  posts_connection?: Maybe<PostEntityResponseCollection>;
  quote?: Maybe<Quote>;
  quotes: Maybe<Quote>[];
  quotes_connection?: Maybe<QuoteEntityResponseCollection>;
  reviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  reviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  reviewWorkflowsWorkflowStages: Maybe<ReviewWorkflowsWorkflowStage>[];
  reviewWorkflowsWorkflowStages_connection?: Maybe<ReviewWorkflowsWorkflowStageEntityResponseCollection>;
  reviewWorkflowsWorkflows: Maybe<ReviewWorkflowsWorkflow>[];
  reviewWorkflowsWorkflows_connection?: Maybe<ReviewWorkflowsWorkflowEntityResponseCollection>;
  tag?: Maybe<Tag>;
  tags: Maybe<Tag>[];
  tags_connection?: Maybe<TagEntityResponseCollection>;
  uploadFile?: Maybe<UploadFile>;
  uploadFiles: Maybe<UploadFile>[];
  uploadFiles_connection?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRole>;
  usersPermissionsRoles: Maybe<UsersPermissionsRole>[];
  usersPermissionsRoles_connection?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUser>;
  usersPermissionsUsers: Maybe<UsersPermissionsUser>[];
  usersPermissionsUsers_connection?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryAboutPageArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCategories_ConnectionArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCategoryArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCommentArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCommentsArgs = {
  filters?: InputMaybe<CommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryComments_ConnectionArgs = {
  filters?: InputMaybe<CommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocaleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocales_ConnectionArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPostArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPosts_ConnectionArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryQuoteArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryQuotesArgs = {
  filters?: InputMaybe<QuoteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryQuotes_ConnectionArgs = {
  filters?: InputMaybe<QuoteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowsArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflows_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryTagArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryTags_ConnectionArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFileArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFiles_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRoleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRoles_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUserArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  status?: InputMaybe<PublicationStatus>;
};

export type Quote = {
  __typename?: 'Quote';
  /** @deprecated Use root level fields instead */
  attributes: Quote;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** @deprecated Use root level fields instead */
  data: Quote;
  documentId: Scalars['ID']['output'];
  /** @deprecated Use `documentId` instead */
  id: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  text: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type QuoteEntityResponseCollection = {
  __typename?: 'QuoteEntityResponseCollection';
  /** @deprecated Use `nodes` field instead */
  data: Quote[];
  /** @deprecated Use the `pageInfo` field instead */
  meta: ResponseCollectionMeta;
  nodes: Quote[];
  pageInfo: Pagination;
};

export type QuoteFiltersInput = {
  and?: InputMaybe<InputMaybe<QuoteFiltersInput>[]>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<QuoteFiltersInput>;
  or?: InputMaybe<InputMaybe<QuoteFiltersInput>[]>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  text?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type QuoteInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type ReviewWorkflowsWorkflow = {
  __typename?: 'ReviewWorkflowsWorkflow';
  /** @deprecated Use root level fields instead */
  attributes: ReviewWorkflowsWorkflow;
  contentTypes: Scalars['JSON']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** @deprecated Use root level fields instead */
  data: ReviewWorkflowsWorkflow;
  documentId: Scalars['ID']['output'];
  /** @deprecated Use `documentId` instead */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  stageRequiredToPublish?: Maybe<ReviewWorkflowsWorkflowStage>;
  stages: Maybe<ReviewWorkflowsWorkflowStage>[];
  stages_connection?: Maybe<ReviewWorkflowsWorkflowStageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
};


export type ReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
};

export type ReviewWorkflowsWorkflowEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowEntityResponseCollection';
  /** @deprecated Use `nodes` field instead */
  data: ReviewWorkflowsWorkflow[];
  /** @deprecated Use the `pageInfo` field instead */
  meta: ResponseCollectionMeta;
  nodes: ReviewWorkflowsWorkflow[];
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowFiltersInput = {
  and?: InputMaybe<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>[]>;
  contentTypes?: InputMaybe<JsonFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  or?: InputMaybe<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>[]>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  stageRequiredToPublish?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  stages?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ReviewWorkflowsWorkflowInput = {
  contentTypes?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  stageRequiredToPublish?: InputMaybe<Scalars['ID']['input']>;
  stages?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
};

export type ReviewWorkflowsWorkflowStage = {
  __typename?: 'ReviewWorkflowsWorkflowStage';
  /** @deprecated Use root level fields instead */
  attributes: ReviewWorkflowsWorkflowStage;
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** @deprecated Use root level fields instead */
  data: ReviewWorkflowsWorkflowStage;
  documentId: Scalars['ID']['output'];
  /** @deprecated Use `documentId` instead */
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workflow?: Maybe<ReviewWorkflowsWorkflow>;
};

export type ReviewWorkflowsWorkflowStageEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageEntityResponseCollection';
  /** @deprecated Use `nodes` field instead */
  data: ReviewWorkflowsWorkflowStage[];
  /** @deprecated Use the `pageInfo` field instead */
  meta: ResponseCollectionMeta;
  nodes: ReviewWorkflowsWorkflowStage[];
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowStageFiltersInput = {
  and?: InputMaybe<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>[]>;
  color?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  or?: InputMaybe<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>[]>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  workflow?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
};

export type ReviewWorkflowsWorkflowStageInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workflow?: InputMaybe<Scalars['ID']['input']>;
};

export type ReviewWorkflowsWorkflowStageRelationResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageRelationResponseCollection';
  /** @deprecated Use `nodes` field instead */
  data: ReviewWorkflowsWorkflowStage[];
  nodes: ReviewWorkflowsWorkflowStage[];
};

export type StringFilterInput = {
  and?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  between?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Tag = {
  __typename?: 'Tag';
  /** @deprecated Use root level fields instead */
  attributes: Tag;
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** @deprecated Use root level fields instead */
  data: Tag;
  description?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  /** @deprecated Use `documentId` instead */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  posts: Maybe<Post>[];
  posts_connection?: Maybe<PostRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  tier?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type TagPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
};


export type TagPosts_ConnectionArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
};

export type TagEntityResponseCollection = {
  __typename?: 'TagEntityResponseCollection';
  /** @deprecated Use `nodes` field instead */
  data: Tag[];
  /** @deprecated Use the `pageInfo` field instead */
  meta: ResponseCollectionMeta;
  nodes: Tag[];
  pageInfo: Pagination;
};

export type TagFiltersInput = {
  and?: InputMaybe<InputMaybe<TagFiltersInput>[]>;
  color?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TagFiltersInput>;
  or?: InputMaybe<InputMaybe<TagFiltersInput>[]>;
  posts?: InputMaybe<PostFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  tier?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TagInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tier?: InputMaybe<Scalars['Int']['input']>;
};

export type TagRelationResponseCollection = {
  __typename?: 'TagRelationResponseCollection';
  /** @deprecated Use `nodes` field instead */
  data: Tag[];
  nodes: Tag[];
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use root level fields instead */
  attributes: UploadFile;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** @deprecated Use root level fields instead */
  data: UploadFile;
  documentId: Scalars['ID']['output'];
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use `documentId` instead */
  id: Scalars['ID']['output'];
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  related?: Maybe<Maybe<GenericMorph>[]>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  /** @deprecated Use `nodes` field instead */
  data: UploadFile[];
  /** @deprecated Use the `pageInfo` field instead */
  meta: ResponseCollectionMeta;
  nodes: UploadFile[];
  pageInfo: Pagination;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<InputMaybe<UploadFileFiltersInput>[]>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<InputMaybe<UploadFileFiltersInput>[]>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  /** @deprecated Use `nodes` field instead */
  data: UploadFile[];
  nodes: UploadFile[];
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
  /** @deprecated Use root level fields instead */
  attributes: UsersPermissionsPermission;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** @deprecated Use root level fields instead */
  data: UsersPermissionsPermission;
  documentId: Scalars['ID']['output'];
  /** @deprecated Use `documentId` instead */
  id: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<InputMaybe<UsersPermissionsPermissionFiltersInput>[]>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<InputMaybe<UsersPermissionsPermissionFiltersInput>[]>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  /** @deprecated Use `nodes` field instead */
  data: UsersPermissionsPermission[];
  nodes: UsersPermissionsPermission[];
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  /** @deprecated Use root level fields instead */
  attributes: UsersPermissionsRole;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** @deprecated Use root level fields instead */
  data: UsersPermissionsRole;
  description?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  /** @deprecated Use `documentId` instead */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  permissions: Maybe<UsersPermissionsPermission>[];
  permissions_connection?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users: Maybe<UsersPermissionsUser>[];
  users_connection?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
};


export type UsersPermissionsRolePermissions_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
};


export type UsersPermissionsRoleUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  /** @deprecated Use `nodes` field instead */
  data: UsersPermissionsRole[];
  /** @deprecated Use the `pageInfo` field instead */
  meta: ResponseCollectionMeta;
  nodes: UsersPermissionsRole[];
  pageInfo: Pagination;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<InputMaybe<UsersPermissionsRoleFiltersInput>[]>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<InputMaybe<UsersPermissionsRoleFiltersInput>[]>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  /** @deprecated Use root level fields instead */
  attributes: UsersPermissionsUser;
  blocked?: Maybe<Scalars['Boolean']['output']>;
  comments: Maybe<Comment>[];
  comments_connection?: Maybe<CommentRelationResponseCollection>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** @deprecated Use root level fields instead */
  data: UsersPermissionsUser;
  documentId: Scalars['ID']['output'];
  /** @deprecated Use `documentId` instead */
  id: Scalars['ID']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};


export type UsersPermissionsUserCommentsArgs = {
  filters?: InputMaybe<CommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
};


export type UsersPermissionsUserComments_ConnectionArgs = {
  filters?: InputMaybe<CommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUser>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  /** @deprecated Use `nodes` field instead */
  data: UsersPermissionsUser[];
  /** @deprecated Use the `pageInfo` field instead */
  meta: ResponseCollectionMeta;
  nodes: UsersPermissionsUser[];
  pageInfo: Pagination;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<InputMaybe<UsersPermissionsUserFiltersInput>[]>;
  blocked?: InputMaybe<BooleanFilterInput>;
  comments?: InputMaybe<CommentFiltersInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<InputMaybe<UsersPermissionsUserFiltersInput>[]>;
  provider?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  comments?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  /** @deprecated Use `nodes` field instead */
  data: UsersPermissionsUser[];
  nodes: UsersPermissionsUser[];
};

export type TotalPagesFragment = { __typename?: 'Pagination', total: number };

export type FullPageFragment = { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number };

export type InitQueryVariables = Exact<{
  pg?: InputMaybe<PaginationArg>;
}>;


export type InitQuery = { __typename?: 'Query', quotes_connection?: { __typename?: 'QuoteEntityResponseCollection', nodes: { __typename?: 'Quote', documentId: string, text: string }[] } | null, categories_connection?: { __typename?: 'CategoryEntityResponseCollection', nodes: { __typename?: 'Category', name: string, slug: string, priority: number }[] } | null, posts_connection?: { __typename?: 'PostEntityResponseCollection', pageInfo: { __typename?: 'Pagination', total: number }, nodes: { __typename?: 'Post', human_id: number, documentId: string, publishedAt?: any | null, title: string, slug: string }[] } | null };

export type LastPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type LastPostsQuery = { __typename?: 'Query', posts_connection?: { __typename?: 'PostEntityResponseCollection', pageInfo: { __typename?: 'Pagination', total: number } } | null };

export type AboutQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutQuery = { __typename?: 'Query', aboutPage?: { __typename?: 'AboutPage', text: string, title?: string | null, footnotes?: string | null, toenotes?: string | null } | null };

export type TagListQueryVariables = Exact<{ [key: string]: never; }>;


export type TagListQuery = { __typename?: 'Query', tags_connection?: { __typename?: 'TagEntityResponseCollection', nodes: { __typename?: 'Tag', name: string, slug: string, color?: string | null, posts_connection?: { __typename?: 'PostRelationResponseCollection', nodes: { __typename?: 'Post', documentId: string }[] } | null }[] } | null };

export type PostSearchQueryVariables = Exact<{
  postFilter: PostFiltersInput;
  pg: PaginationArg;
  sort?: InputMaybe<InputMaybe<Scalars['String']['input']>[] | InputMaybe<Scalars['String']['input']>>;
}>;


export type PostSearchQuery = { __typename?: 'Query', posts_connection?: { __typename?: 'PostEntityResponseCollection', pageInfo: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number }, nodes: { __typename?: 'Post', documentId: string, human_id: number, publishedAt?: any | null, body_searchable?: string | null, title: string, teaser?: string | null, slug: string, header?: { __typename?: 'UploadFile', formats?: any | null, height?: number | null, width?: number | null, url: string } | null, tags_connection?: { __typename?: 'TagRelationResponseCollection', nodes: { __typename?: 'Tag', name: string, slug: string, color?: string | null }[] } | null, category?: { __typename?: 'Category', name: string, slug: string, color?: string | null } | null }[] } | null };

export type SinglePostQueryVariables = Exact<{
  postId?: InputMaybe<Scalars['Int']['input']>;
  commentPagination?: InputMaybe<PaginationArg>;
}>;


export type SinglePostQuery = { __typename?: 'Query', comments_connection?: { __typename?: 'CommentEntityResponseCollection', pageInfo: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number }, nodes: { __typename?: 'Comment', depth: number, createdAt?: any | null, content: string, subcomments_connection?: { __typename?: 'CommentRelationResponseCollection', nodes: { __typename?: 'Comment', documentId: string }[] } | null, author?: { __typename?: 'UsersPermissionsUser', username: string } | null }[] } | null, posts_connection?: { __typename?: 'PostEntityResponseCollection', nodes: { __typename?: 'Post', documentId: string, human_id: number, title: string, body_vue?: string | null, slug: string, toc?: boolean | null, publishedAt?: any | null, updatedAt?: any | null, comments_enabled: boolean, footnotes?: string | null, toenotes?: string | null, header?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null, category?: { __typename?: 'Category', color?: string | null, name: string, slug: string } | null, tags_connection?: { __typename?: 'TagRelationResponseCollection', nodes: { __typename?: 'Tag', color?: string | null, name: string, slug: string }[] } | null }[] } | null };

export type PostCheckQueryVariables = Exact<{
  postId: Scalars['ID']['input'];
}>;


export type PostCheckQuery = { __typename?: 'Query', post?: { __typename?: 'Post', human_id: number, publishedAt?: any | null, documentId: string, updatedAt?: any | null } | null };

export type PostCountQueryVariables = Exact<{
  pf?: InputMaybe<PostFiltersInput>;
  pg: PaginationArg;
}>;


export type PostCountQuery = { __typename?: 'Query', posts_connection?: { __typename?: 'PostEntityResponseCollection', pageInfo: { __typename?: 'Pagination', total: number, pageSize: number } } | null };

export type PostListQueryVariables = Exact<{
  pf?: InputMaybe<PostFiltersInput>;
  tf: TagFiltersInput;
  cf?: InputMaybe<CategoryFiltersInput>;
  pg: PaginationArg;
}>;


export type PostListQuery = { __typename?: 'Query', posts_connection?: { __typename?: 'PostEntityResponseCollection', pageInfo: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number }, nodes: { __typename?: 'Post', human_id: number, documentId: string, publishedAt?: any | null, title: string, teaser?: string | null, slug: string, header?: { __typename?: 'UploadFile', formats?: any | null } | null, tags_connection?: { __typename?: 'TagRelationResponseCollection', nodes: { __typename?: 'Tag', name: string, slug: string, color?: string | null }[] } | null, category?: { __typename?: 'Category', name: string, slug: string, color?: string | null } | null }[] } | null, tags_connection?: { __typename?: 'TagEntityResponseCollection', nodes: { __typename?: 'Tag', name: string, slug: string, color?: string | null, description?: string | null }[] } | null, categories_connection?: { __typename?: 'CategoryEntityResponseCollection', nodes: { __typename?: 'Category', name: string, slug: string, color?: string | null, description?: string | null }[] } | null };

export type CommentatorMutationVariables = Exact<{
  post: Scalars['ID']['input'];
  username: Scalars['String']['input'];
  content: Scalars['String']['input'];
  email: Scalars['String']['input'];
  token: Scalars['String']['input'];
}>;


export type CommentatorMutation = { __typename?: 'Mutation', createComment?: { __typename?: 'Comment', documentId: string } | null };

export const TotalPagesFragmentDoc = gql`
    fragment totalPages on Pagination {
  total
}
    `;
export const FullPageFragmentDoc = gql`
    fragment fullPage on Pagination {
  total
  page
  pageSize
  pageCount
}
    `;
export const InitDocument = gql`
    query Init($pg: PaginationArg) {
  quotes_connection(pagination: $pg) {
    nodes {
      documentId
      text
    }
  }
  categories_connection(filters: {posts: {publishedAt: {notNull: true}}}) {
    nodes {
      name
      slug
      priority
    }
  }
  posts_connection(pagination: {start: 0, limit: 5}, sort: "publishedAt:desc") {
    pageInfo {
      ...totalPages
    }
    nodes {
      human_id
      documentId
      publishedAt
      title
      slug
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
  posts_connection {
    pageInfo {
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
    text
    title
    footnotes
    toenotes
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
  tags_connection(
    filters: {posts: {documentId: {notNull: true}, publishedAt: {notNull: true}}}
    pagination: {pageSize: 100}
  ) {
    nodes {
      name
      slug
      color
      posts_connection(
        filters: {publishedAt: {notNull: true}, documentId: {notNull: true}}
      ) {
        nodes {
          documentId
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
  posts_connection(filters: $postFilter, pagination: $pg, sort: $sort) {
    pageInfo {
      ...fullPage
    }
    nodes {
      documentId
      human_id
      publishedAt
      body_searchable
      title
      teaser
      slug
      header {
        formats
        height
        width
        url
      }
      tags_connection {
        nodes {
          name
          slug
          color
        }
      }
      category {
        name
        slug
        color
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
export function usePostSearchLazyQuery(variables?: PostSearchQueryVariables | VueCompositionApi.Ref<PostSearchQueryVariables> | ReactiveFunction<PostSearchQueryVariables>, options: VueApolloComposable.UseQueryOptions<PostSearchQuery, PostSearchQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<PostSearchQuery, PostSearchQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<PostSearchQuery, PostSearchQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<PostSearchQuery, PostSearchQueryVariables>(PostSearchDocument, variables, options);
}
export type PostSearchQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<PostSearchQuery, PostSearchQueryVariables>;
export const SinglePostDocument = gql`
    query SinglePost($postId: Int, $commentPagination: PaginationArg) {
  comments_connection(
    filters: {post: {human_id: {eq: $postId}}}
    pagination: $commentPagination
  ) {
    pageInfo {
      ...fullPage
    }
    nodes {
      depth
      subcomments_connection {
        nodes {
          documentId
        }
      }
      createdAt
      content
      author {
        username
      }
    }
  }
  posts_connection(filters: {human_id: {eq: $postId}}) {
    nodes {
      documentId
      human_id
      title
      header {
        url
        caption
        width
        height
        alternativeText
        formats
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
        color
        name
        slug
      }
      tags_connection {
        nodes {
          color
          name
          slug
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
    query postCheck($postId: ID!) {
  post(documentId: $postId) {
    human_id
    publishedAt
    documentId
    updatedAt
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
export function usePostCheckQuery(variables: PostCheckQueryVariables | VueCompositionApi.Ref<PostCheckQueryVariables> | ReactiveFunction<PostCheckQueryVariables>, options: VueApolloComposable.UseQueryOptions<PostCheckQuery, PostCheckQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<PostCheckQuery, PostCheckQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<PostCheckQuery, PostCheckQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<PostCheckQuery, PostCheckQueryVariables>(PostCheckDocument, variables, options);
}
export function usePostCheckLazyQuery(variables?: PostCheckQueryVariables | VueCompositionApi.Ref<PostCheckQueryVariables> | ReactiveFunction<PostCheckQueryVariables>, options: VueApolloComposable.UseQueryOptions<PostCheckQuery, PostCheckQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<PostCheckQuery, PostCheckQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<PostCheckQuery, PostCheckQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<PostCheckQuery, PostCheckQueryVariables>(PostCheckDocument, variables, options);
}
export type PostCheckQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<PostCheckQuery, PostCheckQueryVariables>;
export const PostCountDocument = gql`
    query PostCount($pf: PostFiltersInput, $pg: PaginationArg!) {
  posts_connection(filters: $pf, pagination: $pg) {
    pageInfo {
      total
      pageSize
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
export function usePostCountLazyQuery(variables?: PostCountQueryVariables | VueCompositionApi.Ref<PostCountQueryVariables> | ReactiveFunction<PostCountQueryVariables>, options: VueApolloComposable.UseQueryOptions<PostCountQuery, PostCountQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<PostCountQuery, PostCountQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<PostCountQuery, PostCountQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<PostCountQuery, PostCountQueryVariables>(PostCountDocument, variables, options);
}
export type PostCountQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<PostCountQuery, PostCountQueryVariables>;
export const PostListDocument = gql`
    query PostList($pf: PostFiltersInput, $tf: TagFiltersInput!, $cf: CategoryFiltersInput, $pg: PaginationArg!) {
  posts_connection(filters: $pf, pagination: $pg, sort: "publishedAt:desc") {
    pageInfo {
      ...fullPage
    }
    nodes {
      human_id
      documentId
      publishedAt
      title
      teaser
      slug
      header {
        formats
      }
      tags_connection {
        nodes {
          name
          slug
          color
        }
      }
      category {
        name
        slug
        color
      }
    }
  }
  tags_connection(filters: $tf) {
    nodes {
      name
      slug
      color
      description
    }
  }
  categories_connection(filters: $cf) {
    nodes {
      name
      slug
      color
      description
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
export function usePostListLazyQuery(variables?: PostListQueryVariables | VueCompositionApi.Ref<PostListQueryVariables> | ReactiveFunction<PostListQueryVariables>, options: VueApolloComposable.UseQueryOptions<PostListQuery, PostListQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<PostListQuery, PostListQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<PostListQuery, PostListQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<PostListQuery, PostListQueryVariables>(PostListDocument, variables, options);
}
export type PostListQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<PostListQuery, PostListQueryVariables>;
export const CommentatorDocument = gql`
    mutation commentator($post: ID!, $username: String!, $content: String!, $email: String!, $token: String!) {
  createComment(
    data: {post: $post, content: $content, username: $username, email: $email, token: $token}
  ) {
    documentId
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