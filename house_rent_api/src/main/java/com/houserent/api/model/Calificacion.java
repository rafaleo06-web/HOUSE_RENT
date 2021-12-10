package com.houserent.api.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="calificaciones")
public class Calificacion {

    @Getter @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_calificacion;

    @Getter @Setter
    @NotNull
    @Min(value=0)
    @Max(value=5)
    @Column(name="calificacion", nullable = false)
    private Integer calificacion;
}
