import { Prisma } from "@prisma/client"
import { MergePrismaWithSdlTypes, MakeRelationsOptional } from '@redwoodjs/api'
import { User as PrismaUser, Post as PrismaPost, NicolaPost as PrismaNicolaPost, ProjectData as PrismaProjectData, Comment as PrismaComment, Service as PrismaService, Testimonial as PrismaTestimonial, TeamMember as PrismaTeamMember, Faq as PrismaFaq, ProcessStep as PrismaProcessStep, PricingTier as PrismaPricingTier, Technology as PrismaTechnology, ClientLogo as PrismaClientLogo, ContactSubmission as PrismaContactSubmission, NewsletterSubscriber as PrismaNewsletterSubscriber, LegalPage as PrismaLegalPage, SiteSetting as PrismaSiteSetting } from '@prisma/client'
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { RedwoodGraphQLContext } from '@redwoodjs/graphql-server/dist/functions/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ResolverFn<TResult, TParent, TContext, TArgs> = (
      args?: TArgs,
      obj?: { root: TParent; context: TContext; info: GraphQLResolveInfo }
    ) => TResult | Promise<TResult>
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
export type OptArgsResolverFn<TResult, TParent = {}, TContext = {}, TArgs = {}> = (
      args?: TArgs,
      obj?: { root: TParent; context: TContext; info: GraphQLResolveInfo }
    ) => TResult | Promise<TResult>

    export type RequiredResolverFn<TResult, TParent = {}, TContext = {}, TArgs = {}> = (
      args: TArgs,
      obj: { root: TParent; context: TContext; info: GraphQLResolveInfo }
    ) => TResult | Promise<TResult>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: number;
  Date: Date | string;
  DateTime: Date | string;
  JSON: Prisma.JsonValue;
  JSONObject: Prisma.JsonObject;
  Time: Date | string;
};

export type ClientLogo = {
  __typename?: 'ClientLogo';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  isActive: Scalars['Boolean'];
  logoUrl: Scalars['String'];
  name: Scalars['String'];
  order: Scalars['Int'];
  websiteUrl?: Maybe<Scalars['String']>;
};

