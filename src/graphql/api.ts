import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from 'vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key:string]:unknown }> = { [K in keyof T]:T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?:Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]:Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID:string;
  String:string;
  Boolean:boolean;
  Int:number;
  Float:number;
  DateTime:Date;
  JSON:any;
  Upload:any;
};

export type AboutPage = {
  __typename?:'AboutPage';
  createdAt?:Maybe<Scalars['DateTime']>;
  footnotes?:Maybe<Scalars['String']>;
  images?:Maybe<UploadFileRelationResponseCollection>;
  text?:Maybe<Scalars['String']>;
  title?:Maybe<Scalars['String']>;
  toenotes?:Maybe<Scalars['String']>;
  updatedAt?:Maybe<Scalars['DateTime']>;
};


export type AboutPageImagesArgs = {
  filters?:InputMaybe<UploadFileFiltersInput>;
  pagination?:InputMaybe<PaginationArg>;
  sort?:InputMaybe<InputMaybe<Scalars['String']>[]>;
};

export type AboutPageEntity = {
  __typename?:'AboutPageEntity';
  attributes?:Maybe<AboutPage>;
  id?:Maybe<Scalars['ID']>;
};

export type AboutPageEntityResponse = {
  __typename?:'AboutPageEntityResponse';
  data?:Maybe<AboutPageEntity>;
};

export type AboutPageInput = {
  footnotes?:InputMaybe<Scalars['String']>;
  images?:InputMaybe<InputMaybe<Scalars['ID']>[]>;
  text?:InputMaybe<Scalars['String']>;
  title?:InputMaybe<Scalars['String']>;
  toenotes?:InputMaybe<Scalars['String']>;
};

export type BooleanFilterInput = {
  and?:InputMaybe<InputMaybe<Scalars['Boolean']>[]>;
  between?:InputMaybe<InputMaybe<Scalars['Boolean']>[]>;
  contains?:InputMaybe<Scalars['Boolean']>;
  containsi?:InputMaybe<Scalars['Boolean']>;
  endsWith?:InputMaybe<Scalars['Boolean']>;
  eq?:InputMaybe<Scalars['Boolean']>;
  eqi?:InputMaybe<Scalars['Boolean']>;
  gt?:InputMaybe<Scalars['Boolean']>;
  gte?:InputMaybe<Scalars['Boolean']>;
  in?:InputMaybe<InputMaybe<Scalars['Boolean']>[]>;
  lt?:InputMaybe<Scalars['Boolean']>;
  lte?:InputMaybe<Scalars['Boolean']>;
  ne?:InputMaybe<Scalars['Boolean']>;
  not?:InputMaybe<BooleanFilterInput>;
  notContains?:InputMaybe<Scalars['Boolean']>;
  notContainsi?:InputMaybe<Scalars['Boolean']>;
  notIn?:InputMaybe<InputMaybe<Scalars['Boolean']>[]>;
  notNull?:InputMaybe<Scalars['Boolean']>;
  null?:InputMaybe<Scalars['Boolean']>;
  or?:InputMaybe<InputMaybe<Scalars['Boolean']>[]>;
  startsWith?:InputMaybe<Scalars['Boolean']>;
};

export type Category = {
  __typename?:'Category';
  color?:Maybe<Scalars['String']>;
  createdAt?:Maybe<Scalars['DateTime']>;
  description?:Maybe<Scalars['String']>;
  name:Scalars['String'];
  posts?:Maybe<PostRelationResponseCollection>;
  slug:Scalars['String'];
  updatedAt?:Maybe<Scalars['DateTime']>;
};


export type CategoryPostsArgs = {
  filters?:InputMaybe<PostFiltersInput>;
  pagination?:InputMaybe<PaginationArg>;
  publicationState?:InputMaybe<PublicationState>;
  sort?:InputMaybe<InputMaybe<Scalars['String']>[]>;
};

export type CategoryEntity = {
  __typename?:'CategoryEntity';
  attributes?:Maybe<Category>;
  id?:Maybe<Scalars['ID']>;
};

export type CategoryEntityResponse = {
  __typename?:'CategoryEntityResponse';
  data?:Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?:'CategoryEntityResponseCollection';
  data:CategoryEntity[];
  meta:ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  and?:InputMaybe<InputMaybe<CategoryFiltersInput>[]>;
  color?:InputMaybe<StringFilterInput>;
  createdAt?:InputMaybe<DateTimeFilterInput>;
  description?:InputMaybe<StringFilterInput>;
  id?:InputMaybe<IdFilterInput>;
  name?:InputMaybe<StringFilterInput>;
  not?:InputMaybe<CategoryFiltersInput>;
  or?:InputMaybe<InputMaybe<CategoryFiltersInput>[]>;
  posts?:InputMaybe<PostFiltersInput>;
  slug?:InputMaybe<StringFilterInput>;
  updatedAt?:InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  color?:InputMaybe<Scalars['String']>;
  description?:InputMaybe<Scalars['String']>;
  name?:InputMaybe<Scalars['String']>;
  posts?:InputMaybe<InputMaybe<Scalars['ID']>[]>;
  slug?:InputMaybe<Scalars['String']>;
};

export type Comment = {
  __typename?:'Comment';
  admin_comment?:Maybe<Scalars['Boolean']>;
  author?:Maybe<UsersPermissionsUserEntityResponse>;
  content:Scalars['String'];
  createdAt?:Maybe<Scalars['DateTime']>;
  depth:Scalars['Int'];
  post?:Maybe<PostEntityResponse>;
  subcomments?:Maybe<CommentRelationResponseCollection>;
  updatedAt?:Maybe<Scalars['DateTime']>;
};


export type CommentSubcommentsArgs = {
  filters?:InputMaybe<CommentFiltersInput>;
  pagination?:InputMaybe<PaginationArg>;
  sort?:InputMaybe<InputMaybe<Scalars['String']>[]>;
};

export type CommentEntity = {
  __typename?:'CommentEntity';
  attributes?:Maybe<Comment>;
  id?:Maybe<Scalars['ID']>;
};

export type CommentEntityResponse = {
  __typename?:'CommentEntityResponse';
  data?:Maybe<CommentEntity>;
};

export type CommentEntityResponseCollection = {
  __typename?:'CommentEntityResponseCollection';
  data:CommentEntity[];
  meta:ResponseCollectionMeta;
};

export type CommentFiltersInput = {
  admin_comment?:InputMaybe<BooleanFilterInput>;
  and?:InputMaybe<InputMaybe<CommentFiltersInput>[]>;
  author?:InputMaybe<UsersPermissionsUserFiltersInput>;
  content?:InputMaybe<StringFilterInput>;
  createdAt?:InputMaybe<DateTimeFilterInput>;
  depth?:InputMaybe<IntFilterInput>;
  id?:InputMaybe<IdFilterInput>;
  not?:InputMaybe<CommentFiltersInput>;
  or?:InputMaybe<InputMaybe<CommentFiltersInput>[]>;
  post?:InputMaybe<PostFiltersInput>;
  subcomments?:InputMaybe<CommentFiltersInput>;
  updatedAt?:InputMaybe<DateTimeFilterInput>;
};

export type CommentInput = {
  admin_comment?:InputMaybe<Scalars['Boolean']>;
  author?:InputMaybe<Scalars['ID']>;
  content?:InputMaybe<Scalars['String']>;
  depth?:InputMaybe<Scalars['Int']>;
  email:Scalars['String'];
  post?:InputMaybe<Scalars['ID']>;
  subcomments?:InputMaybe<InputMaybe<Scalars['ID']>[]>;
  token:Scalars['String'];
  username:Scalars['String'];
};

export type CommentRelationResponseCollection = {
  __typename?:'CommentRelationResponseCollection';
  data:CommentEntity[];
};

