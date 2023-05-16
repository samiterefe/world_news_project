import { NewsArticle } from "@/models/NewsArticles";
import Image from "next/image";

import placeholderImage from "@/assets/images/newsarticle_placeholder.jpg";
import styles from "@/styles/NewsArticleEntry.module.css";

interface NewsArticleEntryProps {
    article: NewsArticle,
}

const NewsArticleEntry = ({ article: { title, description, url, urlToImage } }: NewsArticleEntryProps) => {

    const validImageUrl = (urlToImage?.startsWith("http://") || urlToImage?.startsWith("https://")) ? urlToImage : undefined;

    return (
        <a href={url}>
            {/* <Card className="h-100">
                <Image
                    src={validImageUrl || placeholderImage}
                    width={500}
                    height={200}
                    alt="News article image"
                    className={`card-img-top ${styles.image}`}
                />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card> */}


            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <Image  src={ placeholderImage || validImageUrl} width={500}
        height={500} className="w-70 h-70"  alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">
                    {description}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
             </div> 
            </div>
        </a>
    );
}

export default NewsArticleEntry;