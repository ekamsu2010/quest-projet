# quest-projet
1- Public cloud & index page (contains the secret word)
- first of all i created EC2 instance on AWS cloud 
- i cloned the repository to my EC2 instance
- ![image](https://user-images.githubusercontent.com/77032376/162129347-b906e606-28e3-45e3-b68f-1c6a4592c9eb.png)
- ![image](https://user-images.githubusercontent.com/77032376/162129963-0cd51442-6ac3-49b5-a126-ded66b9f4db8.png)
- ![image](https://user-images.githubusercontent.com/77032376/162130025-21112d6b-d63d-41a1-9d7e-626244f9b8c3.png)
- after executed all this commandes i finaly got this image.
- ![image](https://user-images.githubusercontent.com/77032376/162130373-d56d0405-1125-4c5e-9217-1dac85e946a8.png)
- 
2-Docker check and Secret Word check 
- to make this step i wrote a Dockerfile and in there i added environment value which is SECRET_WORD  i also expose port 3000

-![image](https://user-images.githubusercontent.com/77032376/162132331-1a4511d3-de68-43e2-891b-a1ab55aa5ca4.png)
-
![image](https://user-images.githubusercontent.com/77032376/162132903-a2fd4600-8a0f-4c84-bc9b-7cb229f23f4c.png)

 ![image](https://user-images.githubusercontent.com/77032376/162133054-15a467f1-1f59-4fd9-bfe6-9d1208e2a7b7.png)
 
 ![image](https://user-images.githubusercontent.com/77032376/162133215-ec9ed279-0d5e-4b97-be74-783f91aaf015.png)
 
![image](https://user-images.githubusercontent.com/77032376/162133342-24d24aed-e6c1-47bc-aac2-c64a4f51067e.png)

- during this question i got a issues : port 3000 was use because in queestion 1 the processus was still running in background. to solve this i killed the processus
- ![image](https://user-images.githubusercontent.com/77032376/162133966-c228d3d9-6e0b-4c22-b703-298e26cfd782.png)

3- Load Balancer check 
- in this step i was not able to solve it but i will show how i tryed.  i took three ways

# setup load balancer with haproxy
- in file docker-compose1.yml in use haproxy image to be in front of different server who consume webapp image and then i exposed port 3000 to external port
- ![image](https://user-images.githubusercontent.com/77032376/162136425-6e4f59f2-d4bf-4d82-9e45-3176c6541917.png)
- in directorie haproxy you will see a file call haproxy.cfg which is a file that haproxy consume to know which server he will deserved 
-  
![image](https://user-images.githubusercontent.com/77032376/162137147-fc6797f9-2b2f-4d13-a72f-11ea6f52753b.png)

- i also added this line in file 000.js to define the port that i want to expose depend on which server webapp is consumed. 
- ![image](https://user-images.githubusercontent.com/77032376/162137934-aac27b92-0888-4b92-af89-43410b1e5db9.png)

![image](https://user-images.githubusercontent.com/77032376/162138016-6ca8dc77-3b29-463e-b884-5cf6ef220d50.png)

- when i execute docker-compose -up i got this but in web page a have nothing
![image](https://user-images.githubusercontent.com/77032376/162140624-90c05f52-ffc2-42bb-8bc2-4811498527d1.png)

![image](https://user-images.githubusercontent.com/77032376/162143373-7cda0443-ae45-4cf1-bcda-c74a4bd24b43.png)


# setup load balancer with nginx proxy

-in file docker-compose2.yml in use ngnix to be proxy in front of different server

![image](https://user-images.githubusercontent.com/77032376/162144230-5122ef04-5a18-4cc2-8f68-bdc46420fcb1.png)

- in directorie nginx you will see a file call default.conf which is a file that nginx consume to know which server he will deserved 

![image](https://user-images.githubusercontent.com/77032376/162145220-e5b59a8f-c6c5-4961-8939-49ad79a90c44.png)

- after this i got a same error

# setup load balancer with nginx proxy
- in this step i did the same that previoly but instead to used image that it already build, i build only one it directely in docker-compose file and then scale up other images
- -in file docker-compose.yml in use ngnix to be proxy in front of different server api that i scale.

![image](https://user-images.githubusercontent.com/77032376/162147869-b4d851c9-30c8-4ef8-b991-103a6ca6a411.png)

-  in directorie conf.d you will see a file call my_conf.conf which is a file that nginx consume to know which server he will deserved 
 ![image](https://user-images.githubusercontent.com/77032376/162148468-b06c214c-ccae-493a-9575-f4a40ee7b273.png)
 
 ![image](https://user-images.githubusercontent.com/77032376/162149712-0c6846d8-a2fd-4b9c-ad31-d6822908fe14.png)
 
 - after this i got a same error

![image](https://user-images.githubusercontent.com/77032376/162150391-5acd7119-d5cb-458b-b5ec-f33b430eb1e4.png)


 


















