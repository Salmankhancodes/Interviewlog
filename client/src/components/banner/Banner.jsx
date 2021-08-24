import './banner.css'
import { Link } from 'react-router-dom'
export default function Banner() {
  return (
    <div className='banner'>
      <div className='banner-Left'>
        <h1>Interview Log</h1>
        <p>
          When people tell me they've learned from the experience, I tell them
          the trick is to learn from other people's experience.
        </p>
        <span>-Warren Buffett-</span>
      </div>
      <div className='banner-Right'>
        <Link to='/write'>
          <div>
            <button>Share Experience</button>
          </div>
        </Link>
      </div>
    </div>
  )
}
