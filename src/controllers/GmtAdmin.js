const GmtAdmin = require('../models/GmtAdmin.js')

async function getAllGmtAdmins (req, res) {
  try {
    const getAllItems = await GmtAdmin.findAll()
    res.json(getAllItems)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error al obtener los GmtAdmins' })
  }
}

async function postOneGmtAdmin (req, res) {
  try {
    const { nickName, email, birthdate, password } = req.body
    const postOneItem = await GmtAdmin.create({ nickName, email, birthdate, password })
    res.status(201).json(postOneItem)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error for Add new Object GmtAdmins' })
  }
}

async function getOneGmtAdmin (req, res) {
  try {
    const getOneItem = await GmtAdmin.findByPk(req.params.id)
    if (!getOneItem) {
      res.status(404).json({ message: ` El item ${req.params.id} no se encuentra` })
    } else {
      res.json(getOneItem)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error en la funcion getOneGmtAdmin' })
  }
}

async function putOneGmtAdmin (req, res) {
  try {
    const { nickName, email, birthdate, password } = req.body
    const putOneItem = await GmtAdmin.update({ nickName, email, birthdate, password }, { where: { id: req.params.id } })
    if (putOneItem[0] === 0) {
      res.status(404).json({ message: 'GmtAdmin no encontrado' })
    } else {
      res.json({ message: 'GmtAdmin actualizado correctamente' })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error al actualizar el GmtAdmin' })
  }
}

async function deleteOneGmtAdmin (req, res) {
  try {
    const deleteOneItem = await GmtAdmin.destroy({ where: { id: req.params.id } })
    if (deleteOneItem === 0) {
      res.status(404).json({ message: 'GmtAdmin no encontrado' })
    } else {
      res.json({ message: 'GmtAdmin eliminado correctamente' })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error al eliminar el GmtAdmin' })
  }
}

module.exports = { getAllGmtAdmins, postOneGmtAdmin, getOneGmtAdmin, putOneGmtAdmin, deleteOneGmtAdmin }