export type ContactSubmission = {
  __typename?: 'ContactSubmission';
  budget?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  howFound?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  projectDescription: Scalars['String'];
  serviceInterest?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  timeline?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type CreateClientLogoInput = {
  isActive?: InputMaybe<Scalars['Boolean']>;
  logoUrl: Scalars['String'];
  name: Scalars['String'];
  order?: InputMaybe<Scalars['Int']>;
  websiteUrl?: InputMaybe<Scalars['String']>;
};

export type CreateContactSubmissionInput = {
  budget?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  howFound?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  projectDescription: Scalars['String'];
  serviceInterest?: InputMaybe<Scalars['String']>;
  timeline?: InputMaybe<Scalars['String']>;
};

export type CreateFaqInput = {
  answer: Scalars['String'];
  category: Scalars['String'];
  isActive: Scalars['Boolean'];
  order: Scalars['Int'];
  question: Scalars['String'];
};

export type CreateLegalPageInput = {
  body: Scalars['String'];
  isActive?: InputMaybe<Scalars['Boolean']>;
  slug: Scalars['String'];
  title: Scalars['String'];
};

export type CreateNewsletterSubscriberInput = {
  email: Scalars['String'];
};

export type CreateNicolaPostInput = {
  Image?: InputMaybe<Scalars['String']>;
  body: Scalars['String'];
  likeAmount: Scalars['Int'];
  title: Scalars['String'];
};

export type CreatePostInput = {
  Image?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  body: Scalars['String'];
  contentFormat?: InputMaybe<Scalars['String']>;
  excerpt?: InputMaybe<Scalars['String']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  likeAmount?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seoDescription?: InputMaybe<Scalars['String']>;
  seoTitle?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  title: Scalars['String'];
};

export type CreatePricingTierInput = {
  ctaText: Scalars['String'];
  description: Scalars['String'];
  features: Scalars['String'];
  isActive: Scalars['Boolean'];
  isPopular: Scalars['Boolean'];
  name: Scalars['String'];
  order: Scalars['Int'];
  price: Scalars['String'];
  unit: Scalars['String'];
};

export type CreateProcessStepInput = {
  description: Scalars['String'];
  icon: Scalars['String'];
  isActive: Scalars['Boolean'];
  order: Scalars['Int'];
  title: Scalars['String'];
};

export type CreateProjectDataInput = {
  body: Scalars['String'];
  by: Scalars['String'];
  category: Scalars['String'];
  challenge?: InputMaybe<Scalars['String']>;
  clientName: Scalars['String'];
  clientWebsite: Scalars['String'];
  featured?: InputMaybe<Scalars['Boolean']>;
  image: Scalars['String'];
  metrics?: InputMaybe<Scalars['String']>;
  objective: Scalars['String'];
  results?: InputMaybe<Scalars['String']>;
  solution?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  tools: Scalars['String'];
  video: Scalars['String'];
};

export type CreateServiceInput = {
  fullDescription: Scalars['String'];
  icon: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  order?: InputMaybe<Scalars['Int']>;
  shortDescription: Scalars['String'];
  slug: Scalars['String'];
  title: Scalars['String'];
};

export type CreateSiteSettingInput = {
  fieldType: Scalars['String'];
  group: Scalars['String'];
  key: Scalars['String'];
  label: Scalars['String'];
  value: Scalars['String'];
};

export type CreateTeamMemberInput = {
  bio: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  github?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  linkedin?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  order: Scalars['Int'];
  role: Scalars['String'];
};

export type CreateTechnologyInput = {
  category: Scalars['String'];
  icon: Scalars['String'];
  isActive?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  order?: InputMaybe<Scalars['Int']>;
  proficiency: Scalars['String'];
};

export type CreateTestimonialInput = {
  clientCompany: Scalars['String'];
  clientImage?: InputMaybe<Scalars['String']>;
  clientName: Scalars['String'];
  clientTitle: Scalars['String'];
  isActive: Scalars['Boolean'];
  order: Scalars['Int'];
  projectUrl?: InputMaybe<Scalars['String']>;
  quote: Scalars['String'];
  rating: Scalars['Int'];
};

export type Faq = {
  __typename?: 'Faq';
  answer: Scalars['String'];
  category: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  isActive: Scalars['Boolean'];
  order: Scalars['Int'];
  question: Scalars['String'];
};

export type LegalPage = {
  __typename?: 'LegalPage';
  body: Scalars['String'];
  id: Scalars['Int'];
  isActive: Scalars['Boolean'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  bulkUpdateSiteSettings: Array<SiteSetting>;
  createClientLogo: ClientLogo;
  createContactSubmission: ContactSubmission;
  createFaq: Faq;
  createLegalPage: LegalPage;
  createNewsletterSubscriber: NewsletterSubscriber;
  createNicolaPost: NicolaPost;
  createPost: Post;
  createPricingTier: PricingTier;
  createProcessStep: ProcessStep;
  createProjectData: ProjectData;
  createService: Service;
  createSiteSetting: SiteSetting;
  createTeamMember: TeamMember;
  createTechnology: Technology;
  createTestimonial: Testimonial;
  deleteClientLogo: ClientLogo;
  deleteContactSubmission: ContactSubmission;
  deleteFaq: Faq;
  deleteLegalPage: LegalPage;
  deleteNewsletterSubscriber: NewsletterSubscriber;
  deleteNicolaPost: NicolaPost;
  deletePost: Post;
  deletePricingTier: PricingTier;
  deleteProcessStep: ProcessStep;
  deleteProjectData: ProjectData;
  deleteService: Service;
  deleteSiteSetting: SiteSetting;
  deleteTeamMember: TeamMember;
  deleteTechnology: Technology;
  deleteTestimonial: Testimonial;
  updateClientLogo: ClientLogo;
  updateContactSubmission: ContactSubmission;
  updateFaq: Faq;
  updateLegalPage: LegalPage;
  updateNewsletterSubscriber: NewsletterSubscriber;
  updateNicolaPost: NicolaPost;
  updatePost: Post;
  updatePricingTier: PricingTier;
  updateProcessStep: ProcessStep;
  updateProjectData: ProjectData;
  updateService: Service;
  updateSiteSetting: SiteSetting;
  updateTeamMember: TeamMember;
  updateTechnology: Technology;
  updateTestimonial: Testimonial;
};


export type MutationbulkUpdateSiteSettingsArgs = {
  input: Array<UpdateSiteSettingInput>;
};


export type MutationcreateClientLogoArgs = {
  input: CreateClientLogoInput;
};


export type MutationcreateContactSubmissionArgs = {
  input: CreateContactSubmissionInput;
};


export type MutationcreateFaqArgs = {
  input: CreateFaqInput;
};


export type MutationcreateLegalPageArgs = {
  input: CreateLegalPageInput;
};


export type MutationcreateNewsletterSubscriberArgs = {
  input: CreateNewsletterSubscriberInput;
};


export type MutationcreateNicolaPostArgs = {
  input: CreateNicolaPostInput;
};


export type MutationcreatePostArgs = {
  input: CreatePostInput;
};


export type MutationcreatePricingTierArgs = {
  input: CreatePricingTierInput;
};


export type MutationcreateProcessStepArgs = {
  input: CreateProcessStepInput;
};


export type MutationcreateProjectDataArgs = {
  input: CreateProjectDataInput;
};


export type MutationcreateServiceArgs = {
  input: CreateServiceInput;
};


export type MutationcreateSiteSettingArgs = {
  input: CreateSiteSettingInput;
};


export type MutationcreateTeamMemberArgs = {
  input: CreateTeamMemberInput;
};


export type MutationcreateTechnologyArgs = {
  input: CreateTechnologyInput;
};


export type MutationcreateTestimonialArgs = {
  input: CreateTestimonialInput;
};


export type MutationdeleteClientLogoArgs = {
  id: Scalars['Int'];
};


export type MutationdeleteContactSubmissionArgs = {
  id: Scalars['Int'];
};


export type MutationdeleteFaqArgs = {
  id: Scalars['Int'];
};


export type MutationdeleteLegalPageArgs = {
  id: Scalars['Int'];
};


export type MutationdeleteNewsletterSubscriberArgs = {
  id: Scalars['Int'];
};


export type MutationdeleteNicolaPostArgs = {
  id: Scalars['Int'];
};


export type MutationdeletePostArgs = {
  id: Scalars['Int'];
};


export type MutationdeletePricingTierArgs = {
  id: Scalars['Int'];
};


export type MutationdeleteProcessStepArgs = {
  id: Scalars['Int'];
};


export type MutationdeleteProjectDataArgs = {
  id: Scalars['Int'];
};


export type MutationdeleteServiceArgs = {
  id: Scalars['Int'];
};


export type MutationdeleteSiteSettingArgs = {
  id: Scalars['Int'];
};


export type MutationdeleteTeamMemberArgs = {
  id: Scalars['Int'];
};


export type MutationdeleteTechnologyArgs = {
  id: Scalars['Int'];
};


export type MutationdeleteTestimonialArgs = {
  id: Scalars['Int'];
};


export type MutationupdateClientLogoArgs = {
  id: Scalars['Int'];
  input: UpdateClientLogoInput;
};


export type MutationupdateContactSubmissionArgs = {
  id: Scalars['Int'];
  input: UpdateContactSubmissionInput;
};


export type MutationupdateFaqArgs = {
  id: Scalars['Int'];
  input: UpdateFaqInput;
};


export type MutationupdateLegalPageArgs = {
  id: Scalars['Int'];
  input: UpdateLegalPageInput;
};


export type MutationupdateNewsletterSubscriberArgs = {
  id: Scalars['Int'];
  input: UpdateNewsletterSubscriberInput;
};


export type MutationupdateNicolaPostArgs = {
  id: Scalars['Int'];
  input: UpdateNicolaPostInput;
};


export type MutationupdatePostArgs = {
  id: Scalars['Int'];
  input: UpdatePostInput;
};


export type MutationupdatePricingTierArgs = {
  id: Scalars['Int'];
  input: UpdatePricingTierInput;
};


export type MutationupdateProcessStepArgs = {
  id: Scalars['Int'];
  input: UpdateProcessStepInput;
};


export type MutationupdateProjectDataArgs = {
  id: Scalars['Int'];
  input: UpdateProjectDataInput;
};


export type MutationupdateServiceArgs = {
  id: Scalars['Int'];
  input: UpdateServiceInput;
};


export type MutationupdateSiteSettingArgs = {
  id: Scalars['Int'];
  input: UpdateSiteSettingInput;
};


export type MutationupdateTeamMemberArgs = {
  id: Scalars['Int'];
  input: UpdateTeamMemberInput;
};


export type MutationupdateTechnologyArgs = {
  id: Scalars['Int'];
  input: UpdateTechnologyInput;
};


export type MutationupdateTestimonialArgs = {
  id: Scalars['Int'];
  input: UpdateTestimonialInput;
};

export type NewsletterSubscriber = {
  __typename?: 'NewsletterSubscriber';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Int'];
  isActive: Scalars['Boolean'];
};

export type NicolaPost = {
  __typename?: 'NicolaPost';
  Image?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  likeAmount: Scalars['Int'];
  title: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  Image?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  contentFormat: Scalars['String'];
  createdAt: Scalars['DateTime'];
  excerpt?: Maybe<Scalars['String']>;
  featured: Scalars['Boolean'];
  id: Scalars['Int'];
  legacyNicolaPostId?: Maybe<Scalars['Int']>;
  likeAmount: Scalars['Int'];
  published: Scalars['Boolean'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  tags: Array<Scalars['String']>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PricingTier = {
  __typename?: 'PricingTier';
  createdAt: Scalars['DateTime'];
  ctaText: Scalars['String'];
  description: Scalars['String'];
  features: Scalars['String'];
  id: Scalars['Int'];
  isActive: Scalars['Boolean'];
  isPopular: Scalars['Boolean'];
  name: Scalars['String'];
  order: Scalars['Int'];
  price: Scalars['String'];
  unit: Scalars['String'];
};

export type ProcessStep = {
  __typename?: 'ProcessStep';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  icon: Scalars['String'];
  id: Scalars['Int'];
  isActive: Scalars['Boolean'];
  order: Scalars['Int'];
  title: Scalars['String'];
};

export type ProjectData = {
  __typename?: 'ProjectData';
  body: Scalars['String'];
  by: Scalars['String'];
  category: Scalars['String'];
  challenge?: Maybe<Scalars['String']>;
  clientName: Scalars['String'];
  clientWebsite: Scalars['String'];
  createdAt: Scalars['DateTime'];
  featured: Scalars['Boolean'];
  id: Scalars['Int'];
  image: Scalars['String'];
  metrics?: Maybe<Scalars['String']>;
  objective: Scalars['String'];
  results?: Maybe<Scalars['String']>;
  solution?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  tools: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  video: Scalars['String'];
};

/** About the Redwood queries. */
export type Query = {
  __typename?: 'Query';
  activeServices: Array<Service>;
  clientLogo?: Maybe<ClientLogo>;
  clientLogos: Array<ClientLogo>;
  contactSubmission?: Maybe<ContactSubmission>;
  contactSubmissions: Array<ContactSubmission>;
  faq?: Maybe<Faq>;
  faqs: Array<Faq>;
  legalPage?: Maybe<LegalPage>;
  legalPageBySlug?: Maybe<LegalPage>;
  legalPages: Array<LegalPage>;
  newsletterSubscriber?: Maybe<NewsletterSubscriber>;
  newsletterSubscribers: Array<NewsletterSubscriber>;
  nicolaPost?: Maybe<NicolaPost>;
  nicolaPosts: Array<NicolaPost>;
  post?: Maybe<Post>;
  posts: Array<Post>;
  pricingTier?: Maybe<PricingTier>;
  pricingTiers: Array<PricingTier>;
  processStep?: Maybe<ProcessStep>;
  processSteps: Array<ProcessStep>;
  projectData?: Maybe<ProjectData>;
  projectDatas: Array<ProjectData>;
  publishedNicolaLegacySlug?: Maybe<Scalars['String']>;
  publishedPostSlugById?: Maybe<Scalars['String']>;
  /** Fetches the Redwood root schema. */
  redwood?: Maybe<Redwood>;
  researchArticle?: Maybe<Post>;
  researchArticleDraft?: Maybe<Post>;
  researchArticles: Array<Post>;
  service?: Maybe<Service>;
  serviceBySlug?: Maybe<Service>;
  services: Array<Service>;
  siteSetting?: Maybe<SiteSetting>;
  siteSettingByKey?: Maybe<SiteSetting>;
  siteSettings: Array<SiteSetting>;
  teamMember?: Maybe<TeamMember>;
  teamMembers: Array<TeamMember>;
  technologies: Array<Technology>;
  technology?: Maybe<Technology>;
  testimonial?: Maybe<Testimonial>;
  testimonials: Array<Testimonial>;
};


/** About the Redwood queries. */
export type QueryclientLogoArgs = {
  id: Scalars['Int'];
};


/** About the Redwood queries. */
export type QuerycontactSubmissionArgs = {
  id: Scalars['Int'];
};


/** About the Redwood queries. */
export type QueryfaqArgs = {
  id: Scalars['Int'];
};


/** About the Redwood queries. */
export type QuerylegalPageArgs = {
  id: Scalars['Int'];
};


/** About the Redwood queries. */
export type QuerylegalPageBySlugArgs = {
  slug: Scalars['String'];
};


/** About the Redwood queries. */
export type QuerynewsletterSubscriberArgs = {
  id: Scalars['Int'];
};


/** About the Redwood queries. */
export type QuerynicolaPostArgs = {
  id: Scalars['Int'];
};


/** About the Redwood queries. */
export type QuerypostArgs = {
  id: Scalars['Int'];
};


/** About the Redwood queries. */
export type QuerypricingTierArgs = {
  id: Scalars['Int'];
};


/** About the Redwood queries. */
export type QueryprocessStepArgs = {
  id: Scalars['Int'];
};


/** About the Redwood queries. */
export type QueryprojectDataArgs = {
  id: Scalars['Int'];
};


/** About the Redwood queries. */
export type QuerypublishedNicolaLegacySlugArgs = {
  legacyId: Scalars['Int'];
};


/** About the Redwood queries. */
export type QuerypublishedPostSlugByIdArgs = {
  id: Scalars['Int'];
};


/** About the Redwood queries. */
export type QueryresearchArticleArgs = {
  slug: Scalars['String'];
};


/** About the Redwood queries. */
export type QueryresearchArticleDraftArgs = {
  slug: Scalars['String'];
};


/** About the Redwood queries. */
export type QueryresearchArticlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


/** About the Redwood queries. */
export type QueryserviceArgs = {
  id: Scalars['Int'];
};


/** About the Redwood queries. */
export type QueryserviceBySlugArgs = {
  slug: Scalars['String'];
};


/** About the Redwood queries. */
export type QuerysiteSettingArgs = {
  id: Scalars['Int'];
};


/** About the Redwood queries. */
export type QuerysiteSettingByKeyArgs = {
  key: Scalars['String'];
};


/** About the Redwood queries. */
export type QueryteamMemberArgs = {
  id: Scalars['Int'];
};


/** About the Redwood queries. */
export type QuerytechnologyArgs = {
  id: Scalars['Int'];
};


/** About the Redwood queries. */
export type QuerytestimonialArgs = {
  id: Scalars['Int'];
};

/**
 * The RedwoodJS Root Schema
 *
 * Defines details about RedwoodJS such as the current user and version information.
 */
export type Redwood = {
  __typename?: 'Redwood';
  /** The current user. */
  currentUser?: Maybe<Scalars['JSON']>;
  /** The version of Prisma. */
  prismaVersion?: Maybe<Scalars['String']>;
  /** The version of Redwood. */
  version?: Maybe<Scalars['String']>;
};

export type Service = {
  __typename?: 'Service';
  createdAt: Scalars['DateTime'];
  fullDescription: Scalars['String'];
  icon: Scalars['String'];
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  order: Scalars['Int'];
  shortDescription: Scalars['String'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type SiteSetting = {
  __typename?: 'SiteSetting';
  createdAt: Scalars['DateTime'];
  fieldType: Scalars['String'];
  group: Scalars['String'];
  id: Scalars['Int'];
  key: Scalars['String'];
  label: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  value: Scalars['String'];
};

export type TeamMember = {
  __typename?: 'TeamMember';
  bio: Scalars['String'];
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  linkedin?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  order: Scalars['Int'];
  role: Scalars['String'];
};

export type Technology = {
  __typename?: 'Technology';
  category: Scalars['String'];
  createdAt: Scalars['DateTime'];
  icon: Scalars['String'];
  id: Scalars['Int'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  order: Scalars['Int'];
  proficiency: Scalars['String'];
};

export type Testimonial = {
  __typename?: 'Testimonial';
  clientCompany: Scalars['String'];
  clientImage?: Maybe<Scalars['String']>;
  clientName: Scalars['String'];
  clientTitle: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  isActive: Scalars['Boolean'];
  order: Scalars['Int'];
  projectUrl?: Maybe<Scalars['String']>;
  quote: Scalars['String'];
  rating: Scalars['Int'];
};

export type UpdateClientLogoInput = {
  isActive?: InputMaybe<Scalars['Boolean']>;
  logoUrl?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  websiteUrl?: InputMaybe<Scalars['String']>;
};

export type UpdateContactSubmissionInput = {
  notes?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

export type UpdateFaqInput = {
  answer?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  order?: InputMaybe<Scalars['Int']>;
  question?: InputMaybe<Scalars['String']>;
};

export type UpdateLegalPageInput = {
  body?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateNewsletterSubscriberInput = {
  isActive?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateNicolaPostInput = {
  Image?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['String']>;
  likeAmount?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdatePostInput = {
  Image?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['String']>;
  contentFormat?: InputMaybe<Scalars['String']>;
  excerpt?: InputMaybe<Scalars['String']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  likeAmount?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seoDescription?: InputMaybe<Scalars['String']>;
  seoTitle?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdatePricingTierInput = {
  ctaText?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  features?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isPopular?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['String']>;
  unit?: InputMaybe<Scalars['String']>;
};

export type UpdateProcessStepInput = {
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  order?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateProjectDataInput = {
  body?: InputMaybe<Scalars['String']>;
  by?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  challenge?: InputMaybe<Scalars['String']>;
  clientName?: InputMaybe<Scalars['String']>;
  clientWebsite?: InputMaybe<Scalars['String']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<Scalars['String']>;
  metrics?: InputMaybe<Scalars['String']>;
  objective?: InputMaybe<Scalars['String']>;
  results?: InputMaybe<Scalars['String']>;
  solution?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  tools?: InputMaybe<Scalars['String']>;
  video?: InputMaybe<Scalars['String']>;
};

export type UpdateServiceInput = {
  fullDescription?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  order?: InputMaybe<Scalars['Int']>;
  shortDescription?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateSiteSettingInput = {
  fieldType?: InputMaybe<Scalars['String']>;
  group?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  key?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type UpdateTeamMemberInput = {
  bio?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  github?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  linkedin?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  role?: InputMaybe<Scalars['String']>;
};

export type UpdateTechnologyInput = {
  category?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  proficiency?: InputMaybe<Scalars['String']>;
};

export type UpdateTestimonialInput = {
  clientCompany?: InputMaybe<Scalars['String']>;
  clientImage?: InputMaybe<Scalars['String']>;
  clientName?: InputMaybe<Scalars['String']>;
  clientTitle?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  order?: InputMaybe<Scalars['Int']>;
  projectUrl?: InputMaybe<Scalars['String']>;
  quote?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Int']>;
};

type MaybeOrArrayOfMaybe<T> = T | Maybe<T> | Maybe<T>[];
type AllMappedModels = MaybeOrArrayOfMaybe<ClientLogo | ContactSubmission | Faq | LegalPage | NewsletterSubscriber | NicolaPost | Post | PricingTier | ProcessStep | ProjectData | Service | SiteSetting | TeamMember | Technology | Testimonial>


export type ResolverTypeWrapper<T> = Promise<T> | T;

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ClientLogo: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaClientLogo, MakeRelationsOptional<ClientLogo, AllMappedModels>, AllMappedModels>>;
  ContactSubmission: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaContactSubmission, MakeRelationsOptional<ContactSubmission, AllMappedModels>, AllMappedModels>>;
  CreateClientLogoInput: CreateClientLogoInput;
  CreateContactSubmissionInput: CreateContactSubmissionInput;
  CreateFaqInput: CreateFaqInput;
  CreateLegalPageInput: CreateLegalPageInput;
  CreateNewsletterSubscriberInput: CreateNewsletterSubscriberInput;
  CreateNicolaPostInput: CreateNicolaPostInput;
  CreatePostInput: CreatePostInput;
  CreatePricingTierInput: CreatePricingTierInput;
  CreateProcessStepInput: CreateProcessStepInput;
  CreateProjectDataInput: CreateProjectDataInput;
  CreateServiceInput: CreateServiceInput;
  CreateSiteSettingInput: CreateSiteSettingInput;
  CreateTeamMemberInput: CreateTeamMemberInput;
  CreateTechnologyInput: CreateTechnologyInput;
  CreateTestimonialInput: CreateTestimonialInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Faq: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaFaq, MakeRelationsOptional<Faq, AllMappedModels>, AllMappedModels>>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
  LegalPage: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaLegalPage, MakeRelationsOptional<LegalPage, AllMappedModels>, AllMappedModels>>;
  Mutation: ResolverTypeWrapper<{}>;
  NewsletterSubscriber: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaNewsletterSubscriber, MakeRelationsOptional<NewsletterSubscriber, AllMappedModels>, AllMappedModels>>;
  NicolaPost: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaNicolaPost, MakeRelationsOptional<NicolaPost, AllMappedModels>, AllMappedModels>>;
  Post: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaPost, MakeRelationsOptional<Post, AllMappedModels>, AllMappedModels>>;
  PricingTier: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaPricingTier, MakeRelationsOptional<PricingTier, AllMappedModels>, AllMappedModels>>;
  ProcessStep: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaProcessStep, MakeRelationsOptional<ProcessStep, AllMappedModels>, AllMappedModels>>;
  ProjectData: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaProjectData, MakeRelationsOptional<ProjectData, AllMappedModels>, AllMappedModels>>;
  Query: ResolverTypeWrapper<{}>;
  Redwood: ResolverTypeWrapper<Redwood>;
  Service: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaService, MakeRelationsOptional<Service, AllMappedModels>, AllMappedModels>>;
  SiteSetting: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaSiteSetting, MakeRelationsOptional<SiteSetting, AllMappedModels>, AllMappedModels>>;
  String: ResolverTypeWrapper<Scalars['String']>;
  TeamMember: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaTeamMember, MakeRelationsOptional<TeamMember, AllMappedModels>, AllMappedModels>>;
  Technology: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaTechnology, MakeRelationsOptional<Technology, AllMappedModels>, AllMappedModels>>;
  Testimonial: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaTestimonial, MakeRelationsOptional<Testimonial, AllMappedModels>, AllMappedModels>>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  UpdateClientLogoInput: UpdateClientLogoInput;
  UpdateContactSubmissionInput: UpdateContactSubmissionInput;
  UpdateFaqInput: UpdateFaqInput;
  UpdateLegalPageInput: UpdateLegalPageInput;
  UpdateNewsletterSubscriberInput: UpdateNewsletterSubscriberInput;
  UpdateNicolaPostInput: UpdateNicolaPostInput;
  UpdatePostInput: UpdatePostInput;
  UpdatePricingTierInput: UpdatePricingTierInput;
  UpdateProcessStepInput: UpdateProcessStepInput;
  UpdateProjectDataInput: UpdateProjectDataInput;
  UpdateServiceInput: UpdateServiceInput;
  UpdateSiteSettingInput: UpdateSiteSettingInput;
  UpdateTeamMemberInput: UpdateTeamMemberInput;
  UpdateTechnologyInput: UpdateTechnologyInput;
  UpdateTestimonialInput: UpdateTestimonialInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BigInt: Scalars['BigInt'];
  Boolean: Scalars['Boolean'];
  ClientLogo: MergePrismaWithSdlTypes<PrismaClientLogo, MakeRelationsOptional<ClientLogo, AllMappedModels>, AllMappedModels>;
  ContactSubmission: MergePrismaWithSdlTypes<PrismaContactSubmission, MakeRelationsOptional<ContactSubmission, AllMappedModels>, AllMappedModels>;
  CreateClientLogoInput: CreateClientLogoInput;
  CreateContactSubmissionInput: CreateContactSubmissionInput;
  CreateFaqInput: CreateFaqInput;
  CreateLegalPageInput: CreateLegalPageInput;
  CreateNewsletterSubscriberInput: CreateNewsletterSubscriberInput;
  CreateNicolaPostInput: CreateNicolaPostInput;
  CreatePostInput: CreatePostInput;
  CreatePricingTierInput: CreatePricingTierInput;
  CreateProcessStepInput: CreateProcessStepInput;
  CreateProjectDataInput: CreateProjectDataInput;
  CreateServiceInput: CreateServiceInput;
  CreateSiteSettingInput: CreateSiteSettingInput;
  CreateTeamMemberInput: CreateTeamMemberInput;
  CreateTechnologyInput: CreateTechnologyInput;
  CreateTestimonialInput: CreateTestimonialInput;
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  Faq: MergePrismaWithSdlTypes<PrismaFaq, MakeRelationsOptional<Faq, AllMappedModels>, AllMappedModels>;
  Int: Scalars['Int'];
  JSON: Scalars['JSON'];
  JSONObject: Scalars['JSONObject'];
  LegalPage: MergePrismaWithSdlTypes<PrismaLegalPage, MakeRelationsOptional<LegalPage, AllMappedModels>, AllMappedModels>;
  Mutation: {};
  NewsletterSubscriber: MergePrismaWithSdlTypes<PrismaNewsletterSubscriber, MakeRelationsOptional<NewsletterSubscriber, AllMappedModels>, AllMappedModels>;
  NicolaPost: MergePrismaWithSdlTypes<PrismaNicolaPost, MakeRelationsOptional<NicolaPost, AllMappedModels>, AllMappedModels>;
  Post: MergePrismaWithSdlTypes<PrismaPost, MakeRelationsOptional<Post, AllMappedModels>, AllMappedModels>;
  PricingTier: MergePrismaWithSdlTypes<PrismaPricingTier, MakeRelationsOptional<PricingTier, AllMappedModels>, AllMappedModels>;
  ProcessStep: MergePrismaWithSdlTypes<PrismaProcessStep, MakeRelationsOptional<ProcessStep, AllMappedModels>, AllMappedModels>;
  ProjectData: MergePrismaWithSdlTypes<PrismaProjectData, MakeRelationsOptional<ProjectData, AllMappedModels>, AllMappedModels>;
  Query: {};
  Redwood: Redwood;
  Service: MergePrismaWithSdlTypes<PrismaService, MakeRelationsOptional<Service, AllMappedModels>, AllMappedModels>;
  SiteSetting: MergePrismaWithSdlTypes<PrismaSiteSetting, MakeRelationsOptional<SiteSetting, AllMappedModels>, AllMappedModels>;
  String: Scalars['String'];
  TeamMember: MergePrismaWithSdlTypes<PrismaTeamMember, MakeRelationsOptional<TeamMember, AllMappedModels>, AllMappedModels>;
  Technology: MergePrismaWithSdlTypes<PrismaTechnology, MakeRelationsOptional<Technology, AllMappedModels>, AllMappedModels>;
  Testimonial: MergePrismaWithSdlTypes<PrismaTestimonial, MakeRelationsOptional<Testimonial, AllMappedModels>, AllMappedModels>;
  Time: Scalars['Time'];
  UpdateClientLogoInput: UpdateClientLogoInput;
  UpdateContactSubmissionInput: UpdateContactSubmissionInput;
  UpdateFaqInput: UpdateFaqInput;
  UpdateLegalPageInput: UpdateLegalPageInput;
  UpdateNewsletterSubscriberInput: UpdateNewsletterSubscriberInput;
  UpdateNicolaPostInput: UpdateNicolaPostInput;
  UpdatePostInput: UpdatePostInput;
  UpdatePricingTierInput: UpdatePricingTierInput;
  UpdateProcessStepInput: UpdateProcessStepInput;
  UpdateProjectDataInput: UpdateProjectDataInput;
  UpdateServiceInput: UpdateServiceInput;
  UpdateSiteSettingInput: UpdateSiteSettingInput;
  UpdateTeamMemberInput: UpdateTeamMemberInput;
  UpdateTechnologyInput: UpdateTechnologyInput;
  UpdateTestimonialInput: UpdateTestimonialInput;
};

export type requireAuthDirectiveArgs = {
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type requireAuthDirectiveResolver<Result, Parent, ContextType = RedwoodGraphQLContext, Args = requireAuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type skipAuthDirectiveArgs = { };

export type skipAuthDirectiveResolver<Result, Parent, ContextType = RedwoodGraphQLContext, Args = skipAuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type ClientLogoResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['ClientLogo'] = ResolversParentTypes['ClientLogo']> = {
  createdAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  isActive: OptArgsResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  logoUrl: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  name: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  order: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  websiteUrl: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientLogoRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['ClientLogo'] = ResolversParentTypes['ClientLogo']> = {
  createdAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  isActive?: RequiredResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  logoUrl?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  name?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  order?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  websiteUrl?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContactSubmissionResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['ContactSubmission'] = ResolversParentTypes['ContactSubmission']> = {
  budget: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  email: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  howFound: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  name: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  notes: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  projectDescription: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  serviceInterest: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  timeline: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContactSubmissionRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['ContactSubmission'] = ResolversParentTypes['ContactSubmission']> = {
  budget?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  howFound?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  name?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  notes?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  projectDescription?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  serviceInterest?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  timeline?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type FaqResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Faq'] = ResolversParentTypes['Faq']> = {
  answer: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  category: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  createdAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  isActive: OptArgsResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  order: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  question: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FaqRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Faq'] = ResolversParentTypes['Faq']> = {
  answer?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  category?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  isActive?: RequiredResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  order?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  question?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JSONObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type LegalPageResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['LegalPage'] = ResolversParentTypes['LegalPage']> = {
  body: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  isActive: OptArgsResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  slug: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  title: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LegalPageRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['LegalPage'] = ResolversParentTypes['LegalPage']> = {
  body?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  isActive?: RequiredResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  slug?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  title?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  bulkUpdateSiteSettings: Resolver<Array<ResolversTypes['SiteSetting']>, ParentType, ContextType, RequireFields<MutationbulkUpdateSiteSettingsArgs, 'input'>>;
  createClientLogo: Resolver<ResolversTypes['ClientLogo'], ParentType, ContextType, RequireFields<MutationcreateClientLogoArgs, 'input'>>;
  createContactSubmission: Resolver<ResolversTypes['ContactSubmission'], ParentType, ContextType, RequireFields<MutationcreateContactSubmissionArgs, 'input'>>;
  createFaq: Resolver<ResolversTypes['Faq'], ParentType, ContextType, RequireFields<MutationcreateFaqArgs, 'input'>>;
  createLegalPage: Resolver<ResolversTypes['LegalPage'], ParentType, ContextType, RequireFields<MutationcreateLegalPageArgs, 'input'>>;
  createNewsletterSubscriber: Resolver<ResolversTypes['NewsletterSubscriber'], ParentType, ContextType, RequireFields<MutationcreateNewsletterSubscriberArgs, 'input'>>;
  createNicolaPost: Resolver<ResolversTypes['NicolaPost'], ParentType, ContextType, RequireFields<MutationcreateNicolaPostArgs, 'input'>>;
  createPost: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationcreatePostArgs, 'input'>>;
  createPricingTier: Resolver<ResolversTypes['PricingTier'], ParentType, ContextType, RequireFields<MutationcreatePricingTierArgs, 'input'>>;
  createProcessStep: Resolver<ResolversTypes['ProcessStep'], ParentType, ContextType, RequireFields<MutationcreateProcessStepArgs, 'input'>>;
  createProjectData: Resolver<ResolversTypes['ProjectData'], ParentType, ContextType, RequireFields<MutationcreateProjectDataArgs, 'input'>>;
  createService: Resolver<ResolversTypes['Service'], ParentType, ContextType, RequireFields<MutationcreateServiceArgs, 'input'>>;
  createSiteSetting: Resolver<ResolversTypes['SiteSetting'], ParentType, ContextType, RequireFields<MutationcreateSiteSettingArgs, 'input'>>;
  createTeamMember: Resolver<ResolversTypes['TeamMember'], ParentType, ContextType, RequireFields<MutationcreateTeamMemberArgs, 'input'>>;
  createTechnology: Resolver<ResolversTypes['Technology'], ParentType, ContextType, RequireFields<MutationcreateTechnologyArgs, 'input'>>;
  createTestimonial: Resolver<ResolversTypes['Testimonial'], ParentType, ContextType, RequireFields<MutationcreateTestimonialArgs, 'input'>>;
  deleteClientLogo: Resolver<ResolversTypes['ClientLogo'], ParentType, ContextType, RequireFields<MutationdeleteClientLogoArgs, 'id'>>;
  deleteContactSubmission: Resolver<ResolversTypes['ContactSubmission'], ParentType, ContextType, RequireFields<MutationdeleteContactSubmissionArgs, 'id'>>;
  deleteFaq: Resolver<ResolversTypes['Faq'], ParentType, ContextType, RequireFields<MutationdeleteFaqArgs, 'id'>>;
  deleteLegalPage: Resolver<ResolversTypes['LegalPage'], ParentType, ContextType, RequireFields<MutationdeleteLegalPageArgs, 'id'>>;
  deleteNewsletterSubscriber: Resolver<ResolversTypes['NewsletterSubscriber'], ParentType, ContextType, RequireFields<MutationdeleteNewsletterSubscriberArgs, 'id'>>;
  deleteNicolaPost: Resolver<ResolversTypes['NicolaPost'], ParentType, ContextType, RequireFields<MutationdeleteNicolaPostArgs, 'id'>>;
  deletePost: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationdeletePostArgs, 'id'>>;
  deletePricingTier: Resolver<ResolversTypes['PricingTier'], ParentType, ContextType, RequireFields<MutationdeletePricingTierArgs, 'id'>>;
  deleteProcessStep: Resolver<ResolversTypes['ProcessStep'], ParentType, ContextType, RequireFields<MutationdeleteProcessStepArgs, 'id'>>;
  deleteProjectData: Resolver<ResolversTypes['ProjectData'], ParentType, ContextType, RequireFields<MutationdeleteProjectDataArgs, 'id'>>;
  deleteService: Resolver<ResolversTypes['Service'], ParentType, ContextType, RequireFields<MutationdeleteServiceArgs, 'id'>>;
  deleteSiteSetting: Resolver<ResolversTypes['SiteSetting'], ParentType, ContextType, RequireFields<MutationdeleteSiteSettingArgs, 'id'>>;
  deleteTeamMember: Resolver<ResolversTypes['TeamMember'], ParentType, ContextType, RequireFields<MutationdeleteTeamMemberArgs, 'id'>>;
  deleteTechnology: Resolver<ResolversTypes['Technology'], ParentType, ContextType, RequireFields<MutationdeleteTechnologyArgs, 'id'>>;
  deleteTestimonial: Resolver<ResolversTypes['Testimonial'], ParentType, ContextType, RequireFields<MutationdeleteTestimonialArgs, 'id'>>;
  updateClientLogo: Resolver<ResolversTypes['ClientLogo'], ParentType, ContextType, RequireFields<MutationupdateClientLogoArgs, 'id' | 'input'>>;
  updateContactSubmission: Resolver<ResolversTypes['ContactSubmission'], ParentType, ContextType, RequireFields<MutationupdateContactSubmissionArgs, 'id' | 'input'>>;
  updateFaq: Resolver<ResolversTypes['Faq'], ParentType, ContextType, RequireFields<MutationupdateFaqArgs, 'id' | 'input'>>;
  updateLegalPage: Resolver<ResolversTypes['LegalPage'], ParentType, ContextType, RequireFields<MutationupdateLegalPageArgs, 'id' | 'input'>>;
  updateNewsletterSubscriber: Resolver<ResolversTypes['NewsletterSubscriber'], ParentType, ContextType, RequireFields<MutationupdateNewsletterSubscriberArgs, 'id' | 'input'>>;
  updateNicolaPost: Resolver<ResolversTypes['NicolaPost'], ParentType, ContextType, RequireFields<MutationupdateNicolaPostArgs, 'id' | 'input'>>;
  updatePost: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationupdatePostArgs, 'id' | 'input'>>;
  updatePricingTier: Resolver<ResolversTypes['PricingTier'], ParentType, ContextType, RequireFields<MutationupdatePricingTierArgs, 'id' | 'input'>>;
  updateProcessStep: Resolver<ResolversTypes['ProcessStep'], ParentType, ContextType, RequireFields<MutationupdateProcessStepArgs, 'id' | 'input'>>;
  updateProjectData: Resolver<ResolversTypes['ProjectData'], ParentType, ContextType, RequireFields<MutationupdateProjectDataArgs, 'id' | 'input'>>;
  updateService: Resolver<ResolversTypes['Service'], ParentType, ContextType, RequireFields<MutationupdateServiceArgs, 'id' | 'input'>>;
  updateSiteSetting: Resolver<ResolversTypes['SiteSetting'], ParentType, ContextType, RequireFields<MutationupdateSiteSettingArgs, 'id' | 'input'>>;
  updateTeamMember: Resolver<ResolversTypes['TeamMember'], ParentType, ContextType, RequireFields<MutationupdateTeamMemberArgs, 'id' | 'input'>>;
  updateTechnology: Resolver<ResolversTypes['Technology'], ParentType, ContextType, RequireFields<MutationupdateTechnologyArgs, 'id' | 'input'>>;
  updateTestimonial: Resolver<ResolversTypes['Testimonial'], ParentType, ContextType, RequireFields<MutationupdateTestimonialArgs, 'id' | 'input'>>;
};

export type MutationRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  bulkUpdateSiteSettings?: RequiredResolverFn<Array<ResolversTypes['SiteSetting']>, ParentType, ContextType, RequireFields<MutationbulkUpdateSiteSettingsArgs, 'input'>>;
  createClientLogo?: RequiredResolverFn<ResolversTypes['ClientLogo'], ParentType, ContextType, RequireFields<MutationcreateClientLogoArgs, 'input'>>;
  createContactSubmission?: RequiredResolverFn<ResolversTypes['ContactSubmission'], ParentType, ContextType, RequireFields<MutationcreateContactSubmissionArgs, 'input'>>;
  createFaq?: RequiredResolverFn<ResolversTypes['Faq'], ParentType, ContextType, RequireFields<MutationcreateFaqArgs, 'input'>>;
  createLegalPage?: RequiredResolverFn<ResolversTypes['LegalPage'], ParentType, ContextType, RequireFields<MutationcreateLegalPageArgs, 'input'>>;
  createNewsletterSubscriber?: RequiredResolverFn<ResolversTypes['NewsletterSubscriber'], ParentType, ContextType, RequireFields<MutationcreateNewsletterSubscriberArgs, 'input'>>;
  createNicolaPost?: RequiredResolverFn<ResolversTypes['NicolaPost'], ParentType, ContextType, RequireFields<MutationcreateNicolaPostArgs, 'input'>>;
  createPost?: RequiredResolverFn<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationcreatePostArgs, 'input'>>;
  createPricingTier?: RequiredResolverFn<ResolversTypes['PricingTier'], ParentType, ContextType, RequireFields<MutationcreatePricingTierArgs, 'input'>>;
  createProcessStep?: RequiredResolverFn<ResolversTypes['ProcessStep'], ParentType, ContextType, RequireFields<MutationcreateProcessStepArgs, 'input'>>;
  createProjectData?: RequiredResolverFn<ResolversTypes['ProjectData'], ParentType, ContextType, RequireFields<MutationcreateProjectDataArgs, 'input'>>;
  createService?: RequiredResolverFn<ResolversTypes['Service'], ParentType, ContextType, RequireFields<MutationcreateServiceArgs, 'input'>>;
  createSiteSetting?: RequiredResolverFn<ResolversTypes['SiteSetting'], ParentType, ContextType, RequireFields<MutationcreateSiteSettingArgs, 'input'>>;
  createTeamMember?: RequiredResolverFn<ResolversTypes['TeamMember'], ParentType, ContextType, RequireFields<MutationcreateTeamMemberArgs, 'input'>>;
  createTechnology?: RequiredResolverFn<ResolversTypes['Technology'], ParentType, ContextType, RequireFields<MutationcreateTechnologyArgs, 'input'>>;
  createTestimonial?: RequiredResolverFn<ResolversTypes['Testimonial'], ParentType, ContextType, RequireFields<MutationcreateTestimonialArgs, 'input'>>;
  deleteClientLogo?: RequiredResolverFn<ResolversTypes['ClientLogo'], ParentType, ContextType, RequireFields<MutationdeleteClientLogoArgs, 'id'>>;
  deleteContactSubmission?: RequiredResolverFn<ResolversTypes['ContactSubmission'], ParentType, ContextType, RequireFields<MutationdeleteContactSubmissionArgs, 'id'>>;
  deleteFaq?: RequiredResolverFn<ResolversTypes['Faq'], ParentType, ContextType, RequireFields<MutationdeleteFaqArgs, 'id'>>;
  deleteLegalPage?: RequiredResolverFn<ResolversTypes['LegalPage'], ParentType, ContextType, RequireFields<MutationdeleteLegalPageArgs, 'id'>>;
  deleteNewsletterSubscriber?: RequiredResolverFn<ResolversTypes['NewsletterSubscriber'], ParentType, ContextType, RequireFields<MutationdeleteNewsletterSubscriberArgs, 'id'>>;
  deleteNicolaPost?: RequiredResolverFn<ResolversTypes['NicolaPost'], ParentType, ContextType, RequireFields<MutationdeleteNicolaPostArgs, 'id'>>;
  deletePost?: RequiredResolverFn<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationdeletePostArgs, 'id'>>;
  deletePricingTier?: RequiredResolverFn<ResolversTypes['PricingTier'], ParentType, ContextType, RequireFields<MutationdeletePricingTierArgs, 'id'>>;
  deleteProcessStep?: RequiredResolverFn<ResolversTypes['ProcessStep'], ParentType, ContextType, RequireFields<MutationdeleteProcessStepArgs, 'id'>>;
  deleteProjectData?: RequiredResolverFn<ResolversTypes['ProjectData'], ParentType, ContextType, RequireFields<MutationdeleteProjectDataArgs, 'id'>>;
  deleteService?: RequiredResolverFn<ResolversTypes['Service'], ParentType, ContextType, RequireFields<MutationdeleteServiceArgs, 'id'>>;
  deleteSiteSetting?: RequiredResolverFn<ResolversTypes['SiteSetting'], ParentType, ContextType, RequireFields<MutationdeleteSiteSettingArgs, 'id'>>;
  deleteTeamMember?: RequiredResolverFn<ResolversTypes['TeamMember'], ParentType, ContextType, RequireFields<MutationdeleteTeamMemberArgs, 'id'>>;
  deleteTechnology?: RequiredResolverFn<ResolversTypes['Technology'], ParentType, ContextType, RequireFields<MutationdeleteTechnologyArgs, 'id'>>;
  deleteTestimonial?: RequiredResolverFn<ResolversTypes['Testimonial'], ParentType, ContextType, RequireFields<MutationdeleteTestimonialArgs, 'id'>>;
  updateClientLogo?: RequiredResolverFn<ResolversTypes['ClientLogo'], ParentType, ContextType, RequireFields<MutationupdateClientLogoArgs, 'id' | 'input'>>;
  updateContactSubmission?: RequiredResolverFn<ResolversTypes['ContactSubmission'], ParentType, ContextType, RequireFields<MutationupdateContactSubmissionArgs, 'id' | 'input'>>;
  updateFaq?: RequiredResolverFn<ResolversTypes['Faq'], ParentType, ContextType, RequireFields<MutationupdateFaqArgs, 'id' | 'input'>>;
  updateLegalPage?: RequiredResolverFn<ResolversTypes['LegalPage'], ParentType, ContextType, RequireFields<MutationupdateLegalPageArgs, 'id' | 'input'>>;
  updateNewsletterSubscriber?: RequiredResolverFn<ResolversTypes['NewsletterSubscriber'], ParentType, ContextType, RequireFields<MutationupdateNewsletterSubscriberArgs, 'id' | 'input'>>;
  updateNicolaPost?: RequiredResolverFn<ResolversTypes['NicolaPost'], ParentType, ContextType, RequireFields<MutationupdateNicolaPostArgs, 'id' | 'input'>>;
  updatePost?: RequiredResolverFn<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationupdatePostArgs, 'id' | 'input'>>;
  updatePricingTier?: RequiredResolverFn<ResolversTypes['PricingTier'], ParentType, ContextType, RequireFields<MutationupdatePricingTierArgs, 'id' | 'input'>>;
  updateProcessStep?: RequiredResolverFn<ResolversTypes['ProcessStep'], ParentType, ContextType, RequireFields<MutationupdateProcessStepArgs, 'id' | 'input'>>;
  updateProjectData?: RequiredResolverFn<ResolversTypes['ProjectData'], ParentType, ContextType, RequireFields<MutationupdateProjectDataArgs, 'id' | 'input'>>;
  updateService?: RequiredResolverFn<ResolversTypes['Service'], ParentType, ContextType, RequireFields<MutationupdateServiceArgs, 'id' | 'input'>>;
  updateSiteSetting?: RequiredResolverFn<ResolversTypes['SiteSetting'], ParentType, ContextType, RequireFields<MutationupdateSiteSettingArgs, 'id' | 'input'>>;
  updateTeamMember?: RequiredResolverFn<ResolversTypes['TeamMember'], ParentType, ContextType, RequireFields<MutationupdateTeamMemberArgs, 'id' | 'input'>>;
  updateTechnology?: RequiredResolverFn<ResolversTypes['Technology'], ParentType, ContextType, RequireFields<MutationupdateTechnologyArgs, 'id' | 'input'>>;
  updateTestimonial?: RequiredResolverFn<ResolversTypes['Testimonial'], ParentType, ContextType, RequireFields<MutationupdateTestimonialArgs, 'id' | 'input'>>;
};

export type NewsletterSubscriberResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['NewsletterSubscriber'] = ResolversParentTypes['NewsletterSubscriber']> = {
  createdAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  email: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  isActive: OptArgsResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NewsletterSubscriberRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['NewsletterSubscriber'] = ResolversParentTypes['NewsletterSubscriber']> = {
  createdAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  isActive?: RequiredResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NicolaPostResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['NicolaPost'] = ResolversParentTypes['NicolaPost']> = {
  Image: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  body: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  createdAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  likeAmount: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  title: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NicolaPostRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['NicolaPost'] = ResolversParentTypes['NicolaPost']> = {
  Image?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  body?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  likeAmount?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  title?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  Image: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  body: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  contentFormat: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  createdAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  excerpt: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  featured: OptArgsResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  legacyNicolaPostId: OptArgsResolverFn<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  likeAmount: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  published: OptArgsResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  publishedAt: OptArgsResolverFn<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  seoDescription: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  seoTitle: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  tags: OptArgsResolverFn<Array<ResolversTypes['String']>, ParentType, ContextType>;
  title: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  Image?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  body?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  contentFormat?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  excerpt?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  featured?: RequiredResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  legacyNicolaPostId?: RequiredResolverFn<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  likeAmount?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  published?: RequiredResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  publishedAt?: RequiredResolverFn<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  seoDescription?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  seoTitle?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  tags?: RequiredResolverFn<Array<ResolversTypes['String']>, ParentType, ContextType>;
  title?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PricingTierResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['PricingTier'] = ResolversParentTypes['PricingTier']> = {
  createdAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  ctaText: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  description: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  features: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  isActive: OptArgsResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  isPopular: OptArgsResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  name: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  order: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  price: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  unit: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PricingTierRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['PricingTier'] = ResolversParentTypes['PricingTier']> = {
  createdAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  ctaText?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  description?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  features?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  isActive?: RequiredResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  isPopular?: RequiredResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  order?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  price?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  unit?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProcessStepResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['ProcessStep'] = ResolversParentTypes['ProcessStep']> = {
  createdAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  description: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  icon: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  isActive: OptArgsResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  order: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  title: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProcessStepRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['ProcessStep'] = ResolversParentTypes['ProcessStep']> = {
  createdAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  icon?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  isActive?: RequiredResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  order?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  title?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectDataResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['ProjectData'] = ResolversParentTypes['ProjectData']> = {
  body: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  by: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  category: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  challenge: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  clientName: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  clientWebsite: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  createdAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  featured: OptArgsResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  image: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  metrics: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  objective: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  results: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  solution: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  tools: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  video: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectDataRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['ProjectData'] = ResolversParentTypes['ProjectData']> = {
  body?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  by?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  category?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  challenge?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  clientName?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  clientWebsite?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  featured?: RequiredResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  image?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  metrics?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  objective?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  results?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  solution?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  tools?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  video?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  activeServices: OptArgsResolverFn<Array<ResolversTypes['Service']>, ParentType, ContextType>;
  clientLogo: Resolver<Maybe<ResolversTypes['ClientLogo']>, ParentType, ContextType, RequireFields<QueryclientLogoArgs, 'id'>>;
  clientLogos: OptArgsResolverFn<Array<ResolversTypes['ClientLogo']>, ParentType, ContextType>;
  contactSubmission: Resolver<Maybe<ResolversTypes['ContactSubmission']>, ParentType, ContextType, RequireFields<QuerycontactSubmissionArgs, 'id'>>;
  contactSubmissions: OptArgsResolverFn<Array<ResolversTypes['ContactSubmission']>, ParentType, ContextType>;
  faq: Resolver<Maybe<ResolversTypes['Faq']>, ParentType, ContextType, RequireFields<QueryfaqArgs, 'id'>>;
  faqs: OptArgsResolverFn<Array<ResolversTypes['Faq']>, ParentType, ContextType>;
  legalPage: Resolver<Maybe<ResolversTypes['LegalPage']>, ParentType, ContextType, RequireFields<QuerylegalPageArgs, 'id'>>;
  legalPageBySlug: Resolver<Maybe<ResolversTypes['LegalPage']>, ParentType, ContextType, RequireFields<QuerylegalPageBySlugArgs, 'slug'>>;
  legalPages: OptArgsResolverFn<Array<ResolversTypes['LegalPage']>, ParentType, ContextType>;
  newsletterSubscriber: Resolver<Maybe<ResolversTypes['NewsletterSubscriber']>, ParentType, ContextType, RequireFields<QuerynewsletterSubscriberArgs, 'id'>>;
  newsletterSubscribers: OptArgsResolverFn<Array<ResolversTypes['NewsletterSubscriber']>, ParentType, ContextType>;
  nicolaPost: Resolver<Maybe<ResolversTypes['NicolaPost']>, ParentType, ContextType, RequireFields<QuerynicolaPostArgs, 'id'>>;
  nicolaPosts: OptArgsResolverFn<Array<ResolversTypes['NicolaPost']>, ParentType, ContextType>;
  post: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QuerypostArgs, 'id'>>;
  posts: OptArgsResolverFn<Array<ResolversTypes['Post']>, ParentType, ContextType>;
  pricingTier: Resolver<Maybe<ResolversTypes['PricingTier']>, ParentType, ContextType, RequireFields<QuerypricingTierArgs, 'id'>>;
  pricingTiers: OptArgsResolverFn<Array<ResolversTypes['PricingTier']>, ParentType, ContextType>;
  processStep: Resolver<Maybe<ResolversTypes['ProcessStep']>, ParentType, ContextType, RequireFields<QueryprocessStepArgs, 'id'>>;
  processSteps: OptArgsResolverFn<Array<ResolversTypes['ProcessStep']>, ParentType, ContextType>;
  projectData: Resolver<Maybe<ResolversTypes['ProjectData']>, ParentType, ContextType, RequireFields<QueryprojectDataArgs, 'id'>>;
  projectDatas: OptArgsResolverFn<Array<ResolversTypes['ProjectData']>, ParentType, ContextType>;
  publishedNicolaLegacySlug: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QuerypublishedNicolaLegacySlugArgs, 'legacyId'>>;
  publishedPostSlugById: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QuerypublishedPostSlugByIdArgs, 'id'>>;
  redwood: OptArgsResolverFn<Maybe<ResolversTypes['Redwood']>, ParentType, ContextType>;
  researchArticle: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryresearchArticleArgs, 'slug'>>;
  researchArticleDraft: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryresearchArticleDraftArgs, 'slug'>>;
  researchArticles: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType, Partial<QueryresearchArticlesArgs>>;
  service: Resolver<Maybe<ResolversTypes['Service']>, ParentType, ContextType, RequireFields<QueryserviceArgs, 'id'>>;
  serviceBySlug: Resolver<Maybe<ResolversTypes['Service']>, ParentType, ContextType, RequireFields<QueryserviceBySlugArgs, 'slug'>>;
  services: OptArgsResolverFn<Array<ResolversTypes['Service']>, ParentType, ContextType>;
  siteSetting: Resolver<Maybe<ResolversTypes['SiteSetting']>, ParentType, ContextType, RequireFields<QuerysiteSettingArgs, 'id'>>;
  siteSettingByKey: Resolver<Maybe<ResolversTypes['SiteSetting']>, ParentType, ContextType, RequireFields<QuerysiteSettingByKeyArgs, 'key'>>;
  siteSettings: OptArgsResolverFn<Array<ResolversTypes['SiteSetting']>, ParentType, ContextType>;
  teamMember: Resolver<Maybe<ResolversTypes['TeamMember']>, ParentType, ContextType, RequireFields<QueryteamMemberArgs, 'id'>>;
  teamMembers: OptArgsResolverFn<Array<ResolversTypes['TeamMember']>, ParentType, ContextType>;
  technologies: OptArgsResolverFn<Array<ResolversTypes['Technology']>, ParentType, ContextType>;
  technology: Resolver<Maybe<ResolversTypes['Technology']>, ParentType, ContextType, RequireFields<QuerytechnologyArgs, 'id'>>;
  testimonial: Resolver<Maybe<ResolversTypes['Testimonial']>, ParentType, ContextType, RequireFields<QuerytestimonialArgs, 'id'>>;
  testimonials: OptArgsResolverFn<Array<ResolversTypes['Testimonial']>, ParentType, ContextType>;
};

export type QueryRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  activeServices?: RequiredResolverFn<Array<ResolversTypes['Service']>, ParentType, ContextType>;
  clientLogo?: RequiredResolverFn<Maybe<ResolversTypes['ClientLogo']>, ParentType, ContextType, RequireFields<QueryclientLogoArgs, 'id'>>;
  clientLogos?: RequiredResolverFn<Array<ResolversTypes['ClientLogo']>, ParentType, ContextType>;
  contactSubmission?: RequiredResolverFn<Maybe<ResolversTypes['ContactSubmission']>, ParentType, ContextType, RequireFields<QuerycontactSubmissionArgs, 'id'>>;
  contactSubmissions?: RequiredResolverFn<Array<ResolversTypes['ContactSubmission']>, ParentType, ContextType>;
  faq?: RequiredResolverFn<Maybe<ResolversTypes['Faq']>, ParentType, ContextType, RequireFields<QueryfaqArgs, 'id'>>;
  faqs?: RequiredResolverFn<Array<ResolversTypes['Faq']>, ParentType, ContextType>;
  legalPage?: RequiredResolverFn<Maybe<ResolversTypes['LegalPage']>, ParentType, ContextType, RequireFields<QuerylegalPageArgs, 'id'>>;
  legalPageBySlug?: RequiredResolverFn<Maybe<ResolversTypes['LegalPage']>, ParentType, ContextType, RequireFields<QuerylegalPageBySlugArgs, 'slug'>>;
  legalPages?: RequiredResolverFn<Array<ResolversTypes['LegalPage']>, ParentType, ContextType>;
  newsletterSubscriber?: RequiredResolverFn<Maybe<ResolversTypes['NewsletterSubscriber']>, ParentType, ContextType, RequireFields<QuerynewsletterSubscriberArgs, 'id'>>;
  newsletterSubscribers?: RequiredResolverFn<Array<ResolversTypes['NewsletterSubscriber']>, ParentType, ContextType>;
  nicolaPost?: RequiredResolverFn<Maybe<ResolversTypes['NicolaPost']>, ParentType, ContextType, RequireFields<QuerynicolaPostArgs, 'id'>>;
  nicolaPosts?: RequiredResolverFn<Array<ResolversTypes['NicolaPost']>, ParentType, ContextType>;
  post?: RequiredResolverFn<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QuerypostArgs, 'id'>>;
  posts?: RequiredResolverFn<Array<ResolversTypes['Post']>, ParentType, ContextType>;
  pricingTier?: RequiredResolverFn<Maybe<ResolversTypes['PricingTier']>, ParentType, ContextType, RequireFields<QuerypricingTierArgs, 'id'>>;
  pricingTiers?: RequiredResolverFn<Array<ResolversTypes['PricingTier']>, ParentType, ContextType>;
  processStep?: RequiredResolverFn<Maybe<ResolversTypes['ProcessStep']>, ParentType, ContextType, RequireFields<QueryprocessStepArgs, 'id'>>;
  processSteps?: RequiredResolverFn<Array<ResolversTypes['ProcessStep']>, ParentType, ContextType>;
  projectData?: RequiredResolverFn<Maybe<ResolversTypes['ProjectData']>, ParentType, ContextType, RequireFields<QueryprojectDataArgs, 'id'>>;
  projectDatas?: RequiredResolverFn<Array<ResolversTypes['ProjectData']>, ParentType, ContextType>;
  publishedNicolaLegacySlug?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QuerypublishedNicolaLegacySlugArgs, 'legacyId'>>;
  publishedPostSlugById?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QuerypublishedPostSlugByIdArgs, 'id'>>;
  redwood?: RequiredResolverFn<Maybe<ResolversTypes['Redwood']>, ParentType, ContextType>;
  researchArticle?: RequiredResolverFn<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryresearchArticleArgs, 'slug'>>;
  researchArticleDraft?: RequiredResolverFn<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryresearchArticleDraftArgs, 'slug'>>;
  researchArticles?: RequiredResolverFn<Array<ResolversTypes['Post']>, ParentType, ContextType, Partial<QueryresearchArticlesArgs>>;
  service?: RequiredResolverFn<Maybe<ResolversTypes['Service']>, ParentType, ContextType, RequireFields<QueryserviceArgs, 'id'>>;
  serviceBySlug?: RequiredResolverFn<Maybe<ResolversTypes['Service']>, ParentType, ContextType, RequireFields<QueryserviceBySlugArgs, 'slug'>>;
  services?: RequiredResolverFn<Array<ResolversTypes['Service']>, ParentType, ContextType>;
  siteSetting?: RequiredResolverFn<Maybe<ResolversTypes['SiteSetting']>, ParentType, ContextType, RequireFields<QuerysiteSettingArgs, 'id'>>;
  siteSettingByKey?: RequiredResolverFn<Maybe<ResolversTypes['SiteSetting']>, ParentType, ContextType, RequireFields<QuerysiteSettingByKeyArgs, 'key'>>;
  siteSettings?: RequiredResolverFn<Array<ResolversTypes['SiteSetting']>, ParentType, ContextType>;
  teamMember?: RequiredResolverFn<Maybe<ResolversTypes['TeamMember']>, ParentType, ContextType, RequireFields<QueryteamMemberArgs, 'id'>>;
  teamMembers?: RequiredResolverFn<Array<ResolversTypes['TeamMember']>, ParentType, ContextType>;
  technologies?: RequiredResolverFn<Array<ResolversTypes['Technology']>, ParentType, ContextType>;
  technology?: RequiredResolverFn<Maybe<ResolversTypes['Technology']>, ParentType, ContextType, RequireFields<QuerytechnologyArgs, 'id'>>;
  testimonial?: RequiredResolverFn<Maybe<ResolversTypes['Testimonial']>, ParentType, ContextType, RequireFields<QuerytestimonialArgs, 'id'>>;
  testimonials?: RequiredResolverFn<Array<ResolversTypes['Testimonial']>, ParentType, ContextType>;
};

export type RedwoodResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Redwood'] = ResolversParentTypes['Redwood']> = {
  currentUser: OptArgsResolverFn<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  prismaVersion: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RedwoodRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Redwood'] = ResolversParentTypes['Redwood']> = {
  currentUser?: RequiredResolverFn<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  prismaVersion?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ServiceResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Service'] = ResolversParentTypes['Service']> = {
  createdAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  fullDescription: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  icon: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  image: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isActive: OptArgsResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  order: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  shortDescription: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  slug: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  title: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ServiceRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Service'] = ResolversParentTypes['Service']> = {
  createdAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  fullDescription?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  icon?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  image?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isActive?: RequiredResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  order?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  shortDescription?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  slug?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  title?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteSettingResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['SiteSetting'] = ResolversParentTypes['SiteSetting']> = {
  createdAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  fieldType: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  group: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  key: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  label: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  value: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteSettingRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['SiteSetting'] = ResolversParentTypes['SiteSetting']> = {
  createdAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  fieldType?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  group?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  key?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  label?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  value?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeamMemberResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['TeamMember'] = ResolversParentTypes['TeamMember']> = {
  bio: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  createdAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  email: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  github: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  image: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isActive: OptArgsResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  linkedin: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  order: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  role: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeamMemberRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['TeamMember'] = ResolversParentTypes['TeamMember']> = {
  bio?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  github?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  image?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isActive?: RequiredResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  linkedin?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  order?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  role?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TechnologyResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Technology'] = ResolversParentTypes['Technology']> = {
  category: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  createdAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  icon: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  isActive: OptArgsResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  name: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  order: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  proficiency: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TechnologyRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Technology'] = ResolversParentTypes['Technology']> = {
  category?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  icon?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  isActive?: RequiredResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  order?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  proficiency?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TestimonialResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Testimonial'] = ResolversParentTypes['Testimonial']> = {
  clientCompany: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  clientImage: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  clientName: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  clientTitle: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  createdAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  isActive: OptArgsResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  order: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  projectUrl: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quote: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  rating: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TestimonialRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Testimonial'] = ResolversParentTypes['Testimonial']> = {
  clientCompany?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  clientImage?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  clientName?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  clientTitle?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  isActive?: RequiredResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  order?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  projectUrl?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quote?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  rating?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type Resolvers<ContextType = RedwoodGraphQLContext> = {
  BigInt: GraphQLScalarType;
  ClientLogo: ClientLogoResolvers<ContextType>;
  ContactSubmission: ContactSubmissionResolvers<ContextType>;
  Date: GraphQLScalarType;
  DateTime: GraphQLScalarType;
  Faq: FaqResolvers<ContextType>;
  JSON: GraphQLScalarType;
  JSONObject: GraphQLScalarType;
  LegalPage: LegalPageResolvers<ContextType>;
  Mutation: MutationResolvers<ContextType>;
  NewsletterSubscriber: NewsletterSubscriberResolvers<ContextType>;
  NicolaPost: NicolaPostResolvers<ContextType>;
  Post: PostResolvers<ContextType>;
  PricingTier: PricingTierResolvers<ContextType>;
  ProcessStep: ProcessStepResolvers<ContextType>;
  ProjectData: ProjectDataResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
  Redwood: RedwoodResolvers<ContextType>;
  Service: ServiceResolvers<ContextType>;
  SiteSetting: SiteSettingResolvers<ContextType>;
  TeamMember: TeamMemberResolvers<ContextType>;
  Technology: TechnologyResolvers<ContextType>;
  Testimonial: TestimonialResolvers<ContextType>;
  Time: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = RedwoodGraphQLContext> = {
  requireAuth: requireAuthDirectiveResolver<any, any, ContextType>;
  skipAuth: skipAuthDirectiveResolver<any, any, ContextType>;
};
