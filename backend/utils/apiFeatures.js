module.exports = class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }
    search(){
        const keyword = this.queryStr.keyword?{
            name:{
                $regex: this.queryStr.keyword,
                $options:"i"
            }
        }:{};
        console.log(this.queryStr);
        this.query = this.query.find({...keyword});
        return this
    }
}