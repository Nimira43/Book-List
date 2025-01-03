import { useState } from 'react'
import BookCreate from './components/BookCreate'

function App() {
  const [books, setBooks] = useState([])
  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: 111, title }
    ]
    setBooks(updatedBooks)
  }

  return (
    <div>  
      {books.length}
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App

