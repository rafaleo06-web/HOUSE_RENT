package com.houserent.api.controllers;

import com.houserent.api.model.Anfitrion;
import com.houserent.api.model.Hospedaje;
import com.houserent.api.services.AnfitrionService;
import com.houserent.api.services.HospedajeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/hospedajes")
public class HospedajeController {

    @Autowired
    private final HospedajeService hospedajeService;

    public HospedajeController(HospedajeService hospedajeService) {
        this.hospedajeService = hospedajeService;
    }

    @GetMapping
    public ResponseEntity<List<Hospedaje>> listarHospedaje(){
        List<Hospedaje> hospedaje=hospedajeService.listarHospedaje();
        return new ResponseEntity<List<Hospedaje>>(hospedaje, HttpStatus.CREATED);
    }



    @PostMapping
    public ResponseEntity<Hospedaje> registrarHospedaje(@Valid @RequestBody Hospedaje hospedaje){
        Hospedaje hospedajeNew=hospedajeService.registrarHospedaje(hospedaje);
        return new ResponseEntity<Hospedaje>(hospedajeNew, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Hospedaje> modificarHospedaje(@Valid @RequestBody Hospedaje hospedaje){
        Hospedaje hospedajeUpdate=hospedajeService.modificarHospedaje(hospedaje);
        return new ResponseEntity<Hospedaje>(hospedajeUpdate, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarHospedaje(@PathVariable("id") Integer idHospedaje) {
        hospedajeService.eliminarHospedaje(idHospedaje);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Hospedaje> obtenerHospedajePorId(@PathVariable("id") Integer idHospedaje){
        Hospedaje hospedaje=hospedajeService.obtenerHospedajePorId(idHospedaje);
        return  new ResponseEntity<Hospedaje>(hospedaje, HttpStatus.OK);

    }

}
