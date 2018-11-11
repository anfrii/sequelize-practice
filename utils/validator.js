const { Validator, ValidationError } = require('jsonschema')
const { checkBooleanAttr } = require('./schema.utils')

const validator = new Validator()

// override standard error messages
// ValidationError.prototype.toString = function toString() {
//   const [instance, ...rest] = this.property.split('.')
//   return rest.join('.') + ' ' + this.message
// }

// implement custom attribute
validator.attributes.notEmpty = (instance, schema) => {
  if (typeof instance !== 'string') return
  checkBooleanAttr('notEmpty', schema)

  if (schema.notEmpty && instance.trim().length === 0) {
    return 'must be not empty'
  }
}

const addressSchema = {
  id: '/AddressSchema',
  type: 'object',
  required: ['city'],
  properties: {
    city: {
      type: 'string',
    },
    phone: {
      type: 'string',
      notEmpty: true
    },
  }
}

const schema = {
  id: '/Game',
  type: 'object',
  required: ['name', 'level', 'address'],
  properties: {
    name: {
      type: 'string',
      notEmpty: true,
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

;(() => {
  const data = {
    name: 'scent',
    level: 10,
    address: {
      city: 'Kyiv',
      phone: '1111',
    }
  }

  const result = validator.validate(data, schema)

  if (result.valid) {
    console.log('Valid')
    console.log(result.instance)
  } else {
    console.log('Errors:')
    console.log(result.errors.join('\n'))
  }
})()