import React, {useState, useEffect} from 'react'
import { Loader, card, Fromfield} from '../Components';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>The community Showcase </h1>
        <p className='mt-2 text-[#666e75] text-[18px] max-w[500px]'>Browse the images that you never imagined by using DALL-E open AI</p>
        </div>
    </section>
  )
}

export default Home