export type DateTimeFilterInput = {
  and?:InputMaybe<InputMaybe<Scalars['DateTime']>[]>;
  between?:InputMaybe<InputMaybe<Scalars['DateTime']>[]>;
  contains?:InputMaybe<Scalars['DateTime']>;
  containsi?:InputMaybe<Scalars['DateTime']>;
  endsWith?:InputMaybe<Scalars['DateTime']>;
  eq?:InputMaybe<Scalars['DateTime']>;
  eqi?:InputMaybe<Scalars['DateTime']>;
  gt?:InputMaybe<Scalars['DateTime']>;
  gte?:InputMaybe<Scalars['DateTime']>;
  in?:InputMaybe<InputMaybe<Scalars['DateTime']>[]>;
  lt?:InputMaybe<Scalars['DateTime']>;
  lte?:InputMaybe<Scalars['DateTime']>;
  ne?:InputMaybe<Scalars['DateTime']>;
  not?:InputMaybe<DateTimeFilterInput>;
  notContains?:InputMaybe<Scalars['DateTime']>;
  notContainsi?:InputMaybe<Scalars['DateTime']>;
  notIn?:InputMaybe<InputMaybe<Scalars['DateTime']>[]>;
  notNull?:InputMaybe<Scalars['Boolean']>;
  null?:InputMaybe<Scalars['Boolean']>;
  or?:InputMaybe<InputMaybe<Scalars['DateTime']>[]>;
  startsWith?:InputMaybe<Scalars['DateTime']>;
};

export type FileInfoInput = {
  alternativeText?:InputMaybe<Scalars['String']>;
  caption?:InputMaybe<Scalars['String']>;
  name?:InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?:InputMaybe<InputMaybe<Scalars['Float']>[]>;
  between?:InputMaybe<InputMaybe<Scalars['Float']>[]>;
  contains?:InputMaybe<Scalars['Float']>;
  containsi?:InputMaybe<Scalars['Float']>;
  endsWith?:InputMaybe<Scalars['Float']>;
  eq?:InputMaybe<Scalars['Float']>;
  eqi?:InputMaybe<Scalars['Float']>;
  gt?:InputMaybe<Scalars['Float']>;
  gte?:InputMaybe<Scalars['Float']>;
  in?:InputMaybe<InputMaybe<Scalars['Float']>[]>;
  lt?:InputMaybe<Scalars['Float']>;
  lte?:InputMaybe<Scalars['Float']>;
  ne?:InputMaybe<Scalars['Float']>;
  not?:InputMaybe<FloatFilterInput>;
  notContains?:InputMaybe<Scalars['Float']>;
  notContainsi?:InputMaybe<Scalars['Float']>;
  notIn?:InputMaybe<InputMaybe<Scalars['Float']>[]>;
  notNull?:InputMaybe<Scalars['Boolean']>;
  null?:InputMaybe<Scalars['Boolean']>;
  or?:InputMaybe<InputMaybe<Scalars['Float']>[]>;
  startsWith?:InputMaybe<Scalars['Float']>;
};

export type GenericMorph = AboutPage | Category | Comment | I18NLocale | Post | Quote | Tag | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?:'I18NLocale';
  code?:Maybe<Scalars['String']>;
  createdAt?:Maybe<Scalars['DateTime']>;
  name?:Maybe<Scalars['String']>;
  updatedAt?:Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?:'I18NLocaleEntity';
  attributes?:Maybe<I18NLocale>;
  id?:Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?:'I18NLocaleEntityResponse';
  data?:Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?:'I18NLocaleEntityResponseCollection';
  data:I18NLocaleEntity[];
  meta:ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?:InputMaybe<InputMaybe<I18NLocaleFiltersInput>[]>;
  code?:InputMaybe<StringFilterInput>;
  createdAt?:InputMaybe<DateTimeFilterInput>;
  id?:InputMaybe<IdFilterInput>;
  name?:InputMaybe<StringFilterInput>;
  not?:InputMaybe<I18NLocaleFiltersInput>;
  or?:InputMaybe<InputMaybe<I18NLocaleFiltersInput>[]>;
  updatedAt?:InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?:InputMaybe<InputMaybe<Scalars['ID']>[]>;
  between?:InputMaybe<InputMaybe<Scalars['ID']>[]>;
  contains?:InputMaybe<Scalars['ID']>;
  containsi?:InputMaybe<Scalars['ID']>;
  endsWith?:InputMaybe<Scalars['ID']>;
  eq?:InputMaybe<Scalars['ID']>;
  eqi?:InputMaybe<Scalars['ID']>;
  gt?:InputMaybe<Scalars['ID']>;
  gte?:InputMaybe<Scalars['ID']>;
  in?:InputMaybe<InputMaybe<Scalars['ID']>[]>;
  lt?:InputMaybe<Scalars['ID']>;
  lte?:InputMaybe<Scalars['ID']>;
  ne?:InputMaybe<Scalars['ID']>;
  not?:InputMaybe<IdFilterInput>;
  notContains?:InputMaybe<Scalars['ID']>;
  notContainsi?:InputMaybe<Scalars['ID']>;
  notIn?:InputMaybe<InputMaybe<Scalars['ID']>[]>;
  notNull?:InputMaybe<Scalars['Boolean']>;
  null?:InputMaybe<Scalars['Boolean']>;
  or?:InputMaybe<InputMaybe<Scalars['ID']>[]>;
  startsWith?:InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?:InputMaybe<InputMaybe<Scalars['Int']>[]>;
  between?:InputMaybe<InputMaybe<Scalars['Int']>[]>;
  contains?:InputMaybe<Scalars['Int']>;
  containsi?:InputMaybe<Scalars['Int']>;
  endsWith?:InputMaybe<Scalars['Int']>;
  eq?:InputMaybe<Scalars['Int']>;
  eqi?:InputMaybe<Scalars['Int']>;
  gt?:InputMaybe<Scalars['Int']>;
  gte?:InputMaybe<Scalars['Int']>;
  in?:InputMaybe<InputMaybe<Scalars['Int']>[]>;
  lt?:InputMaybe<Scalars['Int']>;
  lte?:InputMaybe<Scalars['Int']>;
  ne?:InputMaybe<Scalars['Int']>;
  not?:InputMaybe<IntFilterInput>;
  notContains?:InputMaybe<Scalars['Int']>;
  notContainsi?:InputMaybe<Scalars['Int']>;
  notIn?:InputMaybe<InputMaybe<Scalars['Int']>[]>;
  notNull?:InputMaybe<Scalars['Boolean']>;
  null?:InputMaybe<Scalars['Boolean']>;
  or?:InputMaybe<InputMaybe<Scalars['Int']>[]>;
  startsWith?:InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?:InputMaybe<InputMaybe<Scalars['JSON']>[]>;
  between?:InputMaybe<InputMaybe<Scalars['JSON']>[]>;
  contains?:InputMaybe<Scalars['JSON']>;
  containsi?:InputMaybe<Scalars['JSON']>;
  endsWith?:InputMaybe<Scalars['JSON']>;
  eq?:InputMaybe<Scalars['JSON']>;
  eqi?:InputMaybe<Scalars['JSON']>;
  gt?:InputMaybe<Scalars['JSON']>;
  gte?:InputMaybe<Scalars['JSON']>;
  in?:InputMaybe<InputMaybe<Scalars['JSON']>[]>;
  lt?:InputMaybe<Scalars['JSON']>;
  lte?:InputMaybe<Scalars['JSON']>;
  ne?:InputMaybe<Scalars['JSON']>;
  not?:InputMaybe<JsonFilterInput>;
  notContains?:InputMaybe<Scalars['JSON']>;
  notContainsi?:InputMaybe<Scalars['JSON']>;
  notIn?:InputMaybe<InputMaybe<Scalars['JSON']>[]>;
  notNull?:InputMaybe<Scalars['Boolean']>;
  null?:InputMaybe<Scalars['Boolean']>;
  or?:InputMaybe<InputMaybe<Scalars['JSON']>[]>;
  startsWith?:InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?:'Mutation';
  changePassword?:Maybe<UsersPermissionsLoginPayload>;
  createCategory?:Maybe<CategoryEntityResponse>;
  createComment?:Maybe<CommentEntityResponse>;
  createPost?:Maybe<PostEntityResponse>;
  createQuote?:Maybe<QuoteEntityResponse>;
  createTag?:Maybe<TagEntityResponse>;
  createUploadFile?:Maybe<UploadFileEntityResponse>;
  createUploadFolder?:Maybe<UploadFolderEntityResponse>;
  createUsersPermissionsRole?:Maybe<UsersPermissionsCreateRolePayload>;
  createUsersPermissionsUser:UsersPermissionsUserEntityResponse;
  deleteAboutPage?:Maybe<AboutPageEntityResponse>;
  deleteCategory?:Maybe<CategoryEntityResponse>;
  deleteComment?:Maybe<CommentEntityResponse>;
  deletePost?:Maybe<PostEntityResponse>;
  deleteQuote?:Maybe<QuoteEntityResponse>;
  deleteTag?:Maybe<TagEntityResponse>;
  deleteUploadFile?:Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?:Maybe<UploadFolderEntityResponse>;
  deleteUsersPermissionsRole?:Maybe<UsersPermissionsDeleteRolePayload>;
  deleteUsersPermissionsUser:UsersPermissionsUserEntityResponse;
  emailConfirmation?:Maybe<UsersPermissionsLoginPayload>;
  forgotPassword?:Maybe<UsersPermissionsPasswordPayload>;
  login:UsersPermissionsLoginPayload;
  multipleUpload:Maybe<UploadFileEntityResponse>[];
  register:UsersPermissionsLoginPayload;
  removeFile?:Maybe<UploadFileEntityResponse>;
  resetPassword?:Maybe<UsersPermissionsLoginPayload>;
  updateAboutPage?:Maybe<AboutPageEntityResponse>;
  updateCategory?:Maybe<CategoryEntityResponse>;
  updateComment?:Maybe<CommentEntityResponse>;
  updateFileInfo:UploadFileEntityResponse;
  updatePost?:Maybe<PostEntityResponse>;
  updateQuote?:Maybe<QuoteEntityResponse>;
  updateTag?:Maybe<TagEntityResponse>;
  updateUploadFile?:Maybe<UploadFileEntityResponse>;
  updateUploadFolder?:Maybe<UploadFolderEntityResponse>;
  updateUsersPermissionsRole?:Maybe<UsersPermissionsUpdateRolePayload>;
  updateUsersPermissionsUser:UsersPermissionsUserEntityResponse;
  upload:UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword:Scalars['String'];
  password:Scalars['String'];
  passwordConfirmation:Scalars['String'];
};


