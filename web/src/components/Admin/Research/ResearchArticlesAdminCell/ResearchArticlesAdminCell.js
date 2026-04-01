import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'
import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'
import { truncate } from 'src/lib/formatters'

export const QUERY = gql`
  query AdminResearchPostsList {
    posts {
      id
      title
      slug
      published
      publishedAt
      updatedAt
      featured
    }
  }
`

const DELETE_POST = gql`
  mutation DeleteResearchPost($id: Int!) {
    deletePost(id: $id) {
      id
    }
  }
`

export const Loading = () => <SkeletonText lines={6} />

export const Empty = () => (
  <EmptyState
    title="No research articles"
    actionLabel="Create article"
    actionTo={routes.adminNewResearchArticle()}
  />
)

export const Failure = ({ error }) => <ErrorState message={error?.message} />

export const Success = ({ posts }) => {
  const [deletePost] = useMutation(DELETE_POST, {
    onCompleted: () => toast.success('Article deleted'),
    onError: (e) => toast.error(e.message),
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDelete = (id) => {
    if (confirm('Delete this article? Comments will be removed if cascaded.')) {
      deletePost({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Expansion AI Research Labs
        </h2>
      </div>
      <div className="rw-segment rw-table-wrapper-responsive">
        <table className="rw-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Slug</th>
              <th>Status</th>
              <th>Updated</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((p) => (
              <tr key={p.id}>
                <td>
                  <Link
                    to={routes.adminEditResearchArticle({ id: p.id })}
                    className="rw-link"
                  >
                    {truncate(p.title)}
                    {p.featured ? (
                      <span className="ml-2 text-xs text-neon-primary">★</span>
                    ) : null}
                  </Link>
                </td>
                <td>
                  <span className="font-mono text-xs">
                    {p.slug?.length > 48 ? `${p.slug.slice(0, 48)}…` : p.slug}
                  </span>
                </td>
                <td>{p.published ? 'Published' : 'Draft'}</td>
                <td className="font-mono text-xs text-gray-500">
                  {new Date(p.updatedAt).toLocaleDateString()}
                </td>
                <td>
                  <nav className="rw-table-actions">
                    <Link
                      to={routes.adminEditResearchArticle({ id: p.id })}
                      className="rw-button rw-button-small rw-button-blue"
                    >
                      Edit
                    </Link>
                    {p.published ? (
                      <Link
                        to={routes.researchArticle({ slug: p.slug })}
                        className="rw-button rw-button-small rw-button-green"
                      >
                        View
                      </Link>
                    ) : null}
                    <button
                      type="button"
                      className="rw-button rw-button-small rw-button-red"
                      onClick={() => onDelete(p.id)}
                    >
                      Delete
                    </button>
                  </nav>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="rw-button-group mt-4">
        <Link
          to={routes.adminNewResearchArticle()}
          className="rw-button rw-button-green"
        >
          New article
        </Link>
      </div>
    </>
  )
}
