const CounterItem = ({ title, counter, measurement }) => {
  return (
    <div className="mb-12 sm:mb-0 text-center">
      <h2 className="mb-2 font-mono text-3xl sm:text-4xl text-neon-primary text-glow-primary">
        {counter} {measurement}
      </h2>
      <span className="block text-sm sm:text-base text-gray-400">{title}</span>
    </div>
  )
}

export default CounterItem
