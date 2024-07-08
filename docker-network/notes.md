

# making docker network 

# create a network

docker network create my-net

# list networks

docker network ls

# inspect network

docker network inspect my-net


<!--  -->
network-python-mysql 
# docker network create my-net

 docker run -d --name mysql --env MYSQL_ROOT_PASSWORD="root"  --env MYSQL_DATABASE="userinfo" --network my-net mysql


 # docker run -it --rm --network my-net 61eaed5db708 