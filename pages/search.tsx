
import NewsArticlesGrid from "@/components/ArticlesAlign";
import { NewsArticle } from "@/models/NewsArticles";
import Head from "next/head";
import { FormEvent, useState } from "react";


const SearchNewsPage = () => {
    const [searchResults, setSearchResults] = useState<NewsArticle[] | null>(null);
    const [searchResultsLoading, setSearchResultsLoading] = useState(false);
    const [searchResultsLoadingIsError, setSearchResultsLoadingIsError] = useState(false);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const searchQuery = formData.get("searchQuery")?.toString().trim();

        if (searchQuery) {
            try {
                setSearchResults(null);
                setSearchResultsLoadingIsError(false);
                setSearchResultsLoading(true);
                const response = await fetch("/api/search-news?q=" + searchQuery);
                const articles: NewsArticle[] = await response.json();
                setSearchResults(articles);
            } catch (error) {
                console.error(error);
                setSearchResultsLoadingIsError(true);
            } finally {
                setSearchResultsLoading(false);
            }
        }
    }

    return (
        <>
            <Head>
                <title key="title">Search News - NextJS News App</title>
            </Head>
            <main>
                <h1>Search News</h1>
                <div>  
                    This is page uses <strong>client-side data fetching</strong> to show fresh data for every search.
                    Requests are handled by our backend via <strong>API routes</strong>.
                    </div>
     



LTR

RTL






<div className="bg-white dark:bg-gray-900">
    <div className="max-w-3xl px-6 py-16 mx-auto text-center">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Search News?</h1>
        <p className="max-w-md mx-auto mt-5 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, minus tempora nemo quos</p>
          <form onSubmit={handleSubmit}>
        <div className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
            <input name="searchQuery"   placeholder="E.g. politics, sports, ..."  type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />

            <button type="submit"  disabled={searchResultsLoading} className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                search now
            </button>
        </div>
        </form>
    </div>
</div>






                <div className="d-flex flex-column align-items-center">
                    {/* {searchResultsLoading && <Spinner animation="border" />} */}
                    {searchResultsLoadingIsError && <p>Something went wrong. Please try again.</p>}
                    {searchResults?.length === 0 && <p>Nothing found. Try a different query!</p>}
                    {searchResults && <NewsArticlesGrid articles={searchResults} />}
                </div>
            </main>
        </>
    );
}

export default SearchNewsPage;