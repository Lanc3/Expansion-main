import {
  nicolaPosts,
  nicolaPost,
  createNicolaPost,
  updateNicolaPost,
  deleteNicolaPost,
} from './nicolaPosts'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('nicolaPosts', () => {
  scenario('returns all nicolaPosts', async (scenario) => {
    const result = await nicolaPosts()

    expect(result.length).toEqual(Object.keys(scenario.nicolaPost).length)
  })

  scenario('returns a single nicolaPost', async (scenario) => {
    const result = await nicolaPost({ id: scenario.nicolaPost.one.id })

    expect(result).toEqual(scenario.nicolaPost.one)
  })

  scenario('creates a nicolaPost', async () => {
    const result = await createNicolaPost({
      input: { title: 'String', body: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.body).toEqual('String')
  })

  scenario('updates a nicolaPost', async (scenario) => {
    const original = await nicolaPost({
      id: scenario.nicolaPost.one.id,
    })
    const result = await updateNicolaPost({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a nicolaPost', async (scenario) => {
    const original = await deleteNicolaPost({
      id: scenario.nicolaPost.one.id,
    })
    const result = await nicolaPost({ id: original.id })

    expect(result).toEqual(null)
  })
})
