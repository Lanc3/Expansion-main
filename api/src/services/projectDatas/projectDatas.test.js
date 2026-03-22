import {
  projectDatas,
  projectData,
  createProjectData,
  updateProjectData,
  deleteProjectData,
} from './projectDatas'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('projectDatas', () => {
  scenario('returns all projectDatas', async (scenario) => {
    const result = await projectDatas()

    expect(result.length).toEqual(Object.keys(scenario.projectData).length)
  })

  scenario('returns a single projectData', async (scenario) => {
    const result = await projectData({ id: scenario.projectData.one.id })

    expect(result).toEqual(scenario.projectData.one)
  })

  scenario('creates a projectData', async () => {
    const result = await createProjectData({
      input: {
        title: 'String',
        category: 'String',
        image: 'String',
        video: 'String',
        clientName: 'String',
        clientWebsite: 'String',
        objective: 'String',
        tools: 'String',
        body: 'String',
        by: 'String',
      },
    })

    expect(result.title).toEqual('String')
    expect(result.category).toEqual('String')
    expect(result.image).toEqual('String')
    expect(result.video).toEqual('String')
    expect(result.clientName).toEqual('String')
    expect(result.clientWebsite).toEqual('String')
    expect(result.objective).toEqual('String')
    expect(result.tools).toEqual('String')
    expect(result.body).toEqual('String')
    expect(result.by).toEqual('String')
  })

  scenario('updates a projectData', async (scenario) => {
    const original = await projectData({
      id: scenario.projectData.one.id,
    })
    const result = await updateProjectData({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a projectData', async (scenario) => {
    const original = await deleteProjectData({
      id: scenario.projectData.one.id,
    })
    const result = await projectData({ id: original.id })

    expect(result).toEqual(null)
  })
})
