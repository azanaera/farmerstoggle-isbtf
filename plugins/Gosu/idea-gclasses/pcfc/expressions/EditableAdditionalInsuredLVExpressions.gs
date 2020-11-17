package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/policy/EditableAdditionalInsuredLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditableAdditionalInsuredLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/policy/EditableAdditionalInsuredLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditableAdditionalInsuredLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at EditableAdditionalInsuredLV.pcf: line 40, column 42
    function sortValue_0 (ClaimContactRole :  entity.ClaimContactRole) : java.lang.Object {
      return ClaimContactRole.PartyNumber
    }
    
    // 'value' attribute on ClaimContactCell (id=Contact_Cell) at EditableAdditionalInsuredLV.pcf: line 53, column 117
    function sortValue_1 (ClaimContactRole :  entity.ClaimContactRole) : java.lang.Object {
      return ClaimContactRole.Contact
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at EditableAdditionalInsuredLV.pcf: line 61, column 29
    function sortValue_2 (ClaimContactRole :  entity.ClaimContactRole) : java.lang.Object {
      return ClaimContactRole.CoveredPartyType
    }
    
    // 'value' attribute on DateCell (id=added_ext_Cell) at EditableAdditionalInsuredLV.pcf: line 65, column 50
    function sortValue_3 (ClaimContactRole :  entity.ClaimContactRole) : java.lang.Object {
      return ClaimContactRole.AddDate_Ext 
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at EditableAdditionalInsuredLV.pcf: line 32, column 45
    function toCreateAndAdd_36 () : entity.ClaimContactRole {
      return ClaimContactRoleOwner.addEmptyRole(role)
    }
    
    // 'toRemove' attribute on RowIterator at EditableAdditionalInsuredLV.pcf: line 32, column 45
    function toRemove_37 (ClaimContactRole :  entity.ClaimContactRole) : void {
      ClaimContactRoleOwner.removeRole(ClaimContactRole)
    }
    
    // 'value' attribute on RowIterator at EditableAdditionalInsuredLV.pcf: line 32, column 45
    function value_38 () : entity.ClaimContactRole[] {
      return ClaimContactRoleList
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get ClaimContactRoleList () : ClaimContactRole[] {
      return getRequireValue("ClaimContactRoleList", 0) as ClaimContactRole[]
    }
    
    property set ClaimContactRoleList ($arg :  ClaimContactRole[]) {
      setRequireValue("ClaimContactRoleList", 0, $arg)
    }
    
    property get ClaimContactRoleOwner () : gw.api.contact.ClaimContactRoleOwner {
      return getRequireValue("ClaimContactRoleOwner", 0) as gw.api.contact.ClaimContactRoleOwner
    }
    
    property set ClaimContactRoleOwner ($arg :  gw.api.contact.ClaimContactRoleOwner) {
      setRequireValue("ClaimContactRoleOwner", 0, $arg)
    }
    
    property get role () : ContactRole {
      return getRequireValue("role", 0) as ContactRole
    }
    
    property set role ($arg :  ContactRole) {
      setRequireValue("role", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/claim/policy/EditableAdditionalInsuredLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends EditableAdditionalInsuredLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 16, column 225
    function action_11 () : void {
      AddressBookPickerPopup.push(ClaimContactRoleOwner.getMostSpecificContactType(role), ClaimContactRole.ClaimContact.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 18, column 285
    function action_13 () : void {
      if (ClaimContactRole.Contact != null) { ClaimContactDetailPopup.push(ClaimContactRole.Contact, ClaimContactRole.ClaimContact.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 12, column 273
    function action_15 () : void {
      ClaimContactDetailPopup.push(ClaimContactRole.Contact, ClaimContactRole.ClaimContact.Claim)
    }
    
    // 'action' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_12 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(ClaimContactRoleOwner.getMostSpecificContactType(role), ClaimContactRole.ClaimContact.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_16 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(ClaimContactRole.Contact, ClaimContactRole.ClaimContact.Claim)
    }
    
    // 'def' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_8 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(ClaimContactRoleOwner.getMostSpecificContactType(role), null, ClaimContactRole.ClaimContact.Claim)
    }
    
    // 'def' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_9 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(ClaimContactRoleOwner.getMostSpecificContactType(role), null, ClaimContactRole.ClaimContact.Claim)
    }
    
    // 'value' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimContactRole.Contact = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at EditableAdditionalInsuredLV.pcf: line 61, column 29
    function defaultSetter_30 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimContactRole.CoveredPartyType = (__VALUE_TO_SET as typekey.CoveredPartyType)
    }
    
    // 'onPick' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 12, column 273
    function onPick_17 (PickedValue :  Contact) : void {
      var contactType = ClaimContactRoleOwner.getMostSpecificContactType(role); var result = eval("ClaimContactRole.Contact = ClaimContactRole.ClaimContact.Claim.resolveContact(ClaimContactRole.Contact) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'validationExpression' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 12, column 273
    function validationExpression_14 () : java.lang.Object {
      return ClaimContactRole.Contact == null ? DisplayKey.get("LV.Policy.EditableAdditionalInsured.Contact.ContactRequired") : null
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_21 () : java.lang.Object {
      return ClaimContactRoleOwner.Claim.getRelatedContacts(ClaimContactRoleOwner.getContactTypes(role))
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at EditableAdditionalInsuredLV.pcf: line 40, column 42
    function valueRoot_5 () : java.lang.Object {
      return ClaimContactRole
    }
    
    // 'value' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 12, column 273
    function value_18 () : entity.Contact {
      return ClaimContactRole.Contact
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at EditableAdditionalInsuredLV.pcf: line 61, column 29
    function value_29 () : typekey.CoveredPartyType {
      return ClaimContactRole.CoveredPartyType
    }
    
    // 'value' attribute on DateCell (id=added_ext_Cell) at EditableAdditionalInsuredLV.pcf: line 65, column 50
    function value_33 () : java.util.Date {
      return ClaimContactRole.AddDate_Ext 
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at EditableAdditionalInsuredLV.pcf: line 40, column 42
    function value_4 () : java.lang.Integer {
      return ClaimContactRole.PartyNumber
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_22 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_22 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_22 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_23 () : void {
      var __valueRangeArg = ClaimContactRoleOwner.Claim.getRelatedContacts(ClaimContactRoleOwner.getContactTypes(role))
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_22(__valueRangeArg)
    }
    
    // 'visible' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 16, column 225
    function visible_10 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(ClaimContactRoleOwner.getMostSpecificContactType(role), ClaimContactRole.ClaimContact.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 14, column 229
    function visible_7 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    property get ClaimContactRole () : entity.ClaimContactRole {
      return getIteratedValue(1) as entity.ClaimContactRole
    }
    
    
  }
  
  
}