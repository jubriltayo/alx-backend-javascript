#!/usr/bin/env node

class AppController {
  /**
     * class for App controller
     * @methods:
     * @getHomepage: return 'Hello Holberton School'
    */

  static getHomepage(request, response) {
    response.statusCode = 200;
    return response.send('Hello Holberton School!');
  }
}

export default AppController;
