import { ArticleContainer } from "./components/articleContainer";


function App() {
  return (
    <div className="bg-gray-200 pt-10 h-screen">
      <h1 className='text-center text-3xl font-semibold'>Wikipedia search</h1>
      <ArticleContainer />
    </div>
  );
}

export default App;
