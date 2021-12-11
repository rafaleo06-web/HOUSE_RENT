package com.houserent.api.controllers;

import com.houserent.api.model.Cliente;
import com.houserent.api.services.ClienteService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
@CrossOrigin(origins ="http://localhost:4200",maxAge=3600)
@RestController
@RequestMapping("/clientes")
public class ClienteController {

    @Autowired
    private final ClienteService clienteService;

    public ClienteController(ClienteService clienteService) {
        this.clienteService = clienteService;
    }

    @GetMapping
    public ResponseEntity<List<Cliente>> listarClientes(){
        List<Cliente> clientes=clienteService.listarClientes();
        return  new ResponseEntity<List<Cliente>>(clientes, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cliente> obtenerClientePorId(@PathVariable("id") Integer idCliente){
        Cliente cliente=clienteService.obtenerClientePorId(idCliente);
        return  new ResponseEntity<Cliente>(cliente, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Cliente> registrarCliente(@Valid @RequestBody Cliente cliente){
        Cliente clienteNew=clienteService.registrarCliente(cliente);
        return new ResponseEntity<Cliente>(clienteNew, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Cliente> modificarCliente(@Valid @RequestBody Cliente cliente){
        Cliente clienteUpdate=clienteService.modificarCliente(cliente);
        return  new ResponseEntity<Cliente>(clienteUpdate, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarCliente(@PathVariable("id") Integer idCliente){
        clienteService.eliminarCliente(idCliente);
        return  new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }

}
