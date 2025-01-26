import React from "react";
import MCQCard from "./Card/MCQCard";
import AnagramCard from "./Card/AnagramCard";
import ReadAlongCard from "./Card/ReadAlongCard";
import ContentOnlyCard from "./Card/ContentOnlyCard";




const QuestionFetcher = ({ questions, loading }) => {

  return (
    <>
      {loading ? (
        <p className="text-white text-center">Loading...</p>
        
      ) : (
        <div className="mt-6 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {questions.length ? (
            questions.map((question) => {
              switch (question.type) {
                case "MCQ":
                  return <MCQCard key={question._id} question={question} />;
                case "ANAGRAM":
                  return <AnagramCard key={question._id} question={question} />;
                case "READ_ALONG":
                  return <ReadAlongCard key={question._id} question={question} />;
                case "CONTENT_ONLY":
                  return <ContentOnlyCard key={question._id} question={question} />;
                default:
                  return null;
              }
            })
          ) : (
            <p className="text-white text-center">No questions found.</p>
          )}
        </div>
      )}
    </>
  );
};

export default QuestionFetcher;
