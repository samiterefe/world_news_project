import { NewsArticle } from "@/models/NewsArticles";

import NewsArticleEntry from "./NewsArticleEntry";

interface NewsArticlesGridProps {
    articles: NewsArticle[],
}

const NewsArticlesGrid = ({ articles }: NewsArticlesGridProps) => {
    return (
        // <Row xs={1} sm={2} xl={3} className="g-4">
        //     {articles.map(article => (
        //         <Col key={article.url}>
        //             <NewsArticleEntry article={article} />
        //         </Col>
        //     ))}
        // </Row>

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