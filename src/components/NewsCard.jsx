import React from "react";
import "../news.css";

function NewsCard({ news }) {
  const { title, description, urlToImage, url, author, source, publishedAt } =
    news;
  const date = new Date(publishedAt);
  let domain = url.replace(/^(https?:\/\/)/, "");
  domain = domain.replace(/^www\./, "");
  const match = domain.match(/^([^\/]+)/);
  let favicon = "";
  let org = "";
  if (match && match[1]) {
    org = match[1];
    favicon = `https://www.google.com/s2/favicons?domain=${match[1]}`;
  }

  const givenDate = new Date(publishedAt);
  const now = new Date();
  const differenceMs = now - givenDate;
  const days = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

  const truncate = (title, wordCount) => {
    if (!title) return " ";
    const words = title.split(" ");
    if (words.length > wordCount) {
      return words.slice(0, wordCount).join(" ") + "....";
    }
    return title;
  };

  return (
    <>
      <a href={`${url}`} target="_blank" className="news-card">
        <div className="flex gap-2 justify-content items-center">
          <img src={favicon} className="favicon" />
          <a>{org}</a>
          <p className="font-light text-xs">{days}d</p>
        </div>
        <div className="h-[210px]">
          <img
            src={urlToImage}
            alt="Image"
            className="object-cover h-full w-full rounded-2xl border-2 border-black shadow-sm shadow-black"
          />
        </div>
        <div className="news-card-titlebar">
          <p>{title}</p>
        </div>
        <div className="news-card-description">
          <div className="text-sm mt-1">{truncate(description, 10)}</div>
        </div>
      </a>
    </>
  );
}

export default NewsCard;
