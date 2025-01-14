import { useState, useEffect } from "react";
import React, { Component } from "react";
import axios from "axios";
import Navbar from "./component/Navbar";
import Container from "./component/Container";
import Input from "./component/Input";
import Empty from "./component/Empty/empty";
import Emojis from "./component/Emojis";

function App() {
  const [emojisData, setEmojisData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchEmojis() {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://run.mocky.io/v3/fe964130-70d0-430f-b839-e55081423c28"
        );
        setEmojisData(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
        setLoading(false);
      }
    }
    fetchEmojis();
  }, []);

  const handleSearchEmojis = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <Navbar />

      <Container>
        <Input onChange={handleSearchEmojis} value={searchText} />
        {loading && <Empty text="Loading...." />}
        {error && <Empty text="Ooooops...." />}
        {emojisData.length > 0 && (
          <Emojis emojisData={emojisData} searchText={searchText} />
        )}
      </Container>
    </>
  );
}

export default App;
