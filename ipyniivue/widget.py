#!/usr/bin/env python
# coding: utf-8

# Copyright (c) anthony.
# Distributed under the terms of the Modified BSD License.

"""
TODO: Add module docstring
"""

from ipywidgets import DOMWidget, ValueWidget, register
from traitlets import Unicode, List, Int
from .traits import Volume

from ._frontend import module_name, module_version

@register
class Niivue(DOMWidget, ValueWidget):
    _model_name = Unicode('NiivueModel').tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)

    _view_name = Unicode('NiivueView').tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)

    volumes = List(trait=Volume, default_value=[]).tag(sync=True)
    height = Int(default_value=300).tag(sync=True)

    def __init__(self):
        super(Niivue, self).__init__()

    def load_volumes(self, volumes):
        self.volumes = volumes

    def set_height(self, height):
        self.height = height
