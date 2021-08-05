import React from 'react'
import { connect } from 'react-redux'

const Posts = ({ posts }) => {
  return (
    <div>
      {
        posts && posts.map((post, index) =>  (<h5 key={index}> { post } </h5>))
      }      
    </div>
  )
}


const mapStateToProps = state => ({
  posts: state.posts
})

export default connect(mapStateToProps, null)(Posts);
