docker run --net test_net --name test_client -it -w /app -p 4200:4200 -v C:/Development/Tests/DockerTest15/Client:/app testclient/image bash