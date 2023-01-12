function callbackOnly(callback, response) {
  return response["status"] === "success" ? callback(response["data"]) : "Something went wrong!";
}
