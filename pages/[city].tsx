import cities from '../data/cities'
import Image from 'next/image'
import { useRouter } from 'next/router'
// import Weather from '../components/Weather'
import { useEffect } from 'react'

const CityPage = ({ weather, city, time }) => {

    const router = useRouter()
    console.log(router)
    // console.log(weather, city)


    if(router.isFallback) {
        return <div>Loading...</div>
    }


    const temp = weather.main.temp - 272.15


    console.log(city)

    return (
        <div className="wrap">
            <h1>{time}</h1>
            <div className="">{city.name}</div>
            <Image src={city.image} alt="test" width={400} height={400} ></Image>
            <p>{city.description}</p>
            <span>{temp.toFixed(1)} C</span>
            {/*  <Weather nameCity={city[0].slug}></Weather> */}
        </div>
    )
}

export async function getStaticPaths() {

    // const paths = cities.map(city => ({
    //     params: {
    //         city: city.slug
    //     }
    // }))

    return {
        paths: [{ params: { city: 'praha' }}],
        fallback: true, // can also be true or 'blocking'
    }
}

export async function getStaticProps(context: any) {

    console.log(context.params.city)


    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${context.params.city},cz&appid=073c8b4b752412b2561be1860fc948a3`)
    const weather = await result.json();

    const now = new Date()
    const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`


    const city = cities.filter((city) => city.slug == context.params.city)[0]

    return {
        props: { 
            weather,
            city,
            time
        },
        // revalidate: 10
    }
}


export default CityPage 