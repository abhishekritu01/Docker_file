FROM python

WORKDIR /app

COPY ./sql_python_demo.py .

RUN pip install pymysql
RUN pip install cryptography

CMD [ "python", "./sql_python_demo.py" ]    

