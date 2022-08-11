import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import cities from '../data/cities'

const Home: NextPage = () => {

  const renderImages = () => {
    return cities.map((city, index) => {
      return (
          <div key={index}>
            <Image  src={city.image} alt="test" width={400} height={400} />
            <Link href={`/${city.slug}`}><a>{city.name}</a></Link>
          </div>
      );
    });
  }
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Czech weather app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ width: "1100px", margin: "0 auto" }}>
        <div style={{ display: 'grid', gridTemplateColumns: "1fr 1fr" }}>
          {renderImages()}
        </div>
      </main>
    </div>
  )
}

export default Home
