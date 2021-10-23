package com.houserent.api.controllers;

import com.houserent.api.model.Cliente;
import com.houserent.api.services.ClienteService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clientes")

public class ClienteController {

    private final ClienteService clienteService;

    public ClienteController(ClienteService clienteService) {
        this.clienteService = clienteService;
    }

    @GetMapping
    public ResponseEntity<List<Cliente>> listarClientes(){
        List<Cliente> pacientes=clienteService.listarClientes();
        return  new ResponseEntity<List<Cliente>>(pacientes, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cliente> obtenerClientePorId(@PathVariable("id") Integer idCliente){
        Cliente cliente=clienteService.obtenerClientePorId(idCliente);
        return  new ResponseEntity<Cliente>(cliente, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Cliente> registrarCliente(@RequestBody Cliente cliente){
        Cliente clienteNew=clienteService.registrarCliente(cliente);
        return  new ResponseEntity<Cliente>(clienteNew, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Cliente> modificarCliente(@RequestBody Cliente cliente){
        Cliente clienteUpdate=clienteService.modificarCliente(cliente);
        return  new ResponseEntity<Cliente>(clienteUpdate, HttpStatus.CREATED);
    }

    //http://localhost:8080/pacientes/1 ==> HTTP DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarCliente(@PathVariable("id") Integer idCliente){
        clienteService.eliminarCliente(idCliente);
        return  new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }

}
