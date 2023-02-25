web-api and recipe-api represent service
shared

recipe API service --> upstream service that provide data (static data)
\*note that in the real world, it is DB

- #! === SHEBANG it is made executable by running chmod+x filename.js

when execute node with a filename, you can run curl [http request port in this case http://127.0.0.1:4000/recipes/42]

web api/ consumer http --- not containing any data but make an outbound request.
