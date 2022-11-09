# GADS2022 COMMUNITY PROJECT - MENTORS MANAGMENT SYSTEM


## Design & Process
### Brief description:  Mshauri - (Mshauri in swahili word from a mentor)
mshauri is a multiplatform multilingual platform for all mentoring models that you need and provides the most affordable pricing in the market.


### List a few main features:
Authentication & Authorization
Add mentor
Add mentee
Add project manager
Search mentors based on location , technology stack, langauge, country, 

 


### List roles of typical users:
a. Admin
b. Mentor
c. Mentee
d. Program  Manager
e. 


## 2a. Writing user personas

Ibrahim is a busy working man who wants to access Mshauri Bank to  can See all mentoring activities of your mentors and mentees and make sure that there are enough funds to pay for her kids' music and sport lessons. She also uses the web site to automate payment of bills and see her credit account balances. Jocelyn wants to save time and money, and she wants a credit card that gives her cash back.


Dominic is a mentor 

## 2b. Writing user stories

Check useful graphics
As a Mentor, I want to Check useful graphics to measure my mentoring program. Engagement reports, detailed meeting lists, graphics, custom reports, check Scheduled meetings, updates, cancellations, meetings notes  at any time of day, so that I am sure not to waste my time.


As a program manger I want to See all mentoring activities of  mentors and mentees.
e.g. Scheduled meetings, updates, cancellations, meetings notes


## 3. Defining SLIs and SLOs

#### userstory                                                           SLI
Check useful graphics  
#### SLO 
1. available 99.95% 
2. 5% of requests complete in under 300 ms
#### SLI
1. Fraction of 200 vs 500 HTTP responses from 
API endpoint measured per day 
2. Time to last byte GET requests measured 
every 10 seconds aggregated per minute  

## 4. Design microservices for your application
A diagram showing your application's microservices and their connections.


# diagram here

## . Designing REST APIs
 services and their resources and operations .

### Service name   
 Account Service
### Collections        
 transaction
### Methods
list
deposit
withdraw
transfer


## 6. Defining storage characteristics
### required storage features

#### Service

#### Structured or Unstructured 

#### SQL or NoSQL

#### Strong or Eventual Consistency

#### Amount of Data (MB, GB, TB, PB, ExB)

#### Read only or Read/Write


## 7. Choosing Google Cloud Storage and Data Services

#### Google Cloud storage products for each service

MongoDB Atlas

## 8a. Defining network characteristics for your services

### Service
Account 

### Internet facing or Internal only

### HTTP

### TCP
Yes
### UDP

### Multiregional?
No

## 8b. Select the load balancers for your services

Google Cloud load balancer product(s) for each service.

### Service , http, TCP(yes), UDP


## 9. Diagramming your network
### diagram that depicts how your services will communicate over the network. Include regions, zones, load balancers, CDN, and DNS if applicable

# Newtwork Diagram here



## 10. Designing reliable, scalable applications
### Even if some service is down, we want the web frontend of our application to be available nearly all the time. We also want the website to be fast with very low latency to users all over the world. On the next slide, draw a diagram that depicts how we can achieve this using Google Cloud services.


##  # Reliable, scalable Diagram here


## 11a. Disaster recovery scenario
### You've deployed for high availability by replicating resources in multiple zones. However, to meet regulatory requirements, you need a plan to recover from a disaster that brings down the entire region. The current architecture is depicted below. On the next slide, create a plan to bring up your application in another region if your main region is down.

 # Disaster recovery scenario diagram

## 11b. Service disaster recovery scenarios 
### Write a high-level list of possible scenarios on the next slide.

### Scenarion one
#### Service 
Ratings Service
#### Scenario
Programmer deleted all ratings accidentally
#### Recovery Point Objective
24 hours
#### Recovery Time Objective
1 hour
#### Priority
Med

### Scenario two 
#### Service 
Orders Service
#### Scenario
Orders database crashes
#### Recovery Point Objective
0 (can’t lose any data)
#### Recovery Time Objective
2 minutes 
#### Priority
High


## 11c. Resource disaster recovery plans
### For Scenarion one
### Resource
Ratings Database
### Backup Strategy
Daily automated backups
### Backup Location
Multi-Regional Cloud Storage Bucket
### Recovery Procedure
Run Restore Script

### For Scenarion two
### Resource
Orders Database
### Backup Strategy
Failover replica plus daily backups
### Backup Location
Multi-zone deployment
### Recovery Procedure
Automated


## 12. Modeling secure Google Cloud services
 ### A diagram  that depicts how you will secure your services. Include firewalls, IAM roles, service accounts and network resources as appropriate.

 # A diagram  that depicts how you will secure your services


## 13. Cost estimating and planning
### Use the pricing calculator to determine and record on the next slide the cost of your microservices. 

### Service name 
Accounts
### Google Cloud Resource
Cloud SQL
### Cost
$574.71/month





We are always open for feedback and collaboration.
week 1
* Ideation - to come up with a Project idea
personas
a.admin - can See all mentoring activities of your mentors and mentees.
b. Mentors - can Check useful graphics to measure your mentoring program. Engagement reports, detailed meeting lists, graphics, custom reports... 

c. Mentees - can be It's possible to create a custom algorithm.You may also pair your mentors and mentees manually. 

MESSAGES & VIDEO CALLS 
How to import my data from my HR system to mshauri? 
Send direct messages or join video calls to explore tools.
Mentornity generates ZOOM and JITSI meeting links automatically.

Let's make your mentoring program effective and measurable.
We provide all solutions and services to start, manage, and evaluate a mentoring program successfully!


* Breakdown your project into tasks
* Report the total number of tasks for the project
* Assign tasks to all te team members
* Plan and scedule stand ups within your team
* Plan a weekly Demo schedule with your Supervisor
* Set up your Github repo for te project

Other weeks
* Sprint planning
* Coding
* Code Review
* Deployment
* Sprint Review

    # Configure GCP

curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install git
sudo npm install pm2 -g

Project in Action - [Jobify](https://www.jobify.live/)

Find the App Useful? [You can always buy me a coffee](paypal:imbugad@gmail.com)

#### Run The App Locally

```sh
npm run install-dependencies
```

- rename .env.temp to .env
- setup values for - MONGO_URL, JWT_SECRET, JWT_LIFETIME

```sh
npm start
```

- visit url http://localhost:3000/
