import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Define the interface for the article objects
interface Article {
  title: string;
  category: string;
  description?: string;
  readTime: string;
  link: string;
  coverImage: string;
}

interface RelatedArticlesProps {
  articles: Article[];
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ articles }) => {
  return (
    <div className="mt-28 mb-20">
      <h2 className="text-3xl font-bold mb-10 text-center">More Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {articles.map((article, index) => (
          <Link 
            href={article.link}
            key={index}
            className="group block transition-all duration-300 hover:-translate-y-2"
          >
            <div className="overflow-hidden rounded-2xl shadow-lg bg-white h-full flex flex-col">
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 text-white text-xs font-medium rounded-full">
                  {article.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-semibold text-xl text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                  {article.title}
                </h3>
                {article.description && (
                  <p className="text-sm text-gray-600 mb-4 flex-grow">
                    {article.description}
                  </p>
                )}
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs text-gray-500">
                    {article.readTime}
                  </span>
                  <span className="inline-flex items-center text-blue-600 font-medium group-hover:translate-x-1 transition-transform duration-300">
                    Read article
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles; 