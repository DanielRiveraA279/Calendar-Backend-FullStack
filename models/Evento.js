
const { Schema, model } = require('mongoose');

const EventoSchema = Schema({
    title: {
        type: String,
        required: true
    },
    notes: {
        type: String,
    },
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,
    }
});

//renombrar campo _id para mostrar
EventoSchema.method('toJSON', function(){
  const {__v, _id, ...object} =  this.toObject(); //toObject(): referencia a todo el objeto
  object.id = _id; //vamos a hacer que no se llame _id si no id
  return object;
});

module.exports = model('Evento', EventoSchema);


