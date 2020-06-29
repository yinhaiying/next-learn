import { NextPage } from "next";
import axios from "axios";
import { useEffect, useState } from "react";

type Post = {
  id:string;
  title:string;
  date:string;
}
const PostsIndex:NextPage = () => {
  const [posts,setPosts] = useState<Post[]>([]);
  const [isLoading,setIsLoading] = useState(false);
  useEffect(() =>{
    setIsLoading(true)
    axios.get('/api/v1/posts').then((res) => {
      console.log('res');
      console.log(res)
      setIsLoading(false)
      setPosts(res.data)
    }).catch((err) => {
      setIsLoading(false)
    })
  },[]);

  return (
    <div>
      <h2>文章列表</h2>
      {
        isLoading ? <div>加载中</div> : posts.map((item) =>{ return <div key = {item.id}>{item.id}</div>} )
      }

    </div>
  )
}

export default PostsIndex;
