package com.houserent.api.controllers;


import com.houserent.api.model.Reserva;
import com.houserent.api.services.ReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
@CrossOrigin(origins ="http://localhost:4200",maxAge=3600)
@RestController
@RequestMapping("/reservas")

public class ReservaController {
    @Autowired
    private final ReservaService reservaService;
    public ReservaController(ReservaService reservaService) {
        this.reservaService = reservaService;
    }

    @GetMapping
    public ResponseEntity<List<Reserva>> listarReservas(){
        List<Reserva> reserva=reservaService.listarReserva();
        return new ResponseEntity<List<Reserva>>(reserva, HttpStatus.CREATED);
    }

    @PostMapping
    public ResponseEntity<Reserva> registrarReserva(@Valid @RequestBody Reserva reserva){
        Reserva reservaNew=reservaService.registrarReserva(reserva);
        return new ResponseEntity<Reserva>(reservaNew, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Reserva> modificarReserva(@Valid @RequestBody Reserva reserva){
        Reserva reservaUpdate=reservaService.modificarReserva(reserva);
        return new ResponseEntity<Reserva>(reservaUpdate, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarReserva(@PathVariable("id") Integer idReserva){
        reservaService.eliminarReserva(idReserva);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Reserva> obtenerHospedajePorId(@PathVariable("id") Integer idReserva){
        Reserva reserva=reservaService.obtenerReservaPorId(idReserva);
        return  new ResponseEntity<Reserva>(reserva, HttpStatus.OK);
    }
}
