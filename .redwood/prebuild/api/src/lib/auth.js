import _Array$isArray from "@babel/runtime-corejs3/core-js/array/is-array";
import _includesInstanceProperty from "@babel/runtime-corejs3/core-js/instance/includes";
import _someInstanceProperty from "@babel/runtime-corejs3/core-js/instance/some";
import { AuthenticationError, ForbiddenError, context } from '@redwoodjs/graphql-server';
import { db } from './db';

/**
 * The session object sent in as the first argument to getCurrentUser() will
 * have a single key `id` containing the unique ID of the logged in user
 * (whatever field you set as `authFields.id` in your auth function config).
 * You'll need to update the call to `db` below if you use a different model
 * name or unique field name, for example:
 *
 *   return await db.profile.findUnique({ where: { email: session.id } })
 *                   ───┬───                       ──┬──
 *      model accessor ─┘      unique id field name ─┘
 *
 * !! BEWARE !! Anything returned from this function will be available to the
 * client--it becomes the content of `currentUser` on the web side (as well as
 * `context.currentUser` on the api side). You should carefully add additional
 * fields to the `select` object below once you've decided they are safe to be
 * seen if someone were to open the Web Inspector in their browser.
 */
export const getCurrentUser = async session => {
  if (!session || typeof session.id !== 'number') {
    throw new Error('Invalid session');
  }
  return await db.user.findUnique({
    where: {
      id: session.id
    },
    select: {
      id: true,
      roles: true
    }
  });
};

/**
 * The user is authenticated if there is a currentUser in the context
 *
 * @returns {boolean} - If the currentUser is authenticated
 */
export const isAuthenticated = () => {
  return !!context.currentUser;
};

/**
 * When checking role membership, roles can be a single value, a list, or none.
 * You can use Prisma enums too (if you're using them for roles), just import your enum type from `@prisma/client`
 */

/**
 * Checks if the currentUser is authenticated (and assigned one of the given roles)
 *
 * @param roles: {@link AllowedRoles} - Checks if the currentUser is assigned one of these roles
 *
 * @returns {boolean} - Returns true if the currentUser is logged in and assigned one of the given roles,
 * or when no roles are provided to check against. Otherwise returns false.
 */
export const hasRole = roles => {
  if (!isAuthenticated()) {
    return false;
  }
  const currentUserRoles = context.currentUser?.roles;
  if (typeof roles === 'string') {
    if (typeof currentUserRoles === 'string') {
      // roles to check is a string, currentUser.roles is a string
      return currentUserRoles === roles;
    } else if (_Array$isArray(currentUserRoles)) {
      // roles to check is a string, currentUser.roles is an array
      return currentUserRoles?.some(allowedRole => roles === allowedRole);
    }
  }
  if (_Array$isArray(roles)) {
    if (_Array$isArray(currentUserRoles)) {
      // roles to check is an array, currentUser.roles is an array
      return currentUserRoles?.some(allowedRole => _includesInstanceProperty(roles).call(roles, allowedRole));
    } else if (typeof currentUserRoles === 'string') {
      // roles to check is an array, currentUser.roles is a string
      return _someInstanceProperty(roles).call(roles, allowedRole => currentUserRoles === allowedRole);
    }
  }

  // roles not found
  return false;
};

/**
 * Use requireAuth in your services to check that a user is logged in,
 * whether or not they are assigned a role, and optionally raise an
 * error if they're not.
 *
 * @param roles: {@link AllowedRoles} - When checking role membership, these roles grant access.
 *
 * @returns - If the currentUser is authenticated (and assigned one of the given roles)
 *
 * @throws {@link AuthenticationError} - If the currentUser is not authenticated
 * @throws {@link ForbiddenError} If the currentUser is not allowed due to role permissions
 *
 * @see https://github.com/redwoodjs/redwood/tree/main/packages/auth for examples
 */
