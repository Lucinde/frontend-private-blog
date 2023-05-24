import React from 'react';
import './Blog.css';
import posts from '../../data/posts.json';
import {Link} from "react-router-dom";

function Blog() {
    // const array = [{ id: 1, name: ""}];
    return (
        <main>
            <div className="container">
                <h1>Blog Overzicht</h1>
                <h4>Aantal blogposts: {posts.length}</h4>
                <ul className="blog-list">
                    {posts.map((item) => {
                        return (
                            <li key={item.id}><Link to={`/blog/${item.id}`}>{item.title}</Link></li>
                        )
                    })}
                </ul>
            </div>
        </main>
    );
}

export default Blog;