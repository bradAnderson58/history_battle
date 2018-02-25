
## About

A "case study" demonstration.

To use:  visit [the site](http://history-brad-two.s3-website-us-east-1.amazonaws.com) and login using the supplied credentials.  Once logged in, you will be presented with a widget for uploading a file.  Do so.  Upon successful upload, a link in the alert will redirect you to a page to view all your data in a table.  Yay.

### Server

This is a Django server I began working on a little while ago.  The main components of the case study are in the `uploads/` directory.  There is also some stuff I was messing around with in the `core/` directory, including the authentication code which is not strictly speaking necessary.  The main things here are:

* `FileUploadView.post` which reads a file from a post request, validates the file, compresses it, saves the compressed file as well as a reference in the database, then returns a response with the reference.
* The `CsvValidator` class which confirms that a given csv file has a header row, and that all the data are valid numbers (except the first row which is a date).
* `KeenDataView.get` retrieves a given file based on the `pk` parameter, decompresses and serializes it using `KeenJsonSerializer`, and returns it.
* `KeenJsonSerializer` decompresses a csv file, converts it to a python dictionary, and serializes it as json.

### Client

This is an Angular 5 app which I began working on in conjunction with the server.  It also has some unnecessary "quiz" related stuff going on, but case the main case study components are in `src/app/file-upload` and `src/app/keen-data`, as well as their respective services in the `src/app/services` directory.

*  the `home` component is basically a TODO right now.  It is the page a logged out user first sees when they navigate to the site.
* Log in logic is handled by the `history-banner` component and the `authentication` service.  Not officially part of the spec but it was already done so I left it in.
* the `dashboard` component is the home screen for a logged in user.  Right now it only has a `file-upload` component on it.  The `file-upload` is designed to be reusable, so we can place it on any page we want.
* `file-upload` component, in conjunction with the service, handles file uploading.  It prevents uploading of non-csv files, but leaves most validation to the server.  It displays alerts for "In Progress", "Success", and "Failure"
* the `keen-data` component uses the route param of the data id to make a GET request to the server for the desired data.  It displays the data in a table.