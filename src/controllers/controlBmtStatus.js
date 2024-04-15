const BmtStatu = require('../models/BmtStatus')

const getAllBmtStatu = async (req, res, next) => {
  try {
    const getAllItems = await BmtStatu.findAll()
    res.json(getAllItems)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error al obtener los GmtAdmins' })
  }
}

const getOneBmtStatu = async (req, res, next) => {
  try {
    const getOneItem = await BmtStatu.findByPk(req.params.id)
    if (!getOneItem) {
      res.status(404).json({ message: 'BmtStatu no encontrado' })
    } else {
      res.json(getOneItem)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error al obtener el BmtStatu' })
  }
}

const postBmtStatu = async (req, res, next) => {
  try {
    const { nickName } = req.body
    const postOneItem = await BmtStatu.create({ nickName })
    res.status(201).json(postOneItem)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error al crear un nuevo BmtStatu' })
  }
}

const putBmtStatu = async (req, res, next) => {
  try {
    const { nickName } = req.body
    const putOneItem = await BmtStatu.update(
      { nickName },
      { where: { id: req.params.id } }
    )
    if (putOneItem[0] === 0) {
      res.status(404).json({ message: 'BmtAccount no encontrado' })
    } else {
      res.json({ message: 'BmtAccount actualizado correctamente' })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error al actualizar el BmtAccount' })
  }
}

const deleteBmtStatu = async (req, res, next) => {
  try {
    const deleteOneItem = await BmtStatu.destroy({ where: { id: req.params.id } })
    if (deleteOneItem === 0) {
      res.status(404).json({ message: 'BmtAccount no encontrado' })
    } else {
      res.json({ message: 'BmtAccount eliminado correctamente' })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error al eliminar el BmtAccount' })
  }
}

module.exports = { getAllBmtStatu, getOneBmtStatu, postBmtStatu, putBmtStatu, deleteBmtStatu }
