export function checkAccountError(account: GAccount) {
  return !account.email || !account.password;
}
