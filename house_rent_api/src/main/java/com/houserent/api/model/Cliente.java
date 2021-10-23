package com.houserent.api.model;

import com.sun.istack.NotNull;
import javax.persistence.*;

@Entity
@Table(name="cliente")
public class Cliente{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idCliente;

    @NotNull
    @Column(name="nombres", nullable = false, length = 70)
    private String nombres;

    @NotNull
    @Column(name="apellidos", nullable = false, length = 70)
    private String apellidos;

    @Column(name="direccion", nullable = false, length = 150)
    private String direccion;

    @NotNull
    @Column(name="celular", nullable = false, length = 9)
    private String celular;

    @Column(name="email", nullable = false, length = 55)
    private String email;

    @Column(name="fechanacimiento", nullable = false, length = 55)
    private String fechaNacimiento;

    @Column(name="fotourl", nullable = false, length = 55)
    private String fotoUrl;

    public Integer getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(Integer idCliente) {
        this.idCliente = idCliente;
    }

    public String getNombres() {
        return nombres;
    }

    public void setNombres(String nombres) {
        this.nombres = nombres;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(String fechaNacimiento) { this.fechaNacimiento = fechaNacimiento; }

    public String getFotoUrl() { return fotoUrl; }

    public void setFotoUrl(String fotoUrl) { this.fotoUrl = fotoUrl; }
}