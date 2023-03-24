import { useEffect, useState } from "react";
import "react-notion/src/styles.css";
import { NotionRenderer } from "react-notion";

export default function ReactNotion() {
  const [response, setResponse] = useState({});

  useEffect(() => {
    const NOTION_PAGE_ID = "591238bd1e98480bb6ded6b51dd05ef6";
    const url = `https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`;
    fetch(url, { method: "GET" })
      .then((data) => data.json())
      .then((result) => setResponse(result));
  }, []);

  return (
    <div style={{ maxWidth: 768, color: "whitesmoke" }}>
      {response ? <NotionRenderer blockMap={response} /> : null}
    </div>
  );
}
