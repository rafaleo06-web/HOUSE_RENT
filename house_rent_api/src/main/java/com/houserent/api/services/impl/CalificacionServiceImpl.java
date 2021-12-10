package com.houserent.api.services.impl;

import com.houserent.api.model.Calificacion;
import com.houserent.api.repository.CalificacionRepository;
import com.houserent.api.services.CalificacionService;
import org.springframework.stereotype.Service;

@Service
public class CalificacionServiceImpl implements CalificacionService {

    private final CalificacionRepository calificacionRepository;

    public CalificacionServiceImpl(CalificacionRepository calificacionRepository) {

        this.calificacionRepository = calificacionRepository;
    }
    @Override
    public Calificacion agregarCalificacion(Calificacion calificacion) {
        return calificacionRepository.save(calificacion);
    }
}
