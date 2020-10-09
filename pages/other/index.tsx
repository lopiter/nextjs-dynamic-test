import dynamic from 'next/dynamic'
import Link from 'next/link'

import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: { 'theme': getRandomInt(3) + 1 },
    }
}

function Home({ theme }) {
    const BodyDefault = dynamic(() => import(`components/${theme}/b`));
    return (
        <div>
            other page..
            <BodyDefault></BodyDefault>
        </div>
    )
}

export default Home