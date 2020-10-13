import dynamic from 'next/dynamic'
import Link from 'next/link'
import {DynamicComponentsLoader} from "@/components/loader" 

import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: { 'type': getRandomInt(3) + 1 },
    }
}

function Home({ type }) {
    let Body = DynamicComponentsLoader(type,'b', false) 
    return (
        <div>
            other page..
            <Body></Body>
        </div>
    )
}

export default Home