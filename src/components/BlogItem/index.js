// Write your JS code here

import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {data} = props
  console.log(data)
  const {id, title, author, topic, imageUrl, avatarUrl} = data
  return (
    <Link to={`/blogs/${id}`} className="link">
      <li className="item-container">
        <div className="eachitem-content">
          <div className="img-content">
            <img className="video-img" src={imageUrl} alt={`image${id}`} />
          </div>
          <div className="content-details">
            <p className="para">{topic}</p>
            <h1 className="heading">{title}</h1>
            <div className="author-details">
              <img className="author-img" src={avatarUrl} alt={`avatar${id}`} />
              <p className="author">{author}</p>
            </div>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
