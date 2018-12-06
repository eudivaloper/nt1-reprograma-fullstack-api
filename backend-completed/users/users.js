// const postits = require('../postits/postits.js');

// const users = [
//   {
//     id: 1,
//     name: 'Anna Flávia',
//     email: 'annaflaviac@me.com',
//     password: 'r3pr0gr@m@2018',
//     roles: ['admin'],
//     postits: [postits[0], postits[1]],
//   },
//   {
//     id: 2,
//     name: 'Ana Paula',
//     email: 'ana.paula@reprograma.com.br',
//     password: 'r3pr0gr@m@2017',
//     roles: [],
//     postits: [postits[2]],
//   },
//   {
//     id: 3,
//     name: 'Silvia',
//     email: 'silvia@reprograma.com.br',
//     password: 'r3pr0gr@m@2016',
//     roles: [],
//   },
//   {
//     id: 4,
//     name: 'Administrador',
//     email: 'admin@email.com',
//     password: '123456',
//     roles: ['admin'],
//     postits: []
//   }
// ];

// module.exports = users;

// coloca a dependência do mongoose
var mongoose = require("mongoose");
// cada schema equivale a uma coleção
var Schema = mongoose.Schema;

// crio uma nova coleção
let UserSchema = new Schema(
  // coloco os campos que eu quero e consigo falar os tipos de dados
  {
    // identifico que o _id, será o id gerado pelo banco
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    name: { type: String },
    phone: { type: String },
    email: { type: String, unique: true },
    password: { type: String }
  },
  // identifico a minha coleção e não quero fazer o versionamento
  {
    collection: "users",
    versionKey: false,
    toObject: {
      virtuals: true
    },
    toJSON: {
      virtuals: true
    }
  }
);

UserSchema.virtual("id").get(function() {
  return this._id;
});

// exporto este módulo
let users = mongoose.model("users", UserSchema);

module.exports = users;
