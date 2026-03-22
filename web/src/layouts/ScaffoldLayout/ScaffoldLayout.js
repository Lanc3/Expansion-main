import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const ScaffoldLayout = ({
  title,
  titleTo,
  buttonLabel,
  buttonTo,
  children,
}) => {
  return (
    <div className="rw-scaffold app-wrapper min-h-screen">
      <Toaster
        toastOptions={{
          className: 'rw-toast',
          duration: 4000,
          style: {
            background: 'rgba(15, 5, 0, 0.95)',
            color: '#fff',
            border: '1px solid rgba(255, 92, 0, 0.3)',
            borderRadius: '0.75rem',
            backdropFilter: 'blur(12px)',
            fontFamily: 'monospace',
          },
        }}
        position="top-right"
      />
      <header className="rw-header" />
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ScaffoldLayout
