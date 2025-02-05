import React, { useEffect, useState } from 'react'
import { Container,PostCard } from '../components'
import appwriteService from '../appwrite/config';

function Allposts(){
    const [posts,setPosts]=useState([])
    useEffect(()=>{},[])
    appwriteService.getPosts([]).then((posts)=>{
        if(posts){
            setPosts(posts.documents)
        }
    })
    return(
        <div>
            <Container>
                <div>
                    {posts.map((post)=>(
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard/>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Allposts