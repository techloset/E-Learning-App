import React,{useState} from 'react'
import icon from "../images/profileBlogicon.png"
import tablet from "../images/tablet.png"
import picture from "../images/news_big_picrure.png"
import Rectangle from "../images/Rectangle.png"
const Card = () => {
    const articles=[
        {
            img:tablet
    
            
        },
        {
           img:picture
        },
        {
            img:tablet
    
            
        },{
    
            img:picture
        },
        {
            img:"https://s3-alpha-sig.figma.com/img/e7df/45a5/2348b45d3a7df3da7291cfb46a2634b1?Expires=1690761600&Signature=qv41~sj6VRpcQHVEIxyYeuLZQefLuT-kk4AWs7Tjp4DdjHZDO1odYS8SzPCK2seYbaWbuqNz0wKeXUtcoYzOIHmscEWxMxBqWcX7nqp6hykwbYenuKFoqm8EZpe0YKJuzpEGxAI5ObezMOR~1bT11DXae2a91dG7YxVwWZWayRpyKZSZ4K2FNx0Hw~t5Suwz4UnM91Uvpg46XjuZ-NyNZf4Fxg9EqZXpe8iSsHxESapDyfQbRzqI470JnbxOfKsQqDvMAP4os3y5lCq2krnmxc28Gon5hghUvPsCEqlGmMkCTwGdRneFSkb5FJsg8X4OBLdq6JZC7k3-TcQC13aE0g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    
            
        },
        {
           img:"https://s3-alpha-sig.figma.com/img/9150/3c25/c25d4396ab15991e79418fb801fd5efa?Expires=1688342400&Signature=HGzYZVOvKvFvOfc1VfwNGYGZy9XOBFBo6E9FXrlmZwYQ1tU6RpOkXdhgw3-MLS~1W-kCzPEXeYqt4-MH5qyjTi88dhBbgzop4BWLVLyUcz1CVU9ZLeeysQgS1-TVqAIF9liR3ms8c2czGSVq913YGCXQnq8-dOyAkCK294VLheaV~Jeq-F3OkaOwJ59hwco6--8z3AB8F2LoZts02DWCAryyXMTb6Couo~IE2tnYUA2i-n5fYdHEb7X5oBO-B9TgWmJD8tv8ypYiA5Uc8FryM4LIPlmi5pLgZ~vaFaBrYTSoFYWFm2unPV6tofZQqUQ6VhNguQj2XGXemxqysE1GIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
        {
            img:"https://s3-alpha-sig.figma.com/img/5abc/f770/24978c219bf2223fc9e32ec5fae8375f?Expires=1688342400&Signature=V5xWUmzGtCwxwvdl-7lBecAcRZb7J7sIoL603CIofgvu~mPL5QrcrMKdKLz9oUu7KCv2BDhjPxtrMIfo-QU8EaauSA9QHVcvdFBXrRCqLm7Dgo4Y8aDyva17NwmhbqhArySOTt0nu7Jldj-zbnga~rBl4LgjoCt0hxZJ9flkahUkyQzDw0DyvSIWquDeCUVLngfw4SzgD8d7OsFlkgNUI6aHtnGAAyQ0tOSEa8ZqC-Vz1pB-cx2kWYkV0FJ9g2UDLCGrOiNrBY~UMDYBlGkQciNHMd5JdaEAhIqB35NdBq8DaQ0ml1Icfz-LkLEh9d7RHUeZe~gKjCA3eaYY1Rs03w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    
            
        },{
    
            img:"https://s3-alpha-sig.figma.com/img/e4c7/276a/25a9cc6960c67cafa4666142463a3cc6?Expires=1688342400&Signature=p1a7XLq4~svUz2zwnKiJFg3Bp2iRuJHQyE84C2tnVvvIGBO3fiIv7ZoonVXrGaMFXC-rc9Ig19qmVMes1FjKbIRcTEi3j-uStiTYsBS6M5UtjwKkRdVtzssV4mz3-3IZSqE37AzdjU0yFpx1wMn1y1UatV1tZ29nBmKk1puK5JO~jr3BGAID5GxddHqpZhwDmSOqM~KKegaUcqEAu4Cs9zkvQO9f1dydyP74VQDOWpJ2hrE0~5XYXQ76X615MDKVhqWa3AZMTThmppyx-4eVrShYt8AdIwdtLRvxU6z8Du-S2cDRJMW5QaMsEjDC-KHE3V8691vwSur5mlJHtfOWig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            
        },
    
      ]

      const [startIndex, setStartIndex] = useState(0);
      const [visibleCards, setVisibleCards] = useState(articles.slice(0, 4));

      const Card = ({ img }) => {
        return (
          <div className="bg-white rounded-lg shadow-lg p-5">
            {/* w-[335px] h-[239px] width and height of the image */}
            <img className="  h-[239px]  w-full rounded-xl" src={img} alt='myimageis here'  />
              <br />
              <div className='flex justify-between'>
                  <div className='flex justify-between'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-[#696984] h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
</svg>

                      <p className='ml-1 text-[#696984] '> Design</p>
                  </div>
                  <div className='flex justify-between'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-[#696984] h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

                  <p className='ml-1 text-[#696984]'>3 Months</p>
                  </div>
                  </div>
                  <br />
                  <p className='font-bold text-xl '>AWS Certified solutions Architect</p>
                  <br />
                  <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
              <br />
           <div className='flex justify-between'>
              <div className='flex'>
                  <img src={icon} alt="ProfilePicture" className="w-10 h-10 rounded-full" />
                  <p className='ml-4 mt-1'>Lina</p> 
            </div>

              <div className='flex  '>
                  <del className='mt-1 text-[#696984]'>$100</del>
                <p className='text-2xl ml-3 text-[#49BBBD] font-semibold '>$80</p> 
              </div>
            </div>


         
          </div>
        );
      };


  return (
    <div className='md:mx-16 mx-12  lg:mx-24'>
    <div className="flex justify-between">
<div className="items-center relative ">
<div className="grid xl:grid-cols-4 lg:grid-cols-2  md:grid-cols-2 gap-8">
{visibleCards.map((testimonial) => (
<Card
key={testimonial.id}
img={testimonial.img}

/>
))}
</div>
</div>
</div>
    </div>
  )
}

export default Card
