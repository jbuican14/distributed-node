web-api and recipe-api represent service
shared

recipe API service --> upstream service that provide data (static data)
\*note that in the real world, it is DB

- #! === SHEBANG it is made executable by running chmod+x filename.js

when execute node with a filename, you can run curl [http request port in this case http://127.0.0.1:4000/recipes/42]

web api/ consumer http --- not containing any data but make an outbound request.

UPSTREAM
server-gzip.js file is created to create a server and read stream file
we create an empty index.html to test this
run in terminal echo "<html><title>Hello World</title></html>" >> index.html
run another curl
curl http://localhost:1337/ (this will show in terminal)
run another curl (request compressed content and view binary rep)

curl -H 'Accept-Encoding: gzip' http://localhost:1337/ | xxd
curl -H 'Accept-Encoding: gzip' http://localhost:1337/ | gunzip

Generating a self-signed certificate
// this command creates 2 files 1. basic-private-ley.key(private key)
// and basic-certificate.cert
$ mkdir -p ./{recipe-api,shared}/tls
$ openssl req -nodes -new -x509 \
 -keyout recipe-api/tls/basic-private-key.key \
 -out shared/tls/basic-certificate.cert
(org name : bbl)
About create .cert file under tls folder
