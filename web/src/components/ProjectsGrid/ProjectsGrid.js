import { useContext } from 'react'

import { FiSearch } from 'react-icons/fi'

import { ProjectsContext } from 'src/context/ProjectsContext'

import ProjectSingle from '../ProjectSingle/ProjectSingle'

import ProjectsFilter from './ProjectsFilter'
const ProjectsGrid = () => {
  const {
    projects,
    searchProject,
    setSearchProject,
    searchProjectsByTitle,
    selectProject,
    setSelectProject,
    selectProjectsByCategory,
  } = useContext(ProjectsContext)

  return (
    <section className="mt-5 py-5 sm:mt-10 sm:py-10">
      <div className="text-center">
        <p className="font-general-medium text-quad-dark  mb-1 text-2xl sm:text-4xl">
          Our Projects
        </p>
      </div>

      <div className="mt-10 sm:mt-16">
        <h3
          className="font-general-regular
                        text-md mb-3
                        text-center
                        text-secondary-dark

                        sm:text-xl
                        "
        >
          Search projects by title or filter by category
        </h3>
        <div
          className="
                        flex
                        justify-between
                        gap-3 border-b
                        border-primary-light
                        pb-3

                        "
        >
          <div className="flex justify-between gap-2">
            <span
              className="
                                hidden
                                cursor-pointer
                                rounded-xl
                                bg-primary-light
                                p-2.5
                                shadow-sm

                                sm:block
                                "
            >
              <FiSearch className="h-5 w-5 text-ternary-dark "></FiSearch>
            </span>
            <input
              onChange={(e) => {
                setSearchProject(e.target.value)
              }}
              className="font-general-medium
                                sm:text-md
                                rounded-lg
                                border
                                border-gray-200
                                bg-secondary-light
                            py-2
                                pl-3
                                pr-1
                                text-sm
                                text-primary-dark

                                sm:px-4
                                "
              id="name"
              name="name"
              type="search"
              required=""
              placeholder="Search Projects"
              aria-label="Name"
            />
          </div>

          <ProjectsFilter setSelectProject={setSelectProject} />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
        {selectProject
          ? selectProjectsByCategory.map((project) => (
              <ProjectSingle
                title={project.title}
                category={project.category}
                image={project.img}
                key={project.id}
                video={project.video}
                path={project.path}
              />
            ))
          : searchProject
          ? searchProjectsByTitle.map((project) => (
              <ProjectSingle
                title={project.title}
                category={project.category}
                image={project.img}
                key={project.id}
                video={project.video}
                path={project.path}
              />
            ))
          : projects.map((project) => (
              <ProjectSingle
                title={project.title}
                category={project.category}
                image={project.img}
                key={project.id}
                video={project.video}
              />
            ))}
      </div>
    </section>
  )
}

export default ProjectsGrid
