// src/modules/auth/models/AuthModel.js

import pool from "../../../config/db.js"

export const findUserByEmail = async (email) => {
  const sql = `
    SELECT usuario_id, email, password_hash, personal_id, huesped_id
    FROM usuarios
    WHERE email = ?
  `
  const [user] = await pool.query(sql, [email])
  return user
}

export const findUserById = async (usuario_id) => {
  const sql = `
    SELECT usuario_id, email, personal_id, huesped_id
    FROM usuarios
    WHERE usuario_id = ?
  `
  const [user] = await pool.query(sql, [usuario_id])
  return user
}