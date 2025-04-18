import Link from 'next/link';
import Image from 'next/image';
import { getRelatedArticles, Article } from '../utils/blogArticles';

interface BlogRelatedArticlesProps {
  currentArticleLink: string;
  count?: number;
}

export default function BlogRelatedArticles({ currentArticleLink, count = 3 }: BlogRelatedArticlesProps) {
  const relatedArticles = getRelatedArticles(currentArticleLink, count);

  return (
    <div className="bg-white py-12 md:py-20">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">More Articles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedArticles.map((article, index) => (
            <Link key={index} href={article.link} className="group">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <div className="mb-2">
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-xs ml-2">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  {article.description && (
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.description}</p>
                  )}
                  <div className="mt-auto">
                    <span className="text-blue-600 font-medium text-sm inline-flex items-center group-hover:underline">
                      Read More
                      <svg className="w-3.5 h-3.5 ml-1 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 