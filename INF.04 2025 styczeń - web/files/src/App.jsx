import { useState } from 'react';
import './App.css';

const basicImages = [
  { id: 0, alt: 'Mak', filename: 'obraz1.jpg', category: 1, downloads: 35 },
  { id: 1, alt: 'Bukiet', filename: 'obraz2.jpg', category: 1, downloads: 43 },
  {
    id: 2,
    alt: 'Dalmatyńczyk',
    filename: 'obraz3.jpg',
    category: 2,
    downloads: 2,
  },
  {
    id: 3,
    alt: 'Świnka morska',
    filename: 'obraz4.jpg',
    category: 2,
    downloads: 53,
  },
  {
    id: 4,
    alt: 'Rotwailer',
    filename: 'obraz5.jpg',
    category: 2,
    downloads: 43,
  },
  { id: 5, alt: 'Audi', filename: 'obraz6.jpg', category: 3, downloads: 11 },
  { id: 6, alt: 'kotki', filename: 'obraz7.jpg', category: 2, downloads: 22 },
  { id: 7, alt: 'Róża', filename: 'obraz8.jpg', category: 1, downloads: 33 },
  {
    id: 8,
    alt: 'Świnka morska',
    filename: 'obraz9.jpg',
    category: 2,
    downloads: 123,
  },
  {
    id: 9,
    alt: 'Foksterier',
    filename: 'obraz10.jpg',
    category: 2,
    downloads: 22,
  },
  {
    id: 10,
    alt: 'Szczeniak',
    filename: 'obraz11.jpg',
    category: 2,
    downloads: 12,
  },
  {
    id: 11,
    alt: 'Garbus',
    filename: 'obraz12.jpg',
    category: 3,
    downloads: 321,
  },
];

const App = () => {
  const [selectedCategories, setSelectedCategories] = useState([
    true,
    true,
    true,
  ]);

  const [images, setImages] = useState([...basicImages]);

  const elements = images.map((img) => {
    const { id, alt, filename, category, downloads } = img;

    if (selectedCategories[category - 1] === false) return;

    return (
      <div className="element" key={id}>
        <img
          src={`src/assets/inf04-2025-styczen-egzamin-zawodowy-praktyczny-zalaczniki/pliki3/${filename}`}
          alt={alt}
        />
        <h4>Pobrań {downloads}</h4>
        <button onClick={() => handleClickDownload(id)}>Pobierz</button>
      </div>
    );
  });

  function handleSelectCategory(category) {
    setSelectedCategories((prevSelectedCategory) => {
      const updatedArray = [...prevSelectedCategory];
      updatedArray[category - 1] = !prevSelectedCategory[category - 1];

      return updatedArray;
    });
  }

  function handleClickDownload(id) {
    setImages((prevImages) => {
      const updatedArray = [...prevImages];
      updatedArray[id].downloads += 1;

      return updatedArray;
    });
  }

  return (
    <div>
      <h1>Kategorie zdjęć</h1>
      <label>
        <input
          type="checkbox"
          name="category1"
          id="category1"
          defaultChecked
          onChange={() => handleSelectCategory(1)}
        />
        Kwiaty
      </label>
      <label>
        <input
          type="checkbox"
          name="category2"
          id="category2"
          defaultChecked
          onChange={() => handleSelectCategory(2)}
        />
        Zwierzęta
      </label>
      <label>
        <input
          type="checkbox"
          name="category3"
          id="category3"
          defaultChecked
          onChange={() => handleSelectCategory(3)}
        />
        Samochody
      </label>

      <section className="images-wrapper">{elements}</section>
    </div>
  );
};

export default App;
