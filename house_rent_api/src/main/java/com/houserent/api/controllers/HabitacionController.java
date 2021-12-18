package com.houserent.api.controllers;

import com.houserent.api.model.Habitacion;
import com.houserent.api.model.Hospedaje;
import com.houserent.api.services.HabitacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import javax.validation.Valid;
import java.util.List;
@CrossOrigin(origins ="http://localhost:4200",maxAge=3600)
@RestController
@RequestMapping("/habitaciones")
public class HabitacionController {

    @Autowired
    private final HabitacionService habitacionService;

    public HabitacionController(HabitacionService habitacionService) {
        this.habitacionService = habitacionService;
    }

    @GetMapping
    public ResponseEntity<List<Habitacion>> listarHabitacion(){
        List<Habitacion> habitacion=habitacionService.listarHabitacion();
        return  new ResponseEntity<List<Habitacion>>(habitacion, HttpStatus.CREATED);
    }


    @PostMapping
    public ResponseEntity<Habitacion> registrarHabitacion(@Valid @RequestBody Habitacion habitacion){
        Habitacion habitacionNew=habitacionService.registrarHabitacion(habitacion);
        return new ResponseEntity<Habitacion>(habitacionNew, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Habitacion> modificarHabitacion(@Valid @RequestBody Habitacion habitacion){
        Habitacion habitacionUpdate=habitacionService.modificarHabitacion(habitacion);
        return  new ResponseEntity<Habitacion>(habitacionUpdate, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarHabitacion(@PathVariable("id") Integer idHabitacion){
        habitacionService.eliminarHabitacion(idHabitacion);
        return  new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Habitacion> obtenerHabitacionPorId(@PathVariable("id") Integer idHabitacion){
        Habitacion habitacion=habitacionService.obtenerHabitacionPorId(idHabitacion);
        return  new ResponseEntity<Habitacion>(habitacion, HttpStatus.OK);
    }

}
