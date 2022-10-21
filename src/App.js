import { useEffect, useState } from 'react';
import axios from 'axios';
import Forest from './img/forest.jpg';

function App() {
  const [previewURL, setPreviewURL] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://pixabay.com/api/?key=30739318-39cc688ac56ef1a46408d9730&q=yellow+flowers&image_type=photo'
      )
      .then(({ data }) => {
        setPreviewURL(data.hits);
      });
  }, []);
  return (
    <div>
      <div className='ml-[25%] mt-10 relative'>
        <img src={Forest} alt='fond' className='border-black border-2 ' />
        <h1 className='absolute text-6xl text-white top-1/2 left-80 -translate-x-1/2 -translate-y-1/2'>
          Pixabay Search
        </h1>
      </div>
      <form className='mt-[2%] ml-[40%]'>
        <input
          type='text'
          placeholder='Search..'
          name='search'
          className='w-50 h-12 rounded-lg text-2xl border-2 border-black pl-1'
        />
        <button
          type='submit'
          className='w-16 h-12 rounded-lg bg-gray-300 text-xl cursor-pointer ml-2 border-2 border-black mb-0'
        >
          Valider
        </button>
      </form>
      <div className='flex flex-row flex-wrap justify-center'>
        {previewURL.map((image) => (
          <img
            src={image.previewURL}
            alt='imagetest'
            className='border-black border-2 m-5 rounded'
          />
        ))}
      </div>
    </div>
  );
}

export default App;
