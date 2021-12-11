package com.houserent.api.controllers;

import com.houserent.api.model.Calificacion;
import com.houserent.api.services.CalificacionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
<<<<<<< HEAD
@RequestMapping("/calificaciones")
=======
@RequestMapping("/Calificaciones")
>>>>>>> 73dc7a6f0242d240e6f11d7e206c1d70082be375
public class CalificacionController {

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
