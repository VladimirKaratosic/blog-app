import React from 'react';
import Image80 from '../images/Image80';
import Image100 from '../images/Image100';
import Button from '../sharedComponents/Button';
import { deleteBlogPost, putBlogPost } from '../../redux/actions/BlogPostActions';
import { connect } from 'react-redux';

function BlogPost(props) {
    const { id, label, text, createdAt, openDialog, deletePost } = props;

    const dateReverse = createdAt.match(/^\d{4}-\d{2}-\d{2}/gm); 
    const time = createdAt.match(/\d{2}:\d{2}/);  
    

    function reverse(str){
        return [...str].reverse().join('');
      }

    const date = reverse(dateReverse);          

    return (
        <section className="BlogPost">
            <div className="top">
                <Image80 />
                <div className="top_midle">
                    <h2>{label}</h2>
                    <h6>Posted date: {date} at {time} by Some person {id - 1 ? id - 1 : null}</h6>
                </div>
                <div className="top_right">                   
                    <Button click={() => openDialog(id)} label="Edit" />
                    <Button click={deletePost} label="Delete" />
                </div>
            </div>
            <div className="midle">
                {text}
            </div>
            <div className="bottom">
                <Image100 />
                <Image100 />
                <Image100 />
            </div>            
        </section>
    )
}

const MapDispatchToProps = (dispatch) => {
    return {
        deleteBlogPost: (id) => {dispatch(deleteBlogPost(id))},    
        putBlogPost: (payload) => {dispatch(putBlogPost(payload))},        
    }
}

export default connect(null, MapDispatchToProps)(BlogPost)
