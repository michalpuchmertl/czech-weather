import cities from '../data/cities'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Weather from '../components/Weather'

const CityPage = ({ cities }) => {
    const router = useRouter()
    const city = cities.filter((city) => city.slug == router.query.city)

    return (
        <div className="wrap">
            <div className="">{city[0].name}</div>
            <Image src={city[0].image} alt="test" width={400} height={400} ></Image>
            <p>{city[0].description}</p>
            {/*  <Weather nameCity={city[0].slug}></Weather> */}
        </div>
    )
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { city: 'praha' } }],
        fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps(ctx) {
    console.log(ctx.params)
    /* const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ctx.query.city},cz&appid={073c8b4b752412b2561be1860fc948a3}`)
    const data = await result.json(); */
    

    return {
        props: { data:null }
    }
}


export default CityPage 