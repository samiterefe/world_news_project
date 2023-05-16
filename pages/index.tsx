import Image from 'next/image'
import { Inter } from 'next/font/google'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { json } from 'stream/consumers'

const inter = Inter({ subsets: ['latin'] })


interface BreakingNewsPageProps {
  newsArticles: NewsArticle[],
}

export const getServerSideProps: GetServerSideProps<BreakingNewsPageProps> = async () => {
  const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=" + process.env.NEWS_API_KEY);
  const newsResponse: NewsResponse = await response.json();
  return {
    props: { newsArticles: newsResponse.articles }
  }
  // let error go to 500 page
}


export default function BreakingNewsPage({ newsArticles }: BreakingNewsPageProps) {
  return (
    <>
    <Head>
        <title key="title">Breaking News - NextJS News App</title>
      </Head>
    <main
     
    >
         <h1> News Page </h1>
         <p>This page uses <strong>getServerSideProps</strong> to fetch data server-side on every request.
          This allows search engines to crawl the page content and <strong>improves SEO</strong>.</p>
          { JSON.stringify(newsArticles)  }
    </main>
    </>
  )
}