import React from 'react'
import { connect } from 'react-redux'
import { createPost, showAlert, postCount } from '../redux/actions'
import { Alert } from './Alert'

class PostForm extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      title: ''
    }
  }

  submitHandler = event => {
    event.preventDefault();
    const { title } = this.state

    if (!title.trim()){
      return this.props.showAlert('Название поста не может быть пустым')
    }

    const newPost = {
      title, id: Date.now().toString()
    }
    
    this.props.createPost(newPost)
    this.props.postCount(newPost)
    
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
        Count: {this.props.count} 
        <br/>
        {this.props.alert && <Alert text={this.props.alert} /> }
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
  createPost, showAlert, postCount
}

const mapStateToProps = state => ({
  alert: state.app.alert,
  count: state.post
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
