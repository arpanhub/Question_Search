const ReadAlongCard = ({ question }) => (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-bold mb-3" style={{ color: 'black' }}>
        {`${question.type}\n>  ${question.title}`}
    </h2>
    </div>
  );
  
  export default ReadAlongCard;
  