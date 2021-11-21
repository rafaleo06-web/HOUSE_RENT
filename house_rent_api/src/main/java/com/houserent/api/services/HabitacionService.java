package com.houserent.api.services;

import com.houserent.api.model.Cliente;
import com.houserent.api.model.Habitacion;
import java.util.List;

public interface HabitacionService {

    Habitacion registrarHabitacion(Habitacion habitacion);
    Habitacion modificarHabitacion(Habitacion habitacion);
    List<Habitacion> listarHabitacion();
    void eliminarHabitacion(Integer idHabitacion);
}
