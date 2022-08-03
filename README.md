
# ipyniivue

![example](docs/example.png)
[Niivue](https://github.com/niivue/niivue) in Jupyter

## Installation
```sh
$ git clone https://github.com/anthonyandroulakis/ipyniivue_ts
$ cd ipyniivue_ts
$ pip install -e .
$ jupyter nbextension install --py --symlink --sys-prefix ipyniivue
$ jupyter nbextension enable --py --sys-prefix ipyniivue
$ jupyter labextension develop . --overwrite
```
```
$ jupyter notebook
```
