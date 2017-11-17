# Local IP Proxy

A simple express based proxy server to proxy traffic from your local IP address to a server running on that host machine.
Useful for testing on mobile when you want to connect to your local IP address and have all requests proxied to a local
development server. i.e. `http://192.168.1.99:8888/ -> https://my-project.local/`

## Running the Proxy

Install the dependencies with:

    yarn install

Run the server with:

    yarn start my-project.local