export type MutationCreateCategoryArgs = {
  data:CategoryInput;
};


export type MutationCreateCommentArgs = {
  data:CommentInput;
};


export type MutationCreatePostArgs = {
  data:PostInput;
};


export type MutationCreateQuoteArgs = {
  data:QuoteInput;
};


export type MutationCreateTagArgs = {
  data:TagInput;
};


export type MutationCreateUploadFileArgs = {
  data:UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data:UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data:UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data:UsersPermissionsUserInput;
};


export type MutationDeleteCategoryArgs = {
  id:Scalars['ID'];
};


export type MutationDeleteCommentArgs = {
  id:Scalars['ID'];
};


export type MutationDeletePostArgs = {
  id:Scalars['ID'];
};


export type MutationDeleteQuoteArgs = {
  id:Scalars['ID'];
};


export type MutationDeleteTagArgs = {
  id:Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id:Scalars['ID'];
};


export type MutationDeleteUploadFolderArgs = {
  id:Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id:Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id:Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation:Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email:Scalars['String'];
};


export type MutationLoginArgs = {
  input:UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?:InputMaybe<Scalars['String']>;
  files:InputMaybe<Scalars['Upload']>[];
  ref?:InputMaybe<Scalars['String']>;
  refId?:InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input:UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id:Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code:Scalars['String'];
  password:Scalars['String'];
  passwordConfirmation:Scalars['String'];
};


export type MutationUpdateAboutPageArgs = {
  data:AboutPageInput;
};


export type MutationUpdateCategoryArgs = {
  data:CategoryInput;
  id:Scalars['ID'];
};


export type MutationUpdateCommentArgs = {
  data:CommentInput;
  id:Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id:Scalars['ID'];
  info?:InputMaybe<FileInfoInput>;
};


export type MutationUpdatePostArgs = {
  data:PostInput;
  id:Scalars['ID'];
};


export type MutationUpdateQuoteArgs = {
  data:QuoteInput;
  id:Scalars['ID'];
};


export type MutationUpdateTagArgs = {
  data:TagInput;
  id:Scalars['ID'];
};


export type MutationUpdateUploadFileArgs = {
  data:UploadFileInput;
  id:Scalars['ID'];
};


export type MutationUpdateUploadFolderArgs = {
  data:UploadFolderInput;
  id:Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data:UsersPermissionsRoleInput;
  id:Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data:UsersPermissionsUserInput;
  id:Scalars['ID'];
};


export type MutationUploadArgs = {
  field?:InputMaybe<Scalars['String']>;
  file:Scalars['Upload'];
  info?:InputMaybe<FileInfoInput>;
  ref?:InputMaybe<Scalars['String']>;
  refId?:InputMaybe<Scalars['ID']>;
};

export type Pagination = {
  __typename?:'Pagination';
  page:Scalars['Int'];
  pageCount:Scalars['Int'];
  pageSize:Scalars['Int'];
  total:Scalars['Int'];
};

export type PaginationArg = {
  limit?:InputMaybe<Scalars['Int']>;
  page?:InputMaybe<Scalars['Int']>;
  pageSize?:InputMaybe<Scalars['Int']>;
  start?:InputMaybe<Scalars['Int']>;
};

export type Post = {
  __typename?:'Post';
  body:Scalars['String'];
  body_searchable?:Maybe<Scalars['String']>;
  category?:Maybe<CategoryEntityResponse>;
  comments?:Maybe<CommentRelationResponseCollection>;
  comments_enabled:Scalars['Boolean'];
  createdAt?:Maybe<Scalars['DateTime']>;
  footnotes:Scalars['String'];
  header?:Maybe<UploadFileEntityResponse>;
  images?:Maybe<UploadFileRelationResponseCollection>;
  publishedAt?:Maybe<Scalars['DateTime']>;
  slug:Scalars['String'];
  tags?:Maybe<TagRelationResponseCollection>;
  teaser?:Maybe<Scalars['String']>;
  title:Scalars['String'];
  toc?:Maybe<Scalars['Boolean']>;
  toenotes:Scalars['String'];
  updatedAt?:Maybe<Scalars['DateTime']>;
};


export type PostCommentsArgs = {
  filters?:InputMaybe<CommentFiltersInput>;
  pagination?:InputMaybe<PaginationArg>;
  sort?:InputMaybe<InputMaybe<Scalars['String']>[]>;
};


export type PostImagesArgs = {
  filters?:InputMaybe<UploadFileFiltersInput>;
  pagination?:InputMaybe<PaginationArg>;
  sort?:InputMaybe<InputMaybe<Scalars['String']>[]>;
};


export type PostTagsArgs = {
  filters?:InputMaybe<TagFiltersInput>;
  pagination?:InputMaybe<PaginationArg>;
  sort?:InputMaybe<InputMaybe<Scalars['String']>[]>;
};

export type PostEntity = {
  __typename?:'PostEntity';
  attributes?:Maybe<Post>;
  id?:Maybe<Scalars['ID']>;
};

export type PostEntityResponse = {
  __typename?:'PostEntityResponse';
  data?:Maybe<PostEntity>;
};

export type PostEntityResponseCollection = {
  __typename?:'PostEntityResponseCollection';
  data:PostEntity[];
  meta:ResponseCollectionMeta;
};

