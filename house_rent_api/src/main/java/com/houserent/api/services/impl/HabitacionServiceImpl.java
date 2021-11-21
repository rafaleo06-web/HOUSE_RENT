package com.houserent.api.services.impl;

import com.houserent.api.model.Habitacion;
import com.houserent.api.repository.HabitacionRepository;
import com.houserent.api.services.HabitacionService;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class HabitacionServiceImpl implements HabitacionService {

    private final HabitacionRepository habitacionRepository;

    public HabitacionServiceImpl(HabitacionRepository habitacionRepository) {

        this.habitacionRepository = habitacionRepository;
    }

    @Override
    public Habitacion registrarHabitacion(Habitacion habitacion) {
        return habitacionRepository.save(habitacion);
    }

    @Override
    public Habitacion modificarHabitacion(Habitacion habitacion)  {
        return habitacionRepository.save(habitacion);
    }

    @Override
    public List<Habitacion> listarHabitacion()  {
        return habitacionRepository.findAll();
    }

    @Override
    public void eliminarHabitacion(Integer idHabitacion) {
        habitacionRepository.deleteById(idHabitacion);
    }
}
