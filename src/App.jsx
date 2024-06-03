import { useEffect, useState } from 'react'
import News from './assets/News'
import "./App.css"
import TopNews from './TopNews';


function App() {
  const [news, setNews] = useState([]);
  const [line,setLine]=useState([])
  const [topNews, setTopNews]=useState([])

  useEffect(() => {
      const fetchNews = async () => {
          try {
              const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-05-02&sortBy=publishedAt&apiKey=318f05f14a0248b8a3b132eed2216b62');
             
              const data = await response.json()
              setNews(data.articles.slice(0,20))
              setLine(data.articles.slice(0,10))
              setTopNews(data.articles.slice(10,14))
              console.log(data.articles);
          } catch (error) {
              setError(error);
          } 
      };

      fetchNews();
  }, []); 


  return (
    <>
      <div className=' text-white w-full p-12 '>
        
        <h1 className='text-red-700 text-6xl font-black'>NEWS WEBSITE</h1>
        <h3 className='text-3xl font-black text-zinc-900'>- by vaibhav Mishra</h3>

        <div className="overflow-hidden whitespace-nowrap bg-gray-900 text-white py-2 mt-3 rounded-lg">
      <div className="inline-block animate-marquee">
        {line.map((item, index) => (
          <span className="mx-4" key={index}>
            <a href={item.url}>{item.title} ||</a> 
          </span>
        ))}
      </div>
    </div>

    <div className='mt-3 border-t-4 border-red-800'>
      <h1 className='text-black text-3xl font-black'>Top News:</h1>
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {
      topNews.map((item,index)=><TopNews title={item.title} description={item.description} url={item.url} imageSrc={item.urlToImage}/>)
       }
    </div>
    </div>

   
    
        {
          news.map((item,index)=><News title={item.title} description={item.description} url={item.url} imageSrc={item.urlToImage}/>)
        }
        </div>
    </>
  )
}

export default App
