package perm

uses javax.annotation.processing.Generated

@Generated("security-config-app.xml;security-config-pl.xml;security-config.xml", "", "com.guidewire.pl.permissions.codegen.EntityPermissionsGenerator")
class Subrogation {
  static property get own () : boolean {
    return com.guidewire._generated.security.SubrogationPermKeys.OWN.hasPermission(entity.User.util.CurrentUser, null)
  }
  
  
}