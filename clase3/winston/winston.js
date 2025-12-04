// IMPORTAMOS WINSTON
import winston from 'winston';

// CREAMOS EL LOGGER
// niveles por defecto de winston
// no olviden que los niveles son declarativos y que a mayor numero menor gravedad
// pueden crear niveles personalizados si lo desean sobreescribiendo este objeto
// en la configuracion del logger
/*const winstonLevels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
};*/

const logger = winston.createLogger({
  // CONSULTEN TODAS LAS OPCIONES DE CONFIGURACION EN LA DOCUMENTACION
  transports:[
    // CADA TRANSPORTE CONTIENE A TODOS LOS NIVELES POR DEBAJO DEL ESPECIFICADO
    new winston.transports.Console({level: 'http'}),
    new winston.transports.File({level: 'error', filename: 'errors.log'})
  ]
});

// CREAMOS EL MIDDLEWARE QUE AGREGA WINSTON AL SERVER
export function addLogger(req, res, next) {
  req.logger = logger;
  next();
}
