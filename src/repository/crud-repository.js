class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
        try {
            console.log(data);
            let result = await this.model.create(data);
            return result
        } catch (error) {
            console.log("something went wrong in crud repository");
            throw error
        }
    }

    async get(dataId){
        try {
            let result = await this.model.findByPk(dataId);
            return result;
        } catch (error) {
            console.log("something went wrong in crud repository");
            throw error
        }
    }

    async delete(dataId){
        try {
            await this.model.destroy({
                where : {
                    id : dataId
                }
            });
            return true;
        } catch (error) {
            console.log("something went wrong in crud repository");
            throw error
        }
    }

    async getAll(){
        try {
            let result = await this.model.findAll();
            return result
            ;
        } catch (error) {
            console.log("something went wrong in crud repository");
            throw error
        }
    }

    async update(data ,dataId){
        try {
            let result = await this.model.update(data , {
                where : {
                    id : dataId
                }
            });
            return result;
        } catch (error) {
            console.log("something went wrong in crud repository");
            throw error
        }
    }
}

module.exports = CrudRepository;