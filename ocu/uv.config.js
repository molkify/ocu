self.__uv$config = {
  prefix: '/service/',
  bare:'https://superfat.yourmom.eu.org',
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: '/ocu/uv.handler.js',
  bundle: '/ocu/uv.bundle.js',
  config: '/ocu/uv.config.js',
  sw: '/ocu/uv.sw.js',
};