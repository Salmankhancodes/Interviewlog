import { useContext, useState } from 'react'
import './write.css'
import axios from 'axios'
import { Context } from '../../context/Context'

export default function Write() {
  const [title, setTitle] = useState('')
  const [companyname, setCompanyname] = useState('')
  const [position, setPosition] = useState('')
  const [noofrounds, setNoofrounds] = useState('')
  const [difficulty, setDiffculty] = useState('')
  const [result, setResult] = useState('')
  const [desc, setDesc] = useState('')
  const [file, setFile] = useState(null)
  const { user } = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPost = {
      username: user.username,
      title,
      desc,
      result,
      noofrounds,
      difficulty,
      position,
      companyname,
    }
    if (file) {
      const data = new FormData()
      const filename = Date.now() + file.name
      data.append('name', filename)
      data.append('file', file)
      newPost.photo = filename
      try {
        await axios.post('/upload', data)
      } catch (err) {}
    }
    try {
      const res = await axios.post('/posts', newPost)
      window.location.replace('/post/' + res.data._id)
    } catch (err) {}
  }
  return (
    <div className='write'>
      {file && (
        <img className='writeImg' src={URL.createObjectURL(file)} alt='' />
      )}
      <form className='writeForm' onSubmit={handleSubmit}>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i className='writeIcon fas fa-plus'></i>
          </label>
          <input
            type='file'
            id='fileInput'
            style={{ display: 'none' }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type='text'
            placeholder='Title'
            className='writeInput'
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='writeFormGroup writeFormInfo '>
          <input
            type='text'
            placeholder='Company name'
            className='writeInput writeInfo'
            autoFocus={true}
            onChange={(e) => setCompanyname(e.target.value)}
          />
          <input
            type='text'
            placeholder='Position'
            className='writeInput writeInfo'
            autoFocus={true}
            onChange={(e) => setPosition(e.target.value)}
          />
          <select
            autoFocus={true}
            type='text'
            onChange={(e) => setNoofrounds(e.target.value)}
            className='writeInput writeInfo'
          >
            <option selected disabled hidden>
              No. of rounds
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>More than 5</option>
          </select>

          {/* <input
            type='text'
            placeholder='No. of rounds '
            className='writeInput writeInfo'
            autoFocus={true}
            onChange={(e) => setNoofrounds(e.target.value)}
          /> */}
          <select
            autoFocus={true}
            type='text'
            onChange={(e) => setDiffculty(e.target.value)}
            className='writeInput writeInfo'
          >
            <option selected disabled hidden>
              Difficulty
            </option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
          {/* 
          <input
            type='text'
            placeholder='Difficulty '
            className='writeInput writeInfo'
            autoFocus={true}
            onChange={(e) => setDiffculty(e.target.value)}
          /> */}

          <select
            autoFocus={true}
            type='text'
            onChange={(e) => setResult(e.target.value)}
            className='writeInput writeInfo'
          >
            <option selected disabled hidden>
              Result
            </option>
            <option>Accepted</option>
            <option>Rejected</option>
            <option>Offer declined</option>
            <option>Revolked</option>
          </select>

          {/* <input
            type='text'
            placeholder='Result '
            className='writeInput writeInfo'
            autoFocus={true}
            onChange={(e) => setResult(e.target.value)}
          /> */}
        </div>

        <div className='writeFormGroup'>
          <textarea
            placeholder='Tell your story...'
            type='text'
            className='writeInput writeText'
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className='writeSubmit' type='submit'>
          Publish
        </button>
      </form>
    </div>
  )
}
