let database = [
  {
    username: "ken",
    password: "1234",
    email: "ken@gmail.com",
    isAdmin: true,

    login: function () {
      console.log("Welcome back, " + this.username + "!");
    }
  },
  {
    username: "ana",
    password: "abcd",
    email: "ana@gmail.com",
    isAdmin: false,

    login: function () {
      console.log("Welcome back, " + this.username + "!");
    }
  },
  {
    username: "leo",
    password: "pass",
    email: "leo@gmail.com",
    isAdmin: false,

    login: function () {
      console.log("Welcome back, " + this.username + "!");
    }
  }
];


let newsfeed = [
  {
    username: "ken",
    timeline: "Learning JavaScript today",
    likes: 10,
    comments: ["Great job"]
  },
  {
    username: "ana",
    timeline: "My first post",
    likes: 5,
    comments: ["Welcome"]
  },
  {
    username: "leo",
    timeline: "JavaScript is fun",
    likes: 8,
    comments: ["Cool"]
  }
];

// Login

let enteredUsername = prompt("Enter username:");
let enteredPassword = prompt("Enter password:");

let currentUser = null;

database.forEach(user => {
  if (
    user.username === enteredUsername &&
    user.password === enteredPassword
  ) {
    currentUser = user;
  }
});

    function isUserAdmin(username) {

   database.forEach(function(user) {

    if (user.username === username && user.isAdmin === true) {
      console.log("Admin access granted");
    }

    if (user.username === username && user.isAdmin === false) {
      console.log("Access denied");
    }

  });

}
    




// Full Logic

if (currentUser) {

  currentUser.login();

  let option = prompt(
    "Choose an option:\n" +
    "1. Show all posts\n" +
    "2. Show my posts\n" +
    "3. Add post\n" +
    "4. Like first post\n" +
    "5. Check admin\n" +
    "6. Comment on first post"
  );


  switch (option) {

    // 1. Show all posts
    case "1":
      newsfeed.forEach(function(post) {

      console.log(post.username);
      console.log(post.timeline);
      console.log("Likes:", post.likes);
      console.log("Comments:", post.comments);

      });
      break;


    // 2. Show my posts
    case "2":
      newsfeed.forEach(function(post) {

      if (post.username === currentUser.username) {

        console.log(post.timeline);

      }
      } ) ;
      break;


    // 3. Add post
    case "3":
      
        let newPost = prompt("Write your post:");

        newsfeed.push({
          username: currentUser.username,
          timeline: newPost,
          likes: 0,
          comments: []
        });

        console.log("Post added successfully!");
      

      break;


    // 4. Like first post
    case "4":
      newsfeed[0].likes++;
      console.log("First post liked!");
      break;


    // 5. Admin check
    case "5":
        
      if (currentUser.isAdmin) {
        console.log("Admin access granted");
        console.log("You have full control of the platform.");
      } else {
        console.log("Access denied");
        console.log("You are a regular user.");
      }

      break;


    // 6. Comment first post
    case "6":

      let comment = prompt("Write a comment:");

      newsfeed[0].comments.push(comment);

      console.log("Comment added!");
      break;


    default:
      console.log("Invalid option");
  }

} else {
  console.log("Wrong username or password");
}
