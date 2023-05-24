import posts from '../../data/posts.json';
import './Blogpost.css';
import {Link, useParams} from "react-router-dom";
import Blog from "../blog/Blog";

function Blogpost() {
    // console.log(posts);
    const {id} = useParams()

    const currentPost = posts.find((post) => {
        return post.id === id;
    });

    return (
        <>
            <main>
                <div className="container">
                    <h1>{currentPost.title}</h1>
                    <h4>{currentPost.date}</h4>
                    <p>{currentPost.content}</p>
                    <Link to="/blog">Ga terug naar het overzicht</Link>
                </div>
            </main>
        </>
    );

}

export default Blogpost;