import Link from "next/link";
import { allArticles } from "@/utils/blogArticles";

interface BlogBreadcrumbsProps {
  slug: string;
}

export default function BlogBreadcrumbs({ slug }: BlogBreadcrumbsProps) {
  const article = allArticles.find((entry) => entry.link === `/post/${slug}`);
  const label =
    article?.headline?.replace(/\s+\| AceHost$/, "") ??
    article?.title.replace(/\s+\| AceHost$/, "") ??
    slug;

  return (
    <nav aria-label="Breadcrumb" className="not-prose mb-6">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-gray-500">
        <li>
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Home
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li>
          <Link href="/blogs" className="hover:text-gray-900 transition-colors">
            Blog
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li
          className="text-gray-700 line-clamp-1 max-w-[min(100%,20rem)] sm:max-w-none"
          aria-current="page"
        >
          {label}
        </li>
      </ol>
    </nav>
  );
}
