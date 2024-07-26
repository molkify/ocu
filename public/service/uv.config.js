// This file overwrites the stock UV config.js

self.__uv$config = {
    prefix: "/ocu/service/",
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: "/service/uv.handler.js",
    client: "/service/uv.client.js",
    bundle: "/service/uv.bundle.js",
    config: "/service/uv.config.js",
    sw: "/service/uv.sw.js",
};