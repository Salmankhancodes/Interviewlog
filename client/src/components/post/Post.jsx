import './post.css'
import { Link } from 'react-router-dom'

export default function Post({ post }) {
  const PF = 'http://localhost:5000/images/'
  return (
    <div className='post'>
      {post.photo && <img className='postImg' src={PF + post.photo} alt='' />}
      <div className='postInfo'>
        <div className='postCats'>
          {post.categories.map((c) => (
            <span className='postCat'>{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className='link'>
          <span className='postTitle'>{post.title}</span>
        </Link>
        <hr />
        <span className='postDate'>
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <div className='postDesc'>
        <div className='postDesc-Item'>
          <div className='postDesc-heading'>Company Name </div>
          {post.companyname}
        </div>

        <div className='postDesc-Item'>
          <div className='postDesc-heading'>Position</div>
          {post.position}
        </div>

        <div className='postDesc-Item'>
          <div className='postDesc-heading'>No. of Rounds:</div>
          {post.noofrounds}
        </div>

        <div className='postDesc-Item'>
          <div className='postDesc-heading'>Difficulty</div>
          {post.difficulty}
        </div>

        <div className='postDesc-Item'>
          <div className='postDesc-heading'>Result</div>
          {post.result}
        </div>
      </div>
    </div>
  )
}
