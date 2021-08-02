import React from 'react'
import { connect } from 'react-redux'
import { createPost } from '../redux/actions'

class PostForm extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      title: ''
    }
  }

  submitHandler = event => {
    event.preventDefault();
    // console.log(this.state.title)
    const newPost = {
      // eslint-disable-next-line no-undef
      title, id: Date.now().toString()
    }
    this.props.createPost(newPost)
    this.setState({ title: '' })
  }

  changeInputHandler = event => {
    this.setState(prev => ({...prev, ...{
      [event.target.name]: event.target.value
    }}))
  }

  render(){
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="title"> Заголовок поста </label>
          <input 
            type="text" 
            className="form-control" 
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.changeInputHandler}
          />
        </div>
        <button className="btn btn-success" type="submit"> Создать </button>
      </form>
    )
  }

}

const mapDispatchToProps = {
  createPost
}

export default connect(null, mapDispatchToProps)(PostForm);
