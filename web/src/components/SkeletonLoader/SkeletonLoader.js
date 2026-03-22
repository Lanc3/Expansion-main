const WIDTH_CYCLE = ['w-full', 'w-[85%]', 'w-[70%]', 'w-[60%]']

export const SkeletonText = ({ lines = 3, className = '' }) => (
  <div className={className}>
    {Array.from({ length: lines }).map((_, i) => (
      <div
        key={i}
        className={`skeleton h-4 mb-3 rounded ${WIDTH_CYCLE[i % WIDTH_CYCLE.length]}`}
      />
    ))}
  </div>
)

export const SkeletonCard = ({ className = '' }) => (
  <div className={`glass-panel rounded-2xl overflow-hidden ${className}`}>
    <div className="skeleton h-48 w-full" />
    <div className="p-4">
      <SkeletonText lines={3} />
    </div>
  </div>
)

export const SkeletonAvatar = ({ size = 'w-24 h-24' }) => (
  <div className={`skeleton rounded-full ${size}`} />
)

export const ProjectGridSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: 3 }).map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
)

export const ArticleListSkeleton = () => (
  <div className="flex flex-col gap-8">
    {Array.from({ length: 3 }).map((_, i) => (
      <div key={i} className="glass-panel rounded-2xl p-6">
        <div className="skeleton h-6 w-3/4 mb-4 rounded" />
        <SkeletonText lines={3} />
      </div>
    ))}
  </div>
)

export const SingleArticleSkeleton = () => (
  <div className="max-w-3xl mx-auto py-12 px-4">
    <div className="skeleton h-10 w-2/3 mb-6 rounded" />
    <div className="skeleton h-64 w-full mb-8 rounded-2xl" />
    <SkeletonText lines={6} />
  </div>
)

export default SkeletonText
