#!/bin/bash

# Postgres Docker Initialization Script
#
# Creates dev and test databases within Docker container, useful for
# empowering simultaneous dev server and test runs in local environment.
#
# Adapted from the approach outlined here:
# https://github.com/mrts/docker-postgresql-multiple-databases
#
# NOTE: This script is intended to be mounted under /docker-entrypoint-initdb.d/
# within the db container. Scripts in this location will be sourced on first
# image build -- they will only be sourced on a 'naked' database instance,
# meaning only the first boot of a Postgres container on a clean Docker volume.

set -e
set -u

function create_database_with_creds() {
    local database=$1
    echo "Creating Database/Schema"
    echo "-> Database: ${database}"
    echo "-> User: ${POSTGRES_USER}"
    echo "-> Password: ${POSTGRES_PASSWORD}"
    psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
        CREATE DATABASE $database;
        GRANT ALL PRIVILEGES ON DATABASE $database TO $POSTGRES_USER;
EOSQL
    echo "Created"
}

create_database_with_creds "banana_stand_dev"
create_database_with_creds "banana_stand_test"

echo "Done"
