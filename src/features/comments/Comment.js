import { formatDate } from '../../utils/formatDate'

const Comment = ({ comment: { text: commentText, rating, author, date } }) => {
  return (
    <p>
      {commentText}
      <br />
      {rating}/5 stars -- {author}, {formatDate(date)}
    </p>
  )
}

export default Comment
