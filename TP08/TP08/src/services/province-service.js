import ProvinceRepository from "../repositories/province-repository.js";

import ValidationHelper from "../helpers/validations-helper.js";

const repository = new ProvinceRepository();

export default class ProvinceService {

    getAllAsync = async () => {

        return await repository.getAllAsync();
    }

    getByIdAsync = async (id) => {

        return await repository.getByIdAsync(id);
    }

    insertAsync = async (province) => {

        const error = ValidationHelper.validateProvince(province);

        if (error !== "") {

            return error;
        }

        return await repository.insertAsync(province);
    }

    updateAsync = async (province) => {

        const error = ValidationHelper.validateProvince(province);

        if (error !== "") {

            return error;
        }

        return await repository.updateAsync(province);
    }

    deleteByIdAsync = async (id) => {

        return await repository.deleteByIdAsync(id);
    }
}