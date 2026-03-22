import { Prisma } from "@prisma/client"
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: number;
  Date: string;
  DateTime: string;
  JSON: Prisma.JsonValue;
  JSONObject: Prisma.JsonObject;
  Time: string;
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
  body: Scalars['String'];
  likeAmount: Scalars['Int'];
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
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  likeAmount: Scalars['Int'];
  title: Scalars['String'];
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
  /** Fetches the Redwood root schema. */
  redwood?: Maybe<Redwood>;
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
  body?: InputMaybe<Scalars['String']>;
  likeAmount?: InputMaybe<Scalars['Int']>;
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

export type ActiveServicesQueryVariables = Exact<{ [key: string]: never; }>;


export type ActiveServicesQuery = { __typename?: 'Query', activeServices: Array<{ __typename?: 'Service', id: number, title: string, slug: string, shortDescription: string, icon: string, order: number }> };

export type ClientLogoAdminQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ClientLogoAdminQuery = { __typename?: 'Query', clientLogo?: { __typename?: 'ClientLogo', id: number, name: string, logoUrl: string, websiteUrl?: string | null, order: number, isActive: boolean, createdAt: string } | null };

export type DeleteClientLogoAdminDetailVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteClientLogoAdminDetail = { __typename?: 'Mutation', deleteClientLogo: { __typename?: 'ClientLogo', id: number } };

export type ClientLogosAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type ClientLogosAdminQuery = { __typename?: 'Query', clientLogos: Array<{ __typename?: 'ClientLogo', id: number, name: string, logoUrl: string, websiteUrl?: string | null, order: number, isActive: boolean, createdAt: string }> };

export type DeleteClientLogoAdminVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteClientLogoAdmin = { __typename?: 'Mutation', deleteClientLogo: { __typename?: 'ClientLogo', id: number } };

export type EditClientLogoAdminQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type EditClientLogoAdminQuery = { __typename?: 'Query', clientLogo?: { __typename?: 'ClientLogo', id: number, name: string, logoUrl: string, websiteUrl?: string | null, order: number, isActive: boolean, createdAt: string } | null };

export type UpdateClientLogoAdminVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateClientLogoInput;
}>;


export type UpdateClientLogoAdmin = { __typename?: 'Mutation', updateClientLogo: { __typename?: 'ClientLogo', id: number, name: string, logoUrl: string, websiteUrl?: string | null, order: number, isActive: boolean, createdAt: string } };

export type ContactSubmissionAdminQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ContactSubmissionAdminQuery = { __typename?: 'Query', contactSubmission?: { __typename?: 'ContactSubmission', id: number, name: string, email: string, company?: string | null, phone?: string | null, budget?: string | null, timeline?: string | null, projectDescription: string, serviceInterest?: string | null, howFound?: string | null, status: string, notes?: string | null, createdAt: string, updatedAt: string } | null };

export type UpdateContactSubmissionAdminVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateContactSubmissionInput;
}>;


export type UpdateContactSubmissionAdmin = { __typename?: 'Mutation', updateContactSubmission: { __typename?: 'ContactSubmission', id: number, status: string, notes?: string | null, updatedAt: string } };

export type ContactSubmissionsAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type ContactSubmissionsAdminQuery = { __typename?: 'Query', contactSubmissions: Array<{ __typename?: 'ContactSubmission', id: number, name: string, email: string, company?: string | null, serviceInterest?: string | null, status: string, createdAt: string }> };

export type DeleteContactSubmissionAdminVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteContactSubmissionAdmin = { __typename?: 'Mutation', deleteContactSubmission: { __typename?: 'ContactSubmission', id: number } };

export type AdminEditFaqVariables = Exact<{
  id: Scalars['Int'];
}>;


export type AdminEditFaq = { __typename?: 'Query', faq?: { __typename?: 'Faq', id: number, question: string, answer: string, category: string, order: number, isActive: boolean } | null };

export type AdminUpdateFaqVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateFaqInput;
}>;


export type AdminUpdateFaq = { __typename?: 'Mutation', updateFaq: { __typename?: 'Faq', id: number } };

export type AdminFaqDetailVariables = Exact<{
  id: Scalars['Int'];
}>;


