import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Heading from "./components/Heading";
import Header from "./components/Header";
import { Button } from "./components/ui/button";
import ShinyText from "./components/ui/ShinyText/ShinyText";
import QuestionFetcher from "./components/QuestionFetcher";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const limit = 10; 

  const fetchQuestions = async () => {
    if (!query.trim()) {
      toast.error("Enter Query to search")
      return;
    }
    setLoading(true);
    try {
      const response = await axios.get(`https://question-search-6imp.onrender.com/api/questions`, {
        params: { Searchquery: query, limit, page },
      });
      
      if (response.data.questions) {
        setQuestions(response.data.questions);
      } else {
        if(questions.length == 0) {
          toast.error("No Results Found")
        }
        setQuestions([]);
      }
    } catch (error) {
      if (error.response?.status === 400) {
        toast.error(error.response.data.msg || "Enter a valid query", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
        });
      } else if (error.response?.status === 500) {
        toast("Failed to fetch questions", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          icon: "👎",
        });
      } else {
        console.error("Error fetching questions:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-neutral-950 relative min-h-screen flex flex-col items-center px-4 sm:px-8">
      <Header />
      <div className="mt-4 sm:mt-8">
        <Heading />
      </div>
      <div className="mt-8 sm:mt-14 flex flex-col items-center w-full">
        <div className="flex flex-col sm:flex-row items-center w-full max-w-md gap-2 sm:gap-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="MCQ, Anagram, Read Along, Content Only"
            className="p-2 sm:p-3 text-black rounded-full w-full text-xl sm:text-md"
          />
          <Button
            onClick={() => {
              setPage(1);
              fetchQuestions();
            }}
            className="rounded-full w-full sm:w-auto p-4 sm:p-6 text-xl sm:text-2xl border-2 border-white"
          >
            <ShinyText text="Search" disabled={false} speed={5} className="custom-class" />
          </Button>
        </div>
      </div>

      <QuestionFetcher
        questions={questions}
        loading={loading}
        />

      <div className="mt-6 flex justify-center items-center gap-4">
        <Button
          onClick={() => {
            const newPage = Math.max(page - 1, 1);
            setPage(newPage);
            fetchQuestions();
          }}
          disabled={page === 1}
          className="rounded-full px-6 py-3 text-xl border-2 border-white"
          >
          Prev
        </Button>
        <span className="text-white text-lg">
          Page {page}
        </span>
        <Button
          onClick={() => {
            const newPage = page + 1;
            setPage(newPage);
            fetchQuestions();
          }}
          className="rounded-full px-6 py-3 text-xl border-2 border-white"
          >
          Next
        </Button>
      </div>
    <Toaster/>      
    </div>
  );
}

export default App;
