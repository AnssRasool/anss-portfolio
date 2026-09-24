"use client";

import { useState, useMemo } from "react";
import { Article } from "@/data/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { Search, Filter, X, Tag } from "lucide-react";

interface WritingListProps {
  articles: Article[];
}

export function WritingList({ articles }: WritingListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Extract all unique tags across articles
  const allTags = useMemo(() => {
    return Array.from(new Set(articles.flatMap((article) => article.tags))).sort();
  }, [articles]);

  // Combined search by title or tags, plus tag filter
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      // 1. Tag button filter
      const matchesSelectedTag = !selectedTag || article.tags.includes(selectedTag);

      // 2. Search query filter (matches title or any tag)
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        article.summary.toLowerCase().includes(q);

      return matchesSelectedTag && matchesQuery;
    });
  }, [articles, selectedTag, searchQuery]);

  const hasActiveFilters = searchQuery.trim().length > 0 || selectedTag !== null;

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedTag(null);
  };

  return (
    <div className="space-y-6">
      {/* Search Bar & Tag Filter Controls */}
      <div className="space-y-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          {/* Search Input (matches title or tags) */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#75726B] dark:text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles by title or tag..."
              className="w-full rounded-xl border border-[#E7E2DA] bg-[#FFFFFF] py-2.5 pl-10 pr-9 text-sm text-[#1A1815] placeholder-[#75726B] shadow-xs transition-colors focus:border-[#1A1815] focus:outline-none dark:border-white/10 dark:bg-dark-200 dark:text-stone-200 dark:placeholder-stone-400 dark:focus:border-stone-300"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search input"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#75726B] hover:text-[#1A1815] dark:text-stone-400 dark:hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Filter by Tags Button */}
          <button
            type="button"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={`inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-xs sm:text-sm font-semibold shadow-xs transition-colors ${
              isFilterOpen || selectedTag
                ? "border-[#1A1815] bg-[#1A1815] text-[#FAF8F5] dark:border-white dark:bg-white dark:text-dark-100"
                : "border-[#E7E2DA] bg-[#FFFFFF] text-[#1A1815] hover:border-[#DDD7CD] hover:bg-[#F5F2EB]/50 dark:border-white/10 dark:bg-dark-200 dark:text-stone-200 dark:hover:border-dark-400 dark:hover:bg-dark-300"
            }`}
          >
            <Filter className="h-4 w-4 shrink-0" />
            <span>Filter by Tags</span>
            {selectedTag && (
              <span className="ml-0.5 rounded-full bg-white/20 px-1.5 py-0.2 font-mono text-[10px]">
                1
              </span>
            )}
          </button>
        </div>

        {/* Expandable Tag Filter Row */}
        {isFilterOpen && (
          <div className="rounded-xl border border-[#E7E2DA] bg-[#FAF8F5] p-3.5 transition-all dark:border-white/10 dark:bg-dark-200">
            <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-[#75726B] dark:text-stone-400">
              <Tag className="h-3.5 w-3.5" />
              <span>Select a tag to filter:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => setSelectedTag(null)}
                className={`rounded-md border px-2.5 py-1 font-mono text-xs font-medium transition-colors ${
                  selectedTag === null
                    ? "border-[#1A1815] bg-[#1A1815] text-[#FAF8F5] dark:border-white dark:bg-white dark:text-dark-100"
                    : "border-[#E7E2DA] bg-[#FFFFFF] text-[#3F3D38] hover:bg-[#EAE5DB] dark:border-white/10 dark:bg-dark-300 dark:text-stone-300 dark:hover:bg-dark-400"
                }`}
              >
                All
              </button>
              {allTags.map((tag) => {
                const isSelected = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setSelectedTag(isSelected ? null : tag)}
                    className={`rounded-md border px-2.5 py-1 font-mono text-xs font-medium transition-colors ${
                      isSelected
                        ? "border-[#1A1815] bg-[#1A1815] text-[#FAF8F5] dark:border-white dark:bg-white dark:text-dark-100"
                        : "border-[#E7E2DA] bg-[#FFFFFF] text-[#3F3D38] hover:bg-[#EAE5DB] dark:border-white/10 dark:bg-dark-300 dark:text-stone-300 dark:hover:bg-dark-400"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Results Info & Active Filter Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#75726B] dark:text-stone-400 pt-1">
          <p>
            Showing {filteredArticles.length} of {articles.length} articles
            {selectedTag && (
              <span>
                {" "}
                tagged with{" "}
                <span className="font-semibold text-[#1A1815] dark:text-white">
                  &ldquo;{selectedTag}&rdquo;
                </span>
              </span>
            )}
          </p>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={handleClearFilters}
              className="font-medium text-[#1A1815] dark:text-white hover:underline"
            >
              Reset filters
            </button>
          )}
        </div>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-[#DDD7CD] bg-[#FAF8F5] p-12 text-center dark:border-white/10 dark:bg-dark-200">
          <p className="text-base font-semibold text-[#1A1815] dark:text-white">
            No articles found
          </p>
          <p className="mt-1 text-sm text-[#75726B] dark:text-stone-400">
            No articles match your search or tag filter. Try a different query.
          </p>
          <button
            type="button"
            onClick={handleClearFilters}
            className="mt-4 inline-flex items-center rounded-xl border border-[#E7E2DA] bg-[#FFFFFF] px-4 py-2 text-xs font-semibold text-[#1A1815] shadow-xs hover:bg-[#F5F2EB] dark:border-white/10 dark:bg-dark-300 dark:text-stone-200 dark:hover:bg-dark-400"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
