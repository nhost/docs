import React from "react";

export function YouTube() {
  return (
    <a
      href="https://youtu.be/v3I5_2t1cco"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="border rounded flex items-center hover:border-primary hover:shadow-lg transition-all duration-150 ease-in-out">
        <div className="">
          <img src="/images/quick-start/yt-cover.png" className="w-56" />
        </div>
        <div className="flex items-center justify-center flex-grow text-4xl font-thin">
          Watch Quick Start Video
        </div>
      </div>
    </a>
  );
}
