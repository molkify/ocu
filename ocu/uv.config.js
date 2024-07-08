self.__uv$config = {
  prefix: '/ocu/service',
  bare:'https://skibzy.global.ssl.fastly.net/bare/',
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: '/ocu/uv.handler.js',
  bundle: '/ocu/uv.bundle.js',
  config: '/ocu/uv.config.js',
  sw: '/ocu/uv.sw.js',
};