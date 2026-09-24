# Welcome to RSVIM Documentation!

### Setup

To setup local environment, please install below dependencies:

1. Install [mise](https://github.com/jdx/mise).
2. Run `mise i` to install python, node and other npm cli tools.
3. Run `npm i` to install npm dependencies, including docusaurus.

### Development

- To start local service, please run command `npm start`.
- To build production artifacts, please run command `npm run build`.
- To format source code and docs, please run `prettier -w .`.
- To sync API docs from `rsvim`, please follow below steps:
  1. Clone `rsvim` repo in the sibling directory under the same parent directory as _this_ repo.
  2. Run the `./sync.py` script to sync all API docs.
- To tag a version, please run command: `npm run docusaurus docs:version 0.1.0` (see [Docusaurus - Versioning](https://docusaurus.io/docs/versioning)).
- To create SVG image, please use [draw.io desktop](https://github.com/jgraph/drawio-desktop/releases).
