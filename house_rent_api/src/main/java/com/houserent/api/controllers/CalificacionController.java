package com.houserent.api.controllers;

import com.houserent.api.model.Calificacion;
import com.houserent.api.services.CalificacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/calificaciones")
public class CalificacionController {

    @Autowired
    private final CalificacionService calificacionService;

    public CalificacionController(CalificacionService calificacionService) {
        this.calificacionService = calificacionService;
    }

    @PostMapping
    public ResponseEntity<Calificacion> agregarCalificacion(@Valid @RequestBody Calificacion calificacion){
        Calificacion calificacionNew=calificacionService.agregarCalificacion(calificacion);
        return new ResponseEntity<Calificacion>(calificacionNew, HttpStatus.CREATED);
    }


}
