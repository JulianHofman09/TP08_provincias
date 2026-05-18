import express from 'express';

import { StatusCodes } from 'http-status-codes';

import ProvinceService from '../services/province-service.js';

const router = express.Router();

const service = new ProvinceService();

router.get('/', async (req, res) => {

    const data = await service.getAllAsync();

    res.status(StatusCodes.OK).json(data);
});

router.get('/:id', async (req, res) => {

    const province = await service.getByIdAsync(req.params.id);

    if (province == null) {

        return res
            .status(StatusCodes.NOT_FOUND)
            .send("Provincia no encontrada");
    }

    res.status(StatusCodes.OK).json(province);
});

router.post('/', async (req, res) => {

    const result = await service.insertAsync(req.body);

    if (typeof result === 'string') {

        return res
            .status(StatusCodes.BAD_REQUEST)
            .send(result);
    }

    res
        .status(StatusCodes.CREATED)
        .send("Provincia creada");
});

router.put('/', async (req, res) => {

    const result = await service.updateAsync(req.body);

    if (typeof result === 'string') {

        return res
            .status(StatusCodes.BAD_REQUEST)
            .send(result);
    }

    if (!result) {

        return res
            .status(StatusCodes.NOT_FOUND)
            .send("Provincia no encontrada");
    }

    res
        .status(StatusCodes.CREATED)
        .send("Provincia modificada");
});

router.delete('/:id', async (req, res) => {

    const result = await service.deleteByIdAsync(req.params.id);

    if (!result) {

        return res
            .status(StatusCodes.NOT_FOUND)
            .send("Provincia no encontrada");
    }

    res
        .status(StatusCodes.OK)
        .send("Provincia eliminada");
});

export default router;