export type AdminFaqDetail = { __typename?: 'Query', faq?: { __typename?: 'Faq', id: number, question: string, answer: string, category: string, order: number, isActive: boolean, createdAt: string } | null };

export type AdminDeleteFaqDetailVariables = Exact<{
  id: Scalars['Int'];
}>;


export type AdminDeleteFaqDetail = { __typename?: 'Mutation', deleteFaq: { __typename?: 'Faq', id: number } };

export type AdminFaqsListVariables = Exact<{ [key: string]: never; }>;


export type AdminFaqsList = { __typename?: 'Query', faqs: Array<{ __typename?: 'Faq', id: number, question: string, category: string, order: number, isActive: boolean }> };

export type AdminDeleteFaqVariables = Exact<{
  id: Scalars['Int'];
}>;


export type AdminDeleteFaq = { __typename?: 'Mutation', deleteFaq: { __typename?: 'Faq', id: number } };

export type EditLegalPageAdminQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type EditLegalPageAdminQuery = { __typename?: 'Query', legalPage?: { __typename?: 'LegalPage', id: number, slug: string, title: string, body: string, isActive: boolean, updatedAt: string } | null };

export type UpdateLegalPageAdminVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateLegalPageInput;
}>;


export type UpdateLegalPageAdmin = { __typename?: 'Mutation', updateLegalPage: { __typename?: 'LegalPage', id: number, slug: string, title: string, body: string, isActive: boolean, updatedAt: string } };

export type LegalPageAdminQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type LegalPageAdminQuery = { __typename?: 'Query', legalPage?: { __typename?: 'LegalPage', id: number, slug: string, title: string, body: string, isActive: boolean, updatedAt: string } | null };

export type DeleteLegalPageAdminDetailVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteLegalPageAdminDetail = { __typename?: 'Mutation', deleteLegalPage: { __typename?: 'LegalPage', id: number } };

export type LegalPagesAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type LegalPagesAdminQuery = { __typename?: 'Query', legalPages: Array<{ __typename?: 'LegalPage', id: number, slug: string, title: string, isActive: boolean, updatedAt: string }> };

export type DeleteLegalPageAdminVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteLegalPageAdmin = { __typename?: 'Mutation', deleteLegalPage: { __typename?: 'LegalPage', id: number } };

export type NewsletterSubscribersAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type NewsletterSubscribersAdminQuery = { __typename?: 'Query', newsletterSubscribers: Array<{ __typename?: 'NewsletterSubscriber', id: number, email: string, isActive: boolean, createdAt: string }> };

export type UpdateNewsletterSubscriberAdminVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateNewsletterSubscriberInput;
}>;


export type UpdateNewsletterSubscriberAdmin = { __typename?: 'Mutation', updateNewsletterSubscriber: { __typename?: 'NewsletterSubscriber', id: number, isActive: boolean } };

export type DeleteNewsletterSubscriberAdminVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteNewsletterSubscriberAdmin = { __typename?: 'Mutation', deleteNewsletterSubscriber: { __typename?: 'NewsletterSubscriber', id: number } };

export type EditPricingTierAdminQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type EditPricingTierAdminQuery = { __typename?: 'Query', pricingTier?: { __typename?: 'PricingTier', id: number, name: string, description: string, features: string, price: string, unit: string, isPopular: boolean, ctaText: string, order: number, isActive: boolean, createdAt: string } | null };

export type UpdatePricingTierAdminVariables = Exact<{
  id: Scalars['Int'];
  input: UpdatePricingTierInput;
}>;


export type UpdatePricingTierAdmin = { __typename?: 'Mutation', updatePricingTier: { __typename?: 'PricingTier', id: number, name: string, description: string, features: string, price: string, unit: string, isPopular: boolean, ctaText: string, order: number, isActive: boolean, createdAt: string } };

export type PricingTierAdminQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type PricingTierAdminQuery = { __typename?: 'Query', pricingTier?: { __typename?: 'PricingTier', id: number, name: string, description: string, features: string, price: string, unit: string, isPopular: boolean, ctaText: string, order: number, isActive: boolean, createdAt: string } | null };

export type DeletePricingTierAdminDetailVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeletePricingTierAdminDetail = { __typename?: 'Mutation', deletePricingTier: { __typename?: 'PricingTier', id: number } };

export type PricingTiersAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type PricingTiersAdminQuery = { __typename?: 'Query', pricingTiers: Array<{ __typename?: 'PricingTier', id: number, name: string, description: string, features: string, price: string, unit: string, isPopular: boolean, ctaText: string, order: number, isActive: boolean, createdAt: string }> };

export type DeletePricingTierAdminVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeletePricingTierAdmin = { __typename?: 'Mutation', deletePricingTier: { __typename?: 'PricingTier', id: number } };

export type EditProcessStepAdminQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type EditProcessStepAdminQuery = { __typename?: 'Query', processStep?: { __typename?: 'ProcessStep', id: number, title: string, description: string, icon: string, order: number, isActive: boolean, createdAt: string } | null };

export type UpdateProcessStepAdminVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateProcessStepInput;
}>;


export type UpdateProcessStepAdmin = { __typename?: 'Mutation', updateProcessStep: { __typename?: 'ProcessStep', id: number, title: string, description: string, icon: string, order: number, isActive: boolean, createdAt: string } };

export type ProcessStepAdminQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ProcessStepAdminQuery = { __typename?: 'Query', processStep?: { __typename?: 'ProcessStep', id: number, title: string, description: string, icon: string, order: number, isActive: boolean, createdAt: string } | null };

export type DeleteProcessStepAdminDetailVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteProcessStepAdminDetail = { __typename?: 'Mutation', deleteProcessStep: { __typename?: 'ProcessStep', id: number } };

export type ProcessStepsAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type ProcessStepsAdminQuery = { __typename?: 'Query', processSteps: Array<{ __typename?: 'ProcessStep', id: number, title: string, description: string, icon: string, order: number, isActive: boolean, createdAt: string }> };

export type DeleteProcessStepAdminVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteProcessStepAdmin = { __typename?: 'Mutation', deleteProcessStep: { __typename?: 'ProcessStep', id: number } };

export type AdminEditServiceByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type AdminEditServiceById = { __typename?: 'Query', service?: { __typename?: 'Service', id: number, title: string, slug: string, shortDescription: string, fullDescription: string, icon: string, image?: string | null, order: number, isActive: boolean, createdAt: string, updatedAt: string } | null };

export type UpdateServiceMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateServiceInput;
}>;


export type UpdateServiceMutation = { __typename?: 'Mutation', updateService: { __typename?: 'Service', id: number, title: string, slug: string, shortDescription: string, fullDescription: string, icon: string, image?: string | null, order: number, isActive: boolean, createdAt: string, updatedAt: string } };

export type CreateServiceMutationVariables = Exact<{
  input: CreateServiceInput;
}>;


export type CreateServiceMutation = { __typename?: 'Mutation', createService: { __typename?: 'Service', id: number } };

export type AdminServiceByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type AdminServiceById = { __typename?: 'Query', service?: { __typename?: 'Service', id: number, title: string, slug: string, shortDescription: string, fullDescription: string, icon: string, image?: string | null, order: number, isActive: boolean, createdAt: string, updatedAt: string } | null };

export type AdminDeleteServiceFromDetailVariables = Exact<{
  id: Scalars['Int'];
}>;


export type AdminDeleteServiceFromDetail = { __typename?: 'Mutation', deleteService: { __typename?: 'Service', id: number } };

export type AdminServicesListVariables = Exact<{ [key: string]: never; }>;


export type AdminServicesList = { __typename?: 'Query', services: Array<{ __typename?: 'Service', id: number, title: string, slug: string, shortDescription: string, icon: string, order: number, isActive: boolean, createdAt: string }> };

export type DeleteServiceMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteServiceMutation = { __typename?: 'Mutation', deleteService: { __typename?: 'Service', id: number } };

export type SiteSettingsAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type SiteSettingsAdminQuery = { __typename?: 'Query', siteSettings: Array<{ __typename?: 'SiteSetting', id: number, key: string, value: string, group: string, label: string, fieldType: string }> };

export type BulkUpdateSiteSettingsAdminVariables = Exact<{
  input: Array<UpdateSiteSettingInput> | UpdateSiteSettingInput;
}>;


