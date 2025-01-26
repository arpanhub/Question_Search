const { Getpagination } = require('../utils/pagination');
const { getQuestionsCollection } = require('../config/Db');

const SearchQuestion = async (call, callback) => {
    console.log("in the gRPCServer callback function");
    const { Searchquery, limit, page } = call.request;
    const query = {
        "$or": [
            {
                "type": { "$regex": Searchquery, "$options": "i" }
            },
            {
                "title": { "$regex": Searchquery, "$options": "i" }
            },
            {
                "options.text": { "$regex": Searchquery, "$options": "i" }
            },
            {
                "options.isCorrectAnswer": { "$regex": Searchquery, "$options": "i" }
            },
            {
                "blocks.text": { "$regex": Searchquery, "$options": "i" }
            },
            {
                "blocks.showInOption": { "$regex": Searchquery, "$options": "i" }
            },
            {
                "blocks.isAnswer": { "$regex": Searchquery, "$options": "i" }
            },
            {
                "solution": { "$regex": Searchquery, "$options": "i" }
            },
        ]
    };

    console.log("query:", query);
    try {
        const { skip, limit: itemsPerPage } = Getpagination(page, limit);
        const collection = await getQuestionsCollection();
        // console.log("collection:", collection);

        // Find questions matching the query with pagination
        const questions = await collection.find(query).skip(skip).limit(itemsPerPage).toArray();
        // console.log("questions:", questions);

        // Count the total number of documents matching the query
        const total = await collection.countDocuments(query);
        console.log("total:", total);

        // Ensure the response is correctly formatted
        const response = {
            questions,
            total
        };

        console.log("response:", response.questions[0]);
        callback(null, response);
    } catch (error) {
        console.error("Error fetching questions:", error);
        callback(error, null);
    }
};

module.exports = { SearchQuestion };