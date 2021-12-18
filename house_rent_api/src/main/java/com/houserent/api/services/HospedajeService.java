package com.houserent.api.services;

import com.houserent.api.model.Anfitrion;
import com.houserent.api.model.Hospedaje;

import java.util.List;

public interface HospedajeService {

    Hospedaje registrarHospedaje(Hospedaje hospedaje);
    Hospedaje modificarHospedaje(Hospedaje hospedaje);
    List<Hospedaje> listarHospedaje();
    void eliminarHospedaje(Integer idHospedaje);
    Hospedaje obtenerHospedajePorId(Integer idHospedaje);
}