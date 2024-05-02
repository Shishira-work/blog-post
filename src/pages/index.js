import Image from "next/image";
import { Inter } from "next/font/google";
import Post from "@/components/Post";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data, loading }) {
  console.log(data);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (

    <div>
      {loading ? (
        <>
          <div className="mx-auto m-0 flex justify-center text-center">loading</div>
        </>
      ) : (
        <>
          {/* Input field for search */}
          <input
            type="text"
            placeholder="Search posts by title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="m-0 mx-auto flex justify-center p-4 rounded-full mt-9 border-black"
          />

          <div className="m-10 flex flex-wrap justify-center gap-4 px-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((item) => (
                <div key={item.id}>
                  <Post title={item.title} body={item.body} id={item.id} />
                </div>
              ))
            ) : (
              <p>No posts found.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
