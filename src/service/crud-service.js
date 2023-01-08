class CrudService{
    constructor(repository){
        this.repository = repository;
    }

    async create(data){
        try {
            let result = await this.repository.create(data);
            return result;
        } catch (error) {
            console.log("something went wrong in crud Service");
            throw error;
        }
    }

    async get(dataId){
        try {

            let result = await this.repository.get(dataId);
            return result;
        } catch (error) {
            console.log("something went wrong in crud Service");
            throw error;
        }
    }

    async getAll(){
        try {
            let result = await this.repository.getAll();
            return result;
        } catch (error) {
            console.log("something went wrong in crud Service");
            throw error;
        }
    }

    async delete(dataId){
        try {
            let result = await this.repository.delete(dataId);
            return result;
        } catch (error) {
            console.log("something went wrong in crud Service");
            throw error;
        }
    }

    async update(data , dataId){
        try {
            let result = await this.repository.update(data , dataId);
            return result;
        } catch (error) {
            console.log("something went wrong in crud Service");
            throw error;
        }
    }
}


module.exports = CrudService;