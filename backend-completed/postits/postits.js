// const postits = [
//   {
//     id: 1,
//     title: 'Tarefas de casa',
//     description: 'Lavar roupa\n Lavar louça \n Ir ao mercado'
//   },
//   {
//     id: 2,
//     title: 'Lista de mercado',
//     description: 'Arroz\n Feijão\n Milho'
//   },
//   {
//     id: 3,
//     title: 'Estudar para prova',
//     description: 'Ler livro "Os segredos do Ninja Javascript"'
//   }
// ];
// module.exports = postits;

// coloca a dependência do mongoose
var mongoose = require("mongoose");
// cada schema equivale a uma coleção
var Schema = mongoose.Schema;

// crio uma nova coleção
let PostitSchema = new Schema(
  // coloco os campos que eu quero e consigo falar os tipos de dados
  {
    // identifico que o _id, será o id gerado pelo banco
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    title: { type: String },
    description: { type: String }
  },
  // identifico a minha coleção e não quero fazer o versionamento
  {
    collection: "postits",
    versionKey: false,
    toObject: {
      virtuals: true
    },
    toJSON: {
      virtuals: true
    }
  }
);

PostitSchema.virtual("id").get(function() {
  return this._id;
});

// exporto este módulo
let postits = mongoose.model("postits", PostitSchema);

module.exports = postits;
