const { SchemaError } = require('jsonschema')

const checkSchemaType = (type) => (attribute, schema) => {
  if (typeof schema[attribute] !== type) {
    throw new SchemaError(`"${attribute}" expects ${type}`, schema)
  }
}

const checkBooleanAttr = checkSchemaType('boolean')

module.exports = {
  checkBooleanAttr,
}
