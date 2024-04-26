import { useState } from 'react'
import './App.css'
import axios from 'axios';
import Navbar from './components/Navbar';


function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

async function generateAnswer() {
  setAnswer("Please wait your answer is loading..."); // Update state to show loading message

  try {
    // const response = await axios.post(
    //   "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyCo78QMFhmPV9yjYdnsIX8jxAfxNUXdhWg",
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT}`,
      {
        contents: [{ parts: [{ text: question }] }]
      }
    );

    setAnswer(response.data?.candidates[0]?.content?.parts[0]?.text || "No answer found");
  } catch (error) {
    console.error("Error generating answer:", error);
    setAnswer("Error occurred while generating answer");
  }
}

  return (
    <>
      <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <textarea
          className="border rounded w-full h-40 p-4"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask anything..."
        ></textarea>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={generateAnswer}
        >
          Generate Answer
        </button>
        <pre className="mt-4 p-4 border rounded">{answer}</pre>
      </div>
    </div>
</>
  )
}

export default App;