export type BulkUpdateSiteSettingsAdmin = { __typename?: 'Mutation', bulkUpdateSiteSettings: Array<{ __typename?: 'SiteSetting', id: number, value: string }> };

export type AdminEditTeamMemberVariables = Exact<{
  id: Scalars['Int'];
}>;


export type AdminEditTeamMember = { __typename?: 'Query', teamMember?: { __typename?: 'TeamMember', id: number, name: string, role: string, bio: string, image?: string | null, linkedin?: string | null, github?: string | null, email?: string | null, order: number, isActive: boolean } | null };

export type AdminUpdateTeamMemberVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateTeamMemberInput;
}>;


export type AdminUpdateTeamMember = { __typename?: 'Mutation', updateTeamMember: { __typename?: 'TeamMember', id: number } };

export type AdminTeamMemberDetailVariables = Exact<{
  id: Scalars['Int'];
}>;


export type AdminTeamMemberDetail = { __typename?: 'Query', teamMember?: { __typename?: 'TeamMember', id: number, name: string, role: string, bio: string, image?: string | null, linkedin?: string | null, github?: string | null, email?: string | null, order: number, isActive: boolean, createdAt: string } | null };

export type AdminDeleteTeamMemberDetailVariables = Exact<{
  id: Scalars['Int'];
}>;


export type AdminDeleteTeamMemberDetail = { __typename?: 'Mutation', deleteTeamMember: { __typename?: 'TeamMember', id: number } };

export type AdminTeamMembersListVariables = Exact<{ [key: string]: never; }>;


export type AdminTeamMembersList = { __typename?: 'Query', teamMembers: Array<{ __typename?: 'TeamMember', id: number, name: string, role: string, isActive: boolean }> };

export type AdminDeleteTeamMemberVariables = Exact<{
  id: Scalars['Int'];
}>;


export type AdminDeleteTeamMember = { __typename?: 'Mutation', deleteTeamMember: { __typename?: 'TeamMember', id: number } };

export type AdminEditTechnologyByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type AdminEditTechnologyById = { __typename?: 'Query', technology?: { __typename?: 'Technology', id: number, name: string, icon: string, category: string, proficiency: string, order: number, isActive: boolean, createdAt: string } | null };

export type UpdateTechnologyMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateTechnologyInput;
}>;


export type UpdateTechnologyMutation = { __typename?: 'Mutation', updateTechnology: { __typename?: 'Technology', id: number, name: string, icon: string, category: string, proficiency: string, order: number, isActive: boolean, createdAt: string } };

export type CreateTechnologyMutationVariables = Exact<{
  input: CreateTechnologyInput;
}>;


export type CreateTechnologyMutation = { __typename?: 'Mutation', createTechnology: { __typename?: 'Technology', id: number } };

export type AdminTechnologiesListVariables = Exact<{ [key: string]: never; }>;


export type AdminTechnologiesList = { __typename?: 'Query', technologies: Array<{ __typename?: 'Technology', id: number, name: string, icon: string, category: string, proficiency: string, order: number, isActive: boolean, createdAt: string }> };

export type DeleteTechnologyMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteTechnologyMutation = { __typename?: 'Mutation', deleteTechnology: { __typename?: 'Technology', id: number } };

export type AdminTechnologyByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type AdminTechnologyById = { __typename?: 'Query', technology?: { __typename?: 'Technology', id: number, name: string, icon: string, category: string, proficiency: string, order: number, isActive: boolean, createdAt: string } | null };

export type AdminDeleteTechnologyFromDetailVariables = Exact<{
  id: Scalars['Int'];
}>;


export type AdminDeleteTechnologyFromDetail = { __typename?: 'Mutation', deleteTechnology: { __typename?: 'Technology', id: number } };

export type AdminEditTestimonialVariables = Exact<{
  id: Scalars['Int'];
}>;


export type AdminEditTestimonial = { __typename?: 'Query', testimonial?: { __typename?: 'Testimonial', id: number, clientName: string, clientTitle: string, clientCompany: string, clientImage?: string | null, quote: string, rating: number, projectUrl?: string | null, order: number, isActive: boolean } | null };

export type AdminUpdateTestimonialVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateTestimonialInput;
}>;


export type AdminUpdateTestimonial = { __typename?: 'Mutation', updateTestimonial: { __typename?: 'Testimonial', id: number } };

export type AdminTestimonialDetailVariables = Exact<{
  id: Scalars['Int'];
}>;


export type AdminTestimonialDetail = { __typename?: 'Query', testimonial?: { __typename?: 'Testimonial', id: number, clientName: string, clientTitle: string, clientCompany: string, clientImage?: string | null, quote: string, rating: number, projectUrl?: string | null, order: number, isActive: boolean, createdAt: string } | null };

export type AdminDeleteTestimonialDetailVariables = Exact<{
  id: Scalars['Int'];
}>;


export type AdminDeleteTestimonialDetail = { __typename?: 'Mutation', deleteTestimonial: { __typename?: 'Testimonial', id: number } };

export type AdminTestimonialsListVariables = Exact<{ [key: string]: never; }>;


export type AdminTestimonialsList = { __typename?: 'Query', testimonials: Array<{ __typename?: 'Testimonial', id: number, clientName: string, clientCompany: string, rating: number, isActive: boolean }> };

export type AdminDeleteTestimonialVariables = Exact<{
  id: Scalars['Int'];
}>;


export type AdminDeleteTestimonial = { __typename?: 'Mutation', deleteTestimonial: { __typename?: 'Testimonial', id: number } };

export type ArticleQueryAaronVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ArticleQueryAaron = { __typename?: 'Query', article?: { __typename?: 'Post', id: number, title: string, body: string, createdAt: string, likeAmount: number } | null };

export type ArticleQueryNicolaVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ArticleQueryNicola = { __typename?: 'Query', article?: { __typename?: 'NicolaPost', id: number, title: string, body: string, createdAt: string, likeAmount: number } | null };

export type ArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type ArticlesQuery = { __typename?: 'Query', articles: Array<{ __typename?: 'Post', id: number, title: string, body: string, createdAt: string, likeAmount: number }> };

export type FaqsPublicQueryVariables = Exact<{ [key: string]: never; }>;


export type FaqsPublicQuery = { __typename?: 'Query', faqs: Array<{ __typename?: 'Faq', id: number, question: string, answer: string, category: string, order: number, isActive: boolean }> };

export type LegalPageBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type LegalPageBySlugQuery = { __typename?: 'Query', legalPageBySlug?: { __typename?: 'LegalPage', id: number, slug: string, title: string, body: string, isActive: boolean, updatedAt: string } | null };

export type LikePostMutationButtonVariables = Exact<{
  id: Scalars['Int'];
  likeAmount: Scalars['Int'];
}>;


export type LikePostMutationButton = { __typename?: 'Mutation', updatePost: { __typename?: 'Post', id: number, likeAmount: number } };

export type EditPostByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type EditPostById = { __typename?: 'Query', post?: { __typename?: 'Post', id: number, title: string, body: string, createdAt: string, likeAmount: number, Image?: string | null } | null };

export type LikePostMutationCellVariables = Exact<{
  id: Scalars['Int'];
  likeAmount: Scalars['Int'];
}>;


export type LikePostMutationCell = { __typename?: 'Mutation', updatePost: { __typename?: 'Post', id: number, likeAmount: number } };

export type CreateNewsletterSubscriberVariables = Exact<{
  input: CreateNewsletterSubscriberInput;
}>;


export type CreateNewsletterSubscriber = { __typename?: 'Mutation', createNewsletterSubscriber: { __typename?: 'NewsletterSubscriber', id: number, email: string } };

export type EditNicolaPostByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type EditNicolaPostById = { __typename?: 'Query', nicolaPost?: { __typename?: 'NicolaPost', id: number, title: string, body: string, createdAt: string, likeAmount: number, Image?: string | null } | null };

export type UpdateNicolaPostMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateNicolaPostInput;
}>;


export type UpdateNicolaPostMutation = { __typename?: 'Mutation', updateNicolaPost: { __typename?: 'NicolaPost', id: number, title: string, body: string, createdAt: string, likeAmount: number, Image?: string | null } };

