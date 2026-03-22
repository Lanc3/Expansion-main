import { Player, Controls } from '@lottiefiles/react-lottie-player'
import { Link, routes } from '@redwoodjs/router'
import animation from './leftLottie.json'
const AnimatedBack = ({ route }) => {
  return (
    <div className="flex flex-col items-start justify-start">
      <Link to={route}>
        <Player
          autoplay
          speed={0.5}
          loop
          src={animation}
          style={{ height: '80px', width: ' 80px' }}
        ></Player>
      </Link>
    </div>
  )
}

export default AnimatedBack
