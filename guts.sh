if [ ! -f ./server.crt ] || [ ! -f ./server.pem ]; then
  openssl req -newkey rsa:4096 \
    -x509 \
    -sha256 \
    -days 365 \
    -nodes \
    -out server.crt \
    -keyout server.pem \
    -subj "/C=ZA/CN=Matthew Stead" \
    -batch
fi

docker run -p 8765:8765 gundb/gun
