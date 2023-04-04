import { useState } from 'react';
import { supabase } from './supabaseClient';
import logo from './logo.svg';
import './App.css';

function Library() {
  const [myBooks, setMyBooks] = useState([]);
  async function getBooks() {
    let { data: books, error} = await supabase
    .from('books')
    .select('*')
  setMyBooks(books);
  }
getBooks();
return (
    <table>
      {
        myBooks.map(b => (
          <tr>
            <td>{b.title}</td>
            <td>{b.author}</td>
            <td>{b.isbn}</td>
          </tr>
        ))
      }
    </table>
  )
}

const magazines = [
  {id: 1, title: 'The New Yorker', theme: 'general',
  isAvailable: true },
  {id: 2, title: 'Vouge', theme: 'fashion', isAvailable: true},
  {id: 3, title: 'VIM Magazine', theme: 'fashion', isAvailable: false},
];

function ZineRack() {
  const listZines = magazines.map(zine =>
    <li
      key={zine.id}
      style={{
        color: zine.isAvailable ? 'green' : 'red'
      }}
      >
        {zine.title}
      </li>
    );
    return (
      <ul>{listZines}</ul>
    )
}

function MagicButton() {
  const [count, setCount] = useState(0);
  function doMagic() {
    setCount(count + 1);
  }
  return (
    <>
      <h3>This is a magic button</h3>
      <button onClick={doMagic}>Magic {count}</button>
    </>
  );
}

const books = {
  title: 'Pride and Prejudice',
  author: 'Jane Austen',
  published: '1813',
  image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/PrideAndPrejudiceTitlePage.jpg',
  width: '264',
  height: '378'
};



function Bookshelf() {
  return (
  <div>
    <h2>{books.title} ({books.published})</h2>
    <p>{books.author}</p>
    <img
    className="bookCover"
    src={books.image}
    alt={books.title + 'cover'}
    style={{
      width: books.width,
      height: books.height
    }}
     />
  </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Library/>
        <ZineRack />
        <Bookshelf/>
        <MagicButton/>
      </header>
    </div>
  );
}

export default App;
