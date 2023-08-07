import React, { useState } from 'react'
import Cards from './Cards'

const Carousel = () => {  
  let Cities = [
    {
      'citie':'Monte Carlo',
      'country':'Monaco',
      'image':'https://i.pinimg.com/564x/f0/ad/aa/f0adaaae565f3a73c6db51460fd1f1a3.jpg',
      'description':'loremmsmsmsmsmsms smsmsmssmms',
    },
    {
      'citie':'Heidelberg',
      'country':'Alemania',
      'image':'https://i.pinimg.com/236x/63/26/77/632677deec5cb4fd2be6c48c54f85018.jpg',
      'description':'loremmsmsmsmsmsms smsmsmssmms',
    },
    {
      'citie':'Salzburgo',
      'country':'Austria',
      'image':'https://i.pinimg.com/236x/70/3f/b2/703fb2215831fdecc767f3b363b768e9.jpg',
      'description':'loremmsmsmsmsmsms smsmsmssmms',
    },
    {
      'citie':'Florencia',
      'country':'Italia',
      'image':'https://i.pinimg.com/236x/de/9e/e8/de9ee8f41080638f18c840209be8289f.jpg',
      'description':'loremmsmsmsmsmsms smsmsmssmms',
    },
    {
      'citie':'Lucerna',
      'country':'Suiza',
      'image':'https://i.pinimg.com/236x/b0/fd/84/b0fd840a4564c62f92aa731a9a8b9462.jpg',
      'description':'loremmsmsmsmsmsms smsmsmssmms',
    },
    {
      'citie':'Tokyo',
      'country':'Japón',
      'image':'https://i.pinimg.com/236x/66/e5/5d/66e55d0d710003f83714b98ae93d8bcd.jpg',
      'description':'loremmsmsmsmsmsms smsmsmssmms',
    },
    {
      'citie':'Venecia',
      'country':'Italia',
      'image':'https://i.pinimg.com/236x/23/b2/36/23b236b1c5c0ffef07601b283b266ff1.jpg',
      'description':'loremmsmsmsmsmsms smsmsmssmms',
    },
    {
      'citie':'Siena',
      'country':'Italia',
      'image':'https://i.pinimg.com/236x/27/66/2c/27662c2a3dd086f02a91f8644b403d47.jpg',
      'description':'loremmsmsmsmsmsms smsmsmssmms',
    },
    {
      'citie':'Roma',
      'country':'Italia',
      'image':'https://i.pinimg.com/236x/5c/16/84/5c16844855b8b80d13d7d99835c334f8.jpg',
      'description':'loremmsmsmsmsmsms smsmsmssmms',
    },
    {
      'citie':'Hamburgo',
      'country':'Alemania',
      'image':'https://i.pinimg.com/236x/b9/2b/0d/b92b0d9a649a9bb2b2feb88edc205608.jpg',
      'description':'loremmsmsmsmsmsms smsmsmssmms',
    },
    {
      'citie':'Sydney',
      'country':'Australia',
      'image':'https://i.pinimg.com/236x/9a/7d/90/9a7d90a7390a28bf0e4ac7c942206989.jpg',
      'description':'loremmsmsmsmsmsms smsmsmssmms',
    },
    {
      'citie':'Amsterdam',
      'country':'Holanda',
      'image':'https://i.pinimg.com/236x/ec/14/c1/ec14c15dd7e7a979d18327d952e08ebd.jpg',
      'description':'loremmsmsmsmsmsms smsmsmssmms',
    },
    {
      'citie':'San Francisco',
      'country':'Estados Unidos',
      'image':'https://i.pinimg.com/236x/5a/64/ad/5a64adc545700a446940a8cec4340dda.jpg',
      'description':'loremmsmsmsmsmsms smsmsmssmms',
    },
    {
      'citie':'Praga',
      'country':'República Checa',
      'image':'https://i.pinimg.com/236x/25/a9/f3/25a9f345b0ccfc1376d3e092a491d46e.jpg',
      'description':'loremmsmsmsmsmsms smsmsmssmms',
    },
    {
      'citie':'Queenstown',
      'country':'Nueva Zelanda',
      'image':'https://i.pinimg.com/236x/4a/75/19/4a7519af04908d1cb22b4db5527bf18f.jpg',
      'description':'loremmsmsmsmsmsms smsmsmssmms',
    },
    {
      'citie':'Berlin',
      'country':'Alemania',
      'image':'https://i.pinimg.com/236x/b7/12/46/b712464eead946112ae27fc481e44d2e.jpg',
      'description':'loremmsmsmsmsmsms smsmsmssmms',
    },
  ]

  let [show, showSlide] = useState(0);
  
  const slideNext = () => {
    if(show > 8){
      showSlide(0);
    }else{
      showSlide(show + 4);
    }
  }

  const slidePrev = () => {
    if (show <= 0) {
      showSlide(12);
    } else {
      showSlide(show - 4);
    }
  };

  const visibleCities = Cities.slice(show, show + 4)

  return (
    <div className='flex flex-col gap-2 justify-center items-center sm:flex-row sm:flex-wrap my-6'>
      <button onClick={slidePrev} className="inline-flex h-8 w-8 items-center justify-center rounded bg-1 text-black rtl:rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </button>

      {visibleCities.map((cards) => (
        <Cards key={cards.citie} citie={cards.citie} county={cards.country} image={cards.image} description={cards.description} />
      ))}
      
      <button onClick={slideNext} className="inline-flex h-8 w-8 items-center justify-center rounded bg-1 text-black rtl:rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </button>
    </div>

  )
}

export default Carousel