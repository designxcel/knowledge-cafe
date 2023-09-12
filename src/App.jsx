
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id, time) =>{
    setReadingTime(readingTime + time);
    const remainingBookmark = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmark);
  }
  return (
    <>
      <Header></Header>
      <div className='flex flex-col md:flex-row justify-between md:w-[1400px] mx-auto md:mt-8 gap-5'>
        <Blogs 
                handleAddToBookmark = {handleAddToBookmark}
                handleMarkAsRead = {handleMarkAsRead}
                ></Blogs>
        <Bookmarks 
                  bookmarks={bookmarks}
                  readingTime = {readingTime}
                  ></Bookmarks>
      </div>

    </>
  )
}

export default App
