# kickerDC - The Kicker Dash Cam


## Todo

*Tracker*  
- create haar-file for open-cv
- consume haar-file and track position

*Statistics*    
- create statistics for defense / offense

*Hardware*
- use photoelectric sensor to trace goals
    - Sharp GP2Y0D810Z0F
    - https://github.com/rwaldron/johnny-five/wiki/Motion
- create score board
    - Common Anode 7-segment LED display
- create User PinPad to log users in

*Software*
- create WebFrontend for statistics
- create API-Backend to collect data
- create Ball-Tracker-Service



## Material

*Tutorial for Ball Detection*    
http://profs.scienze.univr.it/~bloisi/tutorial/balldetection.html

*Video-Face-Detection with nodeJS*    
https://github.com/drejkim/face-detection-node-opencv

*Hosting*  
http://kb.sloppy.io

## Contribution

- KEEP IT STUPID SIMPLE !!!
- clean code as good as possible :)
- function first / basic security

## Dependencies

Beside the needed node modules collected in the `package.json` you need `MongoDB`.

## Server

To start se server use the `server.bin`. It will a create a nodemon server with the port `8080` and start your `MongoDB`. The collected data of `MongoDb` will be stored in the project folder in `./mongo-data/`

### Start server and MongoDB in docker
```bash
docker-compose up
```
App is listening on http://localhost:8081
