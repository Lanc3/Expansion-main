const selectOptions = [
  'All Projects',
  'React Native Application',
  'React JS Application',
  'UI/UX Design',
  'Game Development',
  'Larvel PHP',
  'Web Development',
  'Shopify',
  'WordPress',
]

const ProjectsFilter = ({ setSelectProject }) => {
  return (
    <select
      onChange={(e) => {
        setSelectProject(e.target.value)
      }}
      className="font-general-medium
                sm:text-md
                rounded-lg
                border
                bg-secondary-light
                px-4
                py-2
                text-sm
                text-primary-dark

                sm:px-6
            "
    >
      {selectOptions.map((option) => (
        <option className="text-normal sm:text-md" key={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default ProjectsFilter
