# r-ng2-firebase-template

<p>
   <img src="https://github.com/rajjejosefsson/ng2-firebase-template/blob/master/src/assets/home.png" width="250"/>
  
   <img src="https://github.com/rajjejosefsson/ng2-firebase-template/blob/master/src/assets/login.png" width="250"/>

   <img src="https://github.com/rajjejosefsson/ng2-firebase-template/blob/master/src/assets/spinner.png" width="250"/>

   <img src="https://github.com/rajjejosefsson/ng2-firebase-template/blob/master/src/assets/md-card.png" width="250"/>

</p>



## Usage

To download and use this project you need to have the following installed on your machine

* [NodeJs] (http://nodejs.org)

* Create an account with [Firebase](http://firebase.google.com)

* Enable Sign-in providers for Email/Password in Firebase

When you have completed the above processes, run:
You can download this project directly or clone it using git
run the following command
```
 git clone https://github.com/rajjejosefsson/ng2-firebase-template
`````

After downloading/cloning it
Change directory and run npm install
Run
```
cd r-ng2-template
npm install
```
to pull in the project dependencies.

After that, you need to update the `app.module.ts` located in `src\app\app.module.ts` to your own firebase credentials that you obtain in the firebase webpage console for the project
that will look like this:

```
<script src="https://www.gstatic.com/firebasejs/3.3.0/firebase.js"></script>
<script>
  // Initialize Firebase
  // TODO: Replace with your project's customized code snippet
  var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
  };
  firebase.initializeApp(config);
</script>
```

That's all, you are good to go.
