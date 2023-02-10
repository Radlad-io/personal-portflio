import { getAllPosts } from '@libs/api'
import Head from 'next/head'
import { CMS_NAME } from '@libs/constants'
import Post from '@interfaces/post'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <>
        <Head>
          <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
        </Head>
        <h1>Test</h1>
        {allPosts.map((post: any) => {
          return(
            <p>{post.title}</p>
          )
        })}
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}