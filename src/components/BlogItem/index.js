// Write your JS code here
import './index.css'

const BlogItem = prop => {
  const {details} = prop

  const {title, description, publishedDate} = details

  return (
    <li className="blog">
      <div className="flex">
        <h1 className="title">{title}</h1>
        <p className="grey">{publishedDate}</p>
      </div>
      <p className="grey">{description}</p>
      <hr />
    </li>
  )
}
export default BlogItem
