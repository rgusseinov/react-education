import React from 'react'
import Posts from './Posts'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ posts }) => {
/*   if (!posts.length){
    return <button className="btn btn-primary"> Загрузить </button>
  } */

  return (
    <div>
      <h1> Fetched Posts </h1>
    </div>
  )
}