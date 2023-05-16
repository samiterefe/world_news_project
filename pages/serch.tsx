import NewsArticlesGrid from "@/components/NewsArticlesGrid";
import { NewsArticle } from "@/models/NewsArticles";
import Head from "next/head";
import { FormEvent, useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";

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
                <Alert>
                    This is page uses <strong>client-side data fetching</strong> to show fresh data for every search.
                    Requests are handled by our backend via <strong>API routes</strong>.
                </Alert>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="search-input">
                        <Form.Label>Search query</Form.Label>
                        <Form.Control
                            name="searchQuery"
                            placeholder="E.g. politics, sports, ..."
                        />
                    </Form.Group>
                    <Button type="submit" className="mb-3" disabled={searchResultsLoading}>
                        Search
                    </Button>
                </Form>



LTR

RTL



<section className="flex flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-48">
    <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800">
        <div className="px-6 py-6 md:px-8 md:py-0">
            <h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">Sign Up For <span className="text-blue-600 dark:text-blue-400 md:text-blue-300">Project</span> Updates</h2>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur obcaecati odio</p>
        </div>
    </div>

    <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
        <form>
            <div className="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                <input className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="text" name="email" placeholder="Enter your email" aria-label="Enter your email"/>

                <button className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">subscribe</button>
            </div>
        </form>
    </div>
</section>






                <div className="d-flex flex-column align-items-center">
                    {searchResultsLoading && <Spinner animation="border" />}
                    {searchResultsLoadingIsError && <p>Something went wrong. Please try again.</p>}
                    {searchResults?.length === 0 && <p>Nothing found. Try a different query!</p>}
                    {searchResults && <NewsArticlesGrid articles={searchResults} />}
                </div>
            </main>
        </>
    );
}

export default SearchNewsPage;