const  Getpagination =(page,limit)=>{
    const pageNumber = page > 0 ? page:1;
    const itemsPerPage = limit > 0?limit:10;
    const skip = (pageNumber -1)*itemsPerPage;
    return {skip,limit:itemsPerPage};
} 
module.exports = {Getpagination};