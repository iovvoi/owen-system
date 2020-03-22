const QUERY_TABLE = (tableName) => `SELECT * FROM ${tableName}`

const INSERT_TABLE = (tableName, {key, val}) => `INSERT INTO ${tableName} (${key}) VALUES (${val})`

const UPDATE_TABLE = (tableName, {primaryKey, primaryVal}, {key, val}) => `UPDATE ${tableName} SET ${key}=${val} WHERE(${primaryKey}=${primaryVal})`

const DELETE_TABLE = (tableName, {primaryKey, primaryVal}) => `DELETE FROM ${tableName} WHERE(${primaryKey}=${primaryVal})`

module.exports = {
  QUERY_TABLE,
  INSERT_TABLE,
  UPDATE_TABLE,
  DELETE_TABLE
}
