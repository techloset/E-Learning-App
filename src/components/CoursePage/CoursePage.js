import React,{useState} from 'react'
// import Cards from '../CardsWithClicks';
import card from "../../images/card.png"
import code from "../../images/code.png"
import comp from "../../images/comp.png"
import pic from "../../images/news_big_picrure.png"
import card2 from "../../images/card2.png"
import nav_girl from "../../images/nav_girl.png"
import CardsClicks from '../CardsClicks';
import Cards from '../Card'


const CoursePage = () => {

    const articles=[
        {
            img:"../../images/news_big_picrure.png",
    
            
        },
        {
           img:"https://s3-alpha-sig.figma.com/img/9150/3c25/c25d4396ab15991e79418fb801fd5efa?Expires=1688342400&Signature=HGzYZVOvKvFvOfc1VfwNGYGZy9XOBFBo6E9FXrlmZwYQ1tU6RpOkXdhgw3-MLS~1W-kCzPEXeYqt4-MH5qyjTi88dhBbgzop4BWLVLyUcz1CVU9ZLeeysQgS1-TVqAIF9liR3ms8c2czGSVq913YGCXQnq8-dOyAkCK294VLheaV~Jeq-F3OkaOwJ59hwco6--8z3AB8F2LoZts02DWCAryyXMTb6Couo~IE2tnYUA2i-n5fYdHEb7X5oBO-B9TgWmJD8tv8ypYiA5Uc8FryM4LIPlmi5pLgZ~vaFaBrYTSoFYWFm2unPV6tofZQqUQ6VhNguQj2XGXemxqysE1GIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
        {
            img:"https://s3-alpha-sig.figma.com/img/5abc/f770/24978c219bf2223fc9e32ec5fae8375f?Expires=1688342400&Signature=V5xWUmzGtCwxwvdl-7lBecAcRZb7J7sIoL603CIofgvu~mPL5QrcrMKdKLz9oUu7KCv2BDhjPxtrMIfo-QU8EaauSA9QHVcvdFBXrRCqLm7Dgo4Y8aDyva17NwmhbqhArySOTt0nu7Jldj-zbnga~rBl4LgjoCt0hxZJ9flkahUkyQzDw0DyvSIWquDeCUVLngfw4SzgD8d7OsFlkgNUI6aHtnGAAyQ0tOSEa8ZqC-Vz1pB-cx2kWYkV0FJ9g2UDLCGrOiNrBY~UMDYBlGkQciNHMd5JdaEAhIqB35NdBq8DaQ0ml1Icfz-LkLEh9d7RHUeZe~gKjCA3eaYY1Rs03w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    
            
        },{
    
            img:"https://s3-alpha-sig.figma.com/img/e4c7/276a/25a9cc6960c67cafa4666142463a3cc6?Expires=1688342400&Signature=p1a7XLq4~svUz2zwnKiJFg3Bp2iRuJHQyE84C2tnVvvIGBO3fiIv7ZoonVXrGaMFXC-rc9Ig19qmVMes1FjKbIRcTEi3j-uStiTYsBS6M5UtjwKkRdVtzssV4mz3-3IZSqE37AzdjU0yFpx1wMn1y1UatV1tZ29nBmKk1puK5JO~jr3BGAID5GxddHqpZhwDmSOqM~KKegaUcqEAu4Cs9zkvQO9f1dydyP74VQDOWpJ2hrE0~5XYXQ76X615MDKVhqWa3AZMTThmppyx-4eVrShYt8AdIwdtLRvxU6z8Du-S2cDRJMW5QaMsEjDC-KHE3V8691vwSur5mlJHtfOWig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            
        },
        {
            img:"https://s3-alpha-sig.figma.com/img/59e9/1cde/877aacb096082025aaa7528e15f2789e?Expires=1688342400&Signature=OzEgcImasDBEmvqlqbTCv8345j72PvfOQmt39Ou5lJ8322L4CubGxKGgmb2ibnTSHj-jcNm5v-lx1DjLzdaC7jShO6NVW5zC5f5anr~4xsHMUDxlPR1hdTsJ0vHuo7a2RKdOjrUWwHECOSztK-NJ7zyqQBq7jdi7FJWwfas~0~jS67ktm4H0BVPp-1oVuMqMVhptixDxOsK~JrtddTaCsUWG~QSGaNiSd~AKf6ccPtXKWwO2AiyWfS4I5hvU9L--NXyE8fUujWWW5rgcY12rlXLAHE7pi~PLs6Jp6gwFgSEDtn4idPM8d6Q~hJvzJyb7af5KduNBVzhDKFml-sKNuA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    
            
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

    const testimonials = [
        {
          id: 1,
          img:"https://s3-alpha-sig.figma.com/img/2f32/d3a9/082c2e2832481561feec93a5e5c5e8d6?Expires=1688947200&Signature=YapYaiVXR6hRcDhADW-MMZ9f4uhb6aMmFoJWYe6Eh0SsBpXx~n6sAVFhotMp3Gkd1QeaCane4Nf4d9atcYs3IRaEGYPrr762tPCZIF-KQ8e1GRN5CND8sF5fWf-y2~O0bihm2-RTyXEVeg8Kf8-LEUPSAemTU~Uq3U61FIPPNmooqSaK4SiX-6ky4FDa4o42uqNLoFkDaMOApR6TlvylO9Nv7ssuUPuMaBF48Eceex-4EjdceaRiKMzqNVmYaju2T~y1sUNq9Rzk24vhESOb-LNYA0rWHOvrf5Rvb0Myz5m-vWDbBh4nIWrVebbIakOekjhtADojKSWMkGO648rsew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",

          title: '1Bulkin Simons',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
        },
        {
          id: 2,
          title: '2Bulkin Simons',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
          img:"https://s3-alpha-sig.figma.com/img/2f32/d3a9/082c2e2832481561feec93a5e5c5e8d6?Expires=1688947200&Signature=YapYaiVXR6hRcDhADW-MMZ9f4uhb6aMmFoJWYe6Eh0SsBpXx~n6sAVFhotMp3Gkd1QeaCane4Nf4d9atcYs3IRaEGYPrr762tPCZIF-KQ8e1GRN5CND8sF5fWf-y2~O0bihm2-RTyXEVeg8Kf8-LEUPSAemTU~Uq3U61FIPPNmooqSaK4SiX-6ky4FDa4o42uqNLoFkDaMOApR6TlvylO9Nv7ssuUPuMaBF48Eceex-4EjdceaRiKMzqNVmYaju2T~y1sUNq9Rzk24vhESOb-LNYA0rWHOvrf5Rvb0Myz5m-vWDbBh4nIWrVebbIakOekjhtADojKSWMkGO648rsew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"

        },
        {
          id: 3,
          title: '3Bulkin Simons',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
          img:"https://s3-alpha-sig.figma.com/img/2f32/d3a9/082c2e2832481561feec93a5e5c5e8d6?Expires=1688947200&Signature=YapYaiVXR6hRcDhADW-MMZ9f4uhb6aMmFoJWYe6Eh0SsBpXx~n6sAVFhotMp3Gkd1QeaCane4Nf4d9atcYs3IRaEGYPrr762tPCZIF-KQ8e1GRN5CND8sF5fWf-y2~O0bihm2-RTyXEVeg8Kf8-LEUPSAemTU~Uq3U61FIPPNmooqSaK4SiX-6ky4FDa4o42uqNLoFkDaMOApR6TlvylO9Nv7ssuUPuMaBF48Eceex-4EjdceaRiKMzqNVmYaju2T~y1sUNq9Rzk24vhESOb-LNYA0rWHOvrf5Rvb0Myz5m-vWDbBh4nIWrVebbIakOekjhtADojKSWMkGO648rsew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"

        },
        {
          id: 4,
          title: '4Bulkin Simons',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
          img:"https://s3-alpha-sig.figma.com/img/2f32/d3a9/082c2e2832481561feec93a5e5c5e8d6?Expires=1688947200&Signature=YapYaiVXR6hRcDhADW-MMZ9f4uhb6aMmFoJWYe6Eh0SsBpXx~n6sAVFhotMp3Gkd1QeaCane4Nf4d9atcYs3IRaEGYPrr762tPCZIF-KQ8e1GRN5CND8sF5fWf-y2~O0bihm2-RTyXEVeg8Kf8-LEUPSAemTU~Uq3U61FIPPNmooqSaK4SiX-6ky4FDa4o42uqNLoFkDaMOApR6TlvylO9Nv7ssuUPuMaBF48Eceex-4EjdceaRiKMzqNVmYaju2T~y1sUNq9Rzk24vhESOb-LNYA0rWHOvrf5Rvb0Myz5m-vWDbBh4nIWrVebbIakOekjhtADojKSWMkGO648rsew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"

        },

        {
            id: 5,
            title: '5Bulkin Simons',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
          img:"https://s3-alpha-sig.figma.com/img/2f32/d3a9/082c2e2832481561feec93a5e5c5e8d6?Expires=1688947200&Signature=YapYaiVXR6hRcDhADW-MMZ9f4uhb6aMmFoJWYe6Eh0SsBpXx~n6sAVFhotMp3Gkd1QeaCane4Nf4d9atcYs3IRaEGYPrr762tPCZIF-KQ8e1GRN5CND8sF5fWf-y2~O0bihm2-RTyXEVeg8Kf8-LEUPSAemTU~Uq3U61FIPPNmooqSaK4SiX-6ky4FDa4o42uqNLoFkDaMOApR6TlvylO9Nv7ssuUPuMaBF48Eceex-4EjdceaRiKMzqNVmYaju2T~y1sUNq9Rzk24vhESOb-LNYA0rWHOvrf5Rvb0Myz5m-vWDbBh4nIWrVebbIakOekjhtADojKSWMkGO648rsew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"

          }, {
            id: 6,
            title: '6Bulkin Simons',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
          img:"https://s3-alpha-sig.figma.com/img/2f32/d3a9/082c2e2832481561feec93a5e5c5e8d6?Expires=1688947200&Signature=YapYaiVXR6hRcDhADW-MMZ9f4uhb6aMmFoJWYe6Eh0SsBpXx~n6sAVFhotMp3Gkd1QeaCane4Nf4d9atcYs3IRaEGYPrr762tPCZIF-KQ8e1GRN5CND8sF5fWf-y2~O0bihm2-RTyXEVeg8Kf8-LEUPSAemTU~Uq3U61FIPPNmooqSaK4SiX-6ky4FDa4o42uqNLoFkDaMOApR6TlvylO9Nv7ssuUPuMaBF48Eceex-4EjdceaRiKMzqNVmYaju2T~y1sUNq9Rzk24vhESOb-LNYA0rWHOvrf5Rvb0Myz5m-vWDbBh4nIWrVebbIakOekjhtADojKSWMkGO648rsew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"

          },
        
      ];

    const [startIndex, setStartIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(articles.slice(0, 4));
  

    // const handleNext = () => {
    //   if (startIndex + 4 < articles.length) {
    //     setStartIndex(startIndex + 1);
    //     setVisibleCards(articles.slice(startIndex + 1, startIndex + 5));
    //   }
    // };
  
    // const handlePrev = () => {
    //   if (startIndex > 0) {
    //     setStartIndex(startIndex - 1);
    //     setVisibleCards(articles.slice(startIndex - 1, startIndex + 3));
    //   }
    // };
    
  


    const Card = ({ img }) => {
        return (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <img className=" w-[335px] h-[239px] rounded-xl" src={img} alt='myimageis here'  />
              <br />
              <div className='flex justify-between'>
                  <div className='flex justify-between'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
</svg>

                      <p className='ml-3'> Design</p>
                  </div>
                  <div className='flex justify-between'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

                  <p className='ml-3'>3 Months</p>
                  </div>
                  </div>
                  <br />
                  <p className='font-bold text-xl '>AWS Certified solutions Architect</p>
                  <br />
                  <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
              <br />
           <div className='flex justify-between'>
              <div className='flex'>
                  <img src="https://s3-alpha-sig.figma.com/img/2f32/d3a9/082c2e2832481561feec93a5e5c5e8d6?Expires=1688342400&Signature=RTQdQ1lfg48W9SuIszsFDalJqHktTqfSi5MOmOPzu-H6V~3EXyISuhw9nd3MWLb59oGeDReiYuoXmCvYBNiK1eBt55VdQluB1TQFALwtxV1xGeAHL3ihmOC90d0wS68Elds2kmayvHfBtY3xywoXYSoWV5wBPmbMTFQHLsfbXz1nu7XAhbaKNkLFPtGd3xNbB1aThMXBx3d1FDLizFeQm-32098qWxkcte8VxLBmitte4JiZAlCHs1CTMyVI79tMmsgCPct47v5S4CBEgEIUKDR8TGU6viyNrnJjGKrGQRqzrYbmq2Cr1f5dzqZvKQ7aXi5rHptOrGcAmgw326P8Bg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="ProfilePicture" className="w-10 h-10 rounded-full" />
                  <p className='ml-4 mt-1'>Lina</p> 
            </div>
            </div>


         
          </div>
        );
      };
    

    const FavouriteCards=[
        {
            color:"#49BBBD4D",
            svg:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 my-auto ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
          </svg>
          ,
            title:"Design",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod"
        },
        {
            color:"#5B72EE4D",
            svg:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 my-auto h-6 text-[#5B72EE] ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
          </svg>
          
          ,
            title:"Design",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod"
        }, {
            color:"#9DCCFF4D",
            svg:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 my-auto h-6 text-[#9DCCFF] ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
          </svg>
          
          ,
            title:"Design",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod"
        }, {
            color:"#00CBB84D",
            svg:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 my-auto h-6 text-[#00CBB8] ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
          </svg>          
          ,
            title:"Design",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod"
        }, 
        
         {
            color:"#F48C064D",
            svg:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 my-auto h-6 text-[#F48C06] ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>
          
          ,
            title:"Design",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod"
        },
         {
            color:"#EE645B4D",
            svg:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 my-auto h-6 text-[#EE645B] ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
          
          ,
            title:"Design",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod"
        }, 
        {
            color:"#2526414D",
            svg:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 my-auto h-6 text-[#252641] ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
          </svg>
          
          ,
            title:"Design",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod"
        },
        {
          color:"#00CBB84D",
          svg:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 my-auto h-6 text-[#00CBB8] ">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>     
          ,
            title:"Design",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod"
        },

    ]


    const [cards, setCards] = useState([
        {
            id : 1,
            image:"http://localhost:3000/static/media/news_big_picrure.af412a83ab12d3a41f54.png",
            title:"AWS Certified Solutions Architect",
            descriptionless:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
            descriptionmore:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively",
            views:"251232"
        },
        {
            id : 2,
            image:"http://localhost:3000/static/media/comp.a0280fc3331e867b1215.png",
            title:"AWS Certified Solutions Architect",
            descriptionless:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
            descriptionmore:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively",
            views:"251232"
        }, {
            id : 3,
            image:"http://localhost:3000/static/media/code.94d78c2e554fd8b1e94d.png",
            title:"AWS Certified Solutions Architect",
            descriptionless:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
            descriptionmore:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively",
            views:"251232"
        }, {
            id : 4,
            image:"http://localhost:3000/static/media/comp.a0280fc3331e867b1215.png",
            title:"AWS Certified Solutions Architect",
            descriptionless:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
            descriptionmore:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively",
            views:"251232"
        },
        {
            id : 5,
            image:"http://localhost:3000/static/media/code.94d78c2e554fd8b1e94d.png",
            title:"AWS Certified Solutions Architect",
            descriptionless:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
            descriptionmore:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively",
            views:"251232"
        },
        {
            id : 6,
            image:"http://localhost:3000/static/media/news_big_picrure.af412a83ab12d3a41f54.png",
            title:"AWS Certified Solutions Architect",
            descriptionless:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
            descriptionmore:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively",
            views:"251232"
        },
      ]);
    
      const [currentPage, setCurrentPage] = useState(1);
      const [cardsPerPage] = useState(3);
    
      const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
      };
    
      const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
      };
      const indexOfLastCard = currentPage * cardsPerPage;
      const indexOfFirstCard = indexOfLastCard - cardsPerPage;
      const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard); 


    
    
  return (
    <div>
      
      {/* ==============================================================view history=========================================================================== */}
      
  
            <div className='bg-[#9DCCFF]  ' style={{fontFamily:"poppins"}}>
        <br /> <br />
        <div className=' mx-10 md:mx-20 xl:mx-24'>
            <div className='flex justify-between'>
            <div className=' xl:text-[30px] text-xl sm:text-2xl font-semibold '>Welcome back, ready for your next lesson?</div>
            <div className='text-[#49BBBD] text-xl xl:text-2xl font-bold'>View History</div>
            </div>
            <br /><br />
    

            {/* related blog  */}

<div  className='grid md:grid-cols-2  xl:grid-cols-3 gap-x-6 gap-y-12 '>
      {currentCards.map((card, index) => (
        <div className="mx-auto  bg-white shadow-md overflow-hidden p-4 rounded-xl" key={index}>
          <img src={card.image} alt={card.title} className="rounded-xl w-full" />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <div className="flex items-center space-x-4 mb-4">
              <img src={nav_girl} alt="ProfilePicture" className="w-10 h-10 rounded-full" />

              <span className="text-gray-700">Lina</span>
            </div>
           
          
          <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
  <div class="bg-[#49BBBD] h-2.5 rounded-xl dark:bg-gray-300  w-[75%] " ></div>
</div>
<p className='float-right'>Lesson 5 of 7</p> 
        <div className="flex items-center justify-between">
         
          <div className="text-gray-600">
          <div className="text-gray-600 flex items-center">
          </div>
          </div>
          </div>
          </div>
        </div>
        
      ))}
    
     
    </div>

    <br /> <br />
    <div className="flex justify-end">
        
        <button
          className="bg-[#49BBBD] hover:bg-[#49BBBD80] text-white py-2 px-4 rounded font-bold mr-2"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>


        </button>
        <button
          className="bg-[#49BBBD] hover:bg-[#49BBBD80] text-white py-2 px-4 rounded font-bold"
          onClick={handleNextPage}
          disabled={indexOfLastCard >= cards.length}
        >
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>   
        </button>
      </div>
<br /> <br />
      <br /> <br />
        </div>
       
 </div>

 <br /> <br /> 

 {/* ====================================================================favourite category================================================================ */}
 <div className=' mx-10 md:mx-20 xl:mx-24'>
            <h1 className='font-bold text-xl '>Choice favourite course from top category</h1>

          <br /><br />
          <div className=''>
            <div className='grid  md:grid-cols-2 xl:grid-cols-4 gap-8'>
                       {FavouriteCards.map((val)=>{
                        return(
                         <div className='shadow-xl text-center justify-center p-8 items-center rounded-xl'><br />

                         <div className='w-[90px] h-[90px] text-center flex justify-center  self-center mx-auto text-[#49BBBD]  ' style={{backgroundColor:`${val.color}`}}>
                         {val.svg}
     
                         </div><br />
                           <h1 className='font-bold text-2xl '>{val.title}</h1>
                         <br />
                         <p className=''>{val.description}</p>
                     
                     </div>
                        )
                       })}
               </div>
          </div>
               
 </div>
 <br /> <br /><br /><br /> <br />

               {/* ==================================================recommended for you============================================================ */}
               <div className='bg-[#9DCCFF]  '>
                <br /><br /><br />
                <div className=' mx-10 md:mx-20 xl:mx-24'>
                <div className='flex justify-between'>
        <div className='xl:text-[30px] text-xl sm:text-2xl font-semibold '>Recommended For you</div>
        <div className='text-[#49BBBD] text-[20px] font-bold'>See all</div>
        </div>
                <br /><br />
              
<CardsClicks/>
     
                </div>
               

   
               </div>

<br /><br /><br />

               {/* ============================marketing articles ========================== */}
               {/* <div className='mx-28' style={{fontFamily:"poppins"}}>
    <div className=''>
    <div className='flex justify-between'>
            <div className='font-medium text-[30px] '>Marketing Articles</div>
            <div className='text-[#49BBBD] text-[20px] font-bold'>See all</div>
    </div> 
    <br /> <br /> 
    <div  className='grid   2xl:grid-cols-4  lg:grid-cols-3  md:grid-cols-2 gap-x-8 gap-y-16 '>
        {articles.map((val)=>{
    return(
        <div className="mx-auto grid  bg-white shadow-md overflow-hidden px-7 py-12 rounded-xl" >
        <img className=" w-[335px] h-[239px] rounded-xl" src={val.img} alt='myimageis here'  />
              <br />
              <div className='flex justify-between'>
                  <div className='flex justify-between'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
</svg>

                      <p className='ml-3'> Design</p>
                  </div>
                  <div className='flex justify-between'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

                  <p className='ml-3'>3 Months</p>
                  </div>
                  </div>
                  <br />
                  <p className='font-bold text-xl '>AWS Certified solutions Architect</p>
                  <br />
                  <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
              <br />
           <div className='flex justify-between'>
              <div className='flex'>
                  <img src="https://s3-alpha-sig.figma.com/img/2f32/d3a9/082c2e2832481561feec93a5e5c5e8d6?Expires=1688342400&Signature=RTQdQ1lfg48W9SuIszsFDalJqHktTqfSi5MOmOPzu-H6V~3EXyISuhw9nd3MWLb59oGeDReiYuoXmCvYBNiK1eBt55VdQluB1TQFALwtxV1xGeAHL3ihmOC90d0wS68Elds2kmayvHfBtY3xywoXYSoWV5wBPmbMTFQHLsfbXz1nu7XAhbaKNkLFPtGd3xNbB1aThMXBx3d1FDLizFeQm-32098qWxkcte8VxLBmitte4JiZAlCHs1CTMyVI79tMmsgCPct47v5S4CBEgEIUKDR8TGU6viyNrnJjGKrGQRqzrYbmq2Cr1f5dzqZvKQ7aXi5rHptOrGcAmgw326P8Bg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="ProfilePicture" className="w-10 h-10 rounded-full" />
                  <p className='ml-4 mt-1'>Lina</p> 
              </div>
              <div className='flex'>
                  <del className='mt-1 mr-4'>$100</del>
                  <p className='text-[#49BBBD] font-bold text-2xl'>$80</p> 
              </div>
           </div>
      </div>
    )
   })}

    </div>
        
   
    </div>
</div> */}


<div className=' mx-10 md:mx-20 xl:mx-24'>
                <div className='flex justify-between'>
        <div className='xl:text-[30px] text-xl sm:text-2xl font-semibold '>Get choice of your choice</div>
        <div className='text-[#49BBBD] text-[20px] font-bold'>See all</div>
        </div>
               
              
        <br />

     
                </div>

                <Cards/>
                <br /><br />
{/* <div className='mx-12 md:mx-16 xl:mx-24'>
<div className='flex justify-between   '>
        <div className=' text-[30px]  font-semibold'>Get choice of your choice</div>
        <div className='text-[#49BBBD] text-[20px] font-bold'>See all</div>
        </div>
<br />
<Cards/>
</div> */}


{/* <div className='mx-28'>
<div className='flex justify-between '>
        <div className='font-medium text-[30px] '>Get choice of your choice</div>
        <div className='text-[#49BBBD] text-[20px] font-bold'>See all</div>
        </div>
        <br /><br /><br />
<div className="flex justify-between">
   <div className="items-center relative ">
  <div className="grid grid-cols-4 gap-12">
    {visibleCards.map((testimonial) => (
      <Card
        key={testimonial.id}
        img={testimonial.img}
       
      />
    ))}
  </div>
</div>

    </div>
</div> */}

<br /><br /><br />
{/* {======================================online coaching==========================================} */}

<div className='bg-[#252641] text-white text-center mx-10 md:16 lg:mx-28 rounded-xl px-12 '>
    <br /><br />
    <h1 className='text-2xl lg:text-4xl font-semibold'>Online coaching lessons for remote learning.</h1> <br />
    <p className=' lg:text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</p> <br /><br />
    <button className='bg-[#49BBBD] px-6 lg:px-12 py-3 rounded-xl'>Start learning now</button>
    <br /><br /> <br />
</div>
<br /><br /> <br />


<div className='mx-10 md:mx-20 xl:mx-24'>

<div className='flex  justify-between '>
        <div className='xl:text-[30px] text-xl sm:text-2xl font-semibold '>The course in personal development</div>
        <div className='text-[#49BBBD] text-[20px] font-bold'>See all</div>
</div>


        <br /><br /><br />
{/* <div className="flex justify-between">
   <div className="items-center relative ">
  <div className="grid grid-cols-4 gap-12">
    {visibleCards.map((testimonial) => (
      <Card
        key={testimonial.id}
        img={testimonial.img}
       
      />
    ))}
  </div>
</div>

    </div> */}
</div>

<Cards/>
<br /><br /><br />


<div className='bg-[#9DCCFF] '>
  <br /><br />
    <div className=''>
<div className='flex justify-between mx-10 md:mx-20 xl:mx-24 '>
        <div className='xl:text-[30px] text-xl sm:text-2xl font-semibold  '>Student are viewing</div>
        <div className='text-[#49BBBD] text-[20px] font-bold'>See all</div>
        </div>
        
{/* <div className="flex justify-between">
   <div className="items-center relative ">
  <div className="grid grid-cols-4 gap-12">
    {visibleCards.map((testimonial) => (
      <Card
        key={testimonial.id}
        img={testimonial.img}
       
      />
    ))}
  </div>
</div>

    </div> */}
</div>
<br /><br />
<Cards/>
<br /><br /><br />
</div>





  </div>

  )
}

export default CoursePage
