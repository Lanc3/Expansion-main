import { motion } from 'framer-motion'
import { FiLayers } from 'react-icons/fi'

import { ProjectGridSkeleton } from 'src/components/SkeletonLoader/SkeletonLoader'
import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'
import ProjectFilter from '../ProjectFilter/ProjectFilter'

export const QUERY = gql`
  query FindProjectDatasForProjects {
    project: projectDatas {
      id
      title
      category
      createdAt
      image
      video
      clientName
      clientWebsite
      objective
      tools
      body
      by
    }
  }
`
export const Loading = () => <ProjectGridSkeleton />

export const Empty = () => (
  <EmptyState
    title="No projects yet"
    description="Projects will appear here once added."
  />
)

export const Failure = ({ error }) => (
  <ErrorState message={error?.message} />
)

export const Success = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      className="mt-24 sm:mt-32"
    >
      <div className="flex items-center gap-4 mb-8 sm:mb-12">
        <FiLayers size={32} className="text-neon-primary shrink-0" />
        <h2 className="text-2xl sm:text-4xl font-bold">
          Completed <span className="text-glow-primary text-neon-primary">Projects</span>
        </h2>
      </div>

      <ProjectFilter projects={project} />
    </motion.div>
  )
}
