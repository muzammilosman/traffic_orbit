# Transport Efficiency

The application is built using NodeJS with Express framework  to decide the efficient route and transport between two points.

## Running the application

The dependencies are to be installed after cloning or unzipping the application, then run the application with the inputs in **input.txt** (Input File) in the desired format.

```sh
$ npm install
$ node geektrust.js input.txt
```

The output will be displayed in the required format in the **server console**.

> **Note**: The application needs to be restarted if the input values in the input.txt file are changed.

### Input

The input is taken in a text(.txt) file which is in the root directory of the application. We have a ```input.txt``` file through which we pass input values in the format:
```
<WEATHER> <ORBIT_1_TRAFFIC_SPEED> <ORBIT_2_TRAFFIC_SPEED>
```
A few input examples are
```
RAINY 40 25
SUNNY 12 10
```
### Output

When the input values are set and the application is started, the output can be obtained in the **server console**.

#### Output format:

```
<VEHICLE_NAME> <ORBIT_NO>
```
Output examples:
```
CAR ORBIT2
TUKTUK ORBIT1
```

### Reference

The requirement for the application could be found here: [Traffic efficiency](https://www.geektrust.in/coding-problem/backend/traffic)