import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const articlesDirectory = path.join(process.cwd(), "content", "articles");

export interface ArticleMetadata {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  tags: string[];
}

export interface ArticleWithContent extends ArticleMetadata {
  contentHtml: string;
}

/**
 * Reads all .md files from content/articles directory, parses YAML frontmatter,
 * and returns sorted article metadata.
 */
export function getAllArticles(): ArticleMetadata[] {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticles = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        id: slug,
        slug,
        title: (data.title as string) || slug,
        date: (data.date as string) || "",
        readTime: (data.readTime as string) || "5 min read",
        summary: (data.summary as string) || "",
        tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
      };
    });

  // Sort descending (newest articles first)
  return allArticles;
}

/**
 * Reads a single .md file by slug, parses frontmatter and processes markdown to HTML.
 */
export async function getArticleBySlug(slug: string): Promise<ArticleWithContent | null> {
  const fullPath = path.join(articlesDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    id: slug,
    slug,
    title: (data.title as string) || slug,
    date: (data.date as string) || "",
    readTime: (data.readTime as string) || "5 min read",
    summary: (data.summary as string) || "",
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    contentHtml,
  };
}
