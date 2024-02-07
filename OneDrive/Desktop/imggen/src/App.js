import React, { useState } from "react";
import { Imagegenerator } from "./components/Imagegenerator";
import "./index.css";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apikey: process.env.REACT_APP_API_KEY
});
const openai = new OpenAIApi(configuration);

function App() {
  const [userPrompt, setUserPrompt] = useState("");
  const [number, setNumber] = useState(1);
  const [size, setSize] = useState("256x256");
  const [imageUrl, setImageUrl] = useState("");

  const GenerateImage = async () => {
    const imageParameters = {
      prompt: userPrompt,
      n: parseInt(number),
      size: size,
    };

    const response = await openai.createImage(imageParameters);
    const urlData = response.data.data[0].url;
    setImageUrl(urlData);
  };
  return (
    <main className="App">
      {imageUrl && <img src={imageUrl} className="image" alt="" />}
      <Imagegenerator label={"Description"} setAttribute={setUserPrompt} />
      <Imagegenerator label={"Amount"} setAttribute={setNumber} />
      <Imagegenerator label={"Size"} setAttribute={setSize} />

      <button className="main-button" onClick={GenerateImage}>
        Generate
      </button>
    </main>
  );
}

export default App;
