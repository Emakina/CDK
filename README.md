Case Builder Tool
=================


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
# Emakina / Marcom for user permission

git clone https://git.emakina.net/projects/EG/repos/website-case-builder emakina-case-builder

# OR unzip emakina-case-builder.zip

cd emakina-case builder

# Install NPM dependencies

npm install
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

Start demo 

```bash
grunt serve --source=demo
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


###/demo

Integrated demo case

```bash
grunt serve --source=demo
```