export type CreateNicolaPostMutationVariables = Exact<{
  input: CreateNicolaPostInput;
}>;


export type CreateNicolaPostMutation = { __typename?: 'Mutation', createNicolaPost: { __typename?: 'NicolaPost', id: number } };

export type DeleteNicolaPostMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteNicolaPostMutation = { __typename?: 'Mutation', deleteNicolaPost: { __typename?: 'NicolaPost', id: number } };

export type FindNicolaPostByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FindNicolaPostById = { __typename?: 'Query', nicolaPost?: { __typename?: 'NicolaPost', id: number, title: string, body: string, createdAt: string, likeAmount: number, Image?: string | null } | null };

export type FindNicolaPostsVariables = Exact<{ [key: string]: never; }>;


export type FindNicolaPosts = { __typename?: 'Query', nicolaPosts: Array<{ __typename?: 'NicolaPost', id: number, title: string, body: string, createdAt: string, likeAmount: number, Image?: string | null }> };

export type NicolasArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type NicolasArticlesQuery = { __typename?: 'Query', articles: Array<{ __typename?: 'NicolaPost', id: number, title: string, body: string, createdAt: string }> };

export type UpdatePostMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdatePostInput;
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost: { __typename?: 'Post', id: number, title: string, body: string, createdAt: string, likeAmount: number, Image?: string | null } };

export type CreatePostMutationVariables = Exact<{
  input: CreatePostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', id: number } };

export type DeletePostMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost: { __typename?: 'Post', id: number } };

export type FindPostByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FindPostById = { __typename?: 'Query', post?: { __typename?: 'Post', id: number, title: string, body: string, createdAt: string, likeAmount: number, Image?: string | null } | null };

export type FindPostsVariables = Exact<{ [key: string]: never; }>;


export type FindPosts = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: number, title: string, body: string, createdAt: string, likeAmount: number, Image?: string | null }> };

export type PricingTiersPublicQueryVariables = Exact<{ [key: string]: never; }>;


export type PricingTiersPublicQuery = { __typename?: 'Query', pricingTiers: Array<{ __typename?: 'PricingTier', id: number, name: string, description: string, features: string, price: string, unit: string, isPopular: boolean, ctaText: string, order: number, isActive: boolean }> };

export type ProcessStepsPublicQueryVariables = Exact<{ [key: string]: never; }>;


export type ProcessStepsPublicQuery = { __typename?: 'Query', processSteps: Array<{ __typename?: 'ProcessStep', id: number, title: string, description: string, icon: string, order: number, isActive: boolean }> };

export type FindProjectDatasForProjectsVariables = Exact<{ [key: string]: never; }>;


export type FindProjectDatasForProjects = { __typename?: 'Query', project: Array<{ __typename?: 'ProjectData', id: number, title: string, category: string, createdAt: string, image: string, video: string, clientName: string, clientWebsite: string, objective: string, tools: string, body: string, by: string }> };

export type EditProjectDataByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type EditProjectDataById = { __typename?: 'Query', projectData?: { __typename?: 'ProjectData', id: number, title: string, category: string, createdAt: string, image: string, video: string, clientName: string, clientWebsite: string, objective: string, tools: string, body: string, by: string } | null };

export type UpdateProjectDataMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateProjectDataInput;
}>;


export type UpdateProjectDataMutation = { __typename?: 'Mutation', updateProjectData: { __typename?: 'ProjectData', id: number, title: string, category: string, createdAt: string, image: string, video: string, clientName: string, clientWebsite: string, objective: string, tools: string, body: string, by: string } };

export type CreateProjectDataMutationVariables = Exact<{
  input: CreateProjectDataInput;
}>;


export type CreateProjectDataMutation = { __typename?: 'Mutation', createProjectData: { __typename?: 'ProjectData', id: number } };

export type DeleteProjectDataMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteProjectDataMutation = { __typename?: 'Mutation', deleteProjectData: { __typename?: 'ProjectData', id: number } };

export type FindProjectDataByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FindProjectDataById = { __typename?: 'Query', projectData?: { __typename?: 'ProjectData', id: number, title: string, category: string, createdAt: string, image: string, video: string, clientName: string, clientWebsite: string, objective: string, tools: string, body: string, by: string } | null };

