import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (event) => event.preventDefault();

  const handleClickAdd = () => {
    console.log(`tytul: ${title}, rodzaj: ${genre}`);
  };

  return (
    <div>
      <form action="" method="" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Tytuł filmu</label>
          <input
            type="text"
            className="form-control"
            id="title"
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="genre">Rodzaj</label>

          <select
            name="genre"
            id="genre"
            className="form-control"
            onChange={(event) => setGenre(event.target.value)}
          >
            <option value=""></option>
            <option value="1">Komedia</option>
            <option value="2">Obyczajowy</option>
            <option value="3">Sensacyjny</option>
            <option value="4">Horror</option>
          </select>
        </div>

        <button className="btn btn-primary" onClick={handleClickAdd}>
          Dodaj
        </button>
      </form>
    </div>
  );
};

export default App;
