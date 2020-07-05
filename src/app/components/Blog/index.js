import React, {useState} from 'react';
import "./Blog.scss";
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import SectionTop from '../SectionTop';
import { connect } from 'react-redux';
import { addBlogPost } from '../../redux/actions/BlogPostActions';
import BlogPost from './BlogPost';
import Popup from '../sharedComponents/Popup';


function Blog(props) {
    const [visible, setVisible] = useState(false);
    const { blogPosts, addBlogPost } = props;    
    
    const handleClick = () => {        
        addBlogPost({
            "id": 5,
            "title":	"Hello it's me",
            "text": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis iusto assumenda fuga dolorum quis. Sint maiores ratione ipsam sunt dolor similique. Aliquid libero eum omnis ex numquam voluptates inventore pariatur quod, adipisci minus magni harum facilis optio sed nam, sint blanditiis aspernatur maxime facere explicabo deleniti eligendi, a saepe cum. Alias assumenda nesciunt consequuntur veritatis ea vel id dolorem voluptas. ",
            "categoryId": 5
        })
    }
    
    const openDialog = () => {
        setVisible(true);
    }
    
    const closeDialog = () => {
        setVisible(false);
    }    
    
    return (
        <div className="Blog">
            <Navbar />
            <main>
                <div className="container-fluid">
                    <SectionTop click={openDialog}/>
                    <div className="main_content">
                        <Sidebar />
                        <div className="post_box">
                            <BlogPost openDialog={openDialog} closeDialog={closeDialog} />
                            <BlogPost openDialog={openDialog} closeDialog={closeDialog} />
                            <BlogPost openDialog={openDialog} closeDialog={closeDialog} />
                            <BlogPost openDialog={openDialog} closeDialog={closeDialog} />
                        </div>                                                                      
                    </div>
                    <Popup visible={visible} closeDialog={closeDialog}/>                                         
                </div>
            </main>                        
        </div>
    )
}

const MapStateToProps = (state) => {
    return {
        blogPosts:state.blogPosts
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        addBlogPost: (payload) => {dispatch(addBlogPost(payload))},
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Blog)
