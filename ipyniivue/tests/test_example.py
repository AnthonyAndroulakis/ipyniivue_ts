#!/usr/bin/env python
# coding: utf-8

# Copyright (c) Niivue.
# Distributed under the terms of the Modified BSD License.

import pytest

from ..widget import Niivue


def test_example_creation_blank():
    w = Niivue()
    assert w.text_height == 0.06
