// This file overwrites the stock UV config.js

self.__uv$config = {
    prefix: "/ocu/service/",
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: "/ocu/uv.handler.js",
    client: "/ocu/uv.client.js",
    bundle: "/ocu/uv.bundle.js",
    config: "/ocu/uv.config.js",
    sw: "/ocu/uv.sw.js",
  };