export type PostFiltersInput = {
  and?:InputMaybe<InputMaybe<PostFiltersInput>[]>;
  body?:InputMaybe<StringFilterInput>;
  body_searchable?:InputMaybe<StringFilterInput>;
  category?:InputMaybe<CategoryFiltersInput>;
  comments?:InputMaybe<CommentFiltersInput>;
  comments_enabled?:InputMaybe<BooleanFilterInput>;
  createdAt?:InputMaybe<DateTimeFilterInput>;
  footnotes?:InputMaybe<StringFilterInput>;
  id?:InputMaybe<IdFilterInput>;
  not?:InputMaybe<PostFiltersInput>;
  or?:InputMaybe<InputMaybe<PostFiltersInput>[]>;
  publishedAt?:InputMaybe<DateTimeFilterInput>;
  slug?:InputMaybe<StringFilterInput>;
  tags?:InputMaybe<TagFiltersInput>;
  teaser?:InputMaybe<StringFilterInput>;
  title?:InputMaybe<StringFilterInput>;
  toc?:InputMaybe<BooleanFilterInput>;
  toenotes?:InputMaybe<StringFilterInput>;
  updatedAt?:InputMaybe<DateTimeFilterInput>;
};

export type PostInput = {
  body?:InputMaybe<Scalars['String']>;
  body_searchable?:InputMaybe<Scalars['String']>;
  category?:InputMaybe<Scalars['ID']>;
  comments?:InputMaybe<InputMaybe<Scalars['ID']>[]>;
  comments_enabled?:InputMaybe<Scalars['Boolean']>;
  footnotes?:InputMaybe<Scalars['String']>;
  header?:InputMaybe<Scalars['ID']>;
  images?:InputMaybe<InputMaybe<Scalars['ID']>[]>;
  publishedAt?:InputMaybe<Scalars['DateTime']>;
  slug?:InputMaybe<Scalars['String']>;
  tags?:InputMaybe<InputMaybe<Scalars['ID']>[]>;
  teaser?:InputMaybe<Scalars['String']>;
  title?:InputMaybe<Scalars['String']>;
  toc?:InputMaybe<Scalars['Boolean']>;
  toenotes?:InputMaybe<Scalars['String']>;
};

