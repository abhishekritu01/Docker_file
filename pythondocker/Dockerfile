# -----------------01 example of docker volume 
# FROM python:3.7


# WORKDIR /myapp

# COPY ./myapp01.py .

# CMD [ "python" , "myapp01.py" ]


# -----------------02 example of docker bind mount -------------

# FROM python:3.7

# WORKDIR /myapp

# COPY ./myapp_bind_mount.py .
# COPY ./servers.txt .

# CMD [ "python" , "myapp_bind_mount.py" ]


# # -----------------03 working with api -------------

# FROM python:3.7

# WORKDIR /myapp

# COPY ./api_demo.py .

# RUN pip install requests

# CMD [ "python" , "api_demo.py" ]



# # -----------------03 working local database and container  -------------

# FROM python:3.7

# WORKDIR /myapp

# COPY ./sql_python_demo.py .

# RUN pip install pymsql
# CMD [ "python" , "sql_python_demo.py" ] 



# -----------------03 working local database and container  -------------


# Use the official Python 3.7 image from the Docker Hub
FROM python:3.7

# Set the working directory to /myapp
WORKDIR /myapp

# Copy the current directory contents into the container at /myapp
COPY ./sql_python_demo.py .

# Install the necessary packages
RUN pip install pymysql
RUN pip install cryptography

# Run the sql_python_demo.py script
CMD ["python", "./sql_python_demo.py"]
