class API{
    constructor(){
        this.api = 'http://localhost:8000/api/';
    }

    async getQuestion(){

        
        const response = await fetch(this.api+"question")

        const data = await response.json()
        return {
            data:data
        }
    }
    
    async getOptions(id){
        const response = await fetch(this.api+'options/'+id)
        const data = await response.json()
        return data
    }
}