export type PostRelationResponseCollection = {
  __typename?:'PostRelationResponseCollection';
  data:PostEntity[];
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?:'Query';
  aboutPage?:Maybe<AboutPageEntityResponse>;
  categories?:Maybe<CategoryEntityResponseCollection>;
  category?:Maybe<CategoryEntityResponse>;
  comment?:Maybe<CommentEntityResponse>;
  comments?:Maybe<CommentEntityResponseCollection>;
  i18NLocale?:Maybe<I18NLocaleEntityResponse>;
  i18NLocales?:Maybe<I18NLocaleEntityResponseCollection>;
  me?:Maybe<UsersPermissionsMe>;
  post?:Maybe<PostEntityResponse>;
  posts?:Maybe<PostEntityResponseCollection>;
  quote?:Maybe<QuoteEntityResponse>;
  quotes?:Maybe<QuoteEntityResponseCollection>;
  tag?:Maybe<TagEntityResponse>;
  tags?:Maybe<TagEntityResponseCollection>;
  uploadFile?:Maybe<UploadFileEntityResponse>;
  uploadFiles?:Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?:Maybe<UploadFolderEntityResponse>;
  uploadFolders?:Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?:Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?:Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?:Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?:Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryCategoriesArgs = {
  filters?:InputMaybe<CategoryFiltersInput>;
  pagination?:InputMaybe<PaginationArg>;
  sort?:InputMaybe<InputMaybe<Scalars['String']>[]>;
};


export type QueryCategoryArgs = {
  id?:InputMaybe<Scalars['ID']>;
};


export type QueryCommentArgs = {
  id?:InputMaybe<Scalars['ID']>;
};


export type QueryCommentsArgs = {
  filters?:InputMaybe<CommentFiltersInput>;
  pagination?:InputMaybe<PaginationArg>;
  sort?:InputMaybe<InputMaybe<Scalars['String']>[]>;
};


export type QueryI18NLocaleArgs = {
  id?:InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?:InputMaybe<I18NLocaleFiltersInput>;
  pagination?:InputMaybe<PaginationArg>;
  sort?:InputMaybe<InputMaybe<Scalars['String']>[]>;
};


export type QueryPostArgs = {
  id?:InputMaybe<Scalars['ID']>;
};


export type QueryPostsArgs = {
  filters?:InputMaybe<PostFiltersInput>;
  pagination?:InputMaybe<PaginationArg>;
  publicationState?:InputMaybe<PublicationState>;
  sort?:InputMaybe<InputMaybe<Scalars['String']>[]>;
};


export type QueryQuoteArgs = {
  id?:InputMaybe<Scalars['ID']>;
};


export type QueryQuotesArgs = {
  filters?:InputMaybe<QuoteFiltersInput>;
  pagination?:InputMaybe<PaginationArg>;
  sort?:InputMaybe<InputMaybe<Scalars['String']>[]>;
};


export type QueryTagArgs = {
  id?:InputMaybe<Scalars['ID']>;
};


export type QueryTagsArgs = {
  filters?:InputMaybe<TagFiltersInput>;
  pagination?:InputMaybe<PaginationArg>;
  sort?:InputMaybe<InputMaybe<Scalars['String']>[]>;
};


export type QueryUploadFileArgs = {
  id?:InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?:InputMaybe<UploadFileFiltersInput>;
  pagination?:InputMaybe<PaginationArg>;
  sort?:InputMaybe<InputMaybe<Scalars['String']>[]>;
};


export type QueryUploadFolderArgs = {
  id?:InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?:InputMaybe<UploadFolderFiltersInput>;
  pagination?:InputMaybe<PaginationArg>;
  sort?:InputMaybe<InputMaybe<Scalars['String']>[]>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?:InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?:InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?:InputMaybe<PaginationArg>;
  sort?:InputMaybe<InputMaybe<Scalars['String']>[]>;
};


export type QueryUsersPermissionsUserArgs = {
  id?:InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?:InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?:InputMaybe<PaginationArg>;
  sort?:InputMaybe<InputMaybe<Scalars['String']>[]>;
};

export type Quote = {
  __typename?:'Quote';
  createdAt?:Maybe<Scalars['DateTime']>;
  text:Scalars['String'];
  updatedAt?:Maybe<Scalars['DateTime']>;
};

export type QuoteEntity = {
  __typename?:'QuoteEntity';
  attributes?:Maybe<Quote>;
  id?:Maybe<Scalars['ID']>;
};

export type QuoteEntityResponse = {
  __typename?:'QuoteEntityResponse';
  data?:Maybe<QuoteEntity>;
};

export type QuoteEntityResponseCollection = {
  __typename?:'QuoteEntityResponseCollection';
  data:QuoteEntity[];
  meta:ResponseCollectionMeta;
};

export type QuoteFiltersInput = {
  and?:InputMaybe<InputMaybe<QuoteFiltersInput>[]>;
  createdAt?:InputMaybe<DateTimeFilterInput>;
  id?:InputMaybe<IdFilterInput>;
  not?:InputMaybe<QuoteFiltersInput>;
  or?:InputMaybe<InputMaybe<QuoteFiltersInput>[]>;
  text?:InputMaybe<StringFilterInput>;
  updatedAt?:InputMaybe<DateTimeFilterInput>;
};

export type QuoteInput = {
  text?:InputMaybe<Scalars['String']>;
};

export type ResponseCollectionMeta = {
  __typename?:'ResponseCollectionMeta';
  pagination:Pagination;
};

export type StringFilterInput = {
  and?:InputMaybe<InputMaybe<Scalars['String']>[]>;
  between?:InputMaybe<InputMaybe<Scalars['String']>[]>;
  contains?:InputMaybe<Scalars['String']>;
  containsi?:InputMaybe<Scalars['String']>;
  endsWith?:InputMaybe<Scalars['String']>;
  eq?:InputMaybe<Scalars['String']>;
  eqi?:InputMaybe<Scalars['String']>;
  gt?:InputMaybe<Scalars['String']>;
  gte?:InputMaybe<Scalars['String']>;
  in?:InputMaybe<InputMaybe<Scalars['String']>[]>;
  lt?:InputMaybe<Scalars['String']>;
  lte?:InputMaybe<Scalars['String']>;
  ne?:InputMaybe<Scalars['String']>;
  not?:InputMaybe<StringFilterInput>;
  notContains?:InputMaybe<Scalars['String']>;
  notContainsi?:InputMaybe<Scalars['String']>;
  notIn?:InputMaybe<InputMaybe<Scalars['String']>[]>;
  notNull?:InputMaybe<Scalars['Boolean']>;
  null?:InputMaybe<Scalars['Boolean']>;
  or?:InputMaybe<InputMaybe<Scalars['String']>[]>;
  startsWith?:InputMaybe<Scalars['String']>;
};

export type Tag = {
  __typename?:'Tag';
  color?:Maybe<Scalars['String']>;
  createdAt?:Maybe<Scalars['DateTime']>;
  description?:Maybe<Scalars['String']>;
  name:Scalars['String'];
  posts?:Maybe<PostRelationResponseCollection>;
  slug:Scalars['String'];
  tier?:Maybe<Scalars['Int']>;
  updatedAt?:Maybe<Scalars['DateTime']>;
};


export type TagPostsArgs = {
  filters?:InputMaybe<PostFiltersInput>;
  pagination?:InputMaybe<PaginationArg>;
  publicationState?:InputMaybe<PublicationState>;
  sort?:InputMaybe<InputMaybe<Scalars['String']>[]>;
};

export type TagEntity = {
  __typename?:'TagEntity';
  attributes?:Maybe<Tag>;
  id?:Maybe<Scalars['ID']>;
};

export type TagEntityResponse = {
  __typename?:'TagEntityResponse';
  data?:Maybe<TagEntity>;
};

export type TagEntityResponseCollection = {
  __typename?:'TagEntityResponseCollection';
  data:TagEntity[];
  meta:ResponseCollectionMeta;
};

export type TagFiltersInput = {
  and?:InputMaybe<InputMaybe<TagFiltersInput>[]>;
  color?:InputMaybe<StringFilterInput>;
  createdAt?:InputMaybe<DateTimeFilterInput>;
  description?:InputMaybe<StringFilterInput>;
  id?:InputMaybe<IdFilterInput>;
  name?:InputMaybe<StringFilterInput>;
  not?:InputMaybe<TagFiltersInput>;
  or?:InputMaybe<InputMaybe<TagFiltersInput>[]>;
  posts?:InputMaybe<PostFiltersInput>;
  slug?:InputMaybe<StringFilterInput>;
  tier?:InputMaybe<IntFilterInput>;
  updatedAt?:InputMaybe<DateTimeFilterInput>;
};

export type TagInput = {
  color?:InputMaybe<Scalars['String']>;
  description?:InputMaybe<Scalars['String']>;
  name?:InputMaybe<Scalars['String']>;
  posts?:InputMaybe<InputMaybe<Scalars['ID']>[]>;
  slug?:InputMaybe<Scalars['String']>;
  tier?:InputMaybe<Scalars['Int']>;
};

export type TagRelationResponseCollection = {
  __typename?:'TagRelationResponseCollection';
  data:TagEntity[];
};

export type UploadFile = {
  __typename?:'UploadFile';
  alternativeText?:Maybe<Scalars['String']>;
  caption?:Maybe<Scalars['String']>;
  createdAt?:Maybe<Scalars['DateTime']>;
  ext?:Maybe<Scalars['String']>;
  formats?:Maybe<Scalars['JSON']>;
  hash:Scalars['String'];
  height?:Maybe<Scalars['Int']>;
  mime:Scalars['String'];
  name:Scalars['String'];
  previewUrl?:Maybe<Scalars['String']>;
  provider:Scalars['String'];
  provider_metadata?:Maybe<Scalars['JSON']>;
  related?:Maybe<Maybe<GenericMorph>[]>;
  size:Scalars['Float'];
  updatedAt?:Maybe<Scalars['DateTime']>;
  url:Scalars['String'];
  width?:Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?:'UploadFileEntity';
  attributes?:Maybe<UploadFile>;
  id?:Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?:'UploadFileEntityResponse';
  data?:Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?:'UploadFileEntityResponseCollection';
  data:UploadFileEntity[];
  meta:ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?:InputMaybe<StringFilterInput>;
  and?:InputMaybe<InputMaybe<UploadFileFiltersInput>[]>;
  caption?:InputMaybe<StringFilterInput>;
  createdAt?:InputMaybe<DateTimeFilterInput>;
  ext?:InputMaybe<StringFilterInput>;
  folder?:InputMaybe<UploadFolderFiltersInput>;
  folderPath?:InputMaybe<StringFilterInput>;
  formats?:InputMaybe<JsonFilterInput>;
  hash?:InputMaybe<StringFilterInput>;
  height?:InputMaybe<IntFilterInput>;
  id?:InputMaybe<IdFilterInput>;
  mime?:InputMaybe<StringFilterInput>;
  name?:InputMaybe<StringFilterInput>;
  not?:InputMaybe<UploadFileFiltersInput>;
  or?:InputMaybe<InputMaybe<UploadFileFiltersInput>[]>;
  previewUrl?:InputMaybe<StringFilterInput>;
  provider?:InputMaybe<StringFilterInput>;
  provider_metadata?:InputMaybe<JsonFilterInput>;
  size?:InputMaybe<FloatFilterInput>;
  updatedAt?:InputMaybe<DateTimeFilterInput>;
  url?:InputMaybe<StringFilterInput>;
  width?:InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?:InputMaybe<Scalars['String']>;
  caption?:InputMaybe<Scalars['String']>;
  ext?:InputMaybe<Scalars['String']>;
  folder?:InputMaybe<Scalars['ID']>;
  folderPath?:InputMaybe<Scalars['String']>;
  formats?:InputMaybe<Scalars['JSON']>;
  hash?:InputMaybe<Scalars['String']>;
  height?:InputMaybe<Scalars['Int']>;
  mime?:InputMaybe<Scalars['String']>;
  name?:InputMaybe<Scalars['String']>;
  previewUrl?:InputMaybe<Scalars['String']>;
  provider?:InputMaybe<Scalars['String']>;
  provider_metadata?:InputMaybe<Scalars['JSON']>;
  size?:InputMaybe<Scalars['Float']>;
  url?:InputMaybe<Scalars['String']>;
  width?:InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?:'UploadFileRelationResponseCollection';
  data:UploadFileEntity[];
};

export type UploadFolder = {
  __typename?:'UploadFolder';
  children?:Maybe<UploadFolderRelationResponseCollection>;
  createdAt?:Maybe<Scalars['DateTime']>;
  files?:Maybe<UploadFileRelationResponseCollection>;
  name:Scalars['String'];
  parent?:Maybe<UploadFolderEntityResponse>;
  path:Scalars['String'];
  pathId:Scalars['Int'];
  updatedAt?:Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?:InputMaybe<UploadFolderFiltersInput>;
  pagination?:InputMaybe<PaginationArg>;
  sort?:InputMaybe<InputMaybe<Scalars['String']>[]>;
};


export type UploadFolderFilesArgs = {
  filters?:InputMaybe<UploadFileFiltersInput>;
  pagination?:InputMaybe<PaginationArg>;
  sort?:InputMaybe<InputMaybe<Scalars['String']>[]>;
};

export type UploadFolderEntity = {
  __typename?:'UploadFolderEntity';
  attributes?:Maybe<UploadFolder>;
  id?:Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  __typename?:'UploadFolderEntityResponse';
  data?:Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?:'UploadFolderEntityResponseCollection';
  data:UploadFolderEntity[];
  meta:ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?:InputMaybe<InputMaybe<UploadFolderFiltersInput>[]>;
  children?:InputMaybe<UploadFolderFiltersInput>;
  createdAt?:InputMaybe<DateTimeFilterInput>;
  files?:InputMaybe<UploadFileFiltersInput>;
  id?:InputMaybe<IdFilterInput>;
  name?:InputMaybe<StringFilterInput>;
  not?:InputMaybe<UploadFolderFiltersInput>;
  or?:InputMaybe<InputMaybe<UploadFolderFiltersInput>[]>;
  parent?:InputMaybe<UploadFolderFiltersInput>;
  path?:InputMaybe<StringFilterInput>;
  pathId?:InputMaybe<IntFilterInput>;
  updatedAt?:InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?:InputMaybe<InputMaybe<Scalars['ID']>[]>;
  files?:InputMaybe<InputMaybe<Scalars['ID']>[]>;
  name?:InputMaybe<Scalars['String']>;
  parent?:InputMaybe<Scalars['ID']>;
  path?:InputMaybe<Scalars['String']>;
  pathId?:InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?:'UploadFolderRelationResponseCollection';
  data:UploadFolderEntity[];
};

export type UsersPermissionsCreateRolePayload = {
  __typename?:'UsersPermissionsCreateRolePayload';
  ok:Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?:'UsersPermissionsDeleteRolePayload';
  ok:Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier:Scalars['String'];
  password:Scalars['String'];
  provider?:Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?:'UsersPermissionsLoginPayload';
  jwt?:Maybe<Scalars['String']>;
  user:UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?:'UsersPermissionsMe';
  blocked?:Maybe<Scalars['Boolean']>;
  confirmed?:Maybe<Scalars['Boolean']>;
  email?:Maybe<Scalars['String']>;
  id:Scalars['ID'];
  role?:Maybe<UsersPermissionsMeRole>;
  username:Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?:'UsersPermissionsMeRole';
  description?:Maybe<Scalars['String']>;
  id:Scalars['ID'];
  name:Scalars['String'];
  type?:Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?:'UsersPermissionsPasswordPayload';
  ok:Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?:'UsersPermissionsPermission';
  action:Scalars['String'];
  createdAt?:Maybe<Scalars['DateTime']>;
  role?:Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?:Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?:'UsersPermissionsPermissionEntity';
  attributes?:Maybe<UsersPermissionsPermission>;
  id?:Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?:InputMaybe<StringFilterInput>;
  and?:InputMaybe<InputMaybe<UsersPermissionsPermissionFiltersInput>[]>;
  createdAt?:InputMaybe<DateTimeFilterInput>;
  id?:InputMaybe<IdFilterInput>;
  not?:InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?:InputMaybe<InputMaybe<UsersPermissionsPermissionFiltersInput>[]>;
  role?:InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?:InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?:'UsersPermissionsPermissionRelationResponseCollection';
  data:UsersPermissionsPermissionEntity[];
};

export type UsersPermissionsRegisterInput = {
  email:Scalars['String'];
  password:Scalars['String'];
  username:Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?:'UsersPermissionsRole';
  createdAt?:Maybe<Scalars['DateTime']>;
  description?:Maybe<Scalars['String']>;
  name:Scalars['String'];
  permissions?:Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?:Maybe<Scalars['String']>;
  updatedAt?:Maybe<Scalars['DateTime']>;
  users?:Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?:InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?:InputMaybe<PaginationArg>;
  sort?:InputMaybe<InputMaybe<Scalars['String']>[]>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?:InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?:InputMaybe<PaginationArg>;
  sort?:InputMaybe<InputMaybe<Scalars['String']>[]>;
};

export type UsersPermissionsRoleEntity = {
  __typename?:'UsersPermissionsRoleEntity';
  attributes?:Maybe<UsersPermissionsRole>;
  id?:Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?:'UsersPermissionsRoleEntityResponse';
  data?:Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?:'UsersPermissionsRoleEntityResponseCollection';
  data:UsersPermissionsRoleEntity[];
  meta:ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?:InputMaybe<InputMaybe<UsersPermissionsRoleFiltersInput>[]>;
  createdAt?:InputMaybe<DateTimeFilterInput>;
  description?:InputMaybe<StringFilterInput>;
  id?:InputMaybe<IdFilterInput>;
  name?:InputMaybe<StringFilterInput>;
  not?:InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?:InputMaybe<InputMaybe<UsersPermissionsRoleFiltersInput>[]>;
  permissions?:InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?:InputMaybe<StringFilterInput>;
  updatedAt?:InputMaybe<DateTimeFilterInput>;
  users?:InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?:InputMaybe<Scalars['String']>;
  name?:InputMaybe<Scalars['String']>;
  permissions?:InputMaybe<InputMaybe<Scalars['ID']>[]>;
  type?:InputMaybe<Scalars['String']>;
  users?:InputMaybe<InputMaybe<Scalars['ID']>[]>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?:'UsersPermissionsUpdateRolePayload';
  ok:Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?:'UsersPermissionsUser';
  blocked?:Maybe<Scalars['Boolean']>;
  comments?:Maybe<CommentRelationResponseCollection>;
  confirmed?:Maybe<Scalars['Boolean']>;
  createdAt?:Maybe<Scalars['DateTime']>;
  provider?:Maybe<Scalars['String']>;
  role?:Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?:Maybe<Scalars['DateTime']>;
  username:Scalars['String'];
};


export type UsersPermissionsUserCommentsArgs = {
  filters?:InputMaybe<CommentFiltersInput>;
  pagination?:InputMaybe<PaginationArg>;
  sort?:InputMaybe<InputMaybe<Scalars['String']>[]>;
};

export type UsersPermissionsUserEntity = {
  __typename?:'UsersPermissionsUserEntity';
  attributes?:Maybe<UsersPermissionsUser>;
  id?:Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?:'UsersPermissionsUserEntityResponse';
  data?:Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?:'UsersPermissionsUserEntityResponseCollection';
  data:UsersPermissionsUserEntity[];
  meta:ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?:InputMaybe<InputMaybe<UsersPermissionsUserFiltersInput>[]>;
  blocked?:InputMaybe<BooleanFilterInput>;
  comments?:InputMaybe<CommentFiltersInput>;
  confirmationToken?:InputMaybe<StringFilterInput>;
  confirmed?:InputMaybe<BooleanFilterInput>;
  createdAt?:InputMaybe<DateTimeFilterInput>;
  email?:InputMaybe<StringFilterInput>;
  id?:InputMaybe<IdFilterInput>;
  not?:InputMaybe<UsersPermissionsUserFiltersInput>;
  or?:InputMaybe<InputMaybe<UsersPermissionsUserFiltersInput>[]>;
  password?:InputMaybe<StringFilterInput>;
  provider?:InputMaybe<StringFilterInput>;
  resetPasswordToken?:InputMaybe<StringFilterInput>;
  role?:InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?:InputMaybe<DateTimeFilterInput>;
  username?:InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?:InputMaybe<Scalars['Boolean']>;
  comments?:InputMaybe<InputMaybe<Scalars['ID']>[]>;
  confirmationToken?:InputMaybe<Scalars['String']>;
  confirmed?:InputMaybe<Scalars['Boolean']>;
  email?:InputMaybe<Scalars['String']>;
  password?:InputMaybe<Scalars['String']>;
  provider?:InputMaybe<Scalars['String']>;
  resetPasswordToken?:InputMaybe<Scalars['String']>;
  role?:InputMaybe<Scalars['ID']>;
  username?:InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?:'UsersPermissionsUserRelationResponseCollection';
  data:UsersPermissionsUserEntity[];
};

export type TotalPagesFragment = { __typename?:'ResponseCollectionMeta', pagination:{ __typename?:'Pagination', total:number } };

export type FullPageFragment = { __typename?:'ResponseCollectionMeta', pagination:{ __typename?:'Pagination', total:number, page:number, pageSize:number, pageCount:number } };

export type InitQueryVariables = Exact<{
  pg?:InputMaybe<PaginationArg>;
}>;


export type InitQuery = { __typename?:'Query', quotes?:{ __typename?:'QuoteEntityResponseCollection', data:{ __typename?:'QuoteEntity', id?:string | null, attributes?:{ __typename?:'Quote', text:string } | null }[] } | null, categories?:{ __typename?:'CategoryEntityResponseCollection', data:{ __typename?:'CategoryEntity', attributes?:{ __typename?:'Category', name:string, slug:string } | null }[] } | null, posts?:{ __typename?:'PostEntityResponseCollection', meta:{ __typename?:'ResponseCollectionMeta', pagination:{ __typename?:'Pagination', total:number } }, data:{ __typename?:'PostEntity', id?:string | null, attributes?:{ __typename?:'Post', publishedAt?:any | null, title:string, slug:string } | null }[] } | null };

export type LastPostsQueryVariables = Exact<{ [key:string]:never; }>;


export type LastPostsQuery = { __typename?:'Query', posts?:{ __typename?:'PostEntityResponseCollection', meta:{ __typename?:'ResponseCollectionMeta', pagination:{ __typename?:'Pagination', total:number } } } | null };

export type AboutQueryVariables = Exact<{ [key:string]:never; }>;


export type AboutQuery = { __typename?:'Query', aboutPage?:{ __typename?:'AboutPageEntityResponse', data?:{ __typename?:'AboutPageEntity', attributes?:{ __typename?:'AboutPage', text?:string | null, title?:string | null, footnotes?:string | null, toenotes?:string | null, images?:{ __typename?:'UploadFileRelationResponseCollection', data:{ __typename?:'UploadFileEntity', attributes?:{ __typename?:'UploadFile', url:string, width?:number | null, height?:number | null, caption?:string | null, formats?:any | null } | null }[] } | null } | null } | null } | null };

export type TagListQueryVariables = Exact<{ [key:string]:never; }>;


export type TagListQuery = { __typename?:'Query', tags?:{ __typename?:'TagEntityResponseCollection', data:{ __typename?:'TagEntity', attributes?:{ __typename?:'Tag', name:string, slug:string, color?:string | null, posts?:{ __typename?:'PostRelationResponseCollection', data:{ __typename?:'PostEntity', id?:string | null }[] } | null } | null }[] } | null };

export type PostSearchQueryVariables = Exact<{
  postFilter:PostFiltersInput;
  pg:PaginationArg;
  sort?:InputMaybe<InputMaybe<Scalars['String']>[] | InputMaybe<Scalars['String']>>;
}>;


export type PostSearchQuery = { __typename?:'Query', posts?:{ __typename?:'PostEntityResponseCollection', meta:{ __typename?:'ResponseCollectionMeta', pagination:{ __typename?:'Pagination', total:number, page:number, pageSize:number, pageCount:number } }, data:{ __typename?:'PostEntity', id?:string | null, attributes?:{ __typename?:'Post', publishedAt?:any | null, body_searchable?:string | null, title:string, teaser?:string | null, slug:string, header?:{ __typename?:'UploadFileEntityResponse', data?:{ __typename?:'UploadFileEntity', attributes?:{ __typename?:'UploadFile', formats?:any | null } | null } | null } | null, tags?:{ __typename?:'TagRelationResponseCollection', data:{ __typename?:'TagEntity', attributes?:{ __typename?:'Tag', name:string, slug:string, color?:string | null } | null }[] } | null, category?:{ __typename?:'CategoryEntityResponse', data?:{ __typename?:'CategoryEntity', attributes?:{ __typename?:'Category', name:string, slug:string, color?:string | null } | null } | null } | null } | null }[] } | null };

export type SinglePostQueryVariables = Exact<{
  postId?:InputMaybe<Scalars['ID']>;
  commentPagination?:InputMaybe<PaginationArg>;
}>;


export type SinglePostQuery = { __typename?:'Query', comments?:{ __typename?:'CommentEntityResponseCollection', meta:{ __typename?:'ResponseCollectionMeta', pagination:{ __typename?:'Pagination', total:number, page:number, pageSize:number, pageCount:number } }, data:{ __typename?:'CommentEntity', attributes?:{ __typename?:'Comment', depth:number, createdAt?:any | null, content:string, subcomments?:{ __typename?:'CommentRelationResponseCollection', data:{ __typename?:'CommentEntity', id?:string | null }[] } | null, author?:{ __typename?:'UsersPermissionsUserEntityResponse', data?:{ __typename?:'UsersPermissionsUserEntity', attributes?:{ __typename?:'UsersPermissionsUser', username:string } | null } | null } | null } | null }[] } | null, post?:{ __typename?:'PostEntityResponse', data?:{ __typename?:'PostEntity', id?:string | null, attributes?:{ __typename?:'Post', title:string, body:string, slug:string, toc?:boolean | null, publishedAt?:any | null, updatedAt?:any | null, comments_enabled:boolean, footnotes:string, toenotes:string, header?:{ __typename?:'UploadFileEntityResponse', data?:{ __typename?:'UploadFileEntity', attributes?:{ __typename?:'UploadFile', url:string, caption?:string | null, width?:number | null, height?:number | null, alternativeText?:string | null, formats?:any | null } | null } | null } | null, category?:{ __typename?:'CategoryEntityResponse', data?:{ __typename?:'CategoryEntity', attributes?:{ __typename?:'Category', color?:string | null, name:string, slug:string } | null } | null } | null, tags?:{ __typename?:'TagRelationResponseCollection', data:{ __typename?:'TagEntity', attributes?:{ __typename?:'Tag', color?:string | null, name:string, slug:string } | null }[] } | null, images?:{ __typename?:'UploadFileRelationResponseCollection', data:{ __typename?:'UploadFileEntity', attributes?:{ __typename?:'UploadFile', url:string, width?:number | null, height?:number | null, caption?:string | null, formats?:any | null } | null }[] } | null } | null } | null } | null };

export type PostCheckQueryVariables = Exact<{
  postId?:InputMaybe<Scalars['ID']>;
}>;


export type PostCheckQuery = { __typename?:'Query', post?:{ __typename?:'PostEntityResponse', data?:{ __typename?:'PostEntity', id?:string | null, attributes?:{ __typename?:'Post', updatedAt?:any | null } | null } | null } | null };

export type PostCountQueryVariables = Exact<{
  pf?:InputMaybe<PostFiltersInput>;
  pg:PaginationArg;
}>;


export type PostCountQuery = { __typename?:'Query', posts?:{ __typename?:'PostEntityResponseCollection', meta:{ __typename?:'ResponseCollectionMeta', pagination:{ __typename?:'Pagination', total:number, pageSize:number } } } | null };

export type PostListQueryVariables = Exact<{
  pf?:InputMaybe<PostFiltersInput>;
  tf:TagFiltersInput;
  cf?:InputMaybe<CategoryFiltersInput>;
  pg:PaginationArg;
}>;


export type PostListQuery = { __typename?:'Query', posts?:{ __typename?:'PostEntityResponseCollection', meta:{ __typename?:'ResponseCollectionMeta', pagination:{ __typename?:'Pagination', total:number, page:number, pageSize:number, pageCount:number } }, data:{ __typename?:'PostEntity', id?:string | null, attributes?:{ __typename?:'Post', publishedAt?:any | null, title:string, teaser?:string | null, slug:string, header?:{ __typename?:'UploadFileEntityResponse', data?:{ __typename?:'UploadFileEntity', attributes?:{ __typename?:'UploadFile', formats?:any | null } | null } | null } | null, tags?:{ __typename?:'TagRelationResponseCollection', data:{ __typename?:'TagEntity', attributes?:{ __typename?:'Tag', name:string, slug:string, color?:string | null } | null }[] } | null, category?:{ __typename?:'CategoryEntityResponse', data?:{ __typename?:'CategoryEntity', attributes?:{ __typename?:'Category', name:string, slug:string, color?:string | null } | null } | null } | null } | null }[] } | null, tags?:{ __typename?:'TagEntityResponseCollection', data:{ __typename?:'TagEntity', attributes?:{ __typename?:'Tag', name:string, slug:string, color?:string | null, description?:string | null } | null }[] } | null, categories?:{ __typename?:'CategoryEntityResponseCollection', data:{ __typename?:'CategoryEntity', attributes?:{ __typename?:'Category', name:string, slug:string, color?:string | null, description?:string | null } | null }[] } | null };

export type CommentatorMutationVariables = Exact<{
  post:Scalars['ID'];
  username:Scalars['String'];
  content:Scalars['String'];
  email:Scalars['String'];
  token:Scalars['String'];
}>;


export type CommentatorMutation = { __typename?:'Mutation', createComment?:{ __typename?:'CommentEntityResponse', data?:{ __typename?:'CommentEntity', id?:string | null } | null } | null };

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
  categories {
    data {
      attributes {
        name
        slug
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
export function useInitQuery(variables:InitQueryVariables | VueCompositionApi.Ref<InitQueryVariables> | ReactiveFunction<InitQueryVariables> = {}, options:VueApolloComposable.UseQueryOptions<InitQuery, InitQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<InitQuery, InitQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<InitQuery, InitQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<InitQuery, InitQueryVariables>(InitDocument, variables, options);
}
export function useInitLazyQuery(variables:InitQueryVariables | VueCompositionApi.Ref<InitQueryVariables> | ReactiveFunction<InitQueryVariables> = {}, options:VueApolloComposable.UseQueryOptions<InitQuery, InitQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<InitQuery, InitQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<InitQuery, InitQueryVariables>> = {}) {
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
export function useLastPostsQuery(options:VueApolloComposable.UseQueryOptions<LastPostsQuery, LastPostsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<LastPostsQuery, LastPostsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<LastPostsQuery, LastPostsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<LastPostsQuery, LastPostsQueryVariables>(LastPostsDocument, {}, options);
}
export function useLastPostsLazyQuery(options:VueApolloComposable.UseQueryOptions<LastPostsQuery, LastPostsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<LastPostsQuery, LastPostsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<LastPostsQuery, LastPostsQueryVariables>> = {}) {
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
        images {
          data {
            attributes {
              url
              width
              height
              caption
              formats
            }
          }
        }
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
export function useAboutQuery(options:VueApolloComposable.UseQueryOptions<AboutQuery, AboutQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AboutQuery, AboutQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AboutQuery, AboutQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AboutQuery, AboutQueryVariables>(AboutDocument, {}, options);
}
export function useAboutLazyQuery(options:VueApolloComposable.UseQueryOptions<AboutQuery, AboutQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AboutQuery, AboutQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AboutQuery, AboutQueryVariables>> = {}) {
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
export function useTagListQuery(options:VueApolloComposable.UseQueryOptions<TagListQuery, TagListQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TagListQuery, TagListQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TagListQuery, TagListQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<TagListQuery, TagListQueryVariables>(TagListDocument, {}, options);
}
export function useTagListLazyQuery(options:VueApolloComposable.UseQueryOptions<TagListQuery, TagListQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TagListQuery, TagListQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TagListQuery, TagListQueryVariables>> = {}) {
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
export function usePostSearchQuery(variables:PostSearchQueryVariables | VueCompositionApi.Ref<PostSearchQueryVariables> | ReactiveFunction<PostSearchQueryVariables>, options:VueApolloComposable.UseQueryOptions<PostSearchQuery, PostSearchQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<PostSearchQuery, PostSearchQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<PostSearchQuery, PostSearchQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<PostSearchQuery, PostSearchQueryVariables>(PostSearchDocument, variables, options);
}
export function usePostSearchLazyQuery(variables:PostSearchQueryVariables | VueCompositionApi.Ref<PostSearchQueryVariables> | ReactiveFunction<PostSearchQueryVariables>, options:VueApolloComposable.UseQueryOptions<PostSearchQuery, PostSearchQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<PostSearchQuery, PostSearchQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<PostSearchQuery, PostSearchQueryVariables>> = {}) {
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
        body
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
        images {
          data {
            attributes {
              url
              width
              height
              caption
              formats
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
export function useSinglePostQuery(variables:SinglePostQueryVariables | VueCompositionApi.Ref<SinglePostQueryVariables> | ReactiveFunction<SinglePostQueryVariables> = {}, options:VueApolloComposable.UseQueryOptions<SinglePostQuery, SinglePostQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<SinglePostQuery, SinglePostQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<SinglePostQuery, SinglePostQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<SinglePostQuery, SinglePostQueryVariables>(SinglePostDocument, variables, options);
}
export function useSinglePostLazyQuery(variables:SinglePostQueryVariables | VueCompositionApi.Ref<SinglePostQueryVariables> | ReactiveFunction<SinglePostQueryVariables> = {}, options:VueApolloComposable.UseQueryOptions<SinglePostQuery, SinglePostQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<SinglePostQuery, SinglePostQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<SinglePostQuery, SinglePostQueryVariables>> = {}) {
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
export function usePostCheckQuery(variables:PostCheckQueryVariables | VueCompositionApi.Ref<PostCheckQueryVariables> | ReactiveFunction<PostCheckQueryVariables> = {}, options:VueApolloComposable.UseQueryOptions<PostCheckQuery, PostCheckQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<PostCheckQuery, PostCheckQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<PostCheckQuery, PostCheckQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<PostCheckQuery, PostCheckQueryVariables>(PostCheckDocument, variables, options);
}
export function usePostCheckLazyQuery(variables:PostCheckQueryVariables | VueCompositionApi.Ref<PostCheckQueryVariables> | ReactiveFunction<PostCheckQueryVariables> = {}, options:VueApolloComposable.UseQueryOptions<PostCheckQuery, PostCheckQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<PostCheckQuery, PostCheckQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<PostCheckQuery, PostCheckQueryVariables>> = {}) {
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
export function usePostCountQuery(variables:PostCountQueryVariables | VueCompositionApi.Ref<PostCountQueryVariables> | ReactiveFunction<PostCountQueryVariables>, options:VueApolloComposable.UseQueryOptions<PostCountQuery, PostCountQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<PostCountQuery, PostCountQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<PostCountQuery, PostCountQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<PostCountQuery, PostCountQueryVariables>(PostCountDocument, variables, options);
}
export function usePostCountLazyQuery(variables:PostCountQueryVariables | VueCompositionApi.Ref<PostCountQueryVariables> | ReactiveFunction<PostCountQueryVariables>, options:VueApolloComposable.UseQueryOptions<PostCountQuery, PostCountQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<PostCountQuery, PostCountQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<PostCountQuery, PostCountQueryVariables>> = {}) {
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
export function usePostListQuery(variables:PostListQueryVariables | VueCompositionApi.Ref<PostListQueryVariables> | ReactiveFunction<PostListQueryVariables>, options:VueApolloComposable.UseQueryOptions<PostListQuery, PostListQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<PostListQuery, PostListQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<PostListQuery, PostListQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<PostListQuery, PostListQueryVariables>(PostListDocument, variables, options);
}
export function usePostListLazyQuery(variables:PostListQueryVariables | VueCompositionApi.Ref<PostListQueryVariables> | ReactiveFunction<PostListQueryVariables>, options:VueApolloComposable.UseQueryOptions<PostListQuery, PostListQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<PostListQuery, PostListQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<PostListQuery, PostListQueryVariables>> = {}) {
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
export function useCommentatorMutation(options:VueApolloComposable.UseMutationOptions<CommentatorMutation, CommentatorMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CommentatorMutation, CommentatorMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CommentatorMutation, CommentatorMutationVariables>(CommentatorDocument, options);
}
export type CommentatorMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CommentatorMutation, CommentatorMutationVariables>;