import { useState } from 'react'

import { motion } from 'framer-motion'
import { FiSearch } from 'react-icons/fi'

import ProjectSingle from '../ProjectSingle/ProjectSingle'

const selectOptions = [
  'All Projects',
  'React Native',
  'React',
  'Design',
  'Game Development',
  'Larvel',
  'Shopify',
  'WordPress',
  'RedwoodJS',
]

const ProjectFilter = ({ projects }) => {
  const [searchProject, setSearchProject] = useState('')
  const [selectProject, setSelectProject] = useState('')
  const [searchProjectsByTitle, setSearchProjectsByTitle] = useState([])
  const [selectProjectsByCategory, setSelectProjectsByCategory] = useState([])

  const handleSearch = (value) => {
    setSearchProject(value)
    setSelectProject('')
    if (value === '') {
      setSearchProjectsByTitle([])
    } else {
      const filtered = projects.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      )
      setSearchProjectsByTitle(filtered)
    }
  }

  const handleSelect = (option) => {
    setSelectProject(option)
    setSearchProject('')
    if (option === 'All Projects') {
      setSelectProjectsByCategory(projects)
    } else {
      const filtered = projects.filter((item) => {
        const category =
          item.category?.charAt(0).toUpperCase() + item.category?.slice(1)
        return category?.includes(option)
      })
      setSelectProjectsByCategory(filtered)
    }
  }

  const displayProjects = selectProject
    ? selectProjectsByCategory
    : searchProject
    ? searchProjectsByTitle
    : projects

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.7, delay: 0.15 }}
    >
      <div className="mt-10 sm:mt-16">
        <h3 className="font-mono text-sm sm:text-base md:text-xl mb-3 text-center text-gray-400">
          Search projects by title or filter by category
        </h3>
        <div className="flex flex-col sm:flex-row justify-between gap-3 border-b border-white/10 pb-3">
          <div className="flex gap-2 flex-1">
            <span className="hidden sm:flex cursor-pointer rounded-lg bg-white/5 p-2.5 items-center">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </span>
            <input
              onChange={(e) => handleSearch(e.target.value)}
              className="font-mono flex-1 min-h-[44px] rounded-lg border border-glass-border bg-glass-bg px-3 sm:px-4 py-2 text-sm text-gray-200 placeholder-gray-500 focus:border-neon-primary focus:outline-none focus:ring-1 focus:ring-neon-primary"
              name="name"
              type="search"
              placeholder="Search Projects"
              aria-label="Search projects"
            />
          </div>
          <select
            onChange={(e) => handleSelect(e.target.value)}
            className="font-mono min-h-[44px] rounded-lg border border-glass-border bg-glass-bg px-4 sm:px-6 py-2 text-sm text-gray-200 focus:border-neon-primary focus:outline-none"
          >
            {selectOptions.map((option) => (
              <option key={option} value={option} className="bg-gray-900">
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {displayProjects.map((project) => (
          <ProjectSingle key={project.id} data={project} />
        ))}
      </div>
    </motion.div>
  )
}

export default ProjectFilter
