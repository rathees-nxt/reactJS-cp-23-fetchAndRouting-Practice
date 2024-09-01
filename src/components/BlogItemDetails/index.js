// Write your JS code here
import {Component} from 'react'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}}

  componentDidMount() {
    this.toGetBlogItemDeatails()
  }

  toGetBlogItemDeatails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)
    const updateDetails = {
      id: data.id,
      title: data.title,
      content: data.content,
      author: data.author,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
    }
    this.setState({blogData: updateDetails})
  }

  render() {
    const {blogData} = this.state
    console.log(blogData)
    const {title, content, imageUrl, avatarUrl, author} = blogData
    return (
      <div className="blog-container">
        <h1 className="heading">{title}</h1>
        <div className="blog-details">
          <div className="logo">
            <div className="author-logo">
              <img className="author-img" src={avatarUrl} alt={author} />
              <p className="para">{author}</p>
            </div>
          </div>
          <img className="video-img" src={imageUrl} alt={title} />
          <p className="para1">{content}</p>
        </div>
      </div>
    )
  }
}

export default BlogItemDetails
