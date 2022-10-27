import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../components/Header"
import Banner from "../components/Banner"
import SmallCard from "../components/SmallCard"
import MediumCard from "../components/MediumCard"
import LargeCard from "../components/LargeCard"



const Home: NextPage = ({ exploreData, cardsData }: any) => {
  return (
    <div>
      <Head>
        <title>J's Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header />

      {/* banner */}
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>

        {/* section 1 */}
        <section className='pt-6'>
          <h2 className='text-3xl font-semibold'>Explore Nearby</h2>

          {/* pull some data from a server */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item: any) => (
              <SmallCard
                key={item.img}
                img={item.img}
                location={item.location}
                distance={item.distance} />
            ))}
          </div>
        </section>


        {/* section 2 */}
        <section>
          <h2 className='text-3xl font-semibold py-8'>Live Anywhere</h2>

          {/* pull some data from a server */}
          <div className="flex  space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData.map((item: any) => (
              <MediumCard
                key={item.img}
                img={item.img}
                title={item.title} />
            ))}
          </div>
        </section>

        {/* section 3 */}
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />



      </main>


    </div>
  )
}


//only work in page folder
export async function getStaticProps() {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').
    then(
      (res) => res.json()
    );

  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").
    then(
      (res) => res.json()
    );


  return {
    props: {
      exploreData,
      cardsData,
    }
  }
}

export default Home
