const BmtAccount = require('../models/modelBmtAccounts')

exports.getAllBmtAccounts = async (req, res) => {
  try {
    const bmtAccounts = await BmtAccount.findAll()
    res.json(bmtAccounts)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error al obtener los BmtAccounts' })
  }
}

exports.postBmtAccount = async (req, res) => {
  try {
    const { nickName, email, birthdate, password } = req.body
    const newBmtAccount = await BmtAccount.create({ nickName, email, birthdate, password })
    res.status(201).json(newBmtAccount)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error al crear un nuevo BmtAccount' })
  }
}

exports.getBmtAccountById = async (req, res) => {
  try {
    const bmtAccount = await BmtAccount.findByPk(req.params.id)
    if (!bmtAccount) {
      res.status(404).json({ message: 'BmtAccount no encontrado' })
    } else {
      res.json(bmtAccount)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error al obtener el BmtAccount' })
  }
}

exports.putBmtAccountById = async (req, res) => {
  try {
    const { nickName, email, birthdate, password } = req.body
    const updatedBmtAccount = await BmtAccount.update(
      { nickName, email, birthdate, password },
      { where: { id: req.params.id } }
    )
    if (updatedBmtAccount[0] === 0) {
      res.status(404).json({ message: 'BmtAccount no encontrado' })
    } else {
      res.json({ message: 'BmtAccount actualizado correctamente' })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error al actualizar el BmtAccount' })
  }
}

exports.deleteBmtAccountById = async (req, res) => {
  try {
    const deletedRowCount = await BmtAccount.destroy({ where: { id: req.params.id } })
    if (deletedRowCount === 0) {
      res.status(404).json({ message: 'BmtAccount no encontrado' })
    } else {
      res.json({ message: 'BmtAccount eliminado correctamente' })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error al eliminar el BmtAccount' })
  }
}
