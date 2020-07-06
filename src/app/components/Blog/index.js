import React, {useState, useEffect} from 'react';
import "./Blog.scss";
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import SectionTop from '../SectionTop';
import { connect } from 'react-redux';
import { getBlogPostList, deleteBlogPost } from '../../redux/actions/BlogPostActions';
import BlogPost from './BlogPost';
import Popup from '../sharedComponents/Popup';


function Blog(props) {
    const [visible, setVisible] = useState(false);
    const [ID, setID] = useState("");
    const [labels, setLabels] = useState({
        title: "",
        text: ""
    });
    const [searchInput, setSearchInput] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    const { blogPosts, getBlogPostList, deleteBlogPost } = props;        
        
    useEffect(() => {
        getBlogPostList();                
    }, [])       

    const deleteData = (id) => {
        deleteBlogPost(id);                 
    }        
    
    const openDialog = (id) => {
        setID(id);
        setVisible(true);        
    }
    
    const closeDialog = () => {
        setLabels({
            title: "",
            text: ""
        })
        setID("");
        setVisible(false);
    } 
    
    const searchInputHandler = (input) => {
        setSearchInput(input);
    }

    useEffect(() => {
        const res =  blogPosts.filter(post => post.title.includes(searchInput));                
        setSearchResult(res);        
    }, [searchInput])
    
    return (
        <div className="Blog">
            <Navbar searchInput={searchInput} searchInputHandler={searchInputHandler} />
            <main>
                <div className="container-fluid">
                    <SectionTop click={() => openDialog()}/>
                    <div className="main_content">
                        <Sidebar />
                        <div className="post_box">
                            {(searchResult.length ? searchResult : blogPosts).map(post => {
                                return (
                                    <BlogPost 
                                        key={post.id} 
                                        label={post.title} 
                                        deletePost={() => deleteData(post.id)} 
                                        createdAt={post.createdAt} 
                                        text={post.text} 
                                        id={post.id} 
                                        openDialog={openDialog} 
                                        closeDialog={closeDialog}                                         
                                    />
                                ) 
                            })}                            
                        </div>                                                                      
                    </div>
                    <Popup ID={ID} labels={labels} setLabels={setLabels} visible={visible} closeDialog={closeDialog}/>                                         
                </div>
            </main>                        
        </div>
    )
}

const MapStateToProps = (state) => {
    return {
        blogPosts: state.blogPosts.resultData
    }
}

const MapDispatchToProps = (dispatch) => {
    return {        
        getBlogPostList: (payload) => {dispatch(getBlogPostList(payload))},
        deleteBlogPost: (id) => {dispatch(deleteBlogPost(id))}
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Blog)
