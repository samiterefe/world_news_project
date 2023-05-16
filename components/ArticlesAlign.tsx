import { NewsArticle } from "@/models/NewsArticles";

import NewsArticleEntry from "./NewsArticleEntry";

interface NewsArticlesGridProps {
    articles: NewsArticle[],
}

const NewsArticlesGrid = ({ articles }: NewsArticlesGridProps) => {
    return (
      

            <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:grid-cols-2 ">
               {articles.map(article => (
                <div key={article.url}>
                    <NewsArticleEntry article={article} />
                </div>
            ))}
            </div>
    );
}

export default NewsArticlesGrid;