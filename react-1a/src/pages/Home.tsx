import React from 'react';
import Hero from '../components/hero/Hero';
import Feature from '../components/features/Features Section';
import BlogSection from '../components/blogsection/BlogSection';
import Faq from '../components/faq/Faq';
import News from '../components/newsletter/News Letter';

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
    {<Hero/>}
   {<Feature />}
   {<BlogSection />}
   {<Faq />}
   {<News />}
    </div>
  );
}

export default Home;