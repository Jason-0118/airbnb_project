import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useRouter } from 'next/router';
//for format date
import { format } from "date-fns";
import InfoCard from '../components/InfoCard';
import MapBox from '../components/MapBox';


function Search({ searchResults }) {
    const router = useRouter();
    //get values
    const { location, startDate, endDate, numberOfGuest } = router.query;
    //format date
    const formatStartDate = format(new Date(startDate), "dd MMMM yy");
    const formatEndDate = format(new Date(endDate), "dd MMMM yy");
    const range = `${formatStartDate} - ${formatEndDate}`;

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${numberOfGuest}`} />

            <main className="flex">
                <section className='flex-grow  pt-14 px-6'>
                    <p className="text-xs">300+ Stays - {range} - for {numberOfGuest} guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

                    <div className="hidden lg:inline-flex mb-5 space-x-3 whitespace-nowrap">
                        <p className="features">Cancellation Flexibility</p>
                        <p className="features">Type of Place</p>
                        <p className="features">Price </p>
                        <p className="features">Rooms and Beds </p>
                        <p className="features">More filters </p>
                    </div>

                    {/* info cards */}
                    <div className='flex flex-col'>
                        {/* use => () if return jsx object */}
                        {searchResults.map(({ img, location, title, description, star, price, total }) => (
                            <InfoCard
                                key={img}
                                img={img}
                                location={location}
                                title={title}
                                description={description}
                                star={star}
                                price={price}
                                total={total}
                            />
                        ))}
                    </div>
                </section>


                {/* map section*/}
                <section  className="hidden xl:inline-flex xl:min-w-[600px]">
                    <MapBox searchResults={searchResults}/>
                </section>
            </main>

            

            <Footer />
        </div>
    )
}

export default Search

export async function getServerSideProps() {
    const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").
        then(res => res.json());

    return {
        props: {
            searchResults,
        }
    }
}