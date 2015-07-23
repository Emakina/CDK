Emakina Case Development Kit
============================


This tool is in his alpha phase and not tested yet.

Please use JIRA 

Prerequisites
-------------

- [Node.js](http://nodejs.org)

Please note that this tool is using GRUNT, LESS and JADES

Getting Started
---------------

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot

git clone https://git.emakina.net/scm/eg/cdk.git
cd emakina-case builder

# Install NPM dependencies

npm install

# Initialise the required lib elements

grunt init

```

Using the builder
-----------------

Compiling sources

```bash
grunt
```

Start local server & watcher

```bash
grunt serve
```

Start Ing Demo 

```bash
grunt serve --source=samples/ing
```

Export dist in zip file

```bash
grunt export
```


Files structure
-----------------

###/src 

Source code of your case

##### case.json

Config file, please rename your case.

##### main.jade
Main jade file

##### main.js
Javascript...

##### main.less
Less file...

##### /assets
Image assets folder for your case


### /lib

Global lib used by Emakina website.
Please do not change it.

###/dist

Final compiled files


###/samples

Several integrated sample case

```bash
grunt serve --source=samples/template
grunt serve --source=samples/ing

```


