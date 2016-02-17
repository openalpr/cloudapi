# coding: utf-8

import sys
from setuptools import setup, find_packages

NAME = "openalpr_api"
VERSION = "1.0.1"



# To install the library, run the following
#
# python setup.py install
#
# prerequisite: setuptools
# http://pypi.python.org/pypi/setuptools

REQUIRES = ["urllib3 >= 1.10", "six >= 1.9", "certifi", "python-dateutil"]

setup(
    name=NAME,
    version=VERSION,
    description="OpenALPR Cloud API",
    author_email="",
    url="",
    keywords=["Swagger", "OpenALPR Cloud API"],
    install_requires=REQUIRES,
    packages=find_packages(),
    include_package_data=True,
    long_description="""\
    
    """
)


