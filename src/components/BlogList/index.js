// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogDatas: [], isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const formattedDate = data.map(eachData => ({
      id: eachData.id,
      title: eachData.title,
      topic: eachData.topic,
      author: eachData.author,
      imageUrl: eachData.image_url,
      avatarUrl: eachData.avatar_url,
    }))
    console.log(formattedDate)
    this.setState({blogDatas: formattedDate, isLoading: false})
  }

  render() {
    const {blogDatas, isLoading} = this.state
    return (
      <ul className="list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogDatas.map(data => <BlogItem key={data.id} data={data} />)
        )}
      </ul>
    )
  }
}

export default BlogList
