Case Builder Tool
===============


This tool is in his alpha phase and not tested yet.

Please use JIRA for any feedback

https://bugtracking.emakina.net/browse/EMAWEBSITETREIZE

Prerequisites
-------------

- [Node.js](http://nodejs.org)


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

