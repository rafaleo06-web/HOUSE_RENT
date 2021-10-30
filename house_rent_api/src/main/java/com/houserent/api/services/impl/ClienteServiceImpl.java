package com.houserent.api.services.impl;

import com.houserent.api.model.Cliente;
import com.houserent.api.repository.ClienteRepository;
import com.houserent.api.services.ClienteService;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ClienteServiceImpl implements ClienteService {

    private final ClienteRepository clienteRepository;

    public ClienteServiceImpl(ClienteRepository clienteRepository) {

        this.clienteRepository = clienteRepository;
    }

    @Override
    public Cliente registrarCliente(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    @Override
    public Cliente modificarCliente(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    @Override
    public List<Cliente> listarClientes() {
        return clienteRepository.findAll();
    }

    @Override
    public Cliente obtenerClientePorId(Integer idCliente) {
        return clienteRepository.findById(idCliente).orElse(new Cliente());
    }

    @Override
    public void eliminarCliente(Integer idCliente) {
        clienteRepository.deleteById(idCliente);

    }
}
