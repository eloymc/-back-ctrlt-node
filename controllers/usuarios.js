const { response, request } = require('express');

const usuariosGet = (req = request, res=response) => {
    const params = req.query;
    res.json({
        msg:'Api get',
        params
    })
}

const usuariosPost = (req, res=response) => {
    const body = req.body; 
    res.json({
        msg:'Api post',
        nombre:body.nombre
    })
}

const usuariosPut = (req, res=response) => {
    const id = req.params.id;
    res.json({
        msg:'Api put',
        id
    })
}

const usuariosDelete = (req, res=response) => {
    res.json({
        msg:'Api delete'
    })
}

module.exports = {
    usuariosGet, usuariosPost, usuariosPut, usuariosDelete
};