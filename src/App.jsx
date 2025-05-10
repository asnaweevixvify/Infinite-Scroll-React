import { useState , useEffect } from 'react'
import './App.css'
import Unsplash from './unsplash'

function App() {
  const apiKey = 'FZWIiZ7Shg9xd-k56l4ctZK0j175DBAtb8blEc8bJlg'
  const [photos , setPhotos] = useState([])
  const [page,setPage] = useState(1)
  const [isLoading,setIsLoading] = useState(false)

  async function fetchImage(){
    setIsLoading(true)
   try{
    const apiUrl =`https://api.unsplash.com/photos/?client_id=${apiKey}&page=${page}`
    const response = await fetch(apiUrl)
    const json = await response.json();
    setPhotos((oldData)=>{
      return [...oldData,...json]
    });
   }  
   catch(err){
    console.log(err);
   }
   setIsLoading(false)
  }
  useEffect(()=>{
    fetchImage()
  },[page])

  useEffect(()=>{
    const event = window.addEventListener('scroll',()=>{
      if(window.innerHeight+window.scrollY > document.body.offsetHeight-500 && !isLoading){
        setPage((oldpage)=>{
          return oldpage+1
        })
      }
    })
    return ()=> window.removeEventListener('scroll',event)
  },[])

  return (
    <>
      <h1>Unsplash API</h1>
      <section className='photos'>
          <div className='displayphotos'>
            {photos.map((data,index)=>{
              return <Unsplash key={index} {...data}/>
            })}
          </div>
      </section>
    </>
  )
}

export default App
