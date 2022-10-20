import './App.css';

function App() {
  return (
    <div>
      <form className='mt-[25%] ml-[40%]'>
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
    </div>
  );
}

export default App;
