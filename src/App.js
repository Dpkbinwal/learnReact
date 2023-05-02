import React, { Component} from 'react'
import './App.css';
// import './blogCard.css';
import BlogCard from './blogCard';

class App extends Component{
  blogArr=[
    {
      id:1,
      title: 'Blog title 1',
      description:"Often, the body paragraph demonstrates and develops your topic sentence through an ordered, logical progression of ideas. There are a number of useful "
    },
    {
      id:2,
      title: 'Blog title 2',
      description:"lIn Harry’s world fate works not only through powers and objects such as prophecies, the Sorting Hat, wands, and the Goblet of Fire, but also through "
    },
    {
      id:3,
      title: 'Blog title 3',
      description:"In Harry’s world fate works not only through powers and objects such as prophecies, the Sorting Hat, wands, "
    }
  ]

  

  blogCards = this.blogArr.map((item,pos)=>{
    console.log(item.id);
    return(
      // <div className="blogCard" key={item.id}>
      // <h3>{item.title}</h3>
      // <p>{item.description}</p>
      // </div>
      <BlogCard key={item.id} title={item.title} description={item.description}/>
    );
  })
  state = {
    showBlogs : true
  }
  

  onHideBtnClick = () =>{
  //   let updatedState= !this.state.showBlogs;
  //  this.setState({showBlogs :updatedState});//set state method is asynchronus //you can also use method which is given below to this that will aloso work as same as this one

   
    this.setState((prevState,props) =>{
      return {showBlogs: !prevState.showBlogs}
    })
   
  }

  render(){//render method is called when the componenet is created or updated
    return (
      <div className="App">
        <button onClick = {this.onHideBtnClick} >{this.state.showBlogs? 'Hide List':'Show List'}</button>
        <br/>
        {
        this.state.showBlogs ? this.blogCards : null 
        }
      </div>
    );
  }
  
}

export default App;
