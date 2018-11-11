const { Validator, ValidationError } = require('jsonschema')

const validator = new Validator()

// override standard error messages
// ValidationError.prototype.toString = function toString() {
//   const [instance, ...rest] = this.property.split('.')
//   return rest.join('.') + ' ' + this.message
// }

const addressSchema = {
  id: '/AddressSchema',
  type: 'object',
  required: ['city'],
  properties: {
    city: {
      type: 'string'
    }
  }
}

const schema = {
  id: '/Game',
  type: 'object',
  required: ['name', 'level', 'address'],
  properties: {
    name: {
      type: 'string',
      format: 'alpha'
    },
    level: {
      type: 'integer',
      minimum: 0,
      maximum: 10,
    },
    address: {
      $ref: addressSchema.id
    }
  }
}

validator.addSchema(addressSchema)

(() => {
  const data = {
    name: 'scent',
    level: 10,
    address: {
      city: 'Kyiv'
    }
  }

  const res = validator.validate(data, schema)
  if (res.valid) {
    console.log('Valid')
    console.log(res.instance)
  } else {
    console.log('Errors:')
    console.log(res.errors.join('\n'))
  }
})()