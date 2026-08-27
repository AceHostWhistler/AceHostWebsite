import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getRelatedArticles, type Article } from "@/utils/blogArticles";

interface BlogRelatedArticlesProps {
  currentArticleLink: string;
  count?: number;
  /** When set, shows these articles instead of recent picks */
  articles?: Article[];
}

function displayTitle(title: string): string {
  return title.replace(/\s*\|\s*AceHost\s*$/i, "").trim();
}

function primaryCategory(category: string): string {
  return category.split(",")[0]?.trim() || category;
}

export default function BlogRelatedArticles({
  currentArticleLink,
  count = 3,
  articles,
}: BlogRelatedArticlesProps) {
  const relatedArticles =
    articles ?? getRelatedArticles(currentArticleLink, count);

  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="related-articles-heading"
      className="relative w-screen left-1/2 -translate-x-1/2 bg-neutral-50 border-t border-neutral-200/80 mt-16 md:mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2">
              Keep reading
            </p>
            <h2
              id="related-articles-heading"
              className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight"
            >
              More from the blog
            </h2>
          </div>
          <Link
            href="/blogs"
            className="text-sm font-medium text-neutral-700 hover:text-neutral-900 underline-offset-4 hover:underline shrink-0"
          >
            View all articles
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {relatedArticles.map((article) => {
            const title = displayTitle(article.title);

            return (
              <article
                key={article.link}
                className="group flex flex-col bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <Link href={article.link} className="block shrink-0">
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                    <Image
                      src={article.coverImage}
                      alt={title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </Link>

                <div className="flex flex-col flex-1 p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-medium text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded-full truncate max-w-[70%]">
                      {primaryCategory(article.category)}
                    </span>
                    <span className="text-xs text-neutral-500 shrink-0">
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-neutral-900 leading-snug mb-2 line-clamp-3">
                    <Link
                      href={article.link}
                      className="hover:text-neutral-600 transition-colors"
                    >
                      {title}
                    </Link>
                  </h3>

                  {article.description ? (
                    <p className="text-sm text-neutral-600 leading-relaxed line-clamp-2 mb-5">
                      {article.description}
                    </p>
                  ) : (
                    <div className="mb-5" />
                  )}

                  <Link
                    href={article.link}
                    className="inline-flex items-center text-sm font-medium text-neutral-900 mt-auto group/link"
                  >
                    Read article
                    <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
