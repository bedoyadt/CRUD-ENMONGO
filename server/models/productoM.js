//const express = require('express');
const mongoose = require('mongoose');

let Schema = mongoose.Schema;
//variables
let productoSchema = new Schema({
    nombre: {
        type: String,
        //requiere: true
        require: [true, 'El nombre del producto es obligatorio'],
        default: "sin nombre"
    },
    marca:{
        type: String,
        //requiere: true
        require: [true, 'la marca es obligatorio'],
        default: "sin nombre"
    },
    descripcion:{
        type: String,
        //requiere: true
        require: false,
        default: "sin descripcion"
    },
    color:{
        type: String,
        //requiere: true
        require: false,
        default: "sin descripcion"
    },
    valor:{
        type: String,
        //requiere: true
        require: Number,
        require: [true, 'el precio del producto es obligatorio']
    },
    activo:{
        type: Boolean,
        //requiere: true
        require: true,
        //default: "sin descripcion"
    }
});