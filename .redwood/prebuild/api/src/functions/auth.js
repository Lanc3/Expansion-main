import { DbAuthHandler } from '@redwoodjs/auth-dbauth-api';
import { db } from "../lib/db";
import { sendPasswordResetEmail } from "../lib/email";
export const handler = async (event, context) => {
  const forgotPasswordOptions = {
    handler: async user => {
      await sendPasswordResetEmail({
        to: user.email,
        resetToken: user.resetToken
      });
      return user;
    },
    // How long the resetToken is valid for, in seconds (default is 24 hours)
    expires: 60 * 60 * 24,
    errors: {
      // for security reasons you may want to be vague here rather than expose
      // the fact that the email address wasn't found (prevents fishing for
      // valid email addresses)
      usernameNotFound: 'Username not found',
      // if the user somehow gets around client validation
      usernameRequired: 'Username is required'
    }
  };
  const loginOptions = {
    // handler() is called after finding the user that matches the
    // username/password provided at login, but before actually considering them
    // logged in. The `user` argument will be the user in the database that
    // matched the username/password.
    //
    // If you want to allow this user to log in simply return the user.
    //
    // If you want to prevent someone logging in for another reason (maybe they
    // didn't validate their email yet), throw an error and it will be returned
    // by the `logIn()` function from `useAuth()` in the form of:
    // `{ message: 'Error message' }`
    handler: user => {
      return user;
    },
    errors: {
      usernameOrPasswordMissing: 'Both username and password are required',
      usernameNotFound: 'Username ${username} not found',
      // For security reasons you may want to make this the same as the
      // usernameNotFound error so that a malicious user can't use the error
      // to narrow down if it's the username or password that's incorrect
      incorrectPassword: 'Incorrect password for ${username}'
    },
    // How long a user will remain logged in, in seconds
    expires: 60 * 60 * 24 * 365 * 10
  };
  const resetPasswordOptions = {
    // handler() is invoked after the password has been successfully updated in
    // the database. Returning anything truthy will automatically log the user
    // in. Return `false` otherwise, and in the Reset Password page redirect the
    // user to the login page.
    handler: _user => {
      return true;
    },
    // If `false` then the new password MUST be different from the current one
    allowReusedPassword: true,
    errors: {
      // the resetToken is valid, but expired
      resetTokenExpired: 'resetToken is expired',
      // no user was found with the given resetToken
      resetTokenInvalid: 'resetToken is invalid',
      // the resetToken was not present in the URL
      resetTokenRequired: 'resetToken is required',
      // new password is the same as the old password (apparently they did not forget it)
      reusedPassword: 'Must choose a new password'
    }
  };
  const signupOptions = {
    // Whatever you want to happen to your data on new user signup. Redwood will
    // check for duplicate usernames before calling this handler. At a minimum
    // you need to save the `username`, `hashedPassword` and `salt` to your
    // user table. `userAttributes` contains any additional object members that
    // were included in the object given to the `signUp()` function you got
    // from `useAuth()`.
    //
    // If you want the user to be immediately logged in, return the user that
    // was created.
    //
    // If this handler throws an error, it will be returned by the `signUp()`
    // function in the form of: `{ error: 'Error message' }`.
    //
    // If this returns anything else, it will be returned by the
    // `signUp()` function in the form of: `{ message: 'String here' }`.
    handler: ({
      username,
      hashedPassword,
      salt,
      userAttributes
    }) => {
      return db.user.create({
        data: {
          email: username,
          hashedPassword: hashedPassword,
          salt: salt
          // name: userAttributes.name
        }
      });
    },

    // Include any format checks for password here. Return `true` if the
    // password is valid, otherwise throw a `PasswordValidationError`.
    // Import the error along with `DbAuthHandler` from `@redwoodjs/api` above.
    passwordValidation: _password => {
      return true;
    },
    errors: {
      // `field` will be either "username" or "password"
      fieldMissing: '${field} is required',
      usernameTaken: 'Username `${username}` already in use'
    }
  };
  const authHandler = new DbAuthHandler(event, context, {
    // Provide prisma db client
    db: db,
    // The name of the property you'd call on `db` to access your user table.
    // i.e. if your Prisma model is named `User` this value would be `user`, as in `db.user`
    authModelAccessor: 'user',
    // A map of what dbAuth calls a field to what your database calls it.
    // `id` is whatever column you use to uniquely identify a user (probably
    // something like `id` or `userId` or even `email`)
    authFields: {
      id: 'id',
      username: 'email',
      hashedPassword: 'hashedPassword',
      salt: 'salt',
      resetToken: 'resetToken',
      resetTokenExpiresAt: 'resetTokenExpiresAt'
    },
    // Specifies attributes on the cookie that dbAuth sets in order to remember
    // who is logged in. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies
    cookie: {
      HttpOnly: true,
      Path: '/',
      SameSite: 'Strict',
      Secure: process.env.NODE_ENV !== 'development'

      // If you need to allow other domains (besides the api side) access to
      // the dbAuth session cookie:
      // Domain: 'example.com',
    },

    forgotPassword: forgotPasswordOptions,
    login: loginOptions,
    resetPassword: resetPasswordOptions,
    signup: signupOptions
  });
  return await authHandler.invoke();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEYkF1dGhIYW5kbGVyIiwiZGIiLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsIiwiaGFuZGxlciIsImV2ZW50IiwiY29udGV4dCIsImZvcmdvdFBhc3N3b3JkT3B0aW9ucyIsInVzZXIiLCJ0byIsImVtYWlsIiwicmVzZXRUb2tlbiIsImV4cGlyZXMiLCJlcnJvcnMiLCJ1c2VybmFtZU5vdEZvdW5kIiwidXNlcm5hbWVSZXF1aXJlZCIsImxvZ2luT3B0aW9ucyIsInVzZXJuYW1lT3JQYXNzd29yZE1pc3NpbmciLCJpbmNvcnJlY3RQYXNzd29yZCIsInJlc2V0UGFzc3dvcmRPcHRpb25zIiwiX3VzZXIiLCJhbGxvd1JldXNlZFBhc3N3b3JkIiwicmVzZXRUb2tlbkV4cGlyZWQiLCJyZXNldFRva2VuSW52YWxpZCIsInJlc2V0VG9rZW5SZXF1aXJlZCIsInJldXNlZFBhc3N3b3JkIiwic2lnbnVwT3B0aW9ucyIsInVzZXJuYW1lIiwiaGFzaGVkUGFzc3dvcmQiLCJzYWx0IiwidXNlckF0dHJpYnV0ZXMiLCJjcmVhdGUiLCJkYXRhIiwicGFzc3dvcmRWYWxpZGF0aW9uIiwiX3Bhc3N3b3JkIiwiZmllbGRNaXNzaW5nIiwidXNlcm5hbWVUYWtlbiIsImF1dGhIYW5kbGVyIiwiYXV0aE1vZGVsQWNjZXNzb3IiLCJhdXRoRmllbGRzIiwiaWQiLCJyZXNldFRva2VuRXhwaXJlc0F0IiwiY29va2llIiwiSHR0cE9ubHkiLCJQYXRoIiwiU2FtZVNpdGUiLCJTZWN1cmUiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJmb3Jnb3RQYXNzd29yZCIsImxvZ2luIiwicmVzZXRQYXNzd29yZCIsInNpZ251cCIsImludm9rZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9zcmMvZnVuY3Rpb25zL2F1dGguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGJBdXRoSGFuZGxlciB9IGZyb20gJ0ByZWR3b29kanMvYXV0aC1kYmF1dGgtYXBpJ1xuXG5pbXBvcnQgeyBkYiB9IGZyb20gJ3NyYy9saWIvZGInXG5pbXBvcnQgeyBzZW5kUGFzc3dvcmRSZXNldEVtYWlsIH0gZnJvbSAnc3JjL2xpYi9lbWFpbCdcblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBhc3luYyAoZXZlbnQsIGNvbnRleHQpID0+IHtcbiAgY29uc3QgZm9yZ290UGFzc3dvcmRPcHRpb25zID0ge1xuICAgIGhhbmRsZXI6IGFzeW5jICh1c2VyKSA9PiB7XG4gICAgICBhd2FpdCBzZW5kUGFzc3dvcmRSZXNldEVtYWlsKHtcbiAgICAgICAgdG86IHVzZXIuZW1haWwsXG4gICAgICAgIHJlc2V0VG9rZW46IHVzZXIucmVzZXRUb2tlbixcbiAgICAgIH0pXG4gICAgICByZXR1cm4gdXNlclxuICAgIH0sXG5cbiAgICAvLyBIb3cgbG9uZyB0aGUgcmVzZXRUb2tlbiBpcyB2YWxpZCBmb3IsIGluIHNlY29uZHMgKGRlZmF1bHQgaXMgMjQgaG91cnMpXG4gICAgZXhwaXJlczogNjAgKiA2MCAqIDI0LFxuXG4gICAgZXJyb3JzOiB7XG4gICAgICAvLyBmb3Igc2VjdXJpdHkgcmVhc29ucyB5b3UgbWF5IHdhbnQgdG8gYmUgdmFndWUgaGVyZSByYXRoZXIgdGhhbiBleHBvc2VcbiAgICAgIC8vIHRoZSBmYWN0IHRoYXQgdGhlIGVtYWlsIGFkZHJlc3Mgd2Fzbid0IGZvdW5kIChwcmV2ZW50cyBmaXNoaW5nIGZvclxuICAgICAgLy8gdmFsaWQgZW1haWwgYWRkcmVzc2VzKVxuICAgICAgdXNlcm5hbWVOb3RGb3VuZDogJ1VzZXJuYW1lIG5vdCBmb3VuZCcsXG4gICAgICAvLyBpZiB0aGUgdXNlciBzb21laG93IGdldHMgYXJvdW5kIGNsaWVudCB2YWxpZGF0aW9uXG4gICAgICB1c2VybmFtZVJlcXVpcmVkOiAnVXNlcm5hbWUgaXMgcmVxdWlyZWQnLFxuICAgIH0sXG4gIH1cblxuICBjb25zdCBsb2dpbk9wdGlvbnMgPSB7XG4gICAgLy8gaGFuZGxlcigpIGlzIGNhbGxlZCBhZnRlciBmaW5kaW5nIHRoZSB1c2VyIHRoYXQgbWF0Y2hlcyB0aGVcbiAgICAvLyB1c2VybmFtZS9wYXNzd29yZCBwcm92aWRlZCBhdCBsb2dpbiwgYnV0IGJlZm9yZSBhY3R1YWxseSBjb25zaWRlcmluZyB0aGVtXG4gICAgLy8gbG9nZ2VkIGluLiBUaGUgYHVzZXJgIGFyZ3VtZW50IHdpbGwgYmUgdGhlIHVzZXIgaW4gdGhlIGRhdGFiYXNlIHRoYXRcbiAgICAvLyBtYXRjaGVkIHRoZSB1c2VybmFtZS9wYXNzd29yZC5cbiAgICAvL1xuICAgIC8vIElmIHlvdSB3YW50IHRvIGFsbG93IHRoaXMgdXNlciB0byBsb2cgaW4gc2ltcGx5IHJldHVybiB0aGUgdXNlci5cbiAgICAvL1xuICAgIC8vIElmIHlvdSB3YW50IHRvIHByZXZlbnQgc29tZW9uZSBsb2dnaW5nIGluIGZvciBhbm90aGVyIHJlYXNvbiAobWF5YmUgdGhleVxuICAgIC8vIGRpZG4ndCB2YWxpZGF0ZSB0aGVpciBlbWFpbCB5ZXQpLCB0aHJvdyBhbiBlcnJvciBhbmQgaXQgd2lsbCBiZSByZXR1cm5lZFxuICAgIC8vIGJ5IHRoZSBgbG9nSW4oKWAgZnVuY3Rpb24gZnJvbSBgdXNlQXV0aCgpYCBpbiB0aGUgZm9ybSBvZjpcbiAgICAvLyBgeyBtZXNzYWdlOiAnRXJyb3IgbWVzc2FnZScgfWBcbiAgICBoYW5kbGVyOiAodXNlcikgPT4ge1xuICAgICAgcmV0dXJuIHVzZXJcbiAgICB9LFxuXG4gICAgZXJyb3JzOiB7XG4gICAgICB1c2VybmFtZU9yUGFzc3dvcmRNaXNzaW5nOiAnQm90aCB1c2VybmFtZSBhbmQgcGFzc3dvcmQgYXJlIHJlcXVpcmVkJyxcbiAgICAgIHVzZXJuYW1lTm90Rm91bmQ6ICdVc2VybmFtZSAke3VzZXJuYW1lfSBub3QgZm91bmQnLFxuICAgICAgLy8gRm9yIHNlY3VyaXR5IHJlYXNvbnMgeW91IG1heSB3YW50IHRvIG1ha2UgdGhpcyB0aGUgc2FtZSBhcyB0aGVcbiAgICAgIC8vIHVzZXJuYW1lTm90Rm91bmQgZXJyb3Igc28gdGhhdCBhIG1hbGljaW91cyB1c2VyIGNhbid0IHVzZSB0aGUgZXJyb3JcbiAgICAgIC8vIHRvIG5hcnJvdyBkb3duIGlmIGl0J3MgdGhlIHVzZXJuYW1lIG9yIHBhc3N3b3JkIHRoYXQncyBpbmNvcnJlY3RcbiAgICAgIGluY29ycmVjdFBhc3N3b3JkOiAnSW5jb3JyZWN0IHBhc3N3b3JkIGZvciAke3VzZXJuYW1lfScsXG4gICAgfSxcblxuICAgIC8vIEhvdyBsb25nIGEgdXNlciB3aWxsIHJlbWFpbiBsb2dnZWQgaW4sIGluIHNlY29uZHNcbiAgICBleHBpcmVzOiA2MCAqIDYwICogMjQgKiAzNjUgKiAxMCxcbiAgfVxuXG4gIGNvbnN0IHJlc2V0UGFzc3dvcmRPcHRpb25zID0ge1xuICAgIC8vIGhhbmRsZXIoKSBpcyBpbnZva2VkIGFmdGVyIHRoZSBwYXNzd29yZCBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgdXBkYXRlZCBpblxuICAgIC8vIHRoZSBkYXRhYmFzZS4gUmV0dXJuaW5nIGFueXRoaW5nIHRydXRoeSB3aWxsIGF1dG9tYXRpY2FsbHkgbG9nIHRoZSB1c2VyXG4gICAgLy8gaW4uIFJldHVybiBgZmFsc2VgIG90aGVyd2lzZSwgYW5kIGluIHRoZSBSZXNldCBQYXNzd29yZCBwYWdlIHJlZGlyZWN0IHRoZVxuICAgIC8vIHVzZXIgdG8gdGhlIGxvZ2luIHBhZ2UuXG4gICAgaGFuZGxlcjogKF91c2VyKSA9PiB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0sXG5cbiAgICAvLyBJZiBgZmFsc2VgIHRoZW4gdGhlIG5ldyBwYXNzd29yZCBNVVNUIGJlIGRpZmZlcmVudCBmcm9tIHRoZSBjdXJyZW50IG9uZVxuICAgIGFsbG93UmV1c2VkUGFzc3dvcmQ6IHRydWUsXG5cbiAgICBlcnJvcnM6IHtcbiAgICAgIC8vIHRoZSByZXNldFRva2VuIGlzIHZhbGlkLCBidXQgZXhwaXJlZFxuICAgICAgcmVzZXRUb2tlbkV4cGlyZWQ6ICdyZXNldFRva2VuIGlzIGV4cGlyZWQnLFxuICAgICAgLy8gbm8gdXNlciB3YXMgZm91bmQgd2l0aCB0aGUgZ2l2ZW4gcmVzZXRUb2tlblxuICAgICAgcmVzZXRUb2tlbkludmFsaWQ6ICdyZXNldFRva2VuIGlzIGludmFsaWQnLFxuICAgICAgLy8gdGhlIHJlc2V0VG9rZW4gd2FzIG5vdCBwcmVzZW50IGluIHRoZSBVUkxcbiAgICAgIHJlc2V0VG9rZW5SZXF1aXJlZDogJ3Jlc2V0VG9rZW4gaXMgcmVxdWlyZWQnLFxuICAgICAgLy8gbmV3IHBhc3N3b3JkIGlzIHRoZSBzYW1lIGFzIHRoZSBvbGQgcGFzc3dvcmQgKGFwcGFyZW50bHkgdGhleSBkaWQgbm90IGZvcmdldCBpdClcbiAgICAgIHJldXNlZFBhc3N3b3JkOiAnTXVzdCBjaG9vc2UgYSBuZXcgcGFzc3dvcmQnLFxuICAgIH0sXG4gIH1cblxuICBjb25zdCBzaWdudXBPcHRpb25zID0ge1xuICAgIC8vIFdoYXRldmVyIHlvdSB3YW50IHRvIGhhcHBlbiB0byB5b3VyIGRhdGEgb24gbmV3IHVzZXIgc2lnbnVwLiBSZWR3b29kIHdpbGxcbiAgICAvLyBjaGVjayBmb3IgZHVwbGljYXRlIHVzZXJuYW1lcyBiZWZvcmUgY2FsbGluZyB0aGlzIGhhbmRsZXIuIEF0IGEgbWluaW11bVxuICAgIC8vIHlvdSBuZWVkIHRvIHNhdmUgdGhlIGB1c2VybmFtZWAsIGBoYXNoZWRQYXNzd29yZGAgYW5kIGBzYWx0YCB0byB5b3VyXG4gICAgLy8gdXNlciB0YWJsZS4gYHVzZXJBdHRyaWJ1dGVzYCBjb250YWlucyBhbnkgYWRkaXRpb25hbCBvYmplY3QgbWVtYmVycyB0aGF0XG4gICAgLy8gd2VyZSBpbmNsdWRlZCBpbiB0aGUgb2JqZWN0IGdpdmVuIHRvIHRoZSBgc2lnblVwKClgIGZ1bmN0aW9uIHlvdSBnb3RcbiAgICAvLyBmcm9tIGB1c2VBdXRoKClgLlxuICAgIC8vXG4gICAgLy8gSWYgeW91IHdhbnQgdGhlIHVzZXIgdG8gYmUgaW1tZWRpYXRlbHkgbG9nZ2VkIGluLCByZXR1cm4gdGhlIHVzZXIgdGhhdFxuICAgIC8vIHdhcyBjcmVhdGVkLlxuICAgIC8vXG4gICAgLy8gSWYgdGhpcyBoYW5kbGVyIHRocm93cyBhbiBlcnJvciwgaXQgd2lsbCBiZSByZXR1cm5lZCBieSB0aGUgYHNpZ25VcCgpYFxuICAgIC8vIGZ1bmN0aW9uIGluIHRoZSBmb3JtIG9mOiBgeyBlcnJvcjogJ0Vycm9yIG1lc3NhZ2UnIH1gLlxuICAgIC8vXG4gICAgLy8gSWYgdGhpcyByZXR1cm5zIGFueXRoaW5nIGVsc2UsIGl0IHdpbGwgYmUgcmV0dXJuZWQgYnkgdGhlXG4gICAgLy8gYHNpZ25VcCgpYCBmdW5jdGlvbiBpbiB0aGUgZm9ybSBvZjogYHsgbWVzc2FnZTogJ1N0cmluZyBoZXJlJyB9YC5cbiAgICBoYW5kbGVyOiAoeyB1c2VybmFtZSwgaGFzaGVkUGFzc3dvcmQsIHNhbHQsIHVzZXJBdHRyaWJ1dGVzIH0pID0+IHtcbiAgICAgIHJldHVybiBkYi51c2VyLmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBlbWFpbDogdXNlcm5hbWUsXG4gICAgICAgICAgaGFzaGVkUGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLFxuICAgICAgICAgIHNhbHQ6IHNhbHQsXG4gICAgICAgICAgLy8gbmFtZTogdXNlckF0dHJpYnV0ZXMubmFtZVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgLy8gSW5jbHVkZSBhbnkgZm9ybWF0IGNoZWNrcyBmb3IgcGFzc3dvcmQgaGVyZS4gUmV0dXJuIGB0cnVlYCBpZiB0aGVcbiAgICAvLyBwYXNzd29yZCBpcyB2YWxpZCwgb3RoZXJ3aXNlIHRocm93IGEgYFBhc3N3b3JkVmFsaWRhdGlvbkVycm9yYC5cbiAgICAvLyBJbXBvcnQgdGhlIGVycm9yIGFsb25nIHdpdGggYERiQXV0aEhhbmRsZXJgIGZyb20gYEByZWR3b29kanMvYXBpYCBhYm92ZS5cbiAgICBwYXNzd29yZFZhbGlkYXRpb246IChfcGFzc3dvcmQpID0+IHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSxcblxuICAgIGVycm9yczoge1xuICAgICAgLy8gYGZpZWxkYCB3aWxsIGJlIGVpdGhlciBcInVzZXJuYW1lXCIgb3IgXCJwYXNzd29yZFwiXG4gICAgICBmaWVsZE1pc3Npbmc6ICcke2ZpZWxkfSBpcyByZXF1aXJlZCcsXG4gICAgICB1c2VybmFtZVRha2VuOiAnVXNlcm5hbWUgYCR7dXNlcm5hbWV9YCBhbHJlYWR5IGluIHVzZScsXG4gICAgfSxcbiAgfVxuXG4gIGNvbnN0IGF1dGhIYW5kbGVyID0gbmV3IERiQXV0aEhhbmRsZXIoZXZlbnQsIGNvbnRleHQsIHtcbiAgICAvLyBQcm92aWRlIHByaXNtYSBkYiBjbGllbnRcbiAgICBkYjogZGIsXG5cbiAgICAvLyBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgeW91J2QgY2FsbCBvbiBgZGJgIHRvIGFjY2VzcyB5b3VyIHVzZXIgdGFibGUuXG4gICAgLy8gaS5lLiBpZiB5b3VyIFByaXNtYSBtb2RlbCBpcyBuYW1lZCBgVXNlcmAgdGhpcyB2YWx1ZSB3b3VsZCBiZSBgdXNlcmAsIGFzIGluIGBkYi51c2VyYFxuICAgIGF1dGhNb2RlbEFjY2Vzc29yOiAndXNlcicsXG5cbiAgICAvLyBBIG1hcCBvZiB3aGF0IGRiQXV0aCBjYWxscyBhIGZpZWxkIHRvIHdoYXQgeW91ciBkYXRhYmFzZSBjYWxscyBpdC5cbiAgICAvLyBgaWRgIGlzIHdoYXRldmVyIGNvbHVtbiB5b3UgdXNlIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IGEgdXNlciAocHJvYmFibHlcbiAgICAvLyBzb21ldGhpbmcgbGlrZSBgaWRgIG9yIGB1c2VySWRgIG9yIGV2ZW4gYGVtYWlsYClcbiAgICBhdXRoRmllbGRzOiB7XG4gICAgICBpZDogJ2lkJyxcbiAgICAgIHVzZXJuYW1lOiAnZW1haWwnLFxuICAgICAgaGFzaGVkUGFzc3dvcmQ6ICdoYXNoZWRQYXNzd29yZCcsXG4gICAgICBzYWx0OiAnc2FsdCcsXG4gICAgICByZXNldFRva2VuOiAncmVzZXRUb2tlbicsXG4gICAgICByZXNldFRva2VuRXhwaXJlc0F0OiAncmVzZXRUb2tlbkV4cGlyZXNBdCcsXG4gICAgfSxcblxuICAgIC8vIFNwZWNpZmllcyBhdHRyaWJ1dGVzIG9uIHRoZSBjb29raWUgdGhhdCBkYkF1dGggc2V0cyBpbiBvcmRlciB0byByZW1lbWJlclxuICAgIC8vIHdobyBpcyBsb2dnZWQgaW4uIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Nvb2tpZXMjcmVzdHJpY3RfYWNjZXNzX3RvX2Nvb2tpZXNcbiAgICBjb29raWU6IHtcbiAgICAgIEh0dHBPbmx5OiB0cnVlLFxuICAgICAgUGF0aDogJy8nLFxuICAgICAgU2FtZVNpdGU6ICdTdHJpY3QnLFxuICAgICAgU2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyxcblxuICAgICAgLy8gSWYgeW91IG5lZWQgdG8gYWxsb3cgb3RoZXIgZG9tYWlucyAoYmVzaWRlcyB0aGUgYXBpIHNpZGUpIGFjY2VzcyB0b1xuICAgICAgLy8gdGhlIGRiQXV0aCBzZXNzaW9uIGNvb2tpZTpcbiAgICAgIC8vIERvbWFpbjogJ2V4YW1wbGUuY29tJyxcbiAgICB9LFxuXG4gICAgZm9yZ290UGFzc3dvcmQ6IGZvcmdvdFBhc3N3b3JkT3B0aW9ucyxcbiAgICBsb2dpbjogbG9naW5PcHRpb25zLFxuICAgIHJlc2V0UGFzc3dvcmQ6IHJlc2V0UGFzc3dvcmRPcHRpb25zLFxuICAgIHNpZ251cDogc2lnbnVwT3B0aW9ucyxcbiAgfSlcblxuICByZXR1cm4gYXdhaXQgYXV0aEhhbmRsZXIuaW52b2tlKClcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsYUFBYSxRQUFRLDRCQUE0QjtBQUUxRCxTQUFTQyxFQUFFO0FBQ1gsU0FBU0Msc0JBQXNCO0FBRS9CLE9BQU8sTUFBTUMsT0FBTyxHQUFHLE1BQUFBLENBQU9DLEtBQUssRUFBRUMsT0FBTyxLQUFLO0VBQy9DLE1BQU1DLHFCQUFxQixHQUFHO0lBQzVCSCxPQUFPLEVBQUUsTUFBT0ks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