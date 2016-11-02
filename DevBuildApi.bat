docker rm test_api -f
docker rm test_db -f
cd Api
docker build -t testapi/image .
docker run --net test_net --name test_db -p 27017:27017 -d mongo
docker run --net test_net --name test_api -p 5000:5000 -d testapi/image