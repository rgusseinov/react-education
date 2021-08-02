import React from 'react'
import Posts from './Posts'

export default ({ posts }) => {
  if (!posts.lenth){
    return <button className="btn btn-primary"> Загрузить </button>
  }

  return (
    <div>
      <h1> Fetched Posts </h1>
    </div>
  )
}