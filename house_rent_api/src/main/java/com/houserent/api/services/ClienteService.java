package com.houserent.api.services;

import com.houserent.api.model.Cliente;
import java.util.List;

public interface ClienteService {
    Cliente registrarCliente(Cliente cliente);
    Cliente modificarCliente(Cliente cliente);
    List<Cliente> listarClientes();
    Cliente obtenerClientePorId(Integer idCliente);
    void eliminarCliente(Integer idCliente);
}
