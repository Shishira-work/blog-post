import "@/styles/globals.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [data, setData] = useState([]);
  const [loading,setLoading]=useState(true);
  const callApi = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
      });
      const data = await res.json();
      setData(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    finally{
      setLoading(false);
    }
  };
  useEffect(() => {
    callApi();
  }, []);
  return <Component {...pageProps} data={data} loading={loading} />;
}