export type FindProjectDatasListVariables = Exact<{ [key: string]: never; }>;


export type FindProjectDatasList = { __typename?: 'Query', projectDatas: Array<{ __typename?: 'ProjectData', id: number, title: string, category: string, createdAt: string, image: string, video: string, clientName: string, clientWebsite: string, objective: string, tools: string, body: string, by: string }> };

export type RecentPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type RecentPostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: number, title: string, createdAt: string, body: string }> };

export type ServiceBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type ServiceBySlugQuery = { __typename?: 'Query', serviceBySlug?: { __typename?: 'Service', id: number, title: string, slug: string, shortDescription: string, fullDescription: string, icon: string, image?: string | null, order: number, isActive: boolean, createdAt: string, updatedAt: string } | null };

export type TeamMembersPublicQueryVariables = Exact<{ [key: string]: never; }>;


export type TeamMembersPublicQuery = { __typename?: 'Query', teamMembers: Array<{ __typename?: 'TeamMember', id: number, name: string, role: string, bio: string, image?: string | null, linkedin?: string | null, github?: string | null, email?: string | null, order: number, isActive: boolean }> };

export type CreateClientLogoAdminVariables = Exact<{
  input: CreateClientLogoInput;
}>;


export type CreateClientLogoAdmin = { __typename?: 'Mutation', createClientLogo: { __typename?: 'ClientLogo', id: number } };

export type AdminCreateFaqVariables = Exact<{
  input: CreateFaqInput;
}>;


export type AdminCreateFaq = { __typename?: 'Mutation', createFaq: { __typename?: 'Faq', id: number } };

export type CreateLegalPageAdminVariables = Exact<{
  input: CreateLegalPageInput;
}>;


export type CreateLegalPageAdmin = { __typename?: 'Mutation', createLegalPage: { __typename?: 'LegalPage', id: number } };

export type CreatePricingTierAdminVariables = Exact<{
  input: CreatePricingTierInput;
}>;


export type CreatePricingTierAdmin = { __typename?: 'Mutation', createPricingTier: { __typename?: 'PricingTier', id: number } };

export type CreateProcessStepAdminVariables = Exact<{
  input: CreateProcessStepInput;
}>;


export type CreateProcessStepAdmin = { __typename?: 'Mutation', createProcessStep: { __typename?: 'ProcessStep', id: number } };

export type AdminCreateTeamMemberVariables = Exact<{
  input: CreateTeamMemberInput;
}>;


export type AdminCreateTeamMember = { __typename?: 'Mutation', createTeamMember: { __typename?: 'TeamMember', id: number } };

export type AdminCreateTestimonialVariables = Exact<{
  input: CreateTestimonialInput;
}>;


export type AdminCreateTestimonial = { __typename?: 'Mutation', createTestimonial: { __typename?: 'Testimonial', id: number } };

export type DashboardStatsVariables = Exact<{ [key: string]: never; }>;


export type DashboardStats = { __typename?: 'Query', projectDatas: Array<{ __typename?: 'ProjectData', id: number }>, posts: Array<{ __typename?: 'Post', id: number }>, contactSubmissions: Array<{ __typename?: 'ContactSubmission', id: number }>, newsletterSubscribers: Array<{ __typename?: 'NewsletterSubscriber', id: number }> };

export type CreateContactSubmissionVariables = Exact<{
  input: CreateContactSubmissionInput;
}>;


export type CreateContactSubmission = { __typename?: 'Mutation', createContactSubmission: { __typename?: 'ContactSubmission', id: number } };

export type HomePageTestimonialsVariables = Exact<{ [key: string]: never; }>;


export type HomePageTestimonials = { __typename?: 'Query', testimonials: Array<{ __typename?: 'Testimonial', id: number, clientName: string, clientTitle: string, clientCompany: string, quote: string, rating: number }> };

export type HomePageTechnologiesVariables = Exact<{ [key: string]: never; }>;


export type HomePageTechnologies = { __typename?: 'Query', technologies: Array<{ __typename?: 'Technology', id: number, name: string, icon: string, category: string, proficiency: string, order: number, isActive: boolean }> };
