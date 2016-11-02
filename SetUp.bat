call TearDown.bat
docker network create test_net
cd Api
docker build -t testapi/image .
cd ../Client
docker build -t testclient/image .