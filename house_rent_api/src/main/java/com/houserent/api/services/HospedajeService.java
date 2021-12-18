package com.houserent.api.services;

import com.houserent.api.model.Cliente;
import com.houserent.api.model.Hospedaje;

import java.util.List;

public interface HospedajeService {

    Hospedaje registrarHospedaje(Hospedaje hospedaje);
    Hospedaje modificarHospedaje(Hospedaje hospedaje);
    List<Hospedaje> listarHospedaje();

    Hospedaje obtenerHospedajePorId(Integer idHospedaje);
    void eliminarHospedaje(Integer idHospedaje);
}