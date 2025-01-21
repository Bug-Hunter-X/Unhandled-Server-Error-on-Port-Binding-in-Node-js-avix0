# Unhandled Server Error on Port Binding in Node.js

This repository demonstrates a common error in Node.js server applications: the lack of robust error handling when attempting to bind to a port that's already in use.  The provided `server.js` file shows the problematic code, while `serverSolution.js` offers a corrected version with improved error handling.

## Problem

The original code creates a simple HTTP server using the `http` module.  However, if the specified port (3000 in this case) is already occupied by another process, the server will fail to start without providing informative feedback to the user.  The error is essentially swallowed.

## Solution

The improved `serverSolution.js` utilizes the `'error'` event listener on the `server` object. This allows for graceful handling of the port binding error, providing a clear error message and allowing for appropriate actions (e.g., retrying a different port, exiting the process).