exports.handler = async (event) => {
    
    function numSquar(event){
        let postedNum=event.queryStringParameters.num
        return postedNum*postedNum
    }
    
    
    return numSquar(event);
};