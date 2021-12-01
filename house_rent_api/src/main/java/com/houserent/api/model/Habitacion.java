package com.houserent.api.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name="habitacion")
public class Habitacion {

    @Getter @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idHabitacion;

    @Getter @Setter
    @NotNull
    @Size(min=4, message = "Nombre debe tener minimo 4 caracteres")
    @Column(name="nombres", nullable = false, length = 70)
    private String nombres;

    @Getter @Setter
    @NotNull
    @Size(min=20, message = "Descripcion debe tener COMO minimo 20 caracteres")
    @Column(name="descripcion", nullable = false, length = 70)
    private String descripcion;

    @Getter @Setter
    @Column(name="foto", nullable = false, length = 150)
    private String foto;

    @Getter @Setter
    @NotNull
    @Min(value=1)
    @Max(value=5)
    @Column(name="cantidadpersonas", nullable = false)
    private Integer cantidadpersonas;

    @Getter @Setter
    @NotNull
    @Min(value=1)
    @Column(name="pisoHabitacion", nullable = false)
    private Integer pisoHabitacion;
}
