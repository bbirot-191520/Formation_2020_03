import config from './config.json5';

function hello(name) {
  //return 'Hello '+ name +' !!!';
  return `${config.message} ${name} !!!`;
}

export { hello };
