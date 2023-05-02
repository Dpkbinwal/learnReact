import React,{Component} from 'react';
import classes from './blogCard.module.css'

// //functional component
// const blogCard =(properties) =>{
//   // console.log(properties);
//     return (

//         <div className={classes.blogCard}>
//       <h3>{properties.title}</h3>
//       <p>{properties.description}</p>
//       </div>
//     );
// }
class blogCard extends Component{
  // console.log(properties);
state = {
  likeCount:0
}
onLikeBtnClick = () =>{
  this.setState((prevState,prevProps)=>{
    return {
      likeCount:prevState.likeCount+1
    }
  })
}
  render(){
    return (
      <div className={classes.blogCard}>
    <h3>{this.props.title}</h3>
    <p>{this.props.description}</p>

    <p>Like count: 
      <span className={classes.LikeCount}>{this.state.likeCount}</span>
    </p>
    
    <button onClick={this.onLikeBtnClick}> Like </button>
    </div>
  );
  }
    
}
export default blogCard;