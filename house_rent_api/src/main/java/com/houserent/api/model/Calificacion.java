package com.houserent.api.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

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
