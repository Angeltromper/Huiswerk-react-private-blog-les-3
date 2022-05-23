import React from 'react';
import { Link } from 'react-router-dom';
import posts from '/data/post.json';


function BlogOverview() {
    return (
        <section>
            <h1>Blogoverzicht pagina</h1>
            <h3>Aantal blogposts: {posts.length} </h3>
            <ul>
                {posts.map((post) => {
                    return <li key={post.id}>
                        <Link to={'blogPost/$post.id}'}>
                            {post.title}
                        </Link>
                    </li>
                })}
            </ul>
        </section>
    );
}


export default BlogOverview;



