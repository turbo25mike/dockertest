//Setup process

1. Make sure in Docker Settings that you are sharing your directory.

2. Run SetUp.bat

3. Run DevBuildApi.bat

4. In the following line change C:/Development/Tests/DockerTest15 directory to your folder structure.  Run the line in a command prompt

docker run --net test_net --name test_client -it -w /app -p 4200:4200 -v C:/Development/Tests/DockerTest15/Client:/app testclient/image bash

5. Now you are inside test_client image

//run the following lines

npm install

npm start

//done.  Go to localhost:4200 and see your site.