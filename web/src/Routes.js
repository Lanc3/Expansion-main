// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Route, Router, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'
import AdminLayout from './layouts/AdminLayout/AdminLayout'
import HeaderFooterLayout from './layouts/HeaderFooterLayout/HeaderFooterLayout'
const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      {/* Old scaffold routes need ScaffoldLayout for rw-table styling */}
      <Set wrap={ScaffoldLayout} title="Posts" titleTo="posts" buttonLabel="New Post" buttonTo="newPost">
        <Private unauthenticated="home" roles="admin">
          <Set wrap={AdminLayout}>
            <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
            <Route path="/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
            <Route path="/posts/{id:Int}" page={PostPostPage} name="post" />
            <Route path="/posts" page={PostPostsPage} name="posts" />
            <Route path="/nicola-posts/new" page={NicolaPostNewNicolaPostPage} name="newNicolaPost" />
            <Route path="/nicola-posts/{id:Int}/edit" page={NicolaPostEditNicolaPostPage} name="editNicolaPost" />
            <Route path="/nicola-posts/{id:Int}" page={NicolaPostNicolaPostPage} name="nicolaPost" />
            <Route path="/nicola-posts" page={NicolaPostNicolaPostsPage} name="nicolaPosts" />
            <Route path="/project-datas/new" page={ProjectDataNewProjectDataPage} name="newProjectData" />
            <Route path="/project-datas/{id:Int}/edit" page={ProjectDataEditProjectDataPage} name="editProjectData" />
            <Route path="/project-datas/{id:Int}" page={ProjectDataProjectDataPage} name="projectData" />
            <Route path="/project-datas" page={ProjectDataProjectDatasPage} name="projectDatas" />
          </Set>
        </Private>
      </Set>

      {/* New admin routes - AdminLayout only, no ScaffoldLayout wrapper */}
      <Private unauthenticated="home" roles="admin">
        <Set wrap={AdminLayout}>
          <Route path="/blog-admin" page={BlogAdminPage} name="blogAdmin" />
          <Route path="/admin/contact-submissions" page={AdminContactSubmissionsPage} name="adminContactSubmissions" />
          <Route path="/admin/contact-submissions/{id:Int}" page={AdminContactSubmissionPage} name="adminContactSubmission" />
          <Route path="/admin/newsletter-subscribers" page={AdminNewsletterSubscribersPage} name="adminNewsletterSubscribers" />
          <Route path="/admin/site-settings" page={AdminSiteSettingsPage} name="adminSiteSettings" />
          <Route path="/admin/services" page={AdminServicesPage} name="adminServices" />
          <Route path="/admin/services/new" page={AdminNewServicePage} name="adminNewService" />
          <Route path="/admin/services/{id:Int}" page={AdminServicePage} name="adminService" />
          <Route path="/admin/services/{id:Int}/edit" page={AdminEditServicePage} name="adminEditService" />
          <Route path="/admin/technologies" page={AdminTechnologiesPage} name="adminTechnologies" />
          <Route path="/admin/technologies/new" page={AdminNewTechnologyPage} name="adminNewTechnology" />
          <Route path="/admin/technologies/{id:Int}" page={AdminTechnologyPage} name="adminTechnology" />
          <Route path="/admin/technologies/{id:Int}/edit" page={AdminEditTechnologyPage} name="adminEditTechnology" />
          <Route path="/admin/testimonials" page={AdminTestimonialsPage} name="adminTestimonials" />
          <Route path="/admin/testimonials/new" page={AdminNewTestimonialPage} name="adminNewTestimonial" />
          <Route path="/admin/testimonials/{id:Int}" page={AdminTestimonialPage} name="adminTestimonial" />
          <Route path="/admin/testimonials/{id:Int}/edit" page={AdminEditTestimonialPage} name="adminEditTestimonial" />
          <Route path="/admin/team-members" page={AdminTeamMembersPage} name="adminTeamMembers" />
          <Route path="/admin/team-members/new" page={AdminNewTeamMemberPage} name="adminNewTeamMember" />
          <Route path="/admin/team-members/{id:Int}" page={AdminTeamMemberPage} name="adminTeamMember" />
          <Route path="/admin/team-members/{id:Int}/edit" page={AdminEditTeamMemberPage} name="adminEditTeamMember" />
          <Route path="/admin/faqs" page={AdminFaqsPage} name="adminFaqs" />
          <Route path="/admin/faqs/new" page={AdminNewFaqPage} name="adminNewFaq" />
          <Route path="/admin/faqs/{id:Int}" page={AdminFaqPage} name="adminFaq" />
          <Route path="/admin/faqs/{id:Int}/edit" page={AdminEditFaqPage} name="adminEditFaq" />
          <Route path="/admin/process-steps" page={AdminProcessStepsPage} name="adminProcessSteps" />
          <Route path="/admin/process-steps/new" page={AdminNewProcessStepPage} name="adminNewProcessStep" />
          <Route path="/admin/process-steps/{id:Int}" page={AdminProcessStepPage} name="adminProcessStep" />
          <Route path="/admin/process-steps/{id:Int}/edit" page={AdminEditProcessStepPage} name="adminEditProcessStep" />
          <Route path="/admin/pricing-tiers" page={AdminPricingTiersPage} name="adminPricingTiers" />
          <Route path="/admin/pricing-tiers/new" page={AdminNewPricingTierPage} name="adminNewPricingTier" />
          <Route path="/admin/pricing-tiers/{id:Int}" page={AdminPricingTierPage} name="adminPricingTier" />
          <Route path="/admin/pricing-tiers/{id:Int}/edit" page={AdminEditPricingTierPage} name="adminEditPricingTier" />
          <Route path="/admin/client-logos" page={AdminClientLogosPage} name="adminClientLogos" />
          <Route path="/admin/client-logos/new" page={AdminNewClientLogoPage} name="adminNewClientLogo" />
          <Route path="/admin/client-logos/{id:Int}" page={AdminClientLogoPage} name="adminClientLogo" />
          <Route path="/admin/client-logos/{id:Int}/edit" page={AdminEditClientLogoPage} name="adminEditClientLogo" />
          <Route path="/admin/legal-pages" page={AdminLegalPagesPage} name="adminLegalPages" />
          <Route path="/admin/legal-pages/new" page={AdminNewLegalPagePage} name="adminNewLegalPage" />
          <Route path="/admin/legal-pages/{id:Int}" page={AdminLegalPagePage} name="adminLegalPage" />
          <Route path="/admin/legal-pages/{id:Int}/edit" page={AdminEditLegalPagePage} name="adminEditLegalPage" />
          <Route path="/admin/research-articles" page={AdminResearchArticlesPage} name="adminResearchArticles" />
          <Route path="/admin/research-articles/new" page={AdminNewResearchArticlePage} name="adminNewResearchArticle" />
          <Route path="/admin/research-articles/{id:Int}/edit" page={AdminEditResearchArticlePage} name="adminEditResearchArticle" />
        </Set>
      </Private>
      <Set wrap={HeaderFooterLayout}>
        <Private unauthenticated="home"></Private>
        <Route path="/research/{slug}" page={ResearchArticlePage} name="researchArticle" />
        <Route path="/research" page={ResearchLabsPage} name="researchLabs" />
        <Route path="/nicolas-article/{id:Int}" page={NicolasArticleRedirectPage} name="nicolasArticle" />
        <Route path="/aarons-article/{id:Int}" page={AaronsArticleRedirectPage} name="aaronsArticle" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/contactus" page={ContactusPage} name="contactus" />
        <Route path="/" page={HomePage} name="home" />
        <Route path="/services/{slug}" page={ServiceDetailPage} name="serviceDetail" />
        <Route path="/services" page={ServicesPage} name="services" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/faq" page={FaqPage} name="faq" />
        <Route path="/pricing" page={PricingPage} name="pricing" />
        <Route path="/process" page={ProcessPage} name="process" />
        <Route path="/team" page={TeamPage} name="team" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/nicolas-blog" page={RedirectToResearchLabsPage} name="nicolasBlog" />
        <Route path="/aarons-blog" page={RedirectToResearchLabsPage} name="aaronsBlog" />
        <Route path="/legal/{slug}" page={LegalPage} name="legal" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
