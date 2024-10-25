const Ajv = require("ajv");
const ajv = new Ajv();

const bookSchema = {
  type: "object",
  properties: {
    isbn: { type: "string" },
    amazon_url: { type: "string", format: "uri" },
    author: { type: "string" },
    language: { type: "string" },
    pages: { type: "integer", minimum: 1 },
    publisher: { type: "string" },
    title: { type: "string" },
    year: { type: "integer", minimum: 1000, maximum: 2100 },
  },
  required: ["isbn", "title", "author"],
  additionalProperties: false,
};

const validate = ajv.compile(bookSchema);

module.exports = (data) => {
  const valid = validate(data);
  if (!valid) {
    return { valid: false, errors: validate.errors };
  }
  return { valid: true };
};