export const requireAuth = ({
  roles
} = {}) => {
  if (!isAuthenticated()) {
    throw new AuthenticationError("You don't have permission to do that.");
  }
  if (roles && !hasRole(roles)) {
    throw new ForbiddenError("You don't have access to do that.");
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBdXRoZW50aWNhdGlvbkVycm9yIiwiRm9yYmlkZGVuRXJyb3IiLCJjb250ZXh0IiwiZGIiLCJnZXRDdXJyZW50VXNlciIsInNlc3Npb24iLCJpZCIsIkVycm9yIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsInNlbGVjdCIsInJvbGVzIiwiaXNBdXRoZW50aWNhdGVkIiwiY3VycmVudFVzZXIiLCJoYXNSb2xlIiwiY3VycmVudFVzZXJSb2xlcyIsIl9BcnJheSRpc0FycmF5Iiwic29tZSIsImFsbG93ZWRSb2xlIiwiX2luY2x1ZGVzSW5zdGFuY2VQcm9wZXJ0eSIsImNhbGwiLCJfc29tZUluc3RhbmNlUHJvcGVydHkiLCJyZXF1aXJlQXV0aCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9zcmMvbGliL2F1dGguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXV0aGVudGljYXRpb25FcnJvciwgRm9yYmlkZGVuRXJyb3IgfSBmcm9tICdAcmVkd29vZGpzL2dyYXBocWwtc2VydmVyJ1xuXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4vZGInXG5cbi8qKlxuICogVGhlIHNlc3Npb24gb2JqZWN0IHNlbnQgaW4gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIGdldEN1cnJlbnRVc2VyKCkgd2lsbFxuICogaGF2ZSBhIHNpbmdsZSBrZXkgYGlkYCBjb250YWluaW5nIHRoZSB1bmlxdWUgSUQgb2YgdGhlIGxvZ2dlZCBpbiB1c2VyXG4gKiAod2hhdGV2ZXIgZmllbGQgeW91IHNldCBhcyBgYXV0aEZpZWxkcy5pZGAgaW4geW91ciBhdXRoIGZ1bmN0aW9uIGNvbmZpZykuXG4gKiBZb3UnbGwgbmVlZCB0byB1cGRhdGUgdGhlIGNhbGwgdG8gYGRiYCBiZWxvdyBpZiB5b3UgdXNlIGEgZGlmZmVyZW50IG1vZGVsXG4gKiBuYW1lIG9yIHVuaXF1ZSBmaWVsZCBuYW1lLCBmb3IgZXhhbXBsZTpcbiAqXG4gKiAgIHJldHVybiBhd2FpdCBkYi5wcm9maWxlLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBlbWFpbDogc2Vzc2lvbi5pZCB9IH0pXG4gKiAgICAgICAgICAgICAgICAgICDilIDilIDilIDilKzilIDilIDilIAgICAgICAgICAgICAgICAgICAgICAgIOKUgOKUgOKUrOKUgOKUgFxuICogICAgICBtb2RlbCBhY2Nlc3NvciDilIDilJggICAgICB1bmlxdWUgaWQgZmllbGQgbmFtZSDilIDilJhcbiAqXG4gKiAhISBCRVdBUkUgISEgQW55dGhpbmcgcmV0dXJuZWQgZnJvbSB0aGlzIGZ1bmN0aW9uIHdpbGwgYmUgYXZhaWxhYmxlIHRvIHRoZVxuICogY2xpZW50LS1pdCBiZWNvbWVzIHRoZSBjb250ZW50IG9mIGBjdXJyZW50VXNlcmAgb24gdGhlIHdlYiBzaWRlIChhcyB3ZWxsIGFzXG4gKiBgY29udGV4dC5jdXJyZW50VXNlcmAgb24gdGhlIGFwaSBzaWRlKS4gWW91IHNob3VsZCBjYXJlZnVsbHkgYWRkIGFkZGl0aW9uYWxcbiAqIGZpZWxkcyB0byB0aGUgYHNlbGVjdGAgb2JqZWN0IGJlbG93IG9uY2UgeW91J3ZlIGRlY2lkZWQgdGhleSBhcmUgc2FmZSB0byBiZVxuICogc2VlbiBpZiBzb21lb25lIHdlcmUgdG8gb3BlbiB0aGUgV2ViIEluc3BlY3RvciBpbiB0aGVpciBicm93c2VyLlxuICovXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudFVzZXIgPSBhc3luYyAoc2Vzc2lvbikgPT4ge1xuICBpZiAoIXNlc3Npb24gfHwgdHlwZW9mIHNlc3Npb24uaWQgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHNlc3Npb24nKVxuICB9XG5cbiAgcmV0dXJuIGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgaWQ6IHNlc3Npb24uaWQgfSxcbiAgICBzZWxlY3Q6IHsgaWQ6IHRydWUsIHJvbGVzOiB0cnVlIH0sXG4gIH0pXG59XG5cbi8qKlxuICogVGhlIHVzZXIgaXMgYXV0aGVudGljYXRlZCBpZiB0aGVyZSBpcyBhIGN1cnJlbnRVc2VyIGluIHRoZSBjb250ZXh0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IC0gSWYgdGhlIGN1cnJlbnRVc2VyIGlzIGF1dGhlbnRpY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGlzQXV0aGVudGljYXRlZCA9ICgpID0+IHtcbiAgcmV0dXJuICEhY29udGV4dC5jdXJyZW50VXNlclxufVxuXG4vKipcbiAqIFdoZW4gY2hlY2tpbmcgcm9sZSBtZW1iZXJzaGlwLCByb2xlcyBjYW4gYmUgYSBzaW5nbGUgdmFsdWUsIGEgbGlzdCwgb3Igbm9uZS5cbiAqIFlvdSBjYW4gdXNlIFByaXNtYSBlbnVtcyB0b28gKGlmIHlvdSdyZSB1c2luZyB0aGVtIGZvciByb2xlcyksIGp1c3QgaW1wb3J0IHlvdXIgZW51bSB0eXBlIGZyb20gYEBwcmlzbWEvY2xpZW50YFxuICovXG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBjdXJyZW50VXNlciBpcyBhdXRoZW50aWNhdGVkIChhbmQgYXNzaWduZWQgb25lIG9mIHRoZSBnaXZlbiByb2xlcylcbiAqXG4gKiBAcGFyYW0gcm9sZXM6IHtAbGluayBBbGxvd2VkUm9sZXN9IC0gQ2hlY2tzIGlmIHRoZSBjdXJyZW50VXNlciBpcyBhc3NpZ25lZCBvbmUgb2YgdGhlc2Ugcm9sZXNcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBSZXR1cm5zIHRydWUgaWYgdGhlIGN1cnJlbnRVc2VyIGlzIGxvZ2dlZCBpbiBhbmQgYXNzaWduZWQgb25lIG9mIHRoZSBnaXZlbiByb2xlcyxcbiAqIG9yIHdoZW4gbm8gcm9sZXMgYXJlIHByb3ZpZGVkIHRvIGNoZWNrIGFnYWluc3QuIE90aGVyd2lzZSByZXR1cm5zIGZhbHNlLlxuICovXG5leHBvcnQgY29uc3QgaGFzUm9sZSA9IChyb2xlcykgPT4ge1xuICBpZiAoIWlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjb25zdCBjdXJyZW50VXNlclJvbGVzID0gY29udGV4dC5jdXJyZW50VXNlcj8ucm9sZXNcblxuICBpZiAodHlwZW9mIHJvbGVzID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2YgY3VycmVudFVzZXJSb2xlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIHJvbGVzIHRvIGNoZWNrIGlzIGEgc3RyaW5nLCBjdXJyZW50VXNlci5yb2xlcyBpcyBhIHN0cmluZ1xuICAgICAgcmV0dXJuIGN1cnJlbnRVc2VyUm9sZXMgPT09IHJvbGVzXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGN1cnJlbnRVc2VyUm9sZXMpKSB7XG4gICAgICAvLyByb2xlcyB0byBjaGVjayBpcyBhIHN0cmluZywgY3VycmVudFVzZXIucm9sZXMgaXMgYW4gYXJyYXlcbiAgICAgIHJldHVybiBjdXJyZW50VXNlclJvbGVzPy5zb21lKChhbGxvd2VkUm9sZSkgPT4gcm9sZXMgPT09IGFsbG93ZWRSb2xlKVxuICAgIH1cbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHJvbGVzKSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGN1cnJlbnRVc2VyUm9sZXMpKSB7XG4gICAgICAvLyByb2xlcyB0byBjaGVjayBpcyBhbiBhcnJheSwgY3VycmVudFVzZXIucm9sZXMgaXMgYW4gYXJyYXlcbiAgICAgIHJldHVybiBjdXJyZW50VXNlclJvbGVzPy5zb21lKChhbGxvd2VkUm9sZSkgPT5cbiAgICAgICAgcm9sZXMuaW5jbHVkZXMoYWxsb3dlZFJvbGUpXG4gICAgICApXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY3VycmVudFVzZXJSb2xlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIHJvbGVzIHRvIGNoZWNrIGlzIGFuIGFycmF5LCBjdXJyZW50VXNlci5yb2xlcyBpcyBhIHN0cmluZ1xuICAgICAgcmV0dXJuIHJvbGVzLnNvbWUoKGFsbG93ZWRSb2xlKSA9PiBjdXJyZW50VXNlclJvbGVzID09PSBhbGxvd2VkUm9sZSlcbiAgICB9XG4gIH1cblxuICAvLyByb2xlcyBub3QgZm91bmRcbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8qKlxuICogVXNlIHJlcXVpcmVBdXRoIGluIHlvdXIgc2VydmljZXMgdG8gY2hlY2sgdGhhdCBhIHVzZXIgaXMgbG9nZ2VkIGluLFxuICogd2hldGhlciBvciBub3QgdGhleSBhcmUgYXNzaWduZWQgYSByb2xlLCBhbmQgb3B0aW9uYWxseSByYWlzZSBhblxuICogZXJyb3IgaWYgdGhleSdyZSBub3QuXG4gKlxuICogQHBhcmFtIHJvbGVzOiB7QGxpbmsgQWxsb3dlZFJvbGVzfSAtIFdoZW4gY2hlY2tpbmcgcm9sZSBtZW1iZXJzaGlwLCB0aGVzZSByb2xlcyBncmFudCBhY2Nlc3MuXG4gKlxuICogQHJldHVybnMgLSBJZiB0aGUgY3VycmVudFVzZXIgaXMgYXV0aGVudGljYXRlZCAoYW5kIGFzc2lnbmVkIG9uZSBvZiB0aGUgZ2l2ZW4gcm9sZXMpXG4gKlxuICogQHRocm93cyB7QGxpbmsgQXV0aGVudGljYXRpb25FcnJvcn0gLSBJZiB0aGUgY3VycmVudFVzZXIgaXMgbm90IGF1dGhlbnRpY2F0ZWRcbiAqIEB0aHJvd3Mge0BsaW5rIEZvcmJpZGRlbkVycm9yfSBJZiB0aGUgY3VycmVudFVzZXIgaXMgbm90IGFsbG93ZWQgZHVlIHRvIHJvbGUgcGVybWlzc2lvbnNcbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWR3b29kanMvcmVkd29vZC90cmVlL21haW4vcGFja2FnZXMvYXV0aCBmb3IgZXhhbXBsZXNcbiAqL1xuZXhwb3J0IGNvbnN0IHJlcXVpcmVBdXRoID0gKHsgcm9sZXMgfSA9IHt9KSA9PiB7XG4gIGlmICghaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICB0aHJvdyBuZXcgQXV0aGVudGljYXRpb25FcnJvcihcIllvdSBkb24ndCBoYXZlIHBlcm1pc3Npb24gdG8gZG8gdGhhdC5cIilcbiAgfVxuXG4gIGlmIChyb2xlcyAmJiAhaGFzUm9sZShyb2xlcykpIHtcbiAgICB0aHJvdyBuZXcgRm9yYmlkZGVuRXJyb3Io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