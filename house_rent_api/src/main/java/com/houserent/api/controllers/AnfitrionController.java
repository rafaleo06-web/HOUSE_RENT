package com.houserent.api.controllers;

import com.houserent.api.model.Anfitrion;
import com.houserent.api.services.AnfitrionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/anfitriones")
public class AnfitrionController {

    @Autowired
    private final AnfitrionService anfitrionService;

    public AnfitrionController(AnfitrionService anfitrionService) {
        this.anfitrionService = anfitrionService;
    }

    @GetMapping
    public ResponseEntity<List<Anfitrion>> listarAnfitriones(){
        List<Anfitrion> anfitrion=anfitrionService.listarAnfitriones();
        return  new ResponseEntity<List<Anfitrion>>(anfitrion, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Anfitrion> obtenerAnfitrionPorId(@PathVariable("id") Integer idAnfitrion){
        Anfitrion anfitrion=anfitrionService.obtenerAnfitrionPorId(idAnfitrion);
        return  new ResponseEntity<Anfitrion>(anfitrion, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Anfitrion> registrarAnfitrion(@Valid @RequestBody Anfitrion anfitrion){
        Anfitrion anfitrionNew=anfitrionService.registrarAnfitrion(anfitrion);
        return new ResponseEntity<Anfitrion>(anfitrion, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Anfitrion> modificarAnfitrion(@Valid @RequestBody Anfitrion anfitrion){
        Anfitrion anfitrionUpdate=anfitrionService.modificarAnfitrion(anfitrion);
        return  new ResponseEntity<Anfitrion>(anfitrionUpdate, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarAnfitrion(@PathVariable("id") Integer idAnfitrion){
        anfitrionService.eliminarAnfitrion(idAnfitrion);
        return  new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }

}
