// https://gist.github.com/derzorngottes/3b57edc1f996dddcab25

// Reference **config.js** from your user directory - such as `~/.ssh/webassets.js`, which allows everyone in a team to have the same configuration while potentially having distinctly unique values for each of the variables.

// A third-party way of setting all this up is to use [dotenv](https://github.com/motdotla/dotenv).
// The developers are Followers of the [12-Factor App](https://12factor.net)

// When it comes to deployment, you can apply all these values as part of your CI process (Settings > Environment Variables).
// Assigning these values would then be as:

// ```
//     var mykey = process.env.MY_KEY || config.MY_KEY;
//     var secretkey = process.env.SECRET_KEY || config.SECRET_KEY;
// ```
// Alternatively:

// ```
//     var mykey = 'some-default-string';
//     var env = process.env.NODE_ENV || 'development';

//     if (env === 'development') {
//         mykey = config.MY_KEY;
//         ...
//     }
//     if (env === 'production') {
//         mykey = process.env.MY_KEY;
//         ...
//     }